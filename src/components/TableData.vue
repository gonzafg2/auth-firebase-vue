<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Edad</th>
        <th scope="col">Hijos</th>
        <th scope="col">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(trabajador, i) in data" :key="i">
        <th scope="row">{{ i + 1 }}</th>
        <td>{{ trabajador.nombre }}</td>
        <td>{{ trabajador.edad }}</td>
        <td>{{ trabajador.hijos ? "Si" : "No" }}</td>
        <td>
          <span @click="moveToEdit(trabajador)" class="cursor-pointer">✏️</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "TableData",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    ...mapMutations(["SET_EDIT_TRABAJADOR"]),
    moveToEdit(trabajador) {
      this.SET_EDIT_TRABAJADOR(trabajador);
      this.$router.push("/edit");
    },
  },
};
</script>

<style lang="scss" scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
