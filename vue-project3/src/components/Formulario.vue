<script>
export default {
  emits: ["edit"],
  data() {
    return {
      nome: "",
      anoNacemento: 0,
    };
  },
  methods: {
    editar() {
      this.$emit("edit", {
        nome: this.nome,
        anoNacemento: this.anoNacemento,
      });
    },
  },
};
</script>

<template>
  <form @submit.prevent="editar">
    <label>Nome: </label><input type="text" v-model="nome" />
    <br />
    <br />
    <label>Ano Nacemento: </label><input type="number" v-model="anoNacemento" />
    <button type="submit">Submit</button>
  </form>
</template>

<style></style>
