import type { Meta, StoryObj } from "@storybook/vue3";
import PrivacidadeSettings from "./PrivacidadeSettings.vue";

const meta = {
  title: "Components/Settings/PrivacidadeSettings",
  component: PrivacidadeSettings,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof PrivacidadeSettings>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const AllEnabled: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Todas as opções de privacidade habilitadas",
      },
    },
  },
};

export const AllDisabled: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Todas as opções de privacidade desabilitadas",
      },
    },
  },
};
