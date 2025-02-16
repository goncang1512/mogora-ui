import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Popover } from "../Popover/Popover";
import { EllipsisVertical } from "lucide-react";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const CardComponent: Story = {
  render: () => (
    <Card>
      <Card.Picture src="https://i.pinimg.com/236x/e1/d4/5f/e1d45f41d5ad877ec39d3f3b728ab45e.jpg" />
      <Card.Content>
        <div className="flex justify-between items-center">
          <Card.Title>Biggest enterprise</Card.Title>
          <Popover>
            <Popover.Trigger>
              <button className="hover:bg-gray-300 p-1 rounded-md">
                <EllipsisVertical size={20} />
              </button>
            </Popover.Trigger>
            <Popover.Content className="w-32">
              <button className="hover:bg-gray-200 rounded-md w-full py-1">
                Edit
              </button>
              <button className="hover:bg-gray-200 rounded-md w-full py-1">
                Delete
              </button>
              <button className="hover:bg-gray-200 rounded-md w-full py-1">
                Report
              </button>
            </Popover.Content>
          </Popover>
        </div>
        <Card.Description>
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </Card.Description>
      </Card.Content>
    </Card>
  ),
};
