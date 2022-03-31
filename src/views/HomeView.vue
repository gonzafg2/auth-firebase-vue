<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="display-2">Bienvenido!</h1>
          <h2>Este es el Home</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <TableData :data="trabajadores" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TableData from "@/components/TableData.vue";
import { mapState } from "vuex";

export default {
  name: "HomeView",
  components: {
    TableData,
  },
  computed: {
    ...mapState(["trabajadores"]),
  },
};
</script>
