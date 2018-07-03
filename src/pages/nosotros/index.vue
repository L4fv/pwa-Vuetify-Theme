<template>
  <v-container>
    <v-layout wrap row mt-4>
      <v-flex xs12>
        <h1 class="display-1">
          <b>NOSOTROS</b>
        </h1>
      </v-flex>
      <v-flex xs12 mt-2>
        <div class="text-xs-center my-3"><img v-lazy="`/static/logo.png`"></div>
        <p class="subheading">
          <b>SEIKER CONTRATISTAS GENERALES S.A.C.</b>
          <br> Es una empresa peruana dedicada a la Industria de la Construcción. Hacemos realidad los proyectos de construcción
          para la pequeña, mediana y grandes empresas.
          <br> Nuestro objetivo es, construir obras de infraestructura que contribuyan de un modo eficiente y seguro al bienestar
          de las personas y al mejoramiento del entorno y la calidad total en todos los servicios que se ofrece, buscando
          ante todo la plena satisfacción del cliente y el fiel cumplimiento de todos los compromisos.
          <br> Somos una empresa que se dedica:

          <ul>
            <li>Construcción y desarrollo de proyectos habitacionales.</li>
            <li>Remodelación de casas, oficinas, locales comerciales.</li>
            <li>Ampliación de construcciones.</li>
            <li>Sistema drywall (construccion de muros y techos acusticos)</li>
            <li>Mantenimiento en general.</li>
            <li>Gasfiteria en general.</li>
            <li>Enchapado de porcelanato , mayolica , azulejo , pepelma , piedra lajas etc.</li>
            <li>Instalación de piso poliuretano autonivelante</li>
            <li>Instalación de barandas en acero inoxidable.</li>
            <li>Obras Civiles.</li>
            <li>Nivelación de maquinarias y equipos (grouting epóxicos).</li>
            <li>Construcción de piscinas.</li>
            <li>Mantención y saneamientos industriales.</li>
          </ul>
           Atte. Christian Flores Vallejos
        </p>
      </v-flex>
      <v-flex xs12 mt-4>
        <v-container grid-list-md fluid>
          <v-layout row wrap>
            <v-flex v-for="n in 4" :key="n" xs12 sm6>
              <v-card flat tile>
                <v-card-media height="250px">
                  <img v-img:my-group :src="`/static/acabados/${n}.jpg`">
                </v-card-media>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>

    </v-layout>
  </v-container>

</template>
