import type { Preview } from "@storybook/vue3";
import { setup } from "@storybook/vue3";
import { createPinia } from "pinia";
import { createMemoryHistory, createRouter } from "vue-router";
import PrimeVue from "primevue/config";
import DialogService from "primevue/dialogservice";
import Aura from "@primevue/themes/aura";
import "primeicons/primeicons.css";
import "../src/style.css";

const pinia = createPinia();
const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: "/settings",
      component: { template: "<div>Settings</div>" },
    },
    {
      path: "/settings/:submenu",
      component: { template: "<div>Submenu</div>" },
    },
  ],
});

setup((app) => {
  app.use(pinia);
  app.use(router);
  app.use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: ".dark-mode",
        cssLayer: false,
      },
    },
  });
  app.use(DialogService);
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div style="padding: 2rem;"><story /></div>',
    }),
  ],
};

export default preview;
