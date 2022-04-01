<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>Editar Trabajador:</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <label>Nombre</label>
        <input v-model="nombre" type="text" class="form-control" />
      </div>
      <div class="col-12">
        <label>Edad</label>
        <input v-model="edad" type="text" class="form-control" />
      </div>
      <div class="col-12 d-flex justify-content-around">
        <button @click="cancelUpdate" class="btn btn-danger mt-2">
          Cancelar
        </button>
        <button @click="updateTrabajadorLocal" class="btn btn-primary mt-2">
          Actualizar Datos
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  name: "EditView",
  data() {
    return {
      trabajador: {
        nombre: "",
        edad: null,
      },
    };
  },
  computed: {
    ...mapState(["editTrabajador"]),
    nombre: {
      get() {
        return this.editTrabajador.nombre;
      },
      set(value) {
        this.trabajador.nombre = value;
      },
    },
    edad: {
      get() {
        return this.editTrabajador.edad;
      },
      set(value) {
        this.trabajador.edad = Number(value);
      },
    },
  },
  methods: {
    ...mapMutations(["SET_EDIT_TRABAJADOR_NOMBRE", "SET_EDIT_TRABAJADOR_EDAD"]),
    ...mapActions(["updateTrabajador"]),
    cancelUpdate() {
      this.$router.push("/");
    },
    async updateTrabajadorLocal() {
      this.SET_EDIT_TRABAJADOR_NOMBRE(
        this.trabajador.nombre || this.editTrabajador.nombre
      );
      this.SET_EDIT_TRABAJADOR_EDAD(
        this.trabajador.edad || this.editTrabajador.edad
      );
      await this.updateTrabajador();
      this.$router.push("/");
    },
  },
};
</script>
