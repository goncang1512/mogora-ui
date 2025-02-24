import { createContext, useContext, useState } from "react";
import {
  ContentProps,
  ListProps,
  TabsComponent,
  TabsType,
  TriggerProps,
} from "./types";
import { cn } from "../utils/utils";
import { tabsVarianst, triggerVarianst } from "./variants";

const TabsContext = createContext<TabsType>({} as TabsType);

export const Tabs: TabsComponent = ({
  children,
  defaultValue = "",
  variant,
  className,
  size,
  ...props
}) => {
  const [active, setActive] = useState(defaultValue ?? "");
  return (
    <TabsContext.Provider value={{ active, setActive, variant, size }}>
      <div className={cn("flex flex-col gap-3", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

const List: React.FC<ListProps> = ({ children, className, ...props }) => {
  const { variant, size } = useContext(TabsContext);
  return (
    <div className={cn(tabsVarianst({ variant, size, className }))} {...props}>
      {children}
    </div>
  );
};

const Trigger: React.FC<TriggerProps> = ({
  children,
  className,
  value,
  ...props
}) => {
  const { setActive, active, variant, size } = useContext(TabsContext);
  const seeContent = active === value ? "open" : "close";
  return (
    <button
      onClick={() => setActive(value)}
      data-state={seeContent}
      className={cn(
        triggerVarianst({
          variant,
          size,
          className,
        })
      )}
      {...props}
    >
      {children}
    </button>
  );
};

const Content: React.FC<ContentProps> = ({
  children,
  className,
  value,
  ...props
}) => {
  const { active } = useContext(TabsContext);
  const seeContent = active === value ? "open" : "close";
  return (
    <div
      data-state={seeContent}
      className={cn(
        `data-[state=open]:flex data-[state=close]:hidden`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

Tabs.List = List;
Tabs.Trigger = Trigger;
Tabs.Content = Content;
