import { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover";
import { Button } from "../Button/Button";
import { Avatar } from "../Avatar/Avatar";
import { EllipsisVertical } from "lucide-react";
import { Modal } from "mogora-ui";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-between gap-3 border border-gray-300 rounded-md p-3">
      <div className="fixed top-0 w-full bg-red-500 z-50">judul</div>
      <div className="flex items-center gap-3">
        <Avatar>
          <Avatar.Image
            className="border border-gray-300"
            src={"https://avatars.githubusercontent.com/u/132435801?v=4"}
          />
          <Avatar.Fallback>AV</Avatar.Fallback>
        </Avatar>
        <div className="flex flex-col leading-3">
          <h1 className="font-medium">mhd_goncang</h1>
          <p className="text-sm text-gray-500">goncang15@gmail.com</p>
        </div>
      </div>
      <Popover>
        <Popover.Trigger>
          <Button className="px-2 bg-transparent text-black hover:bg-gray-200">
            <EllipsisVertical />
          </Button>
        </Popover.Trigger>
        <Popover.Content align="left" className="w-44">
          <div className="w-full">
            <button className="hover:bg-gray-200 w-full p-1 rounded-md">
              Edit Username
            </button>
            <button className="hover:bg-gray-200 w-full p-1 rounded-md">
              Edit Email
            </button>
            <Modal>
              <Modal.Trigger>button</Modal.Trigger>
              <Modal.Content>
                <div>
                  <h1>Goncang</h1>
                </div>
              </Modal.Content>
            </Modal>
          </div>
        </Popover.Content>
      </Popover>
    </div>
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
