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
            label="Username"
            v-model="username"
            prepend-icon="person"
            :rules="inputRule"
          ></v-text-field>
          <v-text-field
            label="Password"
            v-model="password"
            prepend-icon="password"
            :rules="inputRulesPwd"
            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="() => (value = !value)"
            :type="value ? 'password' : 'text'"
          ></v-text-field>

          <v-btn class="success mx-0 mt-3" @click="submit"
            >Login
            <v-icon right>login</v-icon>
          </v-btn>
        </v-form>
        <!-- this will redirect to the register page -->
        <router-link to="/registerpage" class="black--text">
          <p class="text-end">Register</p>
        </router-link>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import axios from "axios";
import URL from "../store/index.js";

export default {
  data() {
    return {
      baseURL: URL.url,
      email: "",
      username: "",
      password: "",
      valid: true,
      value: true,
      error: "",
      inputRulesPwd: [
        // set password validations
        (v) => !!v || "Password is required",
        (v) => v.length >= 5 || "Maximum length is 3 characters",
      ],
      inputRule: [(v) => !!v || "Username is required"],
      usertype: URL.usertype,
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const userLogin = {
          username: this.username,
          password: this.password,
        };

        axios
          .post(`${this.baseURL}/api/auth/signin`, userLogin)
          .then((result) => {
            if (result.data.roles[0] == "ROLE_ADMIN") {
              localStorage.setItem("role", result.data.roles[0]);

              // this.usertype  = result.data.roles[0];
              // URL.usertype = result.data.roles[0];
              // alert(URL.usertype);
            } else {
              localStorage.setItem("role", "ROLE_USER");
            }

            // create local storage and store jwt token
            localStorage.setItem("token", result.data.token);
            sessionStorage.setItem("id", this.username);
            // after login , redirect to the Dashboard
            this.$router.push("/displaycate");
            console.log(result.data.roles[0]);
          })
          .catch((err) => {
            console.log(err);

            this.error = "Incorrect Username or Password!";
          });
      }
    },
  },
};
</script>
<style></style>
