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
                    <div class="overline">resend email verification</div>
                    <v-list-item-subtitle>A verifiation email was sent to {{email}}, click here to resend.</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>  

              <v-btn large class="my-5" elevation="0"  block @click="resendActivationEmail(email)">resend</v-btn>

              <v-divider class="mt-8"/>

              <v-col>
                <v-list-item three-line>
                  <v-list-item-content>
                      <div class="overline">update account email</div>
                      <v-list-item-subtitle>Update account email by entering a new one here then pressing update.</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item> 
              </v-col>

              <v-col>
                <v-text-field
                  :error-messages="validate('email')"
                  label="email"
                  name="email"
                  outlined
                  hint="At least 1 character, no spaces"
                  v-model="user.email"
                ></v-text-field>
              </v-col>

              <v-btn :disabled="allowUpdate" large elevation="0" block @click="updateEmail({user, email})">update email</v-btn>

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
    props: {
        email: null
    },
    data(){
      return {
        user: Object.assign({}, {email: this.email})
      }
    },
    components: {
      
    },
    computed: {
        ...mapGetters([
            'validate'
        ]),
        allowUpdate(){
          return this.email == this.user.email
        }
    },
    methods: {
        ...mapActions([
          'updateEmail',
          'resendActivationEmail'
        ])
        
    },

}
</script>