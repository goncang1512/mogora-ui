import { createContext, useContext } from "react";
import { DrawerComponent, DrawerType, TriggerProps } from "./types";
import useOpenChange from "../utils/openState";
import { cn } from "../utils/utils";
import useDraggableDrawer from "../utils/useDraggable";

const DrawerContext = createContext<DrawerType>({} as DrawerType);

export const Drawer: DrawerComponent = ({
  children,
  open: onOpen,
  onOpenChange,
  className,
  ...props
}) => {
  const { isOpen: open, toggleOpen: setOpenChange } = useOpenChange(
    onOpen,
    onOpenChange
  );

  return (
    <DrawerContext.Provider
      value={{
        open,
        setOpenChange,
        drawerProps: props,
        classDrawer: className,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

const Trigger: React.FC<TriggerProps> = ({
  children,
  className,
  onClick,
  ...props
}) => {
  const { setOpenChange, open } = useContext(DrawerContext);
  return (
    <div
      onClick={(e) => {
        setOpenChange(!open);
        if (onClick) onClick(e);
      }}
      className={cn("inline-flex", className)}
      {...props}
    >
      {children}
    </div>
  );
};

const Content: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
  ...props
}) => {
  const { drawerProps, open, setOpenChange, classDrawer } =
    useContext(DrawerContext);
  const { drawerRef, handleMouseDown, dragEnded } = useDraggableDrawer(
    open,
    setOpenChange
  );

  return (
    <div
      data-state={open ? "open" : "closed"}
      onClick={() => {
        if (!dragEnded.current) {
          setOpenChange(false);
        }

        setTimeout(() => {
          dragEnded.current = false;
        }, 50);
      }}
      className={cn(
        "fixed inset-0 flex items-center justify-center bg-black/70 transition-opacity w-screen ease-linear duration-100 z-[9999]",
        "data-[state=open]:opacity-100 data-[state=open]:pointer-events-auto",
        "data-[state=closed]:pointer-events-none data-[state=closed]:opacity-0",
        classDrawer
      )}
      {...drawerProps}
    >
      <div
        ref={drawerRef}
        onClick={(e) => e.stopPropagation()}
        data-state={open ? "open" : "closed"}
        className={cn(
          "absolute z-50 w-full h-[70vh] bg-white px-6 pb-6 pt-3 shadow-lg bottom-0 flex flex-col",
          "transition-transform ease-in-out duration-300 will-change-transform",
          "data-[state=closed]:translate-y-full",
          "data-[state=open]:translate-y-0",
          className
        )}
        {...props}
      >
        <button
          className="flex justify-center cursor-default"
          onMouseDown={handleMouseDown}
        >
          <div className="h-2 bg-gray-300 rounded-lg w-[10%] self-center"></div>
        </button>
        {children}
      </div>
    </div>
  );
};

Drawer.Trigger = Trigger;
Drawer.Content = Content;
