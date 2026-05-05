<script>
import Informacion from "./components/Informacion.vue";

export default {
  data() {
    return {
      persoas: [
        {
          nome: "david",
          anoNacemento: 2006,
        },
      ],
    };
  },
  methods: {},
};
</script>

<template>
  <Informacion
    v-for="(persoa, index) in persoas"
    :key="index"
    :nome="persoa.nome"
    :anoNacemento="persoa.anoNacemento"
  />
</template>

<style></style>
