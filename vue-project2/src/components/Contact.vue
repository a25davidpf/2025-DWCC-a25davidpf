<script>
export default {
  props: {
    nome: {
      type: String,
      required: true,
    },
    telefono: {
      type: String,
      required: true,
    },
    correo: {
      type: String,
      required: true,
    },
    favorito: {
      type: Boolean,
    },
  },
  data() {
    return {
      isOculto: true,
    };
  },
  methods: {
    añadirClase() {
      this.isOculto = !this.isOculto;
    },
    fav() {
      this.$emit("toggle-favorito");
    },
    borrarContacto() {
      this.$emit("borrar");
    },
  },
};
</script>
<template>
  <div>
    <h2>{{ nome }}</h2>
    <p v-if="favorito">Favorito</p>
    <div :class="{ oculto: isOculto }">
      <p>{{ telefono }}</p>
      <p>{{ correo }}</p>
    </div>
    <button @click="añadirClase">{{ isOculto ? "Mostrar" : "Ocultar" }}</button>
    <button @click="fav">Favorito</button>
    <button @click="borrarContacto">Borrar</button>
  </div>
</template>
<style>
.oculto {
  display: none;
}
</style>
