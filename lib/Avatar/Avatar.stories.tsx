import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar"; // Pastikan path sesuai dengan lokasi file Avatar.tsx

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <Avatar.Image src="https://github.com/shadcn.png" alt="CN" />
      <Avatar.Fallback>CN</Avatar.Fallback>
    </Avatar>
  ),
};

export const Loading: Story = {
  render: () => (
    <Avatar>
      <Avatar.Image src="" alt="CN" />
      <Avatar.Fallback>CN</Avatar.Fallback>
    </Avatar>
  ),
};

export const Error: Story = {
  render: () => (
    <Avatar>
      {/* Simulasi error dengan URL yang salah */}
      <Avatar.Image src="https://invalid-url.com/avatar.png" alt="ER" />
      <Avatar.Fallback>ER</Avatar.Fallback>
    </Avatar>
  ),
};
