<template>
  <div
    class="h-full border-r bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-700"
  >
    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
      <h2 class="text-xl font-bold text-gray-900 dark:text-gray-200">
        Configurações
      </h2>
    </div>

    <nav class="flex flex-col py-2">
      <div
        v-for="item in menuItems"
        :key="item.id"
        class="menu-item-wrapper"
        :class="{ 'has-submenu-open': expandedItems.includes(item.id) }"
      >
        <div
          v-if="item.submenu && item.submenu.length > 0"
          class="flex items-center mx-2 rounded-lg transition-colors cursor-pointer relative no-underline border-none bg-transparent w-[calc(100%-1rem)] min-h-[3rem] px-4 py-3 gap-3"
          :class="{
            'bg-blue-500 text-white dark:bg-blue-400 dark:text-white': isActive(
              item.route || ''
            ),
            'text-gray-900 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700':
              !isActive(item.route || ''),
          }"
          @click="handleItemWithSubmenuClick(item)"
        >
          <i :class="item.icon" class="text-lg"></i>
          <span class="flex-1">{{ item.label }}</span>
          <i
            class="pi pi-chevron-down text-sm min-w-4 w-4 flex justify-center items-center flex-shrink-0 transition-transform duration-200"
            :class="{ 'rotate-180': expandedItems.includes(item.id) }"
          ></i>
        </div>
        <router-link
          v-else-if="item.route"
          :to="`/settings/${item.route}`"
          class="flex items-center mx-2 rounded-lg transition-colors cursor-pointer relative no-underline border-none bg-transparent w-[calc(100%-1rem)] min-h-[3rem] px-4 py-3 gap-3"
          :class="{
            'bg-blue-500 text-white dark:bg-blue-400 dark:text-white': isActive(
              item.route
            ),
            'text-gray-900 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700':
              !isActive(item.route),
          }"
          @click="handleItemClick(item)"
        >
          <i :class="item.icon" class="text-lg"></i>
          <span class="flex-1">{{ item.label }}</span>
          <i
            class="pi pi-chevron-down text-sm min-w-4 w-4 opacity-0 pointer-events-none flex-shrink-0"
          ></i>
        </router-link>

        <div
          v-if="item.submenu && item.submenu.length > 0"
          class="overflow-hidden transition-all duration-200 pt-2 pb-2"
          :class="
            expandedItems.includes(item.id) ? 'max-h-[1000px]' : 'max-h-0'
          "
        >
          <router-link
            v-for="subItem in item.submenu"
            :key="subItem.id"
            :to="`/settings/${subItem.route}`"
            class="flex items-center px-4 py-3 mx-2 ml-8 rounded-lg transition-colors cursor-pointer no-underline text-sm mb-2"
            :class="{
              'bg-blue-500 text-white dark:bg-blue-400 dark:text-white font-medium':
                isActive(subItem.route),
              'text-gray-900 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700':
                !isActive(subItem.route),
            }"
            @click="handleItemClick(item)"
          >
            <span>{{ subItem.label }}</span>
          </router-link>
        </div>
      </div>

      <button
        class="flex items-center mx-2 rounded-lg transition-colors cursor-pointer relative mt-auto text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 no-underline border-none bg-transparent w-[calc(100%-1rem)] min-h-[3rem] px-4 py-3 gap-3"
        @click="handleLogout"
      >
        <i class="pi pi-sign-out text-lg"></i>
        <span>Sair</span>
      </button>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useSettingsStore } from "@/stores/settings";
import { useDynamicDialog } from "@/composables/useDynamicDialog";

const router = useRouter();
const route = useRoute();
const settingsStore = useSettingsStore();
const { openLogoutDialog } = useDynamicDialog();

const menuItems = settingsStore.menuItems;
const expandedItems = ref<string[]>([]);

const isActive = (routePath: string) => {
  const currentPath = route.path;
  const fullRoutePath = `/settings/${routePath}`;

  if (currentPath === fullRoutePath) return true;

  if (currentPath.startsWith(`${fullRoutePath}/`)) return true;

  return false;
};

const hasActiveSubmenu = (itemId: string) => {
  const item = menuItems.find((i) => i.id === itemId);
  if (!item?.submenu) return false;
  return item.submenu.some((subItem) => isActive(subItem.route));
};

const toggleSubmenu = (itemId: string) => {
  if (hasActiveSubmenu(itemId)) {
    return;
  }

  const index = expandedItems.value.indexOf(itemId);
  if (index > -1) {
    expandedItems.value.splice(index, 1);
  } else {
    expandedItems.value.push(itemId);
  }
};

const checkActiveSubmenu = () => {
  menuItems.forEach((item) => {
    if (item.submenu) {
      const isActiveRoute = item.submenu.some((subItem) =>
        isActive(subItem.route)
      );
      const isExpanded = expandedItems.value.includes(item.id);

      if (isActiveRoute && !isExpanded) {
        expandedItems.value.push(item.id);
      } else if (!isActiveRoute && isExpanded) {
        const index = expandedItems.value.indexOf(item.id);
        if (index > -1) {
          expandedItems.value.splice(index, 1);
        }
      }
    }
  });
};

const handleItemClick = (item: any) => {};

const handleItemWithSubmenuClick = (item: any) => {
  toggleSubmenu(item.id);
};

const handleLogout = () => {
  openLogoutDialog();
};

watch(
  () => route.path,
  () => {
    checkActiveSubmenu();
  },
  { immediate: true }
);

onMounted(() => {
  checkActiveSubmenu();
});
</script>

<style scoped>
.menu-item-wrapper {
  @apply flex flex-col;
}
</style>
