<template>
  <v-container>
    <v-layout wrap row mt-4>
    <v-flex xs12>
      <h1 class="display-1">
        <b>ACEROS</b>
      </h1>
    </v-flex>
    <v-flex xs12 mt-2>
      <p class="subheading">
        Realizamos todo tipo de trabajos en Acero.
        <br/>
        <ul>
          <li>Barandas escalera   </li>
          <li>Barandas en Balcones </li>
          <li>Pasamanos</li>
          <li> y más</li>
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
                <img v-img:my-group :src="`/static/acero/${n}.jpg`">
                </v-card-media>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
    </v-flex>

  </v-layout>
  </v-container>

</template>
