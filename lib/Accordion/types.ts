import React, { Dispatch, HTMLAttributes, SetStateAction } from "react";
import { ReactNode } from "react";

type AccordionComponent = React.FC<AccordionProps> & {
  Trigger: React.FC<TriggerProps>;
  Content: React.FC<ContentProps>;
  Item: React.FC<ItemProps>;
};

interface AccordionProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

interface TriggerProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  value: number | string;
}

interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface AccordionType {
  valueItem: number | string | null;
  setValueItem: Dispatch<SetStateAction<number | string | null>>;
}

export type {
  TriggerProps,
  AccordionComponent,
  AccordionProps,
  ItemProps,
  ContentProps,
  AccordionType,
};
