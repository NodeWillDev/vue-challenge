<template>
  <Button
    :icon="theme === 'light' ? 'pi pi-moon' : 'pi pi-sun'"
    :label="theme === 'light' ? 'Tema Escuro' : 'Tema Claro'"
    severity="secondary"
    outlined
    @click="toggleTheme"
    class="theme-toggle-btn"
    aria-label="Alternar tema"
  />
</template>

<script setup lang="ts">
import Button from "primevue/button";
import { useTheme } from "@/composables/useTheme";

const { theme, toggleTheme } = useTheme();
</script>

<style scoped>
.theme-toggle-btn {
  @apply transition-all duration-200;
}
</style>
