<script>
export default {
  props: {
    nome: {
      type: String,
      required: true,
    },
    anoNacemento: {
      type: Number,
      required: true,
    },
  },
};
</script>
<template>
  <div>
    <h2>{{ nome }}</h2>
    <h3>{{ anoNacemento }}</h3>
  </div>
</template>
<style></style>
