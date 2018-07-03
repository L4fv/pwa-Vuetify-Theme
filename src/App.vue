<template>
 <v-app>
    <router-view />
    <contact-button></contact-button>
  </v-app>
</template>
<script>
const ContactButton = () =>
    import ( /* webpackChunkName: "ContactButton" */ '@/components/ContactButton.vue');
export default {
  name: 'App',
  components:{
    ContactButton
  },
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire',
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    };
  },
};
</script>
<style>
#app {
  font-family: "Open Sans", sans-serif;
  color: #424242
}
@media only screen and (min-device-width: 320px) and (max-device-width: 720px) {
  .h2{
    font-size: 24px
  }
}
@media only screen and (min-device-width: 720px){

}
.container {
  position: static;
  max-width: 1200px;
  padding: 0px 16px;
  padding-top: 0px;
  padding-right: 16px;
  padding-bottom: 0px;
  padding-left: 16px;
  margin: 0 auto;

}
  img[lazy="loading"] {
    background-image: url('/static/Eclipse.svg');
    background-repeat: no-repeat;
    background-position: center center;
  }

  img.servicios:hover {
    opacity: 0.9;
  }
</style>
