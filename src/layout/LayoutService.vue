<template>
  <layout-app>
    <b slot="title">SERVICIOS</b>
    <router-view slot="route"></router-view>
  </layout-app>
</template>
<script>
import LayoutApp from './LayoutApp'
export default {
  components:{
    LayoutApp
  }
}
</script>

