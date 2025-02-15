import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Toggle } from "./Toggle";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {
    pressed: { control: "boolean" },
    defaultPressed: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: (args) => (
    <Toggle {...args} onPressedChange={action("onPressedChange")}>
      🔥
    </Toggle>
  ),
};

export const WithDefaultPressed: Story = {
  render: (args) => (
    <Toggle
      {...args}
      defaultPressed
      onPressedChange={action("onPressedChange")}
    >
      🌟
    </Toggle>
  ),
};

export const Controlled: Story = {
  args: {
    pressed: true,
  },
  render: (args) => (
    <Toggle {...args} onPressedChange={action("onPressedChange")}>
      🎯
    </Toggle>
  ),
};
