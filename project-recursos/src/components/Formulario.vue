<script>
export default {
  emits: ["addRecurso"],
  data() {
    return {
      titulo: " ",
      descripcion: "",
      ligazon: "",
    };
  },
  methods: {
    añadir() {
      this.$emit("addRecurso", {
        id: Date.now(),
        titulo: this.titulo,
        descripcion: this.descripcion,
        ligazon: this.ligazon,
      });
      this.titulo = "";
      this.descripcion = "";
      this.ligazon = "";
    },
  },
};
</script>

<template>
  <h1>Añadir nuevo recurso</h1>
  <form @submit.prevent="añadir">
    <span>Titulo: </span><input type="text" v-model="titulo" /><br />
    <span>Descripcion: </span><input type="text" v-model="descripcion" /><br />
    <span>Ligazon: </span><input type="text" v-model="ligazon" /><br />
    <button type="submit">Submit</button>
  </form>
</template>
