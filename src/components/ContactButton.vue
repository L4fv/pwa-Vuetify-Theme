<template>
  <div id="speedDial" class="speedDial animated swing  ">
    <v-speed-dial v-model="fab">
      <v-btn slot="activator" v-model="fab" color="primary" dark fab>
        <v-icon>fas fa-comments</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
      <v-btn fab dark color="teal darken-1" tag="a" target="_blank" :href="`https://api.whatsapp.com/send?phone=51986498536&text=Hola, estoy interesado en los servicios de Seikers S.A.C`">
        <v-icon>fab fa-whatsapp</v-icon>
      </v-btn>
      <v-btn fab dark color="blue" tag="a" href="tel:+51986498536">
        <v-icon>fas fa-phone</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>
<script>
export default {
    data() {
    return {
      fab: false
    }
    }
}
</script>

<style scoped>
  .speedDial {
    position: fixed;
    bottom: 16px;
    right: 16px;
    text-align: center;
    z-index: 10000;
  }



</style>
