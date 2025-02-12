import React, {
  createContext,
  Dispatch,
  HTMLAttributes,
  ReactNode,
  RefObject,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from "react";
import { cn } from "../utils/utils";
import { useClickOutside } from "../utils/clickoutside";
import { useDropdownPosition } from "../utils/useDropdownPosition";

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

const PopoverContext = createContext<PopoverType>({} as PopoverType);

export const Popover: PopoverComponent = ({ children, ...props }) => {
  const [seeContent, setSeeContent] = useState(false);
  const buttonTrigger = useRef<HTMLDivElement | null>(null);

  return (
    <PopoverContext.Provider
      value={{
        seeContent,
        setSeeContent,
        buttonTrigger,
      }}
    >
      <span className={cn("relative bg-green-500")} {...props}>
        {children}
      </span>
    </PopoverContext.Provider>
  );
};

interface TriggerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  asChild?: boolean;
}

const Trigger: React.FC<TriggerProps> = ({
  children,
  className,
  asChild,
  ...props
}): ReactNode => {
  const { seeContent, setSeeContent, buttonTrigger } =
    useContext(PopoverContext);

  return (
    <span
      ref={buttonTrigger}
      onClick={() => setSeeContent(!seeContent)}
      className={cn("cursor-pointer", className)}
      {...props}
    >
      {children}
    </span>
  );
};

interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  align?: "left" | "right";
}

const Content: React.FC<ContentProps> = ({
  children,
  className,
  align = "right",
  ...props
}): ReactNode => {
  const { seeContent, setSeeContent, buttonTrigger } =
    useContext(PopoverContext);
  const divRef = useRef<HTMLDivElement>(null);
  useClickOutside([divRef, buttonTrigger], () => setSeeContent(false));
  const { position } = useDropdownPosition(divRef, seeContent, align);

  if (seeContent) {
    return (
      <div
        ref={divRef}
        className={cn(
          "z-30 min-w-full border top-1 p-2 rounded-md absolute bg-white dark:bg-slate-900 text-black dark:text-slate-200",
          position === "left" ? "right-[97%]" : "",
          position === "right" ? "left-[97%]" : "",
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
