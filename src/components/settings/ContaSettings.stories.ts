import type { Meta, StoryObj } from "@storybook/vue3";
import ContaSettings from "./ContaSettings.vue";
import type { UserProfile } from "@/composables/useUserProfile";

const meta = {
  title: "Components/Settings/ContaSettings",
  component: ContaSettings,
  tags: ["autodocs"],
  argTypes: {
    data: {
      control: "object",
      description: "Dados do perfil do usuário",
    },
  },
} satisfies Meta<typeof ContaSettings>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockProfile: UserProfile = {
  id: 1,
  name: "João Silva",
  email: "joao.silva@example.com",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Joao",
  bio: "Desenvolvedor Full Stack apaixonado por Vue.js",
};

const mockProfileComplete: UserProfile = {
  id: 1,
  name: "Maria Santos",
  email: "maria.santos@example.com",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
  bio: "Designer UX/UI e desenvolvedora Frontend. Apaixonada por criar experiências digitais incríveis.",
};

export const Default: Story = {
  args: {
    data: mockProfile,
  },
};

export const Empty: Story = {
  args: {
    data: undefined,
  },
};

export const LongBio: Story = {
  args: {
    data: {
      ...mockProfile,
      bio: "Desenvolvedor Full Stack apaixonado por Vue.js, TypeScript e desenvolvimento de aplicações web modernas. Sempre em busca de aprender novas tecnologias e compartilhar conhecimento com a comunidade. Trabalho com desenvolvimento há mais de 5 anos e tenho experiência em diversas tecnologias.",
    },
  },
};

export const CompleteProfile: Story = {
  args: {
    data: mockProfileComplete,
  },
};

export const VerifiedAccount: Story = {
  args: {
    data: {
      ...mockProfileComplete,
      name: "Carlos Oliveira (Verificado)",
    },
  },
};

export const NewUser: Story = {
  args: {
    data: {
      id: 2,
      name: "Novo Usuário",
      email: "novo@example.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=NewUser",
      bio: "",
    },
  },
};
