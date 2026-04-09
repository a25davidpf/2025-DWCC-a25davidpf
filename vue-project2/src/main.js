import { createApp } from "vue";
import App from "./App.vue";
import Contact from "./components/Contact.vue";
import NewContact from "./components/NewContact.vue";

const app = createApp(App);
app.component("Contact", Contact);
app.component("NewContact", NewContact);
app.mount("#app");
