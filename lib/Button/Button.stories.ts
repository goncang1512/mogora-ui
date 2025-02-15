import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["danger", "primary", "clicked"], // Sesuaikan dengan varian yang ada di `buttonVariants`
    },
    size: {
      control: { type: "select" },
      options: ["small", "normall", "large"], // Sesuaikan dengan ukuran yang ada di `buttonVariants`
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Click Me",
    variant: "danger",
    size: "normal",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
    size: "normal",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    variant: "primary",
    size: "large",
  },
};

export const Clicked: Story = {
  args: {
    children: "Clicked",
    variant: "clicki",
    size: "normal",
  },
};
