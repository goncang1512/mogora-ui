import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  argTypes: {
    children: { control: "text" },
    htmlFor: { control: "text" },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "Default Label",
  },
};

export const WithHtmlFor: Story = {
  args: {
    children: "Label for Input",
    htmlFor: "input-id",
  },
};

export const CustomClassName: Story = {
  args: {
    children: "Styled Label",
    className: "text-red-500",
  },
};
