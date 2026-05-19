<script>
export default {
  data() {
    return {
      persoas: [
        {
          nome: "Ada",
          apelido: "Lovelance",
        },
        {
          nome: "Ángela",
          apelido: "Ruiz",
        },
      ],
      filtro: "",
      novoNome: "",
      novoApelido: "",
    };
  },
  computed: {
    num() {
      return this.persoas.length;
    },
  },
  methods: {
    seleccionar(persoa) {
      this.novoNome = persoa.nome;
      this.novoApelido = persoa.apelido;
    },
  },
};
</script>

<template>
  <div class="container">
    <h2>Lista de persoas</h2>
    <input type="text" placeholder="Filtrar por apelido" />
    <br />
    <div>
      <select :size="num">
        <option
          v-for="persoa in persoas"
          :key="index"
          @click="seleccionar(persoa)"
        >
          {{ persoa.apelido }}, {{ persoa.nome }}
        </option>
      </select>
    </div>
    <br />
    <span>Nome:</span>
    <input type="text" v-model="novoNome" />
    <br />
    <span>Apelido:</span>
    <input type="text" v-model="novoApelido" />
    <br />
    <div class="botons">
      <button>Engadir</button>
      <button>Actualizar</button>
      <button>Borrar</button>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.botons {
  display: flex;
  gap: 10px;
}
</style>
