<template>
  <div class="perfil-settings">
    <Card>
      <template #title>Perfil</template>
      <template #content>
        <div v-if="profile" class="space-y-4">
          <div class="flex flex-col gap-2">
            <label
              class="text-sm font-semibold text-gray-900 dark:text-gray-400"
              >Nome</label
            >
            <InputText v-model="profile.name" class="w-full" />
          </div>
          <div class="flex flex-col gap-2">
            <label
              class="text-sm font-semibold text-gray-900 dark:text-gray-400"
              >Bio</label
            >
            <Textarea v-model="profile.bio" :rows="4" class="w-full" />
          </div>
          <Button label="Salvar" @click="saveProfile" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import type { UserProfile } from "@/composables/useUserProfile";

const props = defineProps<{
  data?: UserProfile;
}>();

const profile = ref({
  name: props.data?.name || "",
  bio: props.data?.bio || "",
});

const saveProfile = () => {
  console.log("Perfil salvo", profile.value);
};
</script>
