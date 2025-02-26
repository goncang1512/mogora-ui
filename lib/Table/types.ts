import { VariantProps } from "class-variance-authority";
import React, {
  HTMLAttributes,
  ReactNode,
  TableHTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from "react";
import { tableVariants, rowVariants } from "./Table.variants";

interface TableType {
  variant:
    | VariantProps<typeof tableVariants>["variant"]
    | VariantProps<typeof rowVariants>["variant"];
  size:
    | VariantProps<typeof tableVariants>["size"]
    | VariantProps<typeof rowVariants>["size"];
}

type TableComponent = React.FC<TableProps> & {
  Header: React.FC<HeaderProps>;
  HeaderCell: React.FC<TableHeaderProps>;
  Cell: React.FC<TableCellProps>;
  Row: React.FC<RowProps>;
  Body: React.FC<BodyProps>;
};

interface TableProps
  extends Omit<TableHTMLAttributes<HTMLTableElement>, "size">,
    VariantProps<typeof tableVariants> {
  children: ReactNode;
}

interface RowProps
  extends VariantProps<typeof rowVariants>,
    HTMLAttributes<HTMLTableRowElement> {}

interface TableHeaderProps extends ThHTMLAttributes<HTMLTableCellElement> {}

interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {}

interface BodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}

interface HeaderProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}

export type {
  TableComponent,
  TableProps,
  TableType,
  HeaderProps,
  RowProps,
  TableHeaderProps,
  TableCellProps,
  BodyProps,
};
