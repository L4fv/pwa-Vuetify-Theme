<template>
  <v-container>
    <v-layout wrap row mt-4>
    <v-flex xs12>
      <h1 class="display-1">
        <b>DRYWALL</b>
      </h1>
    </v-flex>
    <v-flex xs12 mt-2>
      <p class="subheading">
        Realizamos todo tipo de acabados.
        <br/>
        <ul>

          Divisiones de ambientes.
          Falsos techos con Baldosas.
          Coberturas, Detalles en Drywall.
          Techos circulares con luces indirectas
          Techos suspendidos.
          Cielo rasso 
          Techos colgantes, curvos abovedados.
          Detalles arquitectónicos, Paredes curvadas
          Paredes en Drywall anti fuego para zonas industriales o fabricas.
          Ampliaciones en azoteas, Casas, Departamentos, Dintel en curva.
          Figuras en Drywall etc
        </ul>
        Si tiene una duda, no dude en comunicarse con nosotros.
        <br> Tenemos una solución para tí.
      </p>
    </v-flex>
    <v-flex xs12 mt-4>
     <v-container grid-list-md fluid>
          <v-layout row wrap>
            <v-flex
              v-for="n in 4"
              :key="n"
              xs12 sm6
            >              <v-card flat tile>
                <v-card-media

                  height="250px"
                >
                <img v-img:my-group :src="`/static/drywall/${n}.jpg`">
                </v-card-media>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
    </v-flex>

  </v-layout>
  </v-container>

</template>
