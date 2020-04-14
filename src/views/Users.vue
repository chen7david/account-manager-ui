<template>
    <div>
        <v-row> 
        <v-col cols="12">
          <v-row justify="center">
            <v-col align="center" cols="12" lg="6" sm="6" md="6">
              <DataTable 
                :items="itemsList"
                :headers="headers"
                :setItem="setItem"
                :updateItem="updateItem"
                :createItem="createItem"
                :deleteItem="deleteItem"
                :formValid="valid"
                :close="close"
              >
                <template v-slot:form>
                  <v-form
                    v-model="valid"
                    ref="userForm"
                  >
                  <v-row>
                  <v-col cols="12" sm="4" md="4">
                    <v-text-field 
                        :error-messages="validate('username')"
                        v-model="inputItem.username" 
                        label="username"
                        outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4" md="4">
                    <v-text-field 
                        :error-messages="validate('email')"
                        v-model="inputItem.email" 
                        label="email"
                        outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4" md="4">
                    <v-text-field 
                        :error-messages="validate('password')"
                        v-model="inputItem.password" 
                        label="password"
                        outlined
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show ? 'text' : 'password'"
                        hint="At least 6 characters"
                        @click:append="show = !show"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="3" md="4">
                    <v-switch v-model="inputItem.verified" inset label="verified"></v-switch>
                  </v-col>
                  <v-col cols="12" sm="4" md="4">
                    <v-switch v-model="inputItem.suspended" inset label="suspended"></v-switch>
                  </v-col>
                  <v-col cols="12" sm="4" md="4">
                    <v-switch v-model="inputItem.disabled" inset label="disabled"></v-switch>
                  </v-col>
                </v-row>
                </v-form>
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
        { text: 'Email', value: 'email' },
        { text: 'Actions', value: 'actions' },
      ],
      inputItem: {},
      itemIndex: null,
      show: false,
      valid: false
    }),
    components: {
        DataTable
    },
    computed: {
        ...mapGetters([
            'users',
            'validate'
        ]),
        itemsList() {
            return this.users
        }
    },
    methods: {
        ...mapActions([
            'getUsers',
            'createUser',
            'patchUser',
            'deleteUser',
            'setValidation'
        ]),
        setItem(item, index){
            this.inputItem = Object.assign({}, item)
            this.itemIndex = index
        },
        updateItem(){
            this.patchUser(this.inputItem)
        },
        async createItem(){
            try {
              await this.createUser(this.inputItem)
              this.$refs.userForm.reset()
            } catch (err) {
                console.log(err)
            }
        },
        async deleteItem(){
            await this.deleteUser(this.inputItem)
        },
        close(){
            this.$refs.userForm.reset()
            this.setValidation(null)
        },
    },
    mounted(){
        this.getUsers()
    }

}
</script>