<template>
    <div>
        Users: {{users}}
        <v-btn @click="getUsers">users</v-btn>
    </div>
    
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    name:'Profile',
    data: () => ({}),
    components: {

    },
    computed: {
        ...mapGetters([
            'users'
        ])
    },
    methods: {
        ...mapState([
            'getUsers'
        ])
    },
    mounted(){
        this.getUsers()
    }

}
</script>