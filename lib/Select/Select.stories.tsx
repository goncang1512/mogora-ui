import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  argTypes: {
    name: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => (
    <Select {...args} onChange={action("onChange")}>
      <Select.Trigger className="px-4 py-2 bg-gray-200 rounded-md cursor-pointer">
        Pilih Opsi
      </Select.Trigger>
      <Select.Content className="border bg-white p-2 rounded-md shadow-lg">
        <Select.Item value="option1">Opsi 1</Select.Item>
        <Select.Item value="option2">Opsi 2</Select.Item>
        <Select.Item value="option3">Opsi 3</Select.Item>
      </Select.Content>
    </Select>
  ),
};
