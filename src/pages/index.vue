<template>
  <v-layout wrap row >
    <!-- v-scroll="onScroll" -->
    <v-flex xs12 id="home">
      <banner-home :info="info" :mobil="mobil"></banner-home>
    </v-flex>
    <!-- servicios -->
    <v-flex xs12 id="servicios" class="pages">
      <v-container>
        <v-layout wrap row class="sections">
          <v-flex xs12 text-xs-center>
            <h2 class="display-2" style="display: block !important">
              <b>Nuestros Servicios</b>
            </h2>
          </v-flex>
          <v-flex xs12 text-xs-center mt-2>
            <p class="headline">Seiker Contratistas Generales S.A.C.
              <br/> Es una empresa peruana dedicada a la Industria de la Construcción. Hacemos realidad los proyectos de construcción
              para la pequeña, mediana y grandes empresas.</p>
          </v-flex>
          <v-flex xs12 mt-5>
            <v-container grid-list-xl align-content-space-between>
              <v-layout wrap row>
                <v-flex xs12 md4 v-for="(item, key) in servicios" :key="key">
                  <v-card class="grey lighten-4 hvr-float-shadow" flat :to="item.url">
                    <v-card-media height="200">
                      <img v-lazy="item.img" :alt="item.title" class="servicios">
                    </v-card-media>
                    <v-card-text>
                      <v-layout wrap row>
                        <v-flex xs12 text-xs-center>
                          <h3 class="title">
                            <b>{{item.title}}</b>
                          </h3>
                        </v-flex>
                        <v-flex xs12 text-xs-center>
                          <p v-html="item.description" class="subheading"></p>
                        </v-flex>
                      </v-layout>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer><v-btn flat color="primary" :to="item.url">Ver Detalles</v-btn><v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
    <!-- clientes -->
    <v-flex xs12 id="clientes" class="pages2">
      <v-container>
        <v-layout wrap row align-center class="sections">
          <v-flex xs12 md7>
            <h2 class="display-2 white--text">
              <b>Tienes una idea en mente. Nosotros la hacemos realidad</b>
            </h2>
            <div class="mr-4">
              <p class="headline white--text mt-5">Contamos con un equipo de profesionales altamente capacitado.
              Nuestro objetivo es brindar el asesoramiento necesario y adecuado que respondan a las necesidades de nuestros clientes con soluciones confiables, económicas y eficientes.</p>
            </div>
          </v-flex>
          <v-flex xs12 md5 text-xs-center animated bounce>
            <img v-lazy="`/static/image.jpg`" style="height: auto; width:100%">
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
    <!-- contacto -->
    <v-flex xs12 id="contacto" class="grey lighten-4">
      <v-container>
        <v-layout wrap row class="sections">
          <v-flex xs12 text-xs-center>
            <h2 class="display-2">
              <b>¿Necesitas saber el presupuesto de tu proyecto?</b>
            </h2>
          </v-flex>
          <v-flex xs12 text-xs-center mt-3>
            <p class="headline">¡Genial! Déjanos tus datos y tu consulta. Nosotros enseguida nos comunicaremos contigo para facilitarte mayor información.</p>
          </v-flex>
          <v-flex xs12 md6 mt-5>
            <form-app></form-app>
          </v-flex>
          <v-flex xs12 md6  mt-5  pa-3>
            <h3 class="headline">Puedes enviar tus dudas a <br>e-mail: <b>contacto@seikers.com</b><br/></h3>
            <div class="headline">
              <h3 class="headline"> ó También puedes llamarnos a <b>+51 986498536</b></h3>

            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>
<script>
 import BannerHome from '../components/BannerHome';
  const FormApp = () =>
    import ( /* webpackChunkName: "FormApp" */ '@/components/FormApp.vue');
  const LogoApp = () =>
    import ( /* webpackChunkName: "LogoApp" */ '@/components/LogoApp.vue');

  export default {
    components: {

      BannerHome,
      FormApp,
      LogoApp,
    },
    data() {
      return {
        fab: false,

        servicios: [{
            title: 'Drywall',
            mobil: '/static/drywal_mobil.jpg',
            desktop: '/static/drywal.jpg',
            description: `Divisiones de ambientes.
            Falsos techos con Baldosas.
            Coberturas, Detalles en Drywall.
            Techos circulares con luces indirectas, Techos suspendidos, etc`,
            img: '/static/gallery/acabados.jpg',
            url: '/servicios/drywall'
          },
          {
            title: 'Construcción Civil',
            mobil: '/static/construccion_mobil.jpg',
            desktop: '/static/construccion.jpg',
            description: `Remodelación de casas, oficinas, locales comerciales.<br>
            Enchapado de porcelanato , mayolica , azulejo , pepelma , piedra lajas, etc`,
            img: '/static/gallery/construccion.jpg',
            url: '/servicios/construccion-civil'
          },
          {
            title: 'Acabados en enchape',
            mobil: '/static/acabados_mobil.jpg',
            desktop: '/static/acabados.jpg',
            description: `Piedra, Pepelmas, Mayólicas, Porcelanatos, Listelos, Lajas, etc. `,
            img: '/static/gallery/enchapado.jpg',
            url: '/servicios/acabados'
          },

          {
            title: 'Gasfiteria',
            mobil: '/static/gasfiteria_mobil.jpg',
            desktop: '/static/gasfiteria.jpg',
            description: `Instalación y mantenimiento de redes de agua y desague, etc.`,
            img: '/static/gallery/gasfiteria.jpg',
            url: '/servicios/gasfiteria'
          },
          {
            title: 'Electricidad',
            mobil: '/static/gasfiteria_mobil.jpg',
            desktop: '/static/gasfiteria.jpg',
            description: `instalaciones de iluminación y cables eléctricos, sistemas de arranque y mantenimiento de motores eléctricos, armado y mantenimiento de tableros eléctricos,  sistemas neumáticos e hidráulicos, etc.`,
            img: '/static/gallery/electricidad.jpg',
            url: '/servicios/electricidad'
          },
          {
            title: 'Acero inoxidable',
            mobil: '/static/gasfiteria_mobil.jpg',
            desktop: '/static/gasfiteria.jpg',
            description: `Barandas escalera, Barandas en Balcones, Pasamanos, etc.`,
            img: '/static/gallery/aceros.jpg',
            url: '/servicios/acero-inoxidable'
          },

        ],

        select: {
          id: 0,
          path: '#home',
        },
        sections: [{
            id: 0,
            path: '#home',
          },
          {
            id: 1,
            path: '#Servicios',
          },
          {
            id: 2,
            path: '#portafolio',
          },
          {
            id: 3,
            path: '#clientes',
          },
          {
            id: 4,
            path: '#contacto',
          },
        ],
      };
    },
    computed: {      mobil() {
        if (this.$vuetify.breakpoint.name == 'xs') {
          return true
        } else {
          return false
        }
      },
      info() {
        return this.servicios.slice(0, 4)
      },
      hashRoute() {
        return this.$route.hash;
      },
    },
    methods: {
      findSection(val) {
        return this.sections.find((v) => {
          v.path == val;
        });
      },

    },
  };

</script>

<style scoped>
  .pages {
    height: 100%;
  }

  .pages2 {
    background-color: #1c1c1c;
    height: 100%;
  }

  .pages3 {
    background-image: linear-gradient(to top, #e91e63 0%, #fe6d4e 100%);
    color: white;
    height: 100%;
  }

  .sections {
    position: relative;
    padding-top: 100px;
    padding-bottom: 100px;
  }

  .sections2 {
    position: relative;
    padding-top: 100px;
    padding-bottom: 100px;
  }

</style>
