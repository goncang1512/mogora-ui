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
  const buttonTrigger = useRef<HTMLButtonElement | null>(null);
  const [valueOnChange, setOnChange] = useState(value ?? "");
  const [options, setOptions] = useState("");

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
  ...props
}): ReactNode => {
  const { seeOption, setSeeOption, options, buttonTrigger } =
    useContext(SelectContext);
  return (
    <button
      ref={buttonTrigger}
      onClick={() => setSeeOption(!seeOption)}
      className={cn(
        "border px-3 py-1 rounded-md border-gray-300 w-full text-start",
        className
      )}
      {...props}
    >
      {options ? options : children}
    </button>
  );
};

const Item: React.FC<ItemProps> = ({
  children,
  value,
  className,
  ...props
}) => {
  const { handleChange, setSeeOption, setOptions } = useContext(SelectContext);
  return (
    <li
      onClick={() => {
        handleChange(value);
        setSeeOption(false);
        setOptions(children);
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
          "border border-gray-200 p-2 rounded-md absolute bg-white dark:bg-slate-900 text-black dark:text-slate-200 w-full",
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
