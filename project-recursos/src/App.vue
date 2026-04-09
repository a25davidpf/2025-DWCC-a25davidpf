<script>
import Formulario from "./components/Formulario.vue";
import Lista from "./components/Lista.vue";

export default {
  components: { Lista, Formulario },
  provide() {
    return {
      recursos: [
        {
          id: 1,
          titulo: "Titulo",
          descripcion: "descripcion",
          ligazon: "ligazon",
        },
        {
          id: 2,
          titulo: "Titulo2",
          descripcion: "descripcion2",
          ligazon: "ligazon2",
        },
      ],
    };
  },
  methods: {
    addRecurso(recurso) {
      this.recursos.push(recurso);
    },
  },
};
</script>

<template>
  <Lista :recurso="recursos" />
  <Formulario @addRecurso="addRecurso" />
</template>

<style></style>
