import React, { HTMLAttributes, ReactNode } from "react";

interface ModalType {
  onShow: boolean;
  setOnShow: (value: boolean | ((prev: boolean) => boolean)) => void;
  className?: string;
  modalProps?: React.HTMLAttributes<HTMLDivElement>;
}

type ModalComponent = React.FC<ModalProps> & {
  Trigger: React.FC<TriggerProps>;
  Content: React.FC<ContentProps>;
};

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface TriggerProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export type {
  ModalComponent,
  ModalProps,
  TriggerProps,
  ContentProps,
  ModalType,
};
