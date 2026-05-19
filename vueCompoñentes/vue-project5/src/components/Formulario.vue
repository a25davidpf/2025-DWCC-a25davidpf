<script>
export default {
  data() {
    return {
      titulo: "",
      descripcion: "",
      ligazon: "",
      mostrarModal: false,
      erro: "",
    };
  },
  methods: {
    engadirRecurso() {
      if (!this.titulo || !this.descripcion || !this.ligazon) {
        this.erro = "Tes que cubrir todos os campos.";
        this.mostrarModal = true;
        return;
      }

      this.$emit("novo-recurso", {
        titulo: this.titulo,
        descripcion: this.descripcion,
        ligazon: this.ligazon,
      });

      this.titulo = "";
      this.descripcion = "";
      this.ligazon = "";
    },

    pecharModal() {
      this.mostrarModal = false;
    },
  },
};
</script>
<template>
  <div>
    <h2>Engadir recurso</h2>

    <input type="text" v-model="titulo" placeholder="Titulo" />
    <br /><br />
    <input type="text" v-model="descripcion" placeholder="Descripcion" />
    <br /><br />
    <input type="text" v-model="ligazon" placeholder="Ligazon" />
    <br /><br />
    <button @click="engadirRecurso">Engadir</button>

    <teleport to="body">
      <div v-if="mostrarModal" class="overlay">
        <div class="modal">
          <p>{{ erro }}</p>
          <button @click="pecharModal">Pechar</button>
        </div>
      </div>
    </teleport>
  </div>
</template>
<style>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 10px;
  min-width: 250px;
}
</style>
