import React, {
  ButtonHTMLAttributes,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { cn } from "../utils/utils";

interface ToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?(pressed: boolean): void;
}

export const Toggle: React.FC<ToggleProps> = ({
  children,
  className,
  pressed,
  defaultPressed,
  onPressedChange,
  ...props
}): ReactNode => {
  const [onPressed, setOnPressed] = useState(defaultPressed);

  useEffect(() => {
    setOnPressed(defaultPressed);
  }, [defaultPressed]);

  const isControlled = pressed !== undefined;
  const isPressed = isControlled ? pressed : onPressed;

  const handleClick = () => {
    const newPressed = !isPressed;

    if (onPressedChange) {
      onPressedChange(newPressed);
    }

    if (!isControlled) {
      setOnPressed(newPressed);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-500 data-[state=true]:bg-slate-200 dark:data-[state=true]:bg-slate-500 p-2 size-8 rounded-md flex items-center justify-center active:text-slate-100 duration-100 dark:text-slate-300",
        className
      )}
      aria-pressed={isPressed}
      data-state={isPressed ? "true" : "false"}
      {...props}
    >
      {children}
    </button>
  );
};
