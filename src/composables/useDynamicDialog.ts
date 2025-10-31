import { useDialog } from "primevue/usedialog";
import LogoutDialog from "@/components/LogoutDialog.vue";

export function useDynamicDialog() {
  const dialog = useDialog();

  const openLogoutDialog = () => {
    dialog.open(LogoutDialog, {
      props: {
        header: "Confirmar Saída",
        style: { width: "25rem" },
        modal: true,
        draggable: false,
      },
      data: {
        onConfirm: () => {
          console.log("Usuário confirmou logout");
          dialog.close();
        },
        onCancel: () => {
          console.log("Usuário cancelou logout");
          dialog.close();
        },
      },
    });
  };

  return {
    openLogoutDialog,
  };
}
