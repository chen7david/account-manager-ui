<template>
    <v-app-bar app dark>
        <v-btn tile text router to="/">home</v-btn>
        <v-spacer></v-spacer>
        <span v-if="isAuth">
            {{$user.username}}
            <v-btn tile text router to="/profile">profile</v-btn>
            <v-btn @click="logout" text tile>logout</v-btn>
        </span>
        <div v-else>
            <v-btn tile text router to="/register">register</v-btn>
            <v-btn tile text router to="/login">login</v-btn>
        </div>
    </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name:'Navbar',
    data: () => ({}),
    components: {

    },
    computed: {
        ...mapGetters([
            '$user',
            'isAuth'
        ])
    },
    methods: {
        ...mapActions([
            'logout'
        ])
    },

}
</script>