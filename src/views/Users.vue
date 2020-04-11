<template>
    <div>
        <v-row>
        <v-col cols="12">
          <v-row justify="center">
            <v-col align="center" cols="12">
              <CruidTable :users="users"/>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CruidTable from './../components/tables/Users'

export default {
    name:'Users',
    data: () => ({}),
    components: {
        CruidTable
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