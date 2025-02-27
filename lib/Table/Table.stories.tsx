import type { Meta, StoryFn } from "@storybook/react";
import { Table } from "./Table"; // Pastikan path sesuai dengan lokasi file Table.tsx

export default {
  title: "Components/Table",
  component: Table,
} as Meta<typeof Table>;

const Template: StoryFn<typeof Table> = (args) => {
  return (
    <Table {...args}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Nama</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>HP</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>goncang</Table.Cell>
          <Table.Cell>goncang@gmail.com</Table.Cell>
          <Table.Cell>081357579420</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>samudera</Table.Cell>
          <Table.Cell>samudera@gmail.com</Table.Cell>
          <Table.Cell>081357579420</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>nasution</Table.Cell>
          <Table.Cell>nasution@gmail.com</Table.Cell>
          <Table.Cell>081357579420</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export const Zebra = Template.bind({});
Zebra.args = {
  variant: "zebra",
};

export const Default = Template.bind({});
Default.args = {
  variant: "default",
};

export const Box = Template.bind({});
Box.args = {
  variant: "bordered",
};
