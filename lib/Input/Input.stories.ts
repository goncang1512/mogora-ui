import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    variant: {
      control: false,
      options: ["default", "underline"], // Sesuaikan dengan varian yang ada di `inputVariants`
    },
    size: {
      control: { type: "select" },
      options: ["small", "normall", "large"], // Sesuaikan dengan ukuran yang ada di `inputVariants`
    },
    theme: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger", "success", "info"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Default",
    variant: "default",
    size: "normal",
    theme: "danger",
  },
};

export const Underline: Story = {
  args: {
    placeholder: "Underline",
    variant: "underline",
    size: "small",
    theme: "success",
  },
};
