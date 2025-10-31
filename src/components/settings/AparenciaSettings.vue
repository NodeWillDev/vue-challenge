<template>
  <div class="aparencia-settings">
    <Card>
      <template #title>Aparência</template>
      <template #content>
        <div class="space-y-4">
          <div
            class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
          >
            <div class="flex-1">
              <label
                class="block text-lg font-semibold mb-1 text-gray-900 dark:text-gray-400"
                >Tema</label
              >
              <p class="text-sm text-gray-900 dark:text-gray-400">
                Escolha entre tema claro ou escuro
              </p>
            </div>
            <div class="flex-shrink-0">
              <Button
                :label="theme === 'light' ? 'Claro' : 'Escuro'"
                :icon="theme === 'light' ? 'pi pi-sun' : 'pi pi-moon'"
                severity="secondary"
                outlined
                @click="toggleTheme"
              />
            </div>
          </div>

          <div
            class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
          >
            <div class="flex-1">
              <label
                class="block text-lg font-semibold mb-1 text-gray-900 dark:text-gray-400"
                >Tamanho da Fonte</label
              >
              <p class="text-sm text-gray-900 dark:text-gray-400">
                Ajuste o tamanho do texto na interface
              </p>
            </div>
            <div class="flex-shrink-0">
              <SelectButton
                v-model="fontSize"
                :options="fontSizes"
                option-label="label"
                option-value="value"
              />
            </div>
          </div>

          <div
            class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
          >
            <div class="flex-1">
              <label
                class="block text-lg font-semibold mb-1 text-gray-900 dark:text-gray-400"
                >Animations</label
              >
              <p class="text-sm text-gray-900 dark:text-gray-400">
                Habilitar animações na interface
              </p>
            </div>
            <InputSwitch v-model="animations" />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Card from "primevue/card";
import Button from "primevue/button";
import InputSwitch from "primevue/inputswitch";
import SelectButton from "primevue/selectbutton";
import { useTheme } from "@/composables/useTheme";

const { theme, toggleTheme } = useTheme();

const animations = ref(true);
const fontSize = ref("medium");

const fontSizes = [
  { label: "Pequeno", value: "small" },
  { label: "Médio", value: "medium" },
  { label: "Grande", value: "large" },
];
</script>
