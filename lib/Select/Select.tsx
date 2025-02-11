import React, {
  ReactNode,
  HTMLAttributes,
  LiHTMLAttributes,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
  useRef,
  RefObject,
} from "react";
import { cn } from "../utils/utils";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "../Button/variants";
import { useClickOutside } from "../utils/clickoutside";
import { useDropdownPosition } from "../utils/useDropdownPosition";

interface SelectProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  name?: string;
}

type SelectComponent = React.FC<SelectProps> & {
  Trigger: React.FC<TriggerProps>;
  Content: React.FC<ContentProps>;
  Item: React.FC<ItemProps>;
};

interface SelectType {
  seeOption: boolean;
  setSeeOption: Dispatch<SetStateAction<boolean>>;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  buttonTrigger: RefObject<HTMLDivElement | null>;
}

const SelectContext = createContext<SelectType>({} as SelectType);

export const Select: SelectComponent = ({
  children,
  className,
  name,
  ...props
}): ReactNode => {
  const [seeOption, setSeeOption] = useState(false);
  const buttonTrigger = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState("");
  return (
    <SelectContext.Provider
      value={{ seeOption, setSeeOption, value, setValue, buttonTrigger }}
    >
      <input
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        hidden
      />
      <div className={cn("relative", className)} {...props}>
        {children}
      </div>
    </SelectContext.Provider>
  );
};

interface TriggerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

const Trigger: React.FC<TriggerProps> = ({
  children,
  className,
  ...props
}): ReactNode => {
  const { seeOption, setSeeOption, buttonTrigger } = useContext(SelectContext);
  return (
    <div
      ref={buttonTrigger}
      onClick={() => setSeeOption(!seeOption)}
      className={cn("", className)}
      {...props}
    >
      {children}
    </div>
  );
};

interface ItemProps extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  value: string;
}

const Item: React.FC<ItemProps> = ({
  children,
  value,
  className,
  ...props
}) => {
  const { setValue, setSeeOption } = useContext(SelectContext);
  return (
    <li
      onClick={() => {
        setValue(value);
        setSeeOption(false);
      }}
      className={cn(
        "list-none cursor-pointer hover:bg-gray-300 px-2 py-1 rounded-md",
        className
      )}
      {...props}
    >
      {children}
    </li>
  );
};

interface ContentProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
}

const Content: React.FC<ContentProps> = ({ children, className, ...props }) => {
  const { seeOption, setSeeOption, buttonTrigger } = useContext(SelectContext);
  const ulRef = useRef<HTMLUListElement>(null);
  useClickOutside([ulRef, buttonTrigger], () => setSeeOption(false));
  const { position } = useDropdownPosition(ulRef, seeOption, "bottom");

  if (seeOption) {
    return (
      <ul
        ref={ulRef}
        className={cn(
          "border p-2 rounded-md absolute bg-white dark:bg-slate-900 text-black dark:text-slate-200 w-full",
          position === "top" ? "bottom-full" : "",
          position === "bottom" ? "top-full" : "",
          className
        )}
        {...props}
      >
        {children}
      </ul>
    );
  }
};

Select.Trigger = Trigger;
Select.Content = Content;
Select.Item = Item;
