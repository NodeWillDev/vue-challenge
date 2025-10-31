import { createRouter, createWebHistory } from "vue-router";
import SettingsLayout from "@/layouts/SettingsLayout.vue";
import SettingsView from "@/views/SettingsView.vue";
import SettingsSubmenu from "@/views/SettingsSubmenu.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/settings",
    },
    {
      path: "/settings",
      component: SettingsLayout,
      children: [
        {
          path: "",
          name: "settings",
          component: SettingsView,
        },
        {
          path: ":submenu(.*)",
          name: "settings-submenu",
          component: SettingsSubmenu,
        },
      ],
    },
  ],
});

export default router;
