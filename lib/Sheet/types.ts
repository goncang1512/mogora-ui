import React, { HTMLAttributes, ReactNode } from "react";

interface SheetType {
  onShow: boolean;
  setOnShow: (value: boolean | ((prev: boolean) => boolean)) => void;
  className?: string;
  sheetProps?: React.HTMLAttributes<HTMLDivElement>;
}

type SheetComponent = React.FC<SheetProps> & {
  Trigger: React.FC<TriggerProps>;
  Content: React.FC<ContentProps>;
};

interface SheetProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface TriggerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

type PositionContent = "left" | "right";

interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  position?: PositionContent;
}

export type {
  SheetComponent,
  SheetProps,
  TriggerProps,
  ContentProps,
  SheetType,
  PositionContent,
};
