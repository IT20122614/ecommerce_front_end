<template>
  <div>
    <v-card class="mx-auto my-12 green lighten-5" light max-width="374">
      <v-alert v-if="error" type="error">
        {{ error }}
      </v-alert>
      <v-card-title>
        <span class="text-uppercase font-weight-light">ri</span>
        <span class="text-uppercase">ght</span>
      </v-card-title>
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <!-- set input validations -->
          <v-text-field
            label="Name"
            v-model="username"
            prepend-icon="person"
            :rules="inputRules"
          ></v-text-field>
          <v-text-field
            label="Email"
            v-model="email"
            prepend-icon="email"
            :rules="inputRulesEmail"
          ></v-text-field>
          <v-text-field
            label="Password"
            v-model="password"
            prepend-icon="password"
            :rules="inputRulesPassword"
            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="() => (value = !value)"
            :type="value ? 'password' : 'text'"
          ></v-text-field>

          <v-btn class="success mx-0 mt-3" @click="submit"
            >register <v-icon right>person</v-icon></v-btn
          >
        </v-form>
        <!-- this will redirect to the login page -->
        <router-link to="/loginpage" class="black--text">
          <p class="text-end">Login</p>
        </router-link>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
const axios = require("axios");
import URL from "../store/index.js";
export default {
  data() {
    return {
      error: "",
      baseURL: URL.url,
      username: "",
      inputRules: [
        // set some condtions
        (v) => !!v || "userName is required",
      ],
      email: "",
      inputRulesEmail: [
        (v) => !!v || "Email is required",
        (v) => v.length >= 3 || "Maximum length is 3 characters",
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
      password: "",
      valid: true,
      value: true,
      inputRulesPassword: [
        (v) => !!v || "Password is required",
        (v) => v.length >= 5 || "Maximum length is 3 characters",
      ],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // create user object
        const userAdd = {
          username: this.username,
          email: this.email,
          password: this.password,
        };
        axios
          .post(`${this.baseURL}/api/auth/signup`, userAdd)
          .then((result) => {
            this.$router.push("/loginpage");
            console.log(result);
          })
          .catch((err) => {
            this.error = "Username or Email is already in use";
            console.log(err);
          });

        // after register , redirect to the login page
      }
    },
  },
};
</script>

<style></style>
