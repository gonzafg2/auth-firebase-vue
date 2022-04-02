<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col cols="12" md="10">
          <h1 class="display-2">Bienvenido!</h1>
          <h2>Este es el Home</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <TableData :data="trabajadores" />
        </b-col>
      </b-row>
    </b-container>
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
