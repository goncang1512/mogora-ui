import { Dispatch, HTMLAttributes, ReactNode, SetStateAction } from "react";

interface DrawerType {
  open: boolean;
  setOpenChange: Dispatch<SetStateAction<boolean>>;
  drawerProps?: HTMLAttributes<HTMLDivElement>;
  classDrawer?: string;
}

type DrawerComponent = React.FC<DrawerProps> & {
  Trigger: React.FC<TriggerProps>;
  Content: React.FC<ContentProps>;
};

interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface TriggerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export type { DrawerType, DrawerComponent, TriggerProps, ContentProps };
