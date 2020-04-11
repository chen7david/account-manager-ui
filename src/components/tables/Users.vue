<template>
    <v-data-table
        :headers="headers"
        :items="users"
        :search="search"
        :items-per-page="5"
        class="elevation-1"
    >
        <template v-slot:top>
            <v-toolbar flat color="white">
                <v-toolbar-title>Users</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-text-field
                ></v-text-field>
                 <v-spacer></v-spacer>
                 <v-dialog v-model="dialog" max-width="500px">
                     <template v-slot:activator="{ on }">
                        <v-btn icon class="mb-2" v-on="on">
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="headline">hello</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="user.username" label="username"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="user.password" label="password"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
                            <v-btn color="blue darken-1" text>Save</v-btn>
                        </v-card-actions>
                    </v-card>
                 </v-dialog>

            </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="seeItem(item)">mdi-pencil</v-icon>
            <v-icon small @click="seeItem(item)">mdi-delete</v-icon>
        </template>
    </v-data-table>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Users',
  props: {
    users: null,
    search: null
  },
  data () {
    return {
        headers: [
            {
            text: 'Username',
            align: 'start',
            sortable: false,
            value: 'username',
            },
            { text: 'UserId', value: 'userId' },
            { text: 'Updated', value: 'updated_at' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        user: {},
        dialog: false,
    }
  },
  methods: {
      ...mapActions([
          'getUsers'
      ]),
      seeItem(item){
          console.log(item)
      }
  },
}
</script>