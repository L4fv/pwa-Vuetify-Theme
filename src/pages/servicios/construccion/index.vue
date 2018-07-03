<template>
  <v-container>
    <v-layout wrap row mt-4>
      <v-flex xs12>
        <h1 class="display-1">
          <b>Construcción Civil</b>
        </h1>
      </v-flex>
      <v-flex xs12 mt-2>
        <p class="subheading">
          Realizamos todo tipo de acabados.
          <br/>
          <ul>

            <li>Remodelación de casas, oficinas, locales comerciales.
            </li>
            <li>Ampliación de construcciones.
            </li>
            <li>Mantenimiento en general.
            </li>
            <li>Enchapado de porcelanato , mayolica , azulejo , pepelma , piedra lajas etc.
            </li>
            <li>Instalación de piso poliuretano autonivelante.
            </li>
            <li>Obras Civiles.  </li>
            <li>Nivelación de maquinarias y equipos (grouting epóxicos).
            </li>
            <li>Construcción de piscinas</li>
          </ul>
          Si tiene una duda, no dude en comunicarse con nosotros.
          <br> Tenemos una solución para tí.
        </p>
      </v-flex>
      <v-flex xs12 mt-4>
        <v-container grid-list-md fluid>
          <v-layout row wrap>
            <v-flex v-for="n in 4" :key="n" xs12 sm6>
              <v-card flat tile>
                <v-card-media height="250px">
                  <img v-img:my-group :src="`/static/construccion/${n}.jpg`">
                </v-card-media>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>
