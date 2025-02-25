import React, {
  ReactNode,
  HTMLAttributes,
  LiHTMLAttributes,
  Dispatch,
  SetStateAction,
  RefObject,
} from "react";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "../Button/variants";

interface SelectProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type SelectComponent = React.FC<SelectProps> & {
  Trigger: React.FC<TriggerProps>;
  Content: React.FC<ContentProps>;
  Item: React.FC<ItemProps>;
};

interface SelectType {
  seeOption: boolean;
  setSeeOption: Dispatch<SetStateAction<boolean>>;
  valueOnChange: string;
  setOnChange: Dispatch<SetStateAction<string>>;
  buttonTrigger: RefObject<HTMLDivElement | null>;
  handleChange: (newValue: string) => void;
  options: ReactNode;
  setOptions: Dispatch<SetStateAction<ReactNode>>;
}

interface TriggerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

interface ItemProps extends LiHTMLAttributes<HTMLLIElement> {
  children: string;
  value: string;
}

interface ContentProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
}

export type {
  ContentProps,
  ItemProps,
  TriggerProps,
  SelectType,
  SelectProps,
  SelectComponent,
};
