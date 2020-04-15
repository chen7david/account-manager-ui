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
                      <div class="overline">complete acccount verification</div>
                      <v-list-item-subtitle>Enter your verification code below and press verify to activate your account.</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item> 
              </v-col>

              <v-col>
                <v-text-field
                  :error-messages="validate('code')"
                  label="code"
                  name="code"
                  outlined
                  hint="verification code is a 6 digit code"
                  v-model="code"
                ></v-text-field>
              </v-col>

              <v-btn :disabled="active" large elevation="0" block @click="accountVerification(code)">verify</v-btn>

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
    data: () => ({

    }),
    computed: {
        ...mapGetters([
            'validate'
        ]),

        active(){
            return this.code != null && this.code.length == 6 ? false : true
        }
    },
    methods: {
        ...mapActions([
            'accountVerification'
        ])
    },

}
</script>