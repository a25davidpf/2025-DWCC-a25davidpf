<script>
export default {
  data() {
    return {
      nome: "",
      telefono: "",
      correo: "",
    };
  },
  methods: {
    engadirContacto() {
      this.$emit("novo-contacto", {
        nome: this.nome,
        telefono: Number(this.telefono),
        correo: this.correo,
        fav: false,
      });

      this.nome = "";
      this.telefono = "";
      this.correo = "";
    },
  },
};
</script>

<template>
  <div>
    <h2>Engadir contacto</h2>

    <input v-model="nome" placeholder="Nome" />
    <input v-model="telefono" placeholder="Teléfono" />
    <input v-model="correo" placeholder="Correo" />

    <button @click="engadirContacto">Engadir</button>
  </div>
</template>
