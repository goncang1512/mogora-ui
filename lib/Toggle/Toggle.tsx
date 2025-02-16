import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/utils";
import useOpenChange from "../utils/openState";

interface ToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (open: boolean) => void;
}

export const Toggle: React.FC<ToggleProps> = ({
  children,
  className,
  pressed,
  defaultPressed,
  onPressedChange,
  ...props
}): ReactNode => {
  const { isOpen, toggleOpen } = useOpenChange(
    pressed,
    onPressedChange,
    defaultPressed
  );

  return (
    <button
      onClick={() => toggleOpen(!isOpen)}
      className={cn(
        "cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-500 data-[state=true]:bg-slate-200 dark:data-[state=true]:bg-slate-500 p-2 size-8 rounded-md flex items-center justify-center active:text-slate-100 duration-100 dark:text-slate-300",
        className
      )}
      aria-pressed={isOpen}
      data-state={isOpen ? "true" : "false"}
      {...props}
    >
      {children}
    </button>
  );
};

export type { ToggleProps };
