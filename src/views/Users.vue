<template>
    <div>
        Users: {{users}}
    </div>
    
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
        ...mapActions([
            'getUsers'
        ])
    },
    mounted(){
        this.getUsers()
    }

}
</script>