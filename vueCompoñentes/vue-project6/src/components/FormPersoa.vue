<script>
export default {
  inject: ["novoNome", "novoApelido"],

  emits: ["update:nome", "update:apelido", "engadir", "actualizar", "borrar"],
};
</script>

<template>
  <div>
    <span>Nome:</span>
    <input
      type="text"
      :value="novoNome"
      @input="$emit('update:nome', $event.target.value)"
    />

    <br />
    <br />
    <span>Apelido:</span>

    <input
      type="text"
      :value="novoApelido"
      @input="$emit('update:apelido', $event.target.value)"
    />
  </div>
  <div class="botons">
    <button @click="$emit('engadir')">Engadir</button>

    <button @click="$emit('actualizar')">Actualizar</button>

    <button @click="$emit('borrar')">Borrar</button>
  </div>
</template>
<style>
.botons {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}
</style>
