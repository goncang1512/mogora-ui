import React, { createContext, useContext } from "react";
import {
  BodyProps,
  RowProps,
  TableCellProps,
  TableComponent,
  TableHeaderProps,
  TableType,
} from "./types";
import { cn } from "../utils/utils";
import { rowVariants, tableVariants } from "./Table.variants";

const TableContext = createContext<TableType>({} as TableType);

export const Table: TableComponent = ({
  children,
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <TableContext.Provider value={{ variant, size }}>
      <table
        className={cn(tableVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </table>
    </TableContext.Provider>
  );
};

const Row: React.FC<RowProps> = ({ children, className, ...props }) => {
  const { variant, size } = useContext(TableContext);
  return (
    <tr className={cn(rowVariants({ variant, size, className }))} {...props}>
      {children}
    </tr>
  );
};

const HeaderCell: React.FC<TableHeaderProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <th
      className={cn("font-medium text-start px-2 py-2", className)}
      {...props}
    >
      {children}
    </th>
  );
};

const Cell: React.FC<TableCellProps> = ({ children, className, ...props }) => {
  return (
    <td className={cn("text-start py-2 px-2 ", className)} {...props}>
      {children}
    </td>
  );
};

const Body: React.FC<BodyProps> = ({ children }) => {
  return <>{children}</>;
};

const Header: React.FC<BodyProps> = ({ children }) => {
  return <>{children}</>;
};

Table.Header = Header;
Table.HeaderCell = HeaderCell;
Table.Cell = Cell;
Table.Row = Row;
Table.Body = Body;
