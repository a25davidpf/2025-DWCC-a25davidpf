<script>
import NewContact from "./components/NewContact.vue";

export default {
  data() {
    return {
      persons: [
        {
          nome: "David",
          telefono: "987654321",
          correo: "david@gmail.com",
          favorito: false,
        },
        {
          nome: "Pablo",
          telefono: "954454321",
          correo: "pablo@gmail.com",
          favorito: false,
        },
      ],
    };
  },
  methods: {
    toggleFavorito(index) {
      this.persons[index].favorito = !this.persons[index].favorito;
    },
    add(contact) {
      this.persons.push(contact);
    },
    borrar(index) {
      this.persons.splice(index, 1);
    },
  },
};
</script>

<template>
  <NewContact @add="add" />
  <Contact
    v-for="(person, index) in persons"
    :nome="person.nome"
    :telefono="person.telefono"
    :correo="person.correo"
    :favorito="person.favorito"
    @toggle-favorito="toggleFavorito(index)"
    @borrar="borrar(index)"
  />
</template>

<style>
.oculto {
  display: none;
}
</style>
