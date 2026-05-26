<script>
import ListaPersoas from "./components/ListaPersoas.vue";
import FormPersoa from "./components/FormPersoa.vue";
import { computed } from "vue";

export default {
  components: {
    ListaPersoas,
    FormPersoa,
  },

  data() {
    return {
      persoas: [
        {
          nome: "Ada",
          apelido: "Lovelace",
        },
        {
          nome: "Ángela",
          apelido: "Ruiz",
        },
      ],
      novoNome: "",
      novoApelido: "",
      filtro: "",
      persoaSeleccionada: null,
    };
  },

  provide() {
    return {
      persoas: this.persoas,
      novoNome: computed(() => this.novoNome),
      novoApelido: computed(() => this.novoApelido),
      filtro: computed(() => this.filtro),
    };
  },

  methods: {
    seleccionar(persoa) {
      this.persoaSeleccionada = persoa;

      this.novoNome = persoa.nome;
      this.novoApelido = persoa.apelido;
    },

    actualizar() {
      if (this.persoaSeleccionada) {
        this.persoaSeleccionada.nome = this.novoNome;
        this.persoaSeleccionada.apelido = this.novoApelido;
      }
    },

    engadir() {
      this.persoas.push({
        nome: this.novoNome,
        apelido: this.novoApelido,
      });

      this.novoNome = "";
      this.novoApelido = "";
    },

    borrar() {
      if (this.persoaSeleccionada) {
        const index = this.persoas.indexOf(this.persoaSeleccionada);
        this.persoas.splice(index, 1);

        this.novoNome = "";
        this.novoApelido = "";

        this.persoaSeleccionada = null;
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <h2>Lista de persoas</h2>

    <ListaPersoas
      :persoas="persoas"
      :filtro="filtro"
      @seleccionar="seleccionar"
      @update:filtro="filtro = $event"
    />
    <br />
    <FormPersoa
      :novoNome="novoNome"
      :novoApelido="novoApelido"
      @update:nome="novoNome = $event"
      @update:apelido="novoApelido = $event"
      @engadir="engadir"
      @actualizar="actualizar"
      @borrar="borrar"
    />
    <br />
  </div>
</template>

<style>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
