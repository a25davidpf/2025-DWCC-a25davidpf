<script>
createApp({
  data() {
    return {
      rawHtml: "<b>This should be bold.</b>",
    };
  },
}).mount("#app");
</script>
<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ ano }}</p>
    <p>{{ ano + 5 }}</p>
    <input type="text" name="" id="" v-model="name" />
    <p>{{ count }}</p>
    <button @click="incrementar">Sumar</button>
    <button @click="decrementar">Restar</button>
  </div>
  <div id="app">
    <p>Using text interpolation: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
  </div>
</template>
<style></style>
