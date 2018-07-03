<template>
  <swiper :options="swiperOption" class="swiperBanner">
      <swiper-slide v-for="(item, key) in info" :key="key" class="banner">
        <img :src="mobil?item.mobil:item.desktop" class="hero-video" :alt="item.title">
        <v-container class="hero-text">
          <v-layout wrap row>
            <v-flex xs12 pa-2>
              <h1 class="display-3 white--text animated bounceInDown">
                <b>{{item.title}}</b>
              </h1>
              <v-divider class="animated bounceInDown"></v-divider>
              <p class="headline white--text animated bounceInDown" v-html="item.description"></p>
            </v-flex>
          </v-layout>
        </v-container>
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
  </swiper>
</template>
<script>
  export default {
    props: ['info', 'mobil'],
    data() {
      return {
        swiperOption: {
          effect: 'fade',

          pagination: {
            el: '.swiper-pagination',
            type: 'progressbar'
          },
          slidesPerView: 1,
          centeredSlides: true,
          autoplay: {
            delay: 4000,
            disableOnInteraction: false
          },
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        title: 'Seikers',
        subTitle: 'Apostamos por la transformación digital del sector turismo <br>a través de soluciones innovadoras y de alto impacto.',
      };
    }
  };

</script>

<style scoped>
  /* Portrait and Landscape */

  @media only screen and (min-device-width: 320px) and (max-device-width: 720px) {
    .banner {
      position: relative;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      height: 100vh;
      width: 100% !important;
      background: rgba(0, 0, 0, 0.1) !important
    }
    .hero-video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100% !important;
      min-height: 100vh !important;
      overflow: hidden;
      background-color: rgb(96, 125, 139);
      -webkit-filter: brightness(0.4);
      filter: brightness(0.4);
    }
    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100% !important;
      height: 100vh;
      object-fit: cover;
      object-position: center;
      background-size: 100% 100%;
      background-color: black;
      background-position: center center;
      z-index: 3;
    }

    .hero-text h1 {
      font-size: 36px !important;
    }
    .hero-text p {
      font-size: 24px !important;
    }
  }

  @media only screen and (min-device-width: 768px) {
    .banner {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 100vh;
      width: 100% !important;
      background-color: rgba(0, 0, 0, 0.8);

    }
    .hero-video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100% !important;
      min-height: 100vh !important;
      overflow: hidden;
      background-color: rgb(96, 125, 139);
      -webkit-filter: brightness(0.4);
      filter: brightness(0.4);
    }
    .hero-video video {
      min-height: 100% !important;
      min-width: 100% !important;
    }
    .v-divider {
      max-width: 150px;
      background: white;
      height: 4px;
    }
    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100% !important;
      height: 100vh;
      object-fit: cover;
      object-position: center;
      background-size: 100% 100%;
      background-color: black;
      background-position: center center;
      z-index: 3;
    }
  }
.swiperBanner{
  min-height: 100%;
  background-color: #424242;
  height: 100vh;
  width: 100%
}
</style>
