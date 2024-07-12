import "./assets/main.css";
import "./index.css";
import "./assets/reset.css";

import { createApp } from "vue";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleDown, faAngleUp);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
