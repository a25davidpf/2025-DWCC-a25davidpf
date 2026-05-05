<script>
export default {
  props: {
    nome: String,
    anoNacemento: {
      type: Number,
      required: true,
    },
  },
};
</script>
<template>
  <div>
    <h2>Informacion da persoa</h2>
    <p>Nome: {{ nome }}</p>
    <p>Ano de nacemento: {{ anoNacemento }}</p>
  </div>
</template>
