<template>
  <b-table
    bordered
    striped
    hover
    :items="data"
    :fields="titles"
    :busy="data.length === 0"
  >
    <template #table-busy>
      <div class="text-center text-danger my-2">
        <b-spinner class="align-middle"></b-spinner>
        <strong> Cargando datos de la NASA...</strong>
      </div>
    </template>

    <template #cell(hijos)="data">
      {{ data.value ? "Si" : "No" }}
    </template>
  </b-table>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "TableData",
  data() {
    return {
      titles: [
        {
          label: "Nombre Completo",
          key: "nombre",
          sortable: false,
        },
        {
          label: "Edad (Años)",
          key: "edad",
          sortable: false,
        },
        {
          label: "¿Tiene Hijos?",
          key: "hijos",
          sortable: false,
        },
      ],
    };
  },
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
