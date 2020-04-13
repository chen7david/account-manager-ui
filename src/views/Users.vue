<template>
    <div>
        <v-row>
        <v-col cols="12">
          <v-row justify="center">
            <v-col align="center" cols="12">
              <DataTable 
                :items="itemsList"
                :headers="headers"
                :setItem="setItem"
                :updateItem="updateItem"
                :createItem="createItem"
                :deleteItem="deleteItem"
                :close="close"
              >
                <template v-slot:form>
                  <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="inputItem.username" label="username"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="inputItem.password" label="password"></v-text-field>
                  </v-col>
                </v-row>
                </template>
              </DataTable>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DataTable from './../components/tables/DataTable'

export default {
    name:'Users',
    data: () => ({
        headers:[
        { text: 'Username', value: 'username' },
        { text: 'UserId', value: 'userId' },
        { text: 'Actions', value: 'actions' },
      ],
      inputItem: {},
      itemIndex: null

    }),
    components: {
        DataTable
    },
    computed: {
        ...mapGetters([
            'users'
        ]),
        itemsList() {
            return this.users
        }
    },
    methods: {
        ...mapActions([
            'getUsers',
            'createAccount',
            'deleteUser'
        ]),
        setItem(item, index){
            this.inputItem = Object.assign({}, item)
            this.itemIndex = index
        },
        updateItem(){
            Object.assign(this.users[this.itemIndex], this.inputItem)
        },
        async createItem(){
            await this.createAccount(this.inputItem)
        },
        async deleteItem(){
            await this.deleteUser(this.inputItem)
        },
        close(){
            this.inputItem = {}
        },
    },
    mounted(){
        this.getUsers()
    }

}
</script>