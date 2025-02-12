import React, {
  Dispatch,
  HTMLAttributes,
  ReactNode,
  RefObject,
  SetStateAction,
} from "react";

interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

type PopoverComponent = React.FC<PopoverProps> & {
  Trigger: React.FC<TriggerProps>;
  Content: React.FC<ContentProps>;
};

type PopoverType = {
  seeContent: boolean;
  setSeeContent: Dispatch<SetStateAction<boolean>>;
  buttonTrigger: RefObject<HTMLDivElement | null>;
};

interface TriggerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  asChild?: boolean;
}

interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  align?: "left" | "right";
}

export type {
  PopoverComponent,
  PopoverProps,
  PopoverType,
  TriggerProps,
  ContentProps,
};
