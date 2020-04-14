<template>
    <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
    >
        <template v-slot:top>
            <v-toolbar flat>
                <v-text-field class="mt-5 mx-5" dense outlined clearable clear-icon="mdi-close-circle" v-model="search"></v-text-field>
                <v-dialog persistent v-model="dialog" max-width="700px">
                    <template v-slot:activator="{on}">
                        <v-btn small fab text v-on="on">
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="overline">{{ formTitle }}</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <slot name="form"></slot>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="termiate">cancel</v-btn>
                            <v-btn color="blue darken-1" text @click="storeItem">confirm</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-toolbar>
        </template>

        <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
            <v-icon small @click="removeItem(item)">mdi-delete</v-icon>
        </template>

    </v-data-table>
</template>

<script>
export default {
    name:'CrudTable',

    props: {
        updateItem: null,
        setItem: null,
        createItem: null,
        deleteItem: null,
        close: null,
        formValid: null,
        headers: null,
        items: null,
    },

    data: () => ({
        dialog: false,
        search: '',
        itemInfo: {},
        editedIndex: -1
    }),

    watch: {
      dialog(val) {
        val || this.termiate()
      },
      formValid(val){
          val || this.open()
      }
    },
    
    computed: {
        formTitle(){
            return this.editedIndex === -1 ? 'new item' : 'edit item'
        }
    },

    methods: {
        
        async storeItem(){
            if(this.editedIndex > -1){
                await this.updateItem()
            }else{
                await this.createItem()
            }
            console.log(this.formValid)
            if(this.formValid)
                await this.termiate()
        },

        async editItem(item){
            this.editedIndex = this.items.indexOf(item)
            await this.setItem(item, this.editedIndex )
            this.dialog = true
        },

        async removeItem(item){
            this.editedIndex = this.items.indexOf(item)
            await this.setItem(item, this.editedIndex)
            confirm('Are you sure you want to delete this item?') && await this.deleteItem(item)
            await this.termiate()
        },

        async termiate(){
            this.editedIndex = -1
            this.dialog = false
            await this.close()
        },

        open(){
            this.dialog = true
        }
    }
}
</script>