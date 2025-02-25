import React, {
  ReactNode,
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import { cn } from "../utils/utils";
import { useClickOutside } from "../utils/clickoutside";
import { useDropdownPosition } from "../utils/useDropdownPosition";
import {
  ContentProps,
  ItemProps,
  TriggerProps,
  SelectType,
  SelectComponent,
} from "./types";
import { ChevronDown } from "lucide-react";

const SelectContext = createContext<SelectType>({} as SelectType);

export const Select: SelectComponent = ({
  children,
  className,
  name,
  value,
  onChange,
  ...props
}): ReactNode => {
  const [seeOption, setSeeOption] = useState(false);
  const buttonTrigger = useRef<HTMLDivElement | null>(null);
  const [valueOnChange, setOnChange] = useState(value ?? "");
  const [options, setOptions] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    if (value !== undefined) {
      setOnChange(value);
    }
  }, [value]);

  const handleChange = (newValue: string) => {
    const event = {
      target: { value: newValue },
    } as React.ChangeEvent<HTMLInputElement>;
    setOnChange(newValue);
    onChange?.(event);
  };

  return (
    <SelectContext.Provider
      value={{
        seeOption,
        setSeeOption,
        valueOnChange,
        setOnChange,
        buttonTrigger,
        handleChange,
        options,
        setOptions,
      }}
    >
      <input
        name={name}
        value={valueOnChange}
        onChange={(e) => handleChange(e.target.value)}
        type="text"
        readOnly
        hidden
      />
      <div className={cn("relative inline-flex w-full", className)} {...props}>
        {children}
      </div>
    </SelectContext.Provider>
  );
};

const Trigger: React.FC<TriggerProps> = ({
  children,
  className,
  icon,
  ...props
}): ReactNode => {
  const { seeOption, setSeeOption, options, buttonTrigger } =
    useContext(SelectContext);

  return (
    <div
      ref={buttonTrigger}
      onClick={() => setSeeOption(!seeOption)}
      className={cn(
        "border px-3 py-1 rounded-md border-gray-300 w-full text-start cursor-pointer flex justify-between items-center",
        className
      )}
      {...props}
    >
      {options ? options : children}
      {icon !== false && (
        <span className={`${seeOption && "rotate-180"} duration-150`}>
          {icon ?? <ChevronDown />}
        </span>
      )}
    </div>
  );
};

const Item: React.FC<ItemProps> = ({
  children,
  value,
  className,
  onClick,
  ...props
}) => {
  const { handleChange, setSeeOption, setOptions } = useContext(SelectContext);
  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    handleChange(value);
    setOptions(children);
    setSeeOption(false);
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <li
      onClick={handleClick}
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

const Content: React.FC<ContentProps> = ({ children, className, ...props }) => {
  const { seeOption, setSeeOption, buttonTrigger } = useContext(SelectContext);
  const ulRef = useRef<HTMLUListElement>(null);
  useClickOutside([ulRef, buttonTrigger], () => setSeeOption(false));
  const { position } = useDropdownPosition(ulRef, seeOption, "bottom");

  if (!seeOption) return null;

  return (
    <ul
      ref={ulRef}
      className={cn(
        "border border-gray-200 p-2 rounded-md absolute bg-white dark:bg-slate-900 text-black dark:text-slate-200 w-full",
        position === "top" && "bottom-full left-0 w-full", // Dropdown muncul di atas
        position === "bottom" && "top-full left-0 w-full", // Dropdown muncul di bawah
        className
      )}
      {...props}
    >
      {children}
    </ul>
  );
};

Select.Trigger = Trigger;
Select.Content = Content;
Select.Item = Item;
