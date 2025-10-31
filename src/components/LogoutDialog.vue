<template>
  <div class="py-4">
    <p class="mb-4 text-gray-900 dark:text-gray-400">
      Tem certeza que deseja sair?
    </p>
    <div class="flex gap-2 justify-end">
      <Button
        label="Cancelar"
        severity="secondary"
        outlined
        @click="handleCancel"
      />
      <Button label="Confirmar" severity="danger" @click="handleConfirm" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDialog } from "primevue/usedialog";
import Button from "primevue/button";

const dialog = useDialog();
const props = defineProps<{
  onConfirm?: () => void;
  onCancel?: () => void;
}>();

const handleConfirm = () => {
  props.onConfirm?.();
};

const handleCancel = () => {
  props.onCancel?.();
};
</script>
