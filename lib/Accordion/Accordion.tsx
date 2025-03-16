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

export const Accordion: AccordionComponent = ({
  children,
  className,
  ...props
}): ReactNode => {
  const [valueItem, setValueItem] = useState<number | string | null>(null);

  return (
    <AccordionContext.Provider value={{ valueItem, setValueItem }}>
      <div className={cn("w-full flex flex-col", className)} {...props}>
        {children}
      </div>
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
        "overflow-hidden dark:text-slate-200 transition-all duration-300 ease-in-out transform",
        "data-[open=true]:max-h-96 data-[open=true]:opacity-100 data-[open=true]:py-2 data-[open=true]:translate-y-0",
        "data-[open=false]:max-h-0 data-[open=false]:opacity-0 data-[open=false]:py-0 data-[open=false]:translate-y-2",
        className
      )}
      style={{
        transitionDelay: valueItem === value ? `30ms` : "0ms",
      }}
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
  const { valueItem } = useContext(AccordionContext);

  return (
    <div
      data-value={value}
      data-open={valueItem === value}
      className={cn(
        "border-b border-gray-400 pt-3 pb-3 data-[open=true]:pb-1",
        className
      )}
      {...props}
    >
      {children
        ? React.Children.map(children, (child, index) => {
            if (!React.isValidElement(child)) return child;
            return React.cloneElement(child, {
              value,
              style: { transitionDelay: `${index * 30}ms` },
            } as Partial<ItemProps>);
          })
        : null}
    </div>
  );
};

Accordion.Trigger = Trigger;
Accordion.Content = Content;
Accordion.Item = Item;
