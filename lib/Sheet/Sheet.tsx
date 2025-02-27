import React, { createContext, useContext } from "react";
import { ContentProps, SheetComponent, TriggerProps, SheetType } from "./types";
import useOpenChange from "../utils/openState";
import { cn } from "../utils/utils";

const SheetContext = createContext<SheetType>({} as SheetType);

export const Sheet: SheetComponent = ({
  children,
  open,
  onOpenChange,
  className,
  ...props
}) => {
  const { isOpen, toggleOpen } = useOpenChange(open, onOpenChange);
  return (
    <SheetContext.Provider
      value={{
        onShow: isOpen,
        setOnShow: toggleOpen,
        sheetProps: props,
        className,
      }}
    >
      {children}
    </SheetContext.Provider>
  );
};

const Trigger: React.FC<TriggerProps> = ({ children, className, ...props }) => {
  const { onShow, setOnShow } = useContext(SheetContext);

  return (
    <div
      className={cn("inline-flex", className)}
      onClick={() => setOnShow(!onShow)}
      {...props}
    >
      {children}
    </div>
  );
};

const Content: React.FC<ContentProps> = ({
  children,
  className,
  position = "left",
  ...props
}) => {
  const {
    onShow,
    setOnShow,
    className: classSheet,
    sheetProps,
  } = useContext(SheetContext);

  return (
    <div
      data-state={onShow ? "open" : "closed"}
      className={cn(
        "fixed inset-0 flex items-center justify-center bg-black/80 transition-opacity w-screen ease-linear duration-100 z-[9999]",
        "data-[state=open]:opacity-100 data-[state=open]:pointer-events-auto data-[state=closed]:pointer-events-none data-[state=closed]:opacity-0",
        classSheet
      )}
      onClick={() => setOnShow(false)}
      {...sheetProps}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        data-state={onShow ? "open" : "closed"}
        className={cn(
          "absolute z-50 max-w-sm h-screen bg-white p-6 shadow-lg transition-transform data-[state=closed]:duration-300 data-[state=open]:duration-500",
          position === "left" &&
            "left-0 data-[state=open]:translate-x-0 data-[state=closed]:-translate-x-full",
          position === "right" &&
            "right-0 data-[state=open]:-translate-x-0 data-[state=closed]:translate-x-full",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

Sheet.Trigger = Trigger;
Sheet.Content = Content;
