<template>
  <div class="imgContainer">
    <img :src="logo.url" class="image">
    <div class="overlay">
      <div class="text">
        <v-btn large icon dark tag="a" :href="logo.link" target="_blank">
          <v-icon large>web</v-icon>
        </v-btn>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ['logo'],
};
</script>

<style scoped>

  .imgContainer {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center
  }
    img {
    width: 100%;
    height: 100%
  }
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .imgContainer:hover .overlay {
    opacity: 1;
  }

  .text {
    color: white;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
