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
                    <div class="overline">email verification</div>
                    <v-list-item-subtitle>A verifiation email was sent to {{email}} plese click the link to activate your account.</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>  

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
              <v-col>
                <v-btn large class="mt-0" elevation="0"  block :to="{name:'EmailResend', params:{email: user.email}}">resend</v-btn>
                <v-divider class="my-5"></v-divider>
                <span class="caption"> if you had initially entered the wrong email address then enter the correct email and press update </span>
                <v-btn large elevation="0" block router to="/register">update email</v-btn>
              </v-col>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</v-container>
    
</template>

<script>
import { mapGetters, mapState } from 'vuex'
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
        ])
    },
    methods: {
        ...mapState([

        ])
        
    },

}
</script>