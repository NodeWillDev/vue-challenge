<template>
  <div class="space-y-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <template #title>
          <div class="flex items-center">
            <i class="pi pi-user mr-2"></i>
            Informações do Perfil
          </div>
        </template>
        <template #content>
          <div v-if="profile" class="space-y-6 w-full">
            <div class="flex justify-center items-center relative">
              <img
                :src="profile.avatar"
                :alt="profile.name"
                class="w-32 h-32 rounded-full border-4 object-cover border-gray-200 dark:border-gray-700"
              />
              <Button
                icon="pi pi-camera"
                rounded
                severity="secondary"
                class="absolute bottom-0 right-0"
                @click="editAvatar"
                aria-label="Editar avatar"
              />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex flex-col gap-2">
                <label
                  class="text-sm font-semibold text-gray-900 dark:text-gray-400"
                  >Nome Completo</label
                >
                <InputText v-model="profile.name" class="w-full" />
              </div>
              <div class="flex flex-col gap-2 relative overflow-visible">
                <label
                  class="text-sm font-semibold text-gray-900 dark:text-gray-400"
                  >E-mail</label
                >
                <InputText
                  v-model="profile.email"
                  type="email"
                  class="w-full"
                />
              </div>
              <div class="flex flex-col gap-2 md:col-span-2">
                <label
                  class="text-sm font-semibold text-gray-900 dark:text-gray-400"
                  >Bio</label
                >
                <Textarea
                  v-model="profile.bio"
                  :rows="4"
                  class="w-full"
                  placeholder="Escreva uma breve biografia sobre você..."
                />
              </div>
              <div class="flex flex-col gap-2 relative overflow-visible">
                <label
                  class="text-sm font-semibold text-gray-900 dark:text-gray-400"
                  >Telefone</label
                >
                <InputText
                  v-model="profileData.phone"
                  placeholder="(00) 00000-0000"
                  class="w-full"
                />
              </div>
              <div class="flex flex-col gap-2 relative overflow-visible">
                <label
                  class="text-sm font-semibold text-gray-900 dark:text-gray-400"
                  >Data de Nascimento</label
                >
                <Calendar
                  v-model="profileData.birthDate"
                  dateFormat="dd/mm/yy"
                  class="calendar-input max-w-11"
                  appendTo="body"
                />
              </div>
            </div>
            <div
              class="flex gap-3 justify-end pt-4 border-t border-gray-200 dark:border-gray-700"
            >
              <Button label="Salvar Alterações" @click="saveProfile" />
              <Button
                label="Cancelar"
                severity="secondary"
                outlined
                @click="resetProfile"
              />
            </div>
          </div>
          <div v-else class="flex flex-col items-center justify-center py-12">
            <i
              class="pi pi-user text-6xl mb-4 text-gray-400 dark:text-gray-400"
            ></i>
            <p class="text-lg text-gray-900 dark:text-gray-400">
              Nenhum perfil encontrado
            </p>
          </div>
        </template>
      </Card>

      <Card>
        <template #title>
          <div class="flex items-center">
            <i class="pi pi-chart-bar mr-2"></i>
            Estatísticas
          </div>
        </template>
        <template #content>
          <div class="flex flex-wrap gap-4">
            <div
              class="text-center p-4 rounded-lg bg-gray-100 dark:bg-gray-800"
            >
              <div
                class="text-2xl font-bold mb-1 text-blue-600 dark:text-blue-400"
              >
                {{ accountStats.posts }}
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                Publicações
              </div>
            </div>
            <div
              class="text-center p-4 rounded-lg bg-gray-100 dark:bg-gray-800"
            >
              <div
                class="text-2xl font-bold mb-1 text-blue-600 dark:text-blue-400"
              >
                {{ accountStats.followers }}
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                Seguidores
              </div>
            </div>
            <div
              class="text-center p-4 rounded-lg bg-gray-100 dark:bg-gray-800"
            >
              <div
                class="text-2xl font-bold mb-1 text-blue-600 dark:text-blue-400"
              >
                {{ accountStats.following }}
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                Seguindo
              </div>
            </div>
            <div
              class="text-center p-4 rounded-lg bg-gray-100 dark:bg-gray-800"
            >
              <div
                class="text-2xl font-bold mb-1 text-blue-600 dark:text-blue-400"
              >
                {{ accountStats.likes }}
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                Curtidas
              </div>
            </div>
          </div>
        </template>
      </Card>

      <Card>
        <template #title>
          <div class="flex items-center">
            <i class="pi pi-cog mr-2"></i>
            Configurações
          </div>
        </template>
        <template #content>
          <div class="space-y-4">
            <div
              class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
            >
              <div class="flex-1">
                <label
                  class="block text-lg font-semibold mb-1 text-gray-900 dark:text-gray-400"
                  >Verificação de Conta</label
                >
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Conta verificada com badge oficial
                </p>
              </div>
              <Tag
                :value="
                  accountSettings.verified ? 'Verificada' : 'Não verificada'
                "
                :severity="accountSettings.verified ? 'success' : 'secondary'"
              />
            </div>

            <div
              class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
            >
              <div class="flex-1">
                <label
                  class="block text-lg font-semibold mb-1 text-gray-900 dark:text-gray-400"
                  >Conta Pública</label
                >
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Qualquer pessoa pode ver seu perfil e publicações
                </p>
              </div>
              <InputSwitch v-model="accountSettings.isPublic" />
            </div>

            <div
              class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
            >
              <div class="flex-1">
                <label
                  class="block text-lg font-semibold mb-1 text-gray-900 dark:text-gray-400"
                  >Receber Mensagens</label
                >
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Permitir que outras pessoas te enviem mensagens
                </p>
              </div>
              <InputSwitch v-model="accountSettings.allowMessages" />
            </div>

            <div
              class="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
            >
              <div class="flex-1">
                <label
                  class="block text-lg font-semibold mb-1 text-gray-900 dark:text-gray-400"
                  >Conta Ativa</label
                >
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Status da sua conta no sistema
                </p>
              </div>
              <Tag
                :value="accountSettings.isActive ? 'Ativa' : 'Inativa'"
                :severity="accountSettings.isActive ? 'success' : 'danger'"
              />
            </div>
          </div>
        </template>
      </Card>
      <Card>
        <template #title>
          <div class="flex items-center">
            <i class="pi pi-bolt mr-2"></i>
            Ações Rápidas
          </div>
        </template>
        <template #content>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Button
              label="Alterar Senha"
              icon="pi pi-key"
              outlined
              severity="secondary"
              @click="changePassword"
              class="w-full"
            />
            <Button
              label="Exportar Dados"
              icon="pi pi-download"
              outlined
              severity="secondary"
              @click="exportData"
              class="w-full"
            />
            <Button
              label="Desativar Conta"
              icon="pi pi-ban"
              outlined
              severity="danger"
              @click="deactivateAccount"
              class="w-full"
            />
            <Button
              label="Excluir Conta"
              icon="pi pi-trash"
              outlined
              severity="danger"
              @click="deleteAccount"
              class="w-full"
            />
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import Card from "primevue/card";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Calendar from "primevue/calendar";
import InputSwitch from "primevue/inputswitch";
import Tag from "primevue/tag";
import type { UserProfile } from "@/composables/useUserProfile";

