<template>
    <div>Profile: {{$user}}</div>
    
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
            '$user'
        ])
    },
    methods: {
        ...mapState([

        ])
    },

}
</script>