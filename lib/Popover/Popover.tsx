import React, {
  createContext,
  ReactNode,
  useContext,
  useRef,
  useState,
} from "react";
import { cn } from "../utils/utils";
import { useClickOutside } from "../utils/clickoutside";
import { useDropdownPosition } from "../utils/useDropdownPosition";
import {
  PopoverComponent,
  PopoverType,
  TriggerProps,
  ContentProps,
} from "./types";

const PopoverContext = createContext<PopoverType>({} as PopoverType);

export const Popover: PopoverComponent = ({
  children,
  className,
  ...props
}) => {
  const [seeContent, setSeeContent] = useState(false);
  const buttonTrigger = useRef<HTMLDivElement | null>(null);

  return (
    <PopoverContext.Provider
      value={{
        seeContent,
        setSeeContent,
        buttonTrigger,
        classPopover: className,
        propPopover: props,
      }}
    >
      <div className={cn("relative inline-flex", className)} {...props}>
        {children}
      </div>
    </PopoverContext.Provider>
  );
};

const Trigger: React.FC<TriggerProps> = ({
  children,
  className,
  asChild,
  ...props
}): ReactNode => {
  const { seeContent, setSeeContent, buttonTrigger } =
    useContext(PopoverContext);

  return (
    <div
      ref={buttonTrigger}
      onClick={() => setSeeContent(!seeContent)}
      className={cn("cursor-pointer", className)}
      {...props}
    >
      {children}
    </div>
  );
};

const Content: React.FC<ContentProps> = ({
  children,
  className,
  align = "left",
  ...props
}): ReactNode => {
  const { seeContent, setSeeContent, buttonTrigger } =
    useContext(PopoverContext);
  const divRef = useRef<HTMLDivElement>(null);
  useClickOutside([divRef, buttonTrigger], () => setSeeContent(false));
  const { position } = useDropdownPosition(divRef, seeContent, align);
  const { position: alignPosition } = useDropdownPosition(
    divRef,
    seeContent,
    "bottom"
  );

  if (seeContent) {
    return (
      <div
        ref={divRef}
        className={cn(
          "z-30 overflow-visible border border-gray-200 w-xs p-2 rounded-md absolute bg-white dark:bg-slate-900 text-black dark:text-slate-200",
          position === "left" ? "right-[70%]" : "",
          position === "right" ? "left-[70%]" : "",
          alignPosition === "top" ? "bottom-full" : "",
          alignPosition === "bottom" ? "top-full" : "",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
};

Popover.Trigger = Trigger;
Popover.Content = Content;
