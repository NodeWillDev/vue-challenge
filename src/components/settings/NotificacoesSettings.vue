<template>
  <div class="notificacoes-settings">
    <Card>
      <template #title>Notificações</template>
      <template #content>
        <div class="space-y-4">
          <div
            class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
          >
            <div class="flex-1">
              <label
                class="block text-lg font-semibold mb-1 text-gray-600 dark:text-gray-400"
                >Notificações Push</label
              >
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Receber notificações mesmo quando o app estiver fechado
              </p>
            </div>
            <InputSwitch v-model="pushNotifications" />
          </div>

          <div
            class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
          >
            <div class="flex-1">
              <label
                class="block text-lg font-semibold mb-1 text-gray-600 dark:text-gray-400"
                >Notificações por E-mail</label
              >
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Receber atualizações importantes por e-mail
              </p>
            </div>
            <InputSwitch v-model="emailNotifications" />
          </div>

          <div
            class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
          >
            <div class="flex-1">
              <label
                class="block text-lg font-semibold mb-1 text-gray-600 dark:text-gray-400"
                >Notificações de mensagens</label
              >
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Ser notificado quando receber novas mensagens
              </p>
            </div>
            <InputSwitch v-model="messageNotifications" />
          </div>

          <div
            class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
          >
            <div class="flex-1">
              <label
                class="block text-lg font-semibold mb-1 text-gray-600 dark:text-gray-400"
                >Notificações de atualizações</label
              >
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Receber notificações sobre novas funcionalidades
              </p>
            </div>
            <InputSwitch v-model="updateNotifications" />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Card from "primevue/card";
import InputSwitch from "primevue/inputswitch";

const pushNotifications = ref(true);
const emailNotifications = ref(true);
const messageNotifications = ref(true);
const updateNotifications = ref(false);
</script>
