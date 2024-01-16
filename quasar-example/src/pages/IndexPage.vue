<template>
  <q-page>
    <div class="row q-pa-md">
      <div class="col-5 q-mr-md">
        <div>Create user</div>
        <q-form>
          <q-input label="Name" outlined v-model="name"></q-input>
          <q-input label="Email" outlined v-model="email"></q-input>
          <div>
            <q-btn @click="newUser" color="primary">New User</q-btn>
          </div>
        </q-form>
      </div>
      <div class="col-6">
        <div class="q-mb-md">
          <q-btn color="primary" @click="getLatest">Get Latest</q-btn>
        </div>
        <q-list bordered separator>
          <q-item v-for="user in users" :key="user.id">
            <q-item-section>{{ user.name }}</q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { api } from "src/boot/axios";
// import { ActiveUser } from "src/pages/loginPage.vue";

onMounted(() => {
  api.get("/users").then((res) => {
    users.value = res.data;
  });
  var ActiveUser = localStorage.getItem("currentUser");
  alert(ActiveUser);
});

const users = ref([]);
const name = ref("");
const email = ref("");

function newUser() {
  const user = {
    name: name.value,
    email: email.value,
  };

  api.post("/users", user).then((res) => {
    users.value.push(res.data);
  });
}

function getLatest() {
  api.get("/users").then((res) => {
    users.value = res.data;
  });
}
</script>
