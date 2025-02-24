import { useState, useEffect, useCallback, RefObject } from "react";
import { Position } from "./type";

export function useDropdownPosition(
  targetRef: RefObject<HTMLElement | null>,
  isOpen: boolean,
  defaultPosition: Position = "bottom"
) {
  const [position, setPosition] = useState(defaultPosition);

  const updatePosition = useCallback(() => {
    if (!targetRef.current) return;

    const target = targetRef.current;
    const rect = target.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    let newPosition: Position = position;

    if (
      position === "bottom" &&
      rect.bottom + target.offsetHeight > windowHeight
    ) {
      newPosition = "top";
    } else if (position === "top" && rect.top - target.offsetHeight < 0) {
      newPosition = "bottom";
    } else if (position === "left" && rect.left - target.offsetWidth < 0) {
      newPosition = "right";
    } else if (
      position === "right" &&
      rect.right + target.offsetWidth > windowWidth
    ) {
      newPosition = "left";
    }

    setPosition((prev) => (prev !== newPosition ? newPosition : prev));
  }, [targetRef, position]);

  useEffect(() => {
    if (!isOpen) return;

    updatePosition();

    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [isOpen, updatePosition]);

  return { position };
}
