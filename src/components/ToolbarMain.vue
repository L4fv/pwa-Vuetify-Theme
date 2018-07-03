<template>
  <div>
    <v-navigation-drawer dark temporary v-model="drawer" app>
      <v-list>
        <template v-for="(item, i) in items">
          <div :key="i">
            <v-list-tile :to="item.url">
              <v-list-tile-content>
                <v-list-tile-title v-text="item.title"></v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon v-html="item.icon"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider></v-divider>
          </div>
        </template>
      </v-list>
    </v-navigation-drawer>
    <div class="containerToolbar">
      <v-toolbar fixed app v-bind:style="style">
        <v-toolbar-side-icon @click.stop="drawer = !drawer" dark class="hidden-md-and-up"></v-toolbar-side-icon>
        <v-toolbar-title>
          <router-link to="/" class="title white--text animated fadeIn">
            <strong>SEIKERS</strong>
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down animated fadeIn">
          <v-btn flat v-for="(item, index) in items" :to="item.url" dark class="subheading" :key="index">
            <b>{{item.title}}</b>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      style: {
        background: 'rgba(0, 0, 0, 0.1) !important',
      },
      drawer: false,
      items: [
        {
          title: 'Inicio',
          icon: 'chevron_right',
          url: '/',
        },
        {
          title: 'Servicios',
          icon: 'chevron_right',
          url: '/#servicios',
        },
        {
          title: 'Contacto',
          icon: 'chevron_right',
          url: '/#contacto',
        },
         {
          title: 'Nosotros',
          icon: 'chevron_right',
          url: '/Nosotros',
        }
      ]
    };
  },
  computed: {
    scroll() {
      return this.$store.state.scroll;
    },
  },
  watch: {
    scroll(newValue, oldValue) {
      if (newValue > 64) {
        this.style.background = '#2b2b2b !important';
      } else {
        this.style.background = 'rgba(0, 0, 0, 0.1) !important';
      }
    },
  },
};
</script>

<style scoped>
@media only screen and (min-device-width: 320px) and (max-device-width: 720px) {
  .v-toolbar {
    box-shadow: none !important;
    padding: 0;
  }
}

@media only screen and (min-device-width: 720px) {
  .containerToolbar {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .v-toolbar {
    box-shadow: none !important;
  }
}

a:link {
  text-decoration: none;
}
</style>
