import type { Meta, StoryObj } from "@storybook/vue3";
import SettingsMenu from "./SettingsMenu.vue";

const meta = {
  title: "Components/SettingsMenu",
  component: SettingsMenu,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SettingsMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const ActiveItem: Story = {
  args: {},
};
