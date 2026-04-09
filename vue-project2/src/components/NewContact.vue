<script>
export default {
  emits: ["add"],
  data() {
    return {
      nome: "",
      telefono: "",
      correo: "",
      favorito: false,
    };
  },
  methods: {
    añadir() {
      this.$emit("add", {
        nome: this.nome,
        telefono: this.telefono,
        correo: this.correo,
      });

      this.nome = "";
      this.telefono = "";
      this.correo = "";
    },
  },
};
</script>

<template>
  <form @submit.prevent="añadir">
    <label>Nome</label><input type="text" v-model="nome" />
    <label>Telefono</label><input type="num" v-model="telefono" />
    <label>Correo</label><input type="mail" v-model="correo" />
    <button type="submit">Submit</button>
  </form>
</template>

<style></style>
