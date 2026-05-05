<script>
export default {
  props: {
    nome: String,
    telefono: Number,
    correo: String,
    fav: Boolean,
  },
  data() {
    return {
      mostrar: false,
    };
  },
  methods: {
    clickar() {
      this.mostrar = !this.mostrar;
    },
    favorito() {
      this.$emit("favorito");
    },
    borrar() {
      this.$emit("borrar");
    },
  },
};
</script>
<template>
  <div>
    <p>{{ nome }}</p>
    <p><span v-if="fav">FAVORITO</span></p>
    <button @click="clickar">
      <span v-if="mostrar">Ocultar info</span>
      <span v-else>Mostrar info</span>
    </button>
    <p>
      <span v-if="mostrar">{{ telefono }}</span>
    </p>
    <p>
      <span v-if="mostrar">{{ correo }}</span>
    </p>
    <p>
      <span v-if="mostrar">
        <button @click="favorito">
          <span v-if="fav">Quitar de favoritos</span>
          <span v-else>Añadir a favoritos</span>
        </button>
      </span>
    </p>
    <button @click="borrar">Borrar Contacto</button>
  </div>
</template>
<style></style>
