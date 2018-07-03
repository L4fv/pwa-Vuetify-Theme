<template>
  <v-container>
    <v-layout wrap row mt-4>
    <v-flex xs12>
      <h1 class="display-1">
        <b>Gasfitería</b>
      </h1>
    </v-flex>
    <v-flex xs12 mt-2>
      <p class="subheading">
        Realizamos todo tipo de trabajos.
        <br/>
        <ul>
          NSTALACIÓN Y MANTENIMIENTO DE REDES DE AGUA Y DESAGÜE EN ZONAS INDUSTRIALES, RESIDENCIALES Y COMERCIALES.

          CAMBIO DE TUBERÍAS AGUA Y DE DESAGÜE ANTIGUOS A PVC EN LOS DIFERENTES DIÁMETROS
 
          • UBICACIÓN Y REPARACIÓN DE FILTRACIÓN DE AGUA Y DESAGÜE.
          
INSTALACIÓN Y MANTENIMIENTO DE TODO TIPO DE GRIFERÍAS, MEZCLADORAS, Y FLUXÓMETROS EN GENERAL.

INSTALACIÓN DE MEDIDORES DE AGUA INTERNOS (CONTOMETROS).

INSTALACIÓN DE APARATOS SANITARIOS ACCESORIOS EN GENERAL (INODOROS, LAVATORIOS, LAVADEROS, BIDETS, TINAS DE HIDROMASAJES, ENTRE OTROS).

INSTALACIÓN, MANTENIMIENTO  DE CISTERNAS, TANQUE ELEVADO.

INSTALACIÓN Y MANTENIMIENTO DE BOMBAS DE AGUA, SISTEMAS HIDRONEUMÁTICOS, SISTEMA DE PRESIÓN CONSTANTE ELECTRO NIVELES Y PRESURIZADORES.
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
                <img v-img:my-group :src="`/static/gasfiteria/${n}.jpg`">
                </v-card-media>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
    </v-flex>

  </v-layout>
  </v-container>

</template>
