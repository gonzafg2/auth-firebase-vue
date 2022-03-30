import Vue from "vue";
import Vuex from "vuex";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
  },
  getters: {},
  mutations: {
    SET_LOGGED_IN(state, payload) {
      state.loggedIn = payload;
    },
  },
  actions: {
    async loginWithFirebase({ commit }, payload) {
      const user = payload.user;
      const password = payload.password;

      const auth = getAuth();

      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          user,
          password
        );
        // Signed in
        commit("SET_LOGGED_IN", true);
        localStorage.setItem("loggedIn", "true");
        router.push("/about");
        console.log({ userCredential });
      } catch (error) {
        console.error(error);
      }
    },
  },
});
