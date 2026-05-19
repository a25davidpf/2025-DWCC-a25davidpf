<script>
import Informacion from "./components/Informacion.vue";
import Formulario from "./components/Formulario.vue";

export default {
  components: {
    Informacion,
    Formulario,
  },
  data() {
    return {
      currentTab: "Informacion",
      tabs: ["Informacion", "Formulario"],
      recursoWeb: [
        {
          titulo: "Recurso1",
          descripcion: "Primer recurso",
          ligazon: "www.primerrecurso.es",
        },
      ],
    };
  },
  methods: {
    engadirRecurso(novoRecurso) {
      this.recursoWeb.push(novoRecurso);
      this.currentTab = "Informacion";
    },
    borrar(index) {
      this.recursoWeb.splice(index, 1);
    },
  },
};
</script>

<template>
  <div>
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="['tab-button', { active: currentTab === tab }]"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>
  </div>
  <keep-alive>
    <component
      :is="currentTab"
      :recursos="recursoWeb"
      @novo-recurso="engadirRecurso"
      @borrar="borrar"
    ></component>
  </keep-alive>
</template>

<style>
.tab-button {
  padding: 6px 10px;
  cursor: pointer;
  margin-bottom: 10px;
  margin-right: 10px;
}
</style>
