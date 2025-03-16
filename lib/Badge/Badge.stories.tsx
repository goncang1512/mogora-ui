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
      options: ["primary", "secondary", "outline", "ghost"],
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
    variant: "primary",
    children: "Default Badge",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Badge",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Badge",
  },
};
