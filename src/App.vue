<template>
  <v-app>
    <Navbar/>
    <v-content>
      <Snackbar/>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Snackbar from './components/Snackbar'

export default {
  name: 'App',

  components: {
      Navbar,
      Snackbar
  },

  data: () => ({
    //
  }),
};
</script>
