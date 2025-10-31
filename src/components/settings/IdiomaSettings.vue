<template>
  <div class="idioma-settings">
    <Card>
      <template #title>Idioma e Região</template>
      <template #content>
        <div class="space-y-4">
          <div
            class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
          >
            <div class="flex-1">
              <label
                class="block text-lg font-semibold mb-1 text-gray-900 dark:text-gray-400"
                >Idioma do Sistema</label
              >
              <p class="text-sm text-gray-900 dark:text-gray-400">
                Escolha o idioma da interface
              </p>
            </div>
            <Select
              v-model="selectedLanguage"
              :options="languages"
              option-label="label"
              option-value="value"
              placeholder="Selecione um idioma"
              class="w-48"
            />
          </div>

          <div
            class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
          >
            <div class="flex-1">
              <label
                class="block text-lg font-semibold mb-1 text-gray-900 dark:text-gray-400"
                >Formato de Data</label
              >
              <p class="text-sm text-gray-900 dark:text-gray-400">
                Como as datas devem ser exibidas
              </p>
            </div>
            <Select
              v-model="dateFormat"
              :options="dateFormats"
              option-label="label"
              option-value="value"
              class="w-48"
            />
          </div>

          <div
            class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
          >
            <div class="flex-1">
              <label
                class="block text-lg font-semibold mb-1 text-gray-900 dark:text-gray-400"
                >Fuso Horário</label
              >
              <p class="text-sm text-gray-900 dark:text-gray-400">
                Seu fuso horário local
              </p>
            </div>
            <Select
              v-model="timezone"
              :options="timezones"
              option-label="label"
              option-value="value"
              class="w-48"
            />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Card from "primevue/card";
import Select from "primevue/select";

const selectedLanguage = ref("pt-BR");
const dateFormat = ref("DD/MM/YYYY");
const timezone = ref("America/Sao_Paulo");

const languages = [
  { label: "Português (Brasil)", value: "pt-BR" },
  { label: "English (US)", value: "en-US" },
  { label: "Español", value: "es-ES" },
  { label: "Français", value: "fr-FR" },
];

const dateFormats = [
  { label: "DD/MM/YYYY", value: "DD/MM/YYYY" },
  { label: "MM/DD/YYYY", value: "MM/DD/YYYY" },
  { label: "YYYY-MM-DD", value: "YYYY-MM-DD" },
];

const timezones = [
  { label: "Brasília (UTC-3)", value: "America/Sao_Paulo" },
  { label: "New York (UTC-5)", value: "America/New_York" },
  { label: "London (UTC+0)", value: "Europe/London" },
  { label: "Tokyo (UTC+9)", value: "Asia/Tokyo" },
];
</script>
