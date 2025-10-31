<template>
  <div class="settings-submenu">
    <div v-if="isLoading" class="loading-container">
      <ProgressSpinner />
    </div>

    <div v-else-if="error" class="error-container">
      <Message severity="error" :closable="false">
        Erro ao carregar dados: {{ error.message }}
      </Message>
    </div>

    <div v-else class="content-container">
      <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-400">
        {{ pageTitle }}
      </h1>

      <div class="space-y-6">
        <component :is="contentComponent" :data="userProfile" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import Card from "primevue/card";
import Panel from "primevue/panel";
import InputSwitch from "primevue/inputswitch";
import ProgressSpinner from "primevue/progressspinner";
import Message from "primevue/message";
import { useSettingsStore } from "@/stores/settings";
import { useUserProfile, type UserProfile } from "@/composables/useUserProfile";
import ContaSettings from "@/components/settings/ContaSettings.vue";
import PrivacidadeSettings from "@/components/settings/PrivacidadeSettings.vue";
import NotificacoesSettings from "@/components/settings/NotificacoesSettings.vue";
import AparenciaSettings from "@/components/settings/AparenciaSettings.vue";
import IdiomaSettings from "@/components/settings/IdiomaSettings.vue";
import ArmazenamentoSettings from "@/components/settings/ArmazenamentoSettings.vue";

const route = useRoute();
const settingsStore = useSettingsStore();
const { data: userProfile, isLoading, error } = useUserProfile();

const pageTitle = computed(() => {
  const submenuPath = route.params.submenu as string;
  const pathParts = submenuPath.split("/");

  const menuItem = settingsStore.menuItems.find(
    (item) => item.route === pathParts[0]
  );

  if (menuItem?.submenu && pathParts.length > 1) {
    const subItem = menuItem.submenu.find((sub) => sub.route === submenuPath);
    return subItem?.label || menuItem.label;
  }

  return menuItem?.label || "Configurações";
});

const contentComponent = computed(() => {
  const submenu = route.params.submenu as string;
  const pathParts = submenu.split("/");
  const mainRoute = pathParts[0];

  const components: Record<string, any> = {
    conta: ContaSettings,
    privacidade: PrivacidadeSettings,
    notificacoes: NotificacoesSettings,
    aparencia: AparenciaSettings,
    idioma: IdiomaSettings,
    armazenamento: ArmazenamentoSettings,
  };

  return components[mainRoute] || ContaSettings;
});
</script>

<style scoped>
.settings-submenu {
  @apply p-6 max-w-4xl mx-auto min-h-full;
}

.content-container {
  @apply w-full;
}

.loading-container,
.error-container {
  @apply flex justify-center items-center min-h-[400px];
}
</style>
