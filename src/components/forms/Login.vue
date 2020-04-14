<template>
  <v-card tile max-width="400px">
    <v-col cols="12">
        
        <v-list-item two-line>
          <v-list-item-content>
              <div class="overline">login</div>
              <v-list-item-subtitle>authenticate here</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>  

        <v-col>
          <v-text-field
            :error-messages="validate('username')"
            label="Username"
            name="username"
            outlined
            hint="At least 1 character, no spaces"
            v-model="authInfo.username"
          ></v-text-field>
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
            v-model="authInfo.password"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-btn large class="mt-0" elevation="0"  block @click="login(authInfo)">login</v-btn>
          <v-divider class="my-5"></v-divider>
          <v-btn large elevation="0" block router to="/register">register</v-btn>
        </v-col>
    </v-col>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'register-form',
  data: () => ({
    show: false,
    authInfo: {}
  }),
  computed: {
    ...mapGetters([
      'validate',
      'isAuth'
    ])
  }, 
  methods: {
    ...mapActions([
      'login'
    ])
  }
}
</script>