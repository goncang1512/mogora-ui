import { useState, useMemo } from "react";

const useOpenChange = (
  open?: boolean,
  onOpenChange?: (open: boolean) => void,
  defaultOpen: boolean = false
) => {
  const [onShow, setOnShow] = useState(defaultOpen);

  const isOpen = useMemo(() => open ?? onShow, [open, onShow]);

  const toggleOpen = (value: boolean | ((prev: boolean) => boolean)) => {
    if (onOpenChange) {
      if (typeof value === "function") {
        onOpenChange(value(isOpen));
      } else {
        onOpenChange(value);
      }
    } else {
      setOnShow(value);
    }
  };

  return { isOpen, toggleOpen };
};

export default useOpenChange;
