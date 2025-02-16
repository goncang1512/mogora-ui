import { Meta, StoryFn } from "@storybook/react";
import { Sheet } from "./Sheet";
import { Button } from "../Button/Button";

export default {
  title: "Components/Sheet",
  component: Sheet,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Sheet {...args}>
    <Sheet.Trigger>
      <Button variant="clicki">Open Sheet</Button>
    </Sheet.Trigger>
    <Sheet.Content position="right">
      <h2 className="text-lg font-bold">Sheet Title</h2>
      <p className="mt-2">This is a simple Sheet example.</p>
    </Sheet.Content>
  </Sheet>
);

export const Default = Template.bind({});
Default.args = {
  className: "custom-sheet",
};
