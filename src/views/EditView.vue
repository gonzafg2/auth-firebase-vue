<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>{{ getTrabajadorFiltered }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "EditView",
  computed: {
    ...mapGetters(["getTrabajadorFiltered"]),
  },
};
</script>
