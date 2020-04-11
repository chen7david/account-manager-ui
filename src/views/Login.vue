<template>
  <v-container fill-height fluid>
      <v-row >
        <v-col cols="12">
          <v-row justify="center">
            <v-col align="center" cols="12">
              <LoginForm/>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import LoginForm from './../components/forms/Login'

export default {
    name:'Login',
    data: () => ({}),
    components: {
        LoginForm
    },
    computed: {
        ...mapGetters([
            
        ])
    },
    methods: {
        ...mapState([

        ])
    },

}
</script>