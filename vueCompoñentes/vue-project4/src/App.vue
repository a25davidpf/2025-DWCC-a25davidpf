<script>
import Contador from "./components/Contador.vue";
import Texto from "./components/Texto.vue";
export default {
  components: {
    Contador,
    Texto,
  },
  data() {
    return {
      currentTab: "Contador",
      tabs: ["Contador", "Texto"],
    };
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
    <component :is="currentTab"></component>
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
