import { createSSRApp } from "vue";
import App from "./App.vue";
import "./styles/global.css";
import "./styles/demo-shared.css";
import "tt-ui/styles/icons.css";
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
