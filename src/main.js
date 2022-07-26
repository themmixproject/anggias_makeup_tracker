import { createApp } from "vue";
import App from "./App.vue";
import InlineSvg from "vue-inline-svg";

const makeupTracker = createApp(App);

makeupTracker.component("InlineSvg", InlineSvg);
makeupTracker.mount("#app");
