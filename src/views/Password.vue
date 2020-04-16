<template>

<v-container fill-height fluid>
  <v-row >
    <v-col cols="12">
      <v-row justify="center">
        <v-col align="center" cols="12">
          <v-card tile max-width="400px">
            <v-col cols="12">

              <v-list-item three-line>
                <v-list-item-content>
                    <div class="overline">Password Recovery</div>
                    <v-list-item-subtitle>Please enter the email or username to start the recovery process.</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>  
              <v-divider class="my-5"/>

              <v-col>
                <v-text-field
                  :error-messages="validate('username')"
                  label="username"
                  name="username"
                  outlined
                  hint="At least 1 character, no spaces"
                  v-model="username"
                ></v-text-field>
              </v-col>

              <v-btn :loading="isLoading" large class="" elevation="0"  block @click="sendPasswordRevoceryEmail(username)">send recovery email</v-btn>
 
            </v-col>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</v-container>
    
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name:'EmailResend',
    data(){
      return {
        username: null
      }
    },
    components: {
      
    },
    computed: {
        ...mapGetters([
            'validate',
            'isLoading'
        ]),
        allowUpdate(){
          return this.email == this.user.email
        }
    },
    methods: {
        ...mapActions([
          'updateEmail',
          'sendPasswordRevoceryEmail'
        ])
        
    },

}
</script>