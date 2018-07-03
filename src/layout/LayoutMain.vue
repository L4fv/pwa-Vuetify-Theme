<template>
  <div>
    <toolbar-main></toolbar-main>
    <v-content v-scroll="onScroll">
      <router-view></router-view>
    </v-content>
    <footer-home></footer-home>
  </div>
</template>
<script>
  const ToolbarMain = () =>
    import ( /* webpackChunkName: "ToolbarMain" */ '@/components/ToolbarMain.vue');
  const FooterHome = () =>
    import ( /* webpackChunkName: "FooterHome" */ '@/components/FooterHome.vue');
  export default {
    components: {
      ToolbarMain,
      FooterHome,
    },
    data() {
      return {
        offsetTop: 0
      }
    },
    methods: {
      onScroll(e) {
        this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
        this.$store.commit('setScroll', this.offsetTop);
      }
    }
  };

</script>
<style scoped>
  @media only screen and (max-width: 768px) and (min-width: 320px) {
    .v-content {
      top: 0;
      padding: 0 !important;
    }
  }

  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    .v-content {
      top: 0;
      padding: 0 !important;
    }
  }

  @media only screen and (min-width: 1024px) {
    .v-content {
      top: 0;
      padding: 0 !important;
    }
  }

</style>
