<template>  <q-page
  class="bodycolor window-height window-width row justify-center items-center"
>    <div class="column">      <div class="row">        <h5 class="text-h5 text-white q-my-md">Company & Co</h5>      </div>      <div class="row">        <q-card square bordered class="q-pa-lg shadow-1">          <q-card-section>            <q-form class="q-gutter-md">              <q-input
              square
              filled
              clearable
              v-model="username"
              type="username"
              label="Username"
              class="username"
            />              <q-input
              square
              filled
              clearable
              v-model="password"
              type="password"
              label="Password"
            />              <q-input
              square
              filled
              clearable
              v-model="confirmPassword"
              type="password"
              label="Confirm password"
            />            </q-form>          </q-card-section>          <q-card-actions class="q-px-md">            <q-btn
            @click="newUser"
            unelevated
            color="light-green-7"
            size="lg"
            class="full-width"
            label="sign up"
          />          </q-card-actions>          <q-card-section class="text-center q-pa-none"> </q-card-section>        </q-card>      </div>    </div>  </q-page></template><script setup>import router from "src/router";
import { ref } from "vue";
const { api } = require("src/boot/axios");
var users = ref([]);
const username = ref("");
const password = ref("");
const confirmPassword = ref("");
const loggedin = false;
async function newUser() {
const user = {
  username: username.value,
  password: password.value,
};
// TODO: populate users from db
api.get("/users").then((res) => {
  if (res.data.some((e) => e.username === user.username)) {
    alert("username taken, input another one");
    username.value = "";
    return;
    /* vendors contains the element we're looking for */
  }
});
if (confirmPassword.value == password.value) {
  api.post("/users", user).then((res) => {
    users.value.push(res.data);
    username.value = "";
    password.value = "";
    confirmPassword.value = "";
    loggedin == true;
    window.location.href = "/";
  });
} else {
  alert("Password is not the same!");
}
}
// export default {
//   name: 'SignUp',
//   data () {
//     return {
//       email: '',
//       password: '',
//       confirmEmail: '',
//       confirmPassword: ''
//     }
//   },
//   data: function () {
//     return {
//       emailColor: 'primary',
//     }
//   },
//   methods: {
//     changeMe: function () {
//       if(email == confirmEmail){
//         document.getElementById(".email").style.color = "green";
//       }
//     }
//   }
// }
</script><style>.q-card {
width: 360px;
}

.bodycolor {
background-color: #c2d1e5;
/* background-color: #ff9d70; */
}
</style>
