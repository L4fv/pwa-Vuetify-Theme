<template>
  <form>
    <v-card color="grey lighten-5">
      <v-card-text>
        <v-layout wrap row>
          <v-flex xs12><v-text-field v-validate="'required'" v-model="nombre" :error-messages="errors.collect('name')" label="Nombre" data-vv-name="name"
          required></v-text-field></v-flex>
          <v-flex xs12><v-text-field v-validate="'required|email'" v-model="email" :error-messages="errors.collect('email')" label="E-mail" data-vv-name="email"
          required></v-text-field></v-flex>
          <v-flex xs12><v-text-field v-model="phone"  label="Telf. contacto" ></v-text-field></v-flex>
          <v-flex xs12><v-textarea v-validate="'required'" v-model="consulta" :error-messages="errors.collect('consulta')" label="Consulta" data-vv-name="consulta"
          required></v-textarea></v-flex>
          <v-flex xs12 pa-2>
            <v-btn @click="consultar"  block :disabled="loading" :loading="loading" color="primary"> Enviar consulta
        </v-btn>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </form>
</template>

<script>
/* import { consulta } from '../service/firebaseService.js'; */

export default {
  $_veeValidate: {
    validator: 'new',
  },
  data() {
    return {
      loader: null,
      loading: false,
      phone: null,
      email: null,
      nombre: null,
      consulta: null,
    };
  },
  methods: {

    consultar() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.loading = true;
        /*   consulta
            .add({
              name: this.nombre,
              email: this.email,
              phone: this.phone,
              consult: this.consulta,
            })
            .then((result) => {
              this.loading = false;
              this.nombre = '';
              this.email = '';
              this.consulta = '';
              this.phone = '';
            }); */
            //Agrega a la base de datos, y luego una Cloud Function escucha la entrada, y envía un email
        }
      });
    },
  },
};
</script>