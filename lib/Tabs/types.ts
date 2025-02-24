import { VariantProps } from "class-variance-authority";
import React, {
  ButtonHTMLAttributes,
  Dispatch,
  HTMLAttributes,
  ReactNode,
  SetStateAction,
} from "react";
import { tabsVarianst, triggerVarianst } from "./variants";

interface TabsType {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
  variant:
    | VariantProps<typeof tabsVarianst>["variant"]
    | VariantProps<typeof triggerVarianst>["variant"];
  size:
    | VariantProps<typeof tabsVarianst>["size"]
    | VariantProps<typeof triggerVarianst>["size"];
}

type TabsComponent = React.FC<TabsProps> & {
  List: React.FC<ListProps>;
  Trigger: React.FC<TriggerProps>;
  Content: React.FC<ContentProps>;
};

interface TabsProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabsVarianst> {
  children: ReactNode;
  defaultValue: string;
}

interface ListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface TriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  value: string;
}

interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  value: string;
}

export type {
  TabsProps,
  TabsComponent,
  TabsType,
  ListProps,
  TriggerProps,
  ContentProps,
};
