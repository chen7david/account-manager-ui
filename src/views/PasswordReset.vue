<template>

<v-container fill-height fluid>
  <v-row >
    <v-col cols="12">
      <v-row justify="center">
        <v-col align="center" cols="12">
          <v-card tile max-width="400px">
            <v-col cols="12">
              <v-col>
                <v-list-item three-line>
                  <v-list-item-content>
                      <div class="overline">Reset Password</div>
                      <v-list-item-subtitle>Enter your new password twice and you will be auto-logged in wth your new password.</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item> 
              </v-col>

              <v-col>
                <v-text-field
                    :error-messages="validate('password')"
                    label="Password"
                    name="password"
                    outlined
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show ? 'text' : 'password'"
                    hint="At least 6 characters"
                    @click:append="show = !show"
                    v-model="user.password"
                ></v-text-field>
              </v-col>

              <v-col>
                <v-text-field
                    :error-messages="validate('passwordConfirm')"
                    label="Password Confirm"
                    name="passwordConfirm"
                    outlined
                    :type="show ? 'text' : 'password'"
                    hint="At least 6 characters"
                    @click:append="show = !show"
                    v-model="user.passwordConfirm"
                ></v-text-field>
              </v-col>

              <v-btn :loading="isLoading" large elevation="0" block @click="revocerPassword(user)">reset password</v-btn>

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
    name:'Verification',
    props: {
        code: null
    },
    data(){
        return {
            show: false,
            user: { 
                code: this.code
            }
        }
    },
    computed: {
        ...mapGetters([
            'validate',
            'isLoading'
        ]),
    },
    methods: {
        ...mapActions([
            'revocerPassword'
        ])
    },

}
</script>