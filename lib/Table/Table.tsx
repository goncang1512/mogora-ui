import React, { createContext, useContext } from "react";
import {
  BodyProps,
  HeaderProps,
  RowProps,
  TableCellProps,
  TableComponent,
  TableHeaderProps,
  TableType,
} from "./types";
import { cn } from "../utils/utils";
import {
  bodyVariant,
  cellVariants,
  headerCellVariant,
  headerVariant,
  rowVariants,
  tableVariants,
} from "./Table.variants";

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
        className={cn(
          tableVariants({ variant, size, className }),
          "overflow-hidden"
        )}
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
  const { variant, size } = useContext(TableContext);

  return (
    <th
      className={cn(headerCellVariant({ variant, size, className }))}
      {...props}
    >
      {children}
    </th>
  );
};

const Cell: React.FC<TableCellProps> = ({ children, className, ...props }) => {
  const { variant, size } = useContext(TableContext);
  return (
    <td className={cn(cellVariants({ variant, size, className }))} {...props}>
      {children}
    </td>
  );
};

const Body: React.FC<BodyProps> = ({ children, className, ...props }) => {
  const { variant, size } = useContext(TableContext);

  return (
    <tbody className={cn(bodyVariant({ variant, size, className }))} {...props}>
      {children}
    </tbody>
  );
};

const Header: React.FC<HeaderProps> = ({ children, className, ...props }) => {
  const { variant, size } = useContext(TableContext);

  return (
    <thead
      className={cn(
        headerVariant({ variant, size, className }),
        "overflow-hidden"
      )}
      {...props}
    >
      {children}
    </thead>
  );
};

Table.Header = Header;
Table.HeaderCell = HeaderCell;
Table.Cell = Cell;
Table.Row = Row;
Table.Body = Body;
