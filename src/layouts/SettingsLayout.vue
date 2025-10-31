<template>
  <div
    class="flex h-screen w-full bg-gray-50 dark:bg-gray-950"
    :class="{ 'mobile-view': isMobile }"
  >
    <aside v-if="!isMobile" class="sidebar">
      <SettingsMenu />
    </aside>

    <aside v-if="isMobile && showMenu" class="sidebar mobile-sidebar">
      <SettingsMenu />
    </aside>

    <div
      v-if="isMobile && !showMenu"
      class="fixed top-0 left-0 right-0 h-16 border-b border-gray-200 dark:border-gray-700 flex items-center gap-4 px-4 z-10 bg-gray-50 dark:bg-gray-950"
    >
      <Button
        icon="pi pi-arrow-left"
        text
        rounded
        severity="secondary"
        @click="goBack"
        aria-label="Voltar"
      />
      <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {{ currentPageTitle }}
      </h2>
      <div class="ml-auto">
        <ThemeToggle />
      </div>
    </div>

    <div v-if="!isMobile" class="fixed top-4 right-4 z-50">
      <ThemeToggle />
    </div>

    <main
      class="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-950"
      :class="{ 'pt-16': isMobile }"
    >
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <DynamicDialog />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import Button from "primevue/button";
import DynamicDialog from "primevue/dynamicdialog";
import SettingsMenu from "@/components/SettingsMenu.vue";
import ThemeToggle from "@/components/ThemeToggle.vue";
import { useSettingsStore } from "@/stores/settings";

const route = useRoute();
const router = useRouter();
const settingsStore = useSettingsStore();

const isMobile = ref(false);
const showMenu = computed(() => {
  if (!isMobile.value) return true;
  return route.name === "settings";
});

const currentPageTitle = computed(() => {
  const submenu = route.params.submenu as string | undefined;
  if (submenu) {
    const pathParts = submenu.split("/");
    const menuItem = settingsStore.menuItems.find(
      (item) => item.route === pathParts[0]
    );

    if (menuItem?.submenu && pathParts.length > 1) {
      const subItem = menuItem.submenu.find((sub) => sub.route === submenu);
      return subItem?.label || menuItem.label;
    }

    return menuItem?.label || "Configurações";
  }
  return "Configurações";
});

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

const goBack = () => {
  router.push("/settings");
};

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});
</script>

<style scoped>
.sidebar {
  @apply w-64 flex-shrink-0 overflow-y-auto;
}

.mobile-sidebar {
  @apply fixed inset-0 z-20 w-full;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .sidebar:not(.mobile-sidebar) {
    display: none;
  }

  .mobile-sidebar ~ .main-content {
    display: none;
  }
}
</style>
