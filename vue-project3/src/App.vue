<script>
import mostrarPersoa from "./components/mostrarPersoa.vue";
import Formulario from "./components/Formulario.vue";

export default {
  data() {
    return {
      persons: [
        {
          nome: "David",
          anoNacemento: 2006,
        },
      ],
    };
  },
  methods: {
    edit(personaEditada) {
      this.persons[0].nome = personaEditada.nome;
      this.persons[0].anoNacemento = personaEditada.anoNacemento;
    },
  },
};
</script>

<template>
  <Formulario @edit="edit" />
  <mostrarPersoa
    v-for="person in persons"
    :nome="person.nome"
    :anoNacemento="person.anoNacemento"
  />
</template>

<style></style>
