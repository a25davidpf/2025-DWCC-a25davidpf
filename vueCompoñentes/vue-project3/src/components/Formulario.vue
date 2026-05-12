<script>
export default {
  props: {
    nome: String,
    anoNacemento: {
      type: Number,
    },
  },
  data() {
    return {
      nomeForm: this.nome,
      anoForm: this.anoNacemento,
    };
  },
  methods: {
    enviarFormulario() {
      this.$emit("actualizar", this.nomeForm, this.anoForm);
    },
  },
};
</script>

<template>
  <div>
    <h2>Editar persoa</h2>
    <form @submit.prevent="enviarFormulario">
      <input type="text" v-model="nomeForm" />
      <input type="text" v-model="anoForm" />
      <button type="submit">Actualizar</button>
    </form>
  </div>
</template>
