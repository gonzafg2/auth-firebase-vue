<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <template v-if="!isloggedIn">
      <router-link to="/login">Login</router-link> |
    </template>
    <template v-else>
      <button @click="logout" class="btn btn-link">Logout</button> |
    </template>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "NavBar",
  computed: {
    ...mapState(["loggedIn"]),
    isloggedIn() {
      return this.loggedIn ? true : false;
    },
  },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>
