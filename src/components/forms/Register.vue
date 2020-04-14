<template>
  <v-card tile max-width="400px">
    <v-col cols="12">

        <v-list-item two-line>
          <v-list-item-content>
              <div class="overline">register</div>
              <v-list-item-subtitle>create an account today</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>  

        <v-col>
          <v-text-field
            :error-messages="validate('username')"
            label="Username"
            name="username"
            outlined
            hint="At least 1 character, no spaces"
            v-model="account.username"
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            :error-messages="validate('email')"
            label="Email"
            name="email"
            outlined
            hint="At least 1 character, no spaces"
            v-model="account.email"
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
            v-model="account.password"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-btn large elevation="0" block @click="createUser(account)">register</v-btn>
          <v-divider class="my-5"></v-divider>
          <v-btn large elevation="0" block router to="/login">login</v-btn>
        </v-col>
    </v-col>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'register-form',
  data: () => ({
    show: false
  }),
  computed: {
    ...mapGetters([
      'account',
      'validate'
    ])
  }, 
  methods: {
    ...mapActions([
      'createUser'
    ])
  }
}
</script>