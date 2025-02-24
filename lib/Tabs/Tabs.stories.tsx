import { Meta, StoryFn } from "@storybook/react";
import { Tabs } from "./Tabs";

export default {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    pressed: { control: "boolean" },
    defaultPressed: { control: "boolean" },
    onPressedChange: { action: "pressedChanged" },
  },
} as Meta<typeof Tabs>;

const Template: StoryFn<typeof Tabs> = (args) => {
  return (
    <Tabs {...args} defaultValue="promo" variant={"default"}>
      <Tabs.List className="">
        <Tabs.Trigger value="promo">Promo</Tabs.Trigger>
        <Tabs.Trigger value="goncang">Goncang</Tabs.Trigger>
        <Tabs.Trigger value="samudera">samudera</Tabs.Trigger>
      </Tabs.List>
      <div className="border-2 rounded-md p-2 mt-2">
        <Tabs.Content value="promo">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
            enim.
          </p>
        </Tabs.Content>
        <Tabs.Content value="goncang">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
            dolorum nesciunt accusantium, nobis voluptatem doloribus.
          </p>
        </Tabs.Content>
        <Tabs.Content value="samudera">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
            eius omnis laborum repellendus alias enim. At.
          </p>
        </Tabs.Content>
      </div>
    </Tabs>
  );
};

export const Default = Template.bind({});
