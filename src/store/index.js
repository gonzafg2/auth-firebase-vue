import Vue from "vue";
import Vuex from "vuex";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import router from "@/router";

import { db } from "@/helpers/firebase.js";
import {
  collection,
  getDocs,
  doc,
  /*setDoc,*/
  updateDoc,
} from "firebase/firestore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
    trabajadores: [],
    editTrabajador: {},
  },
  getters: {},
  mutations: {
    SET_LOGGED_IN(state, payload) {
      state.loggedIn = payload;
    },
    SET_DATA_TRABAJADORES(state, payload) {
      state.trabajadores = payload;
    },
    SET_EDIT_TRABAJADOR(state, payload) {
      state.editTrabajador = payload;
    },
    SET_EDIT_TRABAJADOR_NOMBRE(state, payload) {
      state.editTrabajador.nombre = payload;
    },
    SET_EDIT_TRABAJADOR_EDAD(state, payload) {
      state.editTrabajador.edad = payload;
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
    logout({ commit }) {
      localStorage.removeItem("loggedIn");
      commit("SET_LOGGED_IN", false);
      router.push("/login");
    },
    async getCollectionTrabajadores({ commit }) {
      try {
        const request = await getDocs(collection(db, "trabajadores"));
        // request.forEach((doc) => console.log(doc.data()));

        const data = request.docs.map((doc) => {
          const obj = {
            ...doc.data(),
            idFirebase: doc.id,
          };
          return obj;
        });

        commit("SET_DATA_TRABAJADORES", data);
      } catch (error) {
        console.error(error);
      }
    },
    async updateTrabajador({ state }) {
      const trabajador = state.editTrabajador;
      const idFirebase = trabajador.idFirebase;
      delete trabajador.idFirebase;
      try {
        const refDoc = doc(db, "trabajadores", idFirebase);
        // await setDoc(refDoc, trabajador);
        await updateDoc(refDoc, trabajador);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
