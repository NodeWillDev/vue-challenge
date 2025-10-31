<template>
  <div class="armazenamento-settings">
    <Card>
      <template #title>Armazenamento e Dados</template>
      <template #content>
        <div class="storage-stats">
          <Panel header="Uso de Armazenamento">
            <div class="storage-info">
              <div class="space-y-2">
                <ProgressBar :value="storageUsed" :showValue="false" />
                <div
                  class="flex justify-between text-sm text-gray-900 dark:text-gray-400"
                >
                  <span>{{ storageUsed }}% usado</span>
                  <span>{{ usedSpace }} / {{ totalSpace }}</span>
                </div>
              </div>

              <div
                class="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700"
              >
                <div class="flex justify-between items-center">
                  <span class="text-gray-900 dark:text-gray-400"
                    >Fotos e Vídeos</span
                  >
                  <span class="font-semibold text-gray-900 dark:text-gray-400"
                    >2.5 GB</span
                  >
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-900 dark:text-gray-400"
                    >Documentos</span
                  >
                  <span class="font-semibold text-gray-900 dark:text-gray-400"
                    >850 MB</span
                  >
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-900 dark:text-gray-400">Cache</span>
                  <span class="font-semibold text-gray-900 dark:text-gray-400"
                    >320 MB</span
                  >
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-900 dark:text-gray-400">Outros</span>
                  <span class="font-semibold text-gray-900 dark:text-gray-400"
                    >180 MB</span
                  >
                </div>
              </div>
            </div>
          </Panel>

          <div class="flex gap-4">
            <Button
              label="Limpar Cache"
              icon="pi pi-trash"
              severity="warning"
              outlined
              @click="clearCache"
              class="w-full"
            />
            <Button
              label="Limpar Todos os Dados"
              icon="pi pi-exclamation-triangle"
              severity="danger"
              outlined
              @click="clearAllData"
              class="w-full"
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
import Panel from "primevue/panel";
import Button from "primevue/button";
import ProgressBar from "primevue/progressbar";

const storageUsed = ref(68);
const usedSpace = ref("3.85 GB");
const totalSpace = ref("5.7 GB");

const clearCache = () => {
  console.log("Cache limpo");
};

const clearAllData = () => {
  console.log("Todos os dados serão limpos");
};
</script>
