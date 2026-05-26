<script>
export default {
  inject: ["persoas", "filtro"],

  emits: ["seleccionar", "update:filtro"],

  data() {
    return {
      persoasListas: this.persoas,
    };
  },
  watch: {
    filtro(novoFiltro) {
      this.persoasListas = this.persoas.filter((persoa) =>
        persoa.apelido.toLowerCase().includes(novoFiltro.toLowerCase()),
      );
    },
  },
};
</script>

<template>
  <div>
    <input
      type="text"
      :value="filtro"
      placeholder="Filtrar por apelido"
      @input="$emit('update:filtro', $event.target.value)"
    />

    <br />
    <br />
    <select :size="5">
      <option
        v-for="(persoa, index) in persoasListas"
        :key="index"
        @click="$emit('seleccionar', persoa)"
      >
        {{ persoa.apelido }}, {{ persoa.nome }}
      </option>
    </select>
  </div>
</template>
