import React, { createContext, ReactNode, useContext, useState } from "react";
import {
  TriggerProps,
  AccordionComponent,
  ItemProps,
  ContentProps,
  AccordionType,
} from "./types";
import { cn } from "../utils/utils";
import { ChevronDown } from "lucide-react";

const AccordionContext = createContext<AccordionType>({} as AccordionType);

export const Accordion: AccordionComponent = ({ children }): ReactNode => {
  const [valueItem, setValueItem] = useState<number | string | null>(null);

  return (
    <AccordionContext.Provider value={{ valueItem, setValueItem }}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
};

const Trigger: React.FC<TriggerProps> = ({
  children,
  className,
  ...props
}): ReactNode => {
  const { valueItem, setValueItem } = useContext(AccordionContext);
  const { value } = props as { value: string | number };

  return (
    <button
      className={cn(
        "w-full dark:text-slate-300 flex justify-between cursor-pointer hover:underline px-1",
        className
      )}
      onClick={() => setValueItem(valueItem === value ? null : value)}
      {...props}
    >
      {children}
      <ChevronDown
        data-open={valueItem === value}
        size={20}
        className={`data-[open=true]:rotate-[180deg] duration-150 text-gray-600 dark:text-gray-400`}
      />
    </button>
  );
};

const Content: React.FC<ContentProps> = ({ children, className, ...props }) => {
  const { valueItem } = useContext(AccordionContext);
  const { value } = props as { value: string | number };

  return (
    <div
      data-open={valueItem === value}
      className={cn(
        "overflow-hidden dark:text-slate-200 transition-all duration-200 ease-in-out",
        "data-[open=true]:max-h-96 data-[open=true]:opacity-100 data-[open=true]:py-2 data-[open=false]:max-h-0 data-[open=false]:opacity-0 data-[open=false]:py-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const Item: React.FC<ItemProps> = ({
  children,
  className,
  value,
  ...props
}): ReactNode => {
  return (
    <div
      className={cn("border-b border-gray-400 py-3", className)}
      {...props}
      data-value={value}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(
          child as React.ReactElement,
          { value } as Partial<ItemProps>
        )
      )}
    </div>
  );
};

Accordion.Trigger = Trigger;
Accordion.Content = Content;
Accordion.Item = Item;
