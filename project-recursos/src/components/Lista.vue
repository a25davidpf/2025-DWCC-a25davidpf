<script>
export default {
  inject: ["recursos"],
};
</script>
<template>
  <h1>Lista recursos</h1>
  <li v-for="recurso in recursos" :key="recurso.id">
    {{ recurso.titulo }}
    {{ recurso.descripcion }}
    <a href="recurso.ligazon">{{ recurso.ligazon }}</a>
    <br />
  </li>
</template>
