<template>
  <div class="settings-view">
    <div class="welcome-card">
      <Card>
        <template #title>Bem-vindo às Configurações</template>
        <template #content>
          <p class="text-gray-900 dark:text-gray-400">
            Selecione uma opção no menu lateral para começar a configurar sua
            conta.
          </p>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from "primevue/card";
</script>
