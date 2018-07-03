<template>
  <div>
    <toolbar-main></toolbar-main>
    <v-content v-scroll="onScroll">
      <v-layout wrap row>
        <v-flex xs12 class="banner">
          <img src="/static/banner.jpg" class="bannerImg">
          <div class="hero-text container">
            <h1 class="display-3 white--text animated bounceInDown">
              <slot name="title"></slot>
            </h1>
          </div>
        </v-flex>
        <v-flex xs12 mt-4>
          <v-container>
            <v-layout wrap row>
              <v-flex xs12 md7>
                <slot name="route"></slot>
              </v-flex>
              <v-flex xs12 md5 pa-3 class="animated fadeIn">
                <v-card>
                  <v-card-title>
                    <h2 class="headline ">
                      <b>SERVICIOS</b>
                    </h2>
                  </v-card-title>
                  <v-card-text>
                    <v-layout wrap row>
                      <v-flex xs12 md6 v-for="(item, key) in servicios" :key="key" pa-2>
                        <v-card :to="item.url" flat>
                          <v-card-media height="150">
                            <img v-lazy="item.img">
                          </v-card-media>
                          <v-card-title>{{item.title}}</v-card-title>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-content>
    <footer-home class="mt-5"></footer-home>
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
        offsetTop: 0,
        servicios: [{
            title: 'Drywall',

            img: '/static/gallery/acabados.jpg',
            url: '/servicios/drywall'
          },
          {
            title: 'Construcción Civil',

            img: '/static/gallery/construccion.jpg',
            url: '/servicios/construccion-civil'
          },
          {
            title: 'Acabados en enchape',

            img: '/static/gallery/enchapado.jpg',
            url: '/servicios/acabados'
          },

          {
            title: 'Gasfiteria',

            img: '/static/gallery/gasfiteria.jpg',
            url: '/servicios/gasfiteria'
          },
          {
            title: 'Electricidad',

            img: '/static/gallery/electricidad.jpg',
            url: '/servicios/electricidad'
          },
          {
            title: 'Acero inoxidable',

            img: '/static/gallery/aceros.jpg',
            url: '/servicios/acero-inoxidable'
          },

        ],
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
    .hero-text {
      position: absolute;

      padding-bottom: 16px;
      padding-left: 16px;

    }
    .hero-text h1 {
      font-size: 42px !important;
    }

    img.bannerImg {
      width: 100%;
      height: 200px;
    }
     .banner {
      position: relative;
      display: flex;
      justify-content: center;
      min-height: 200px;
      height: 100% !important;
      align-items: flex-end;
      background-color: #424242
    }
  }

  @media only screen and (min-width: 768px) {
    .v-content {
      top: 0;
      padding: 0 !important;
    }
    .hero-text {
      position: absolute;

    }
    img.bannerImg {
      width: 100%;
      height: 420px;
    }
    .banner {
      position: relative;
      display: flex;
      justify-content: center;
      min-height: 420px;
      height: 100% !important;
      align-items: flex-end;
      background-color: #424242
    }
  }

</style>
