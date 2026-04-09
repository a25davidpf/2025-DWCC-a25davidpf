import { createApp } from "vue";
import App from "./App.vue";
import Lista from "./components/Lista.vue";
import Formulario from "./components/Formulario.vue";

const app = createApp(App);
app.component("Lista", Lista);
app.component("Formulario", Formulario);
createApp(App).mount("#app");
