import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Toggle } from "./Toggle";
import { EllipsisVertical } from "lucide-react";

export default {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {
    pressed: { control: "boolean" },
    defaultPressed: { control: "boolean" },
    onPressedChange: { action: "pressedChanged" },
  },
} as Meta<typeof Toggle>;

const Template: StoryFn<typeof Toggle> = (args) => {
  const [pressed, setPressed] = useState(args.defaultPressed || false);

  return (
    <Toggle
      {...args}
      pressed={pressed}
      onPressedChange={(state) => {
        setPressed(state);
        args.onPressedChange && args.onPressedChange(state);
      }}
    >
      <EllipsisVertical />
    </Toggle>
  );
};

export const Default = Template.bind({});
Default.args = {
  defaultPressed: false,
};

export const Pressed = Template.bind({});
Pressed.args = {
  defaultPressed: true,
};
