<script>
export default {
  data() {
    return {
      texto: "ola mundo!",
    };
  },
  methods: {
    alternarMaiusculasMinusculas() {
      this.texto = this.texto
        .split("")
        .map((letra) => {
          if (letra === letra.toUpperCase()) {
            return letra.toLowerCase();
          } else {
            return letra.toUpperCase();
          }
        })
        .join("");
    },
  },
};
</script>

<template>
  <h1>{{ texto }}</h1>
  <button @click="alternarMaiusculasMinusculas">h</button>
</template>

<style></style>
