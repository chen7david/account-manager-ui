<template>
  <v-container fill-height fluid>
      <v-row >
        <v-col cols="12">
          <v-row justify="center">
            <v-col align="center" cols="12">
              d:{{isLoading}}
              <RegisterForm/>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import RegisterForm from './../components/forms/Register'

export default {
    name:'Register',
    data: () => ({}),
    components: {
        RegisterForm
    },
    computed: {
        ...mapGetters([
            'isLoading',
            'snackbar'
        ])
    },
    methods: {
        ...mapActions([

        ])
    },

}
</script>