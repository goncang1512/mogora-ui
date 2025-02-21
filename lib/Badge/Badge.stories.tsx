import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["default", "secondary", "destructive", "outline"],
    },
    className: {
      control: "text",
    },
    children: {
      control: "text",
      defaultValue: "Badge Text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Default Badge",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Badge",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive Badge",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Badge",
  },
};
