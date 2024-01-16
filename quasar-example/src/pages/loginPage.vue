<template>  <q-page
  class="bodycolor window-height window-width row justify-center items-center"
>    <div class="column">      <div class="row">        <h5 class="text-h5 text-white q-my-md">Company & Co</h5>      </div>      <div class="row">        <q-card square bordered class="q-pa-lg shadow-1">          <q-card-section>            <q-form class="q-gutter-md">              <q-input
              square
              filled
              clearable
              v-model="username"
              type="username"
              label="username"
            />              <q-input
              square
              filled
              clearable
              v-model="password"
              type="password"
              label="password"
            />            </q-form>          </q-card-section>          <q-card-actions class="q-px-md">            <q-btn
            unelevated
            color="light-green-7"
            size="lg"
            class="full-width"
            label="Login"
            @click="loginnn()"
          />          </q-card-actions>          <q-card-section class="text-center q-pa-none">            <p class="text-grey-6">Not reigistered?</p>            <router-link to="/signup" class="text-grey-6"
            >Created an Account</router-link
          >            <p class="text-grey-6" to="/login"></p>          </q-card-section>        </q-card>      </div>    </div>  </q-page></template><script setup>import { api } from "src/boot/axios";
import { ref } from "vue";
//import Login from "src/components/login.vue";
const username = ref("");
const password = ref("");
var loggedin = false;
var users = ref([]);
function loginnn() {
api.get("/users").then((res) => {
  users = res;
  var user = {};
  user = users.data.find((item) => item.username == username.value);
  if (!user) {
    alert("that username is not in our database");
    username.value = "";
  } else if (user.password == password.value) {
    alert("login complete");
    loggedin = true;
    localStorage.setItem("currentUser", user.username);
    window.location.href = "/";
  } else {
    alert("wrong password");
    password.value = "";
  }
});
}
// export default {
//   name: 'Login',
//   data () {
//     return {
//       username: '',
//       password: ''
//     }
//   }
// }
</script><style>.q-card {
width: 360px;
}
</style>
