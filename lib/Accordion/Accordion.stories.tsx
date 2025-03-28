import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion>
      <Accordion.Item value="item1">
        <Accordion.Trigger>Section 1</Accordion.Trigger>
        <Accordion.Content className="hover:bg-gray-100 px-2 rounded-md">
          <p>Content for section 1</p>
        </Accordion.Content>
        <Accordion.Content className="hover:bg-gray-100 px-2 rounded-md">
          <p>Content for section 1</p>
        </Accordion.Content>
        <Accordion.Content className="hover:bg-gray-100 px-2 rounded-md">
          <p>Content for section 1</p>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item2">
        <Accordion.Trigger>Section 2</Accordion.Trigger>
        <Accordion.Content>
          <p>Content for section 2</p>
        </Accordion.Content>
        <Accordion.Content>
          <p>Content for section 2</p>
        </Accordion.Content>
        <Accordion.Content>
          <p>Content for section 2</p>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item3">
        <Accordion.Trigger>Section 3</Accordion.Trigger>
        <Accordion.Content>
          <p>Content for section 2</p>
        </Accordion.Content>
        <Accordion.Content>
          <p>Content for section 2</p>
        </Accordion.Content>
        <Accordion.Content>
          <p>Content for section 2</p>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item4">
        <Accordion.Trigger>Section 4</Accordion.Trigger>
        <Accordion.Content>
          <p>Content for section 2</p>
        </Accordion.Content>
        <Accordion.Content>
          <p>Content for section 2</p>
        </Accordion.Content>
        <Accordion.Content>
          <p>Content for section 2</p>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};
