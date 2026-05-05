import { createApp } from "vue";
import App from "./App.vue";
import Contacto from "./components/Contacto.vue";
import Formulario from "./components/Formulario.vue";

const app = createApp(App);
app.component("Contacto", Contacto);
app.component("Formulario", Formulario);
app.mount("#app");