const props = defineProps<{
  data?: UserProfile;
}>();

const profile = ref({
  name: props.data?.name || "",
  email: props.data?.email || "",
  bio: props.data?.bio || "",
  avatar: props.data?.avatar || "",
});

const profileData = ref({
  phone: "",
  birthDate: null as Date | null,
});

const accountStats = ref({
  posts: 124,
  followers: 2340,
  following: 567,
  likes: 8920,
});

const accountSettings = ref({
  verified: true,
  isPublic: true,
  allowMessages: true,
  isActive: true,
});

const originalProfile = ref({ ...profile.value });

watch(
  () => props.data,
  (newData) => {
    if (newData) {
      profile.value = {
        name: newData.name || "",
        email: newData.email || "",
        bio: newData.bio || "",
        avatar: newData.avatar || "",
      };
      originalProfile.value = { ...profile.value };
    }
  },
  { immediate: true }
);

const editAvatar = () => {
  console.log("Editar avatar");
};

const saveProfile = () => {
  console.log("Salvar perfil", profile.value);
  originalProfile.value = { ...profile.value };
};

const resetProfile = () => {
  profile.value = { ...originalProfile.value };
};

const changePassword = () => {
  console.log("Alterar senha");
};

const exportData = () => {
  console.log("Exportar dados");
};

const deactivateAccount = () => {
  console.log("Desativar conta");
};

const deleteAccount = () => {
  console.log("Excluir conta");
};
</script>

<style scoped>
:deep(.p-card) {
  overflow: hidden;
}

:deep(.p-card-body) {
  overflow: hidden;
}

:deep(.p-card-content) {
  overflow: hidden;
}

:deep(.p-calendar) {
  width: 100%;
}

:deep(.p-datepicker) {
  z-index: 1100;
}

:deep(.p-datepicker-panel) {
  max-width: 20rem;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  :deep(.p-datepicker-panel) {
    max-width: calc(100vw - 2rem);
  }
}
</style>
