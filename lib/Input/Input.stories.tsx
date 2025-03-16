import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { Label } from "../Label/Label";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["bordered", "underline"], // Sesuaikan dengan varian yang ada di `inputVariants`
    },
    size: {
      control: { type: "select" },
      options: ["small", "normall", "large"], // Sesuaikan dengan ukuran yang ada di `inputVariants`
    },
    theme: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "danger",
        "success",
        "info",
        "warning",
        "accent",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Default",
    variant: "bordered",
    size: "normal",
    theme: "primary",
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

const Template: StoryFn = (args) => {
  return (
    <div className="relative flex flex-col gap-2 w-sm">
      <Input
        theme={"primary"}
        id="username"
        name="username"
        variant={args.variant}
        placeholder=" "
        className="peer"
      />
      <Label htmlFor="username" className={args.classFloat}>
        Username
      </Label>
    </div>
  );
};

export const FloatDefault = Template.bind({});
FloatDefault.args = {
  variant: "default",
  classFloat: "float-[default]",
};

export const FloatUnderline = Template.bind({});
FloatUnderline.args = {
  variant: "underline",
  classFloat: "float-[underline]",
};
