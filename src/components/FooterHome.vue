<template>
  <v-footer height="auto" class="grey lighten-3">
    <v-container class=" py-5">
      <v-layout wrap row>
        <!-- epik -->
        <v-flex xs12 md4 mt-2>
          <v-layout wrap row>
            <v-flex xs12 text-xs-center>
              <v-avatar size="100px" class="grey lighten-4">
                <img src="/static/logo.png" alt="Seiker Logo">
              </v-avatar>
            </v-flex>
            <v-flex xs12 class="secondary--text" text-xs-center>
              <span class="title">SEIKERS S.A.C</span>
              <p class="subheading">
               Es una empresa peruana dedicada a la Industria de la Construcción. Hacemos realidad los proyectos de construcción para la pequeña, mediana y grandes empresas.</p>
            </v-flex>
            <v-flex xs12 text-xs-center>
              <div>
                <span class="secondary--text suheading">e-mail: contacto@seikers.com
                <br/>
                Cel: +51 986498536 </span>
                <br/>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
        <!-- social -->
        <v-flex xs12 md4 text-xs-center mt-2>
          <v-layout wrap row>
            <v-flex xs12>
              <v-btn icon class="mx-3 primary--text" v-for="(link, key) in socialMedia" :key="key" :href="link.url" target="_blank">
                <v-icon size="24px">{{link.icon}}</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
        <!-- lo más buscado -->
        <v-flex xs12 md4 text-xs-center mt-2 text-md-left>
          <div>
            <h4 class="secondary--text title">
              <b>Lo más buscado</b>
            </h4>
            <v-layout wrap row>
              <v-flex xs6 pa-2>
                <h4 class="subheading"><router-link to="/servicios/acabados">Acabados</router-link></h4>
              </v-flex>
              <v-flex xs6 pa-2>
                <h4 class="subheading"><router-link to="/servicios/acero-inoxidable">Acero inoxidable</router-link></h4>
              </v-flex>
              <v-flex xs6 pa-2>
                <h4 class="subheading"><router-link to="/servicios/construccion-civil">Construcción</router-link></h4>
              </v-flex>
              <v-flex xs6 pa-2>
                <h4 class="subheading"><router-link to="/servicios/drywall">Drywall</router-link></h4>
              </v-flex>
              <v-flex xs6 pa-2>
                <h4 class="subheading"><router-link to="/servicios/electricidad">Electricidad</router-link></h4>
              </v-flex>
              <v-flex xs6 pa-2>
                <h4 class="subheading"><router-link to="/servicios/gasfiteria">Gasfitería</router-link></h4>
              </v-flex>
              <v-flex xs6 pa-2>
                <h4 class="subheading"><router-link to="/servicios/gasfiteria">Gasfitería</router-link></h4>
              </v-flex>
              <v-flex xs6 pa-2>
                <h4 class="subheading"><router-link to="/nosotros">Nosotros</router-link></h4>
              </v-flex>
            </v-layout>
          </div>
        </v-flex>
        <v-flex xs12 text-xs-center>
          <strong> &copy; {{new Date().getFullYear()}} SEIKERS S.A.C</strong>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  data() {
    return {
      socialMedia: [{
        icon: 'fab fa-facebook-f',
        url: 'https://www.facebook.com/seikers4/',
      },
      {
        icon: 'fab fa-youtube',
        url: 'https://www.youtube.com/channel/UCv0ddmigf8QZM1qESL842hQ',
      },
      {
        icon: 'fab fa-twitter',
        url: 'https://www.facebook.com/seikers4/',
      }
      ],
    };
  },
};
</script>
