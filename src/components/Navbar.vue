<template>
    <v-app-bar app dark>
        <v-btn tile text router to="/">home</v-btn>
        <v-spacer></v-spacer>
        <v-btn tile text router to="/register">register</v-btn>
        <v-btn tile text router to="/login">login</v-btn>
        <v-btn tile text router to="/profile">profile</v-btn>
    </v-app-bar>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    name:'Navbar',
    data: () => ({}),
    components: {

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