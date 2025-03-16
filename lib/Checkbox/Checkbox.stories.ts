import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "success", "danger", "warning", "accent", "info"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Component: Story = {
  args: {
    variant: "primary",
    size: "md",
  },
};
