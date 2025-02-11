import React, {
  createContext,
  Dispatch,
  HTMLAttributes,
  ReactNode,
  RefObject,
  SetStateAction,
  useContext,
  useLayoutEffect,
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

type sizeComponent = { width: number | string; height: number | string };

type PopoverType = {
  seeContent: boolean;
  setSeeContent: Dispatch<SetStateAction<boolean>>;
  buttonTrigger: RefObject<HTMLDivElement | null>;
  triggerSize: sizeComponent;
  setTriggerSize: Dispatch<SetStateAction<sizeComponent>>;
};

const PopoverContext = createContext<PopoverType>({} as PopoverType);

export const Popover: PopoverComponent = ({ children }) => {
  const [seeContent, setSeeContent] = useState(false);
  const buttonTrigger = useRef<HTMLDivElement | null>(null);
  const [triggerSize, setTriggerSize] = useState<sizeComponent>({
    width: 0,
    height: 0,
  });
  return (
    <PopoverContext.Provider
      value={{
        seeContent,
        setSeeContent,
        buttonTrigger,
        triggerSize,
        setTriggerSize,
      }}
    >
      <div
        className={cn("relative")}
        style={{
          width: triggerSize.width ? `${triggerSize.width}px` : "auto",
          height: triggerSize.height ? `${triggerSize.height}px` : "auto",
        }}
      >
        {children}
      </div>
    </PopoverContext.Provider>
  );
};

interface TriggerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Trigger: React.FC<TriggerProps> = ({
  children,
  className,
  ...props
}): ReactNode => {
  const { seeContent, setSeeContent, buttonTrigger, setTriggerSize } =
    useContext(PopoverContext);

  useLayoutEffect(() => {
    if (buttonTrigger.current) {
      const { width, height } = buttonTrigger.current.getBoundingClientRect();
      setTriggerSize({ width, height });
    }
  }, [seeContent]);

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
          "z-30 border top-1 p-2 rounded-md absolute bg-white dark:bg-slate-900 text-black dark:text-slate-200",
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
