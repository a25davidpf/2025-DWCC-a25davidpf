import { createApp } from "vue";
import App from "./App.vue";
import Informacion from "./components/Informacion.vue";
import Formulario from "./components/Formulario.vue";

const app = createApp(App);
app.component("Informacion", Informacion);
app.component("Formulario", Formulario);
app.mount("#app");
