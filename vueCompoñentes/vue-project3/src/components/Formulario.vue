<script>
export default {
  props: {
    nome: String,
    anoNacemento: {
      type: Number,
      required: true,
    },
  },
  data: {
    nomeForm: this.nome,
    anoForm: this.anoNacemento,
  },
  methods: {
    enviarFormulario() {
      this.$emit("actualizar", {
        nome: this.formNome,
        anoNacemento: Number(this.formAno),
      });
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
