<template>
    <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
    >
        <template v-slot:top>
            <v-toolbar flat>
                <v-text-field class="mt-5 mx-5" dense outlined clearable clear-icon="mdi-close-circle" v-model="search"></v-text-field>
                <v-dialog v-model="dialog" max-width="500px">
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
        headers: null,
        items: null,
    },

    data: () => ({
        dialog: false,
        search: '',
        itemInfo: {},
        editedIndex: -1
    }),

    computed: {
        formTitle(){
            return this.editedIndex === -1 ? 'new item' : 'edit item'
        }
    },

    methods: {
        
        storeItem(){
            if(this.editedIndex > -1){
                this.updateItem()
            }else{
                this.createItem()
            }
            this.termiate()
        },
        editItem(item){
            this.editedIndex = this.items.indexOf(item)
            this.setItem(item, this.editedIndex )
            this.dialog = true
        },
        removeItem(item){
            this.editedIndex = this.items.indexOf(item)
            this.setItem(item, this.editedIndex)
            confirm('Are you sure you want to delete this item?') && this.deleteItem(item)
            this.termiate()
        },
        termiate(){
            this.editedIndex = -1
            this.dialog = false
            this.close()
        }
    }
}
</script>