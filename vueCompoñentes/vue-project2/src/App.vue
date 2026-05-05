<script>
import Contacto from "./components/Contacto.vue";
import Formulario from "./components/Formulario.vue";
export default {
  data() {
    return {
      persoas: [
        {
          nome: "david",
          telefono: 644865745,
          correo: "david@exemplo.com",
          fav: true,
        },
        {
          nome: "pablo",
          telefono: 645634745,
          correo: "pablo@exemplo.com",
          fav: false,
        },
      ],
    };
  },
  methods: {
    engadirContacto(novoContacto) {
      this.persoas.push(novoContacto);
    },
    favorito(index) {
      this.persoas[index].fav = !this.persoas[index].fav;
    },
    borrar(index) {
      this.persoas.splice(index, 1);
    },
  },
};
</script>

<template>
  <Formulario @novo-contacto="engadirContacto" />

  <Contacto
    v-for="(persoa, index) in persoas"
    :key="index"
    :nome="persoa.nome"
    :telefono="persoa.telefono"
    :correo="persoa.correo"
    :fav="persoa.fav"
    @borrar="borrar(index)"
    @favorito="favorito(index)"
  />
</template>

<style>
div {
  margin-top: 60px;
}
</style>
