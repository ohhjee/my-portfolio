import { createApp } from "vue";
import "./assets/css/daisyui.css";
import App from "./App.vue";
import { Icon } from "@iconify/vue";

const app = createApp(App);
app.component("iconify", Icon);
// app.component("multiselect", Multiselect);
// app.use(router);
app.mount("#app");
