import { createApp } from "vue";
import App from "./App.vue";
import Formulario from "./components/Formulario.vue";
import mostrarPersoa from "./components/mostrarPersoa.vue";

const app = createApp(App);
app.component("Formulario", Formulario);
app.component("mostrarPersoa", mostrarPersoa);
app.mount("#app");
