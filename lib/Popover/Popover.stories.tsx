import { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover";
import { Button } from "../Button/Button";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger>
        <Button>Click Me</Button>
      </Popover.Trigger>
      <Popover.Content>
        <div className="p-4">This is a Popover Content</div>
      </Popover.Content>
    </Popover>
  ),
};

export const WithCustomAlignment: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger>
        <Button>Click Me</Button>
      </Popover.Trigger>
      <Popover.Content align="right">
        <div className="p-4">Aligned to the right</div>
      </Popover.Content>
    </Popover>
  ),
};
