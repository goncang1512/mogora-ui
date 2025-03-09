import React, { createContext, useContext, useEffect } from "react";
import { TriggerProps, ContentProps, ModalComponent, ModalType } from "./types";
import { cn } from "../utils/utils";
import useOpenChange from "../utils/openState";

const ModalContext = createContext<ModalType>({} as ModalType);

export const Modal: ModalComponent = ({
  children,
  className,
  open,
  onOpenChange,
  ...props
}) => {
  const { isOpen, toggleOpen } = useOpenChange(open, onOpenChange);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <ModalContext.Provider
      value={{
        onShow: isOpen,
        setOnShow: toggleOpen,
        className,
        modalProps: props,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const Trigger: React.FC<TriggerProps> = ({ children, ...props }) => {
  const { onShow, setOnShow } = useContext(ModalContext);

  return (
    <span onClick={() => setOnShow(!onShow)} {...props}>
      {children}
    </span>
  );
};

const Content: React.FC<ContentProps> = ({ children, className, ...props }) => {
  const {
    onShow,
    setOnShow,
    className: classContainer,
    modalProps,
  } = useContext(ModalContext);

  return (
    <div
      data-state={onShow ? "open" : "closed"}
      className={cn(
        "fixed data-[state=closed]:hidden inset-0 z-[9999] flex items-center justify-center bg-black/80",
        classContainer
      )}
      onClick={() => setOnShow(false)}
      {...modalProps}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "relative z-50 w-full max-w-lg rounded-none md:rounded-lg bg-white p-6 shadow-lg transition-all duration-200",
          "animate-in fade-in zoom-in slide-in-from-top-[48%]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

Modal.Trigger = Trigger;
Modal.Content = Content;
