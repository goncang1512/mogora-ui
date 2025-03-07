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
    <Drawer.Content>
      <div className="h-full flex flex-col items-center pt-5 md:w-md w-full">
        <h2 className="text-lg font-bold">Drawer Title</h2>
        <p className="mt-2">This is a simple Drawer example.</p>
      </div>
    </Drawer.Content>
  </Drawer>
);

export const Default = Template.bind({});
