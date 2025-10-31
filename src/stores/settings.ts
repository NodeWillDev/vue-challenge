import { defineStore } from "pinia";
import { ref } from "vue";

export interface SubMenuItem {
  id: string;
  label: string;
  route: string;
}

export interface MenuItem {
  id: string;
  label: string;
  icon: string;
  route?: string;
  submenu?: SubMenuItem[];
}

export const useSettingsStore = defineStore("settings", () => {
  const menuItems = ref<MenuItem[]>([
    {
      id: "conta",
      label: "Conta",
      icon: "pi pi-user",
      route: "conta",
      submenu: [
        { id: "perfil", label: "Perfil", route: "conta/perfil" },
        { id: "seguranca", label: "Segurança", route: "conta/seguranca" },
        { id: "assinatura", label: "Assinatura", route: "conta/assinatura" },
      ],
    },
    {
      id: "privacidade",
      label: "Privacidade",
      icon: "pi pi-lock",
      route: "privacidade",
      submenu: [
        {
          id: "bloqueados",
          label: "Usuários Bloqueados",
          route: "privacidade/bloqueados",
        },
        {
          id: "compartilhamento",
          label: "Compartilhamento",
          route: "privacidade/compartilhamento",
        },
        {
          id: "historico",
          label: "Histórico",
          route: "privacidade/historico",
        },
      ],
    },
    {
      id: "notificacoes",
      label: "Notificações",
      icon: "pi pi-bell",
      route: "notificacoes",
    },
    {
      id: "aparencia",
      label: "Aparência",
      icon: "pi pi-palette",
      route: "aparencia",
    },
    { id: "idioma", label: "Idioma", icon: "pi pi-globe", route: "idioma" },
    {
      id: "armazenamento",
      label: "Armazenamento",
      icon: "pi pi-database",
      route: "armazenamento",
      submenu: [
        {
          id: "backup",
          label: "Backup",
          route: "armazenamento/backup",
        },
        {
          id: "cache",
          label: "Gerenciar Cache",
          route: "armazenamento/cache",
        },
      ],
    },
  ]);

  return {
    menuItems,
  };
});
