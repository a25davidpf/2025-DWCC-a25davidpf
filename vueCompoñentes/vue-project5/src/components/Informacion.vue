<script>
export default {
  props: ["recursos"],
  methods: {
    borrarContacto(index) {
      this.$emit("borrar", index);
    },
  },
};
</script>

<template>
  <div>
    <div v-for="(recurso, index) in recursos" :key="index">
      <h3>{{ recurso.titulo }}</h3>
      <p>{{ recurso.descripcion }}</p>
      <a :href="recurso.ligazon">
        {{ recurso.ligazon }}
      </a>
      <br />
      <br />
      <button @click="borrarContacto(index)">Borrar contacto</button>
      <hr />
    </div>
  </div>
</template>
