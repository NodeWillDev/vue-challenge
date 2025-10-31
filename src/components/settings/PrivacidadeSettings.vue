<template>
  <div class="privacidade-settings">
    <Card>
      <template #title>Privacidade e Segurança</template>
      <template #content>
        <div class="space-y-4">
          <div
            class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
          >
            <div class="flex-1">
              <label
                class="block text-lg font-semibold mb-1 text-gray-900 dark:text-gray-400"
                >Perfil Público</label
              >
              <p class="text-sm text-gray-900 dark:text-gray-400">
                Permitir que outros usuários vejam seu perfil
              </p>
            </div>
            <InputSwitch v-model="publicProfile" />
          </div>

          <div
            class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
          >
            <div class="flex-1">
              <label
                class="block text-lg font-semibold mb-1 text-gray-900 dark:text-gray-400"
                >Busca por E-mail</label
              >
              <p class="text-sm text-gray-900 dark:text-gray-400">
                Permitir que outros usuários te encontrem pelo e-mail
              </p>
            </div>
            <InputSwitch v-model="emailSearch" />
          </div>

          <div
            class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
          >
            <div class="flex-1">
              <label
                class="block text-lg font-semibold mb-1 text-gray-900 dark:text-gray-400"
                >Status Online</label
              >
              <p class="text-sm text-gray-900 dark:text-gray-400">
                Mostrar quando você está online
              </p>
            </div>
            <InputSwitch v-model="showStatus" />
          </div>

          <div
            class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
          >
            <div class="flex-1">
              <label
                class="block text-lg font-semibold mb-1 text-gray-900 dark:text-gray-400"
                >Bloquear Conta</label
              >
              <p class="text-sm text-gray-900 dark:text-gray-400">
                Impedir login na sua conta
              </p>
            </div>
            <InputSwitch v-model="blockAccount" />
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

const publicProfile = ref(true);
const emailSearch = ref(false);
const showStatus = ref(true);
const blockAccount = ref(false);
</script>
