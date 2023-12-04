import { createApp } from "vue";
import App from "./App.vue";
import router from './router'
import "element-plus/theme-chalk/src/notification.scss"
// import "~/styles/element/index.scss";

// import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

import "~/styles/index.scss";
import "uno.css";

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss";
import { createPinia } from "pinia";

const app = createApp(App);
// app.use(ElementPlus);
const pinia = createPinia()
app.use(router)
app.use(pinia)
app.mount("#app");
