import { Meta, StoryFn } from "@storybook/react";
import { Drawer } from "./Drawer";
import { Button } from "../Button/Button";

export default {
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Drawer {...args}>
    <Drawer.Trigger>
      <Button variant="clicki">Open Drawer</Button>
    </Drawer.Trigger>
    <Drawer.Content className="bg-white rounded-t-lg shadow-lg">
      <h2 className="text-lg font-bold">Drawer Title</h2>
      <p className="mt-2">This is a simple Drawer example.</p>
    </Drawer.Content>
  </Drawer>
);

export const Default = Template.bind({});
Default.args = {
  className: "custom-Drawer",
};
