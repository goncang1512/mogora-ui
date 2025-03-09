import { Meta, StoryFn } from "@storybook/react";
import { Modal } from "./Modal";
import { Button } from "../Button/Button";

export default {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Modal {...args}>
    <Modal.Trigger>
      <Button variant="clicki">Open Modal</Button>
    </Modal.Trigger>
    <Modal.Content className="p-6">
      <h2 className="text-lg font-bold">Modal Title</h2>
      <p className="mt-2">This is a simple modal example.</p>
    </Modal.Content>
  </Modal>
);

export const Default = Template.bind({});
Default.args = {
  className: "custom-modal",
};
