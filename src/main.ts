import { createApp } from "vue";
import { createPinia } from "pinia";
import { VueQueryPlugin, QueryClient } from "@tanstack/vue-query";
import PrimeVue from "primevue/config";
import DialogService from "primevue/dialogservice";
import Lara from "@primevue/themes/lara";
import "primeicons/primeicons.css";
import "./style.css";

import App from "./App.vue";
import router from "./router";
import { useTheme } from "./composables/useTheme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin, { queryClient });
app.use(PrimeVue, {
  theme: {
    preset: Lara,
    options: {
      darkModeSelector: ".dark-mode",
      cssLayer: false,
    },
  },
});
app.use(DialogService);
if (typeof window !== "undefined") {
  const { loadTheme } = useTheme();
  loadTheme();
}

app.mount("#app");
