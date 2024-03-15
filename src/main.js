import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "/node_modules/swiper/swiper-bundle.min.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
