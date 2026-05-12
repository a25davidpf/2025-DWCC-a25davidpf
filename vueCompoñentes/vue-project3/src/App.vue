<script>
import Formulario from "./components/Formulario.vue";
import Informacion from "./components/Informacion.vue";

export default {
  data() {
    return {
      persoa: {
        nome: "david",
        anoNacemento: 2006,
      },
    };
  },
  methods: {
    enviarFormulario(nomeForm, anoForm) {
      this.persoa.nome = nomeForm;
      this.persoa.anoNacemento = Number(anoForm);
    },
  },
};
</script>

<template>
  <Informacion :nome="persoa.nome" :anoNacemento="persoa.anoNacemento" />
  <Formulario
    @actualizar="enviarFormulario"
    :nome="persoa.nome"
    :anoNacemento="persoa.anoNacemento"
  ></Formulario>
</template>

<style></style>
