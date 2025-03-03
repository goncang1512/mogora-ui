import { useState, useEffect, useRef, RefObject } from "react";
import { Position } from "./type";

export function useDropdownPosition(
  targetRef: RefObject<HTMLElement | null>,
  isOpen: boolean,
  defaultPosition: Position = "bottom"
) {
  const [position, setPosition] = useState<Position>(defaultPosition);
  const lastPosition = useRef<Position>(defaultPosition);

  useEffect(() => {
    if (!targetRef.current || !isOpen) return;

    const updatePosition = () => {
      if (!targetRef.current) return;
      const target = targetRef.current;
      const rect = target.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      // Hitung ruang yang tersedia
      const spaceBottom = windowHeight - rect.bottom;
      const spaceTop = rect.top;
      const spaceRight = windowWidth - rect.right;
      const spaceLeft = rect.left;

      let newPosition: Position = lastPosition.current;

      // Jika posisi terakhir masih cukup ruang, tetap gunakan posisi terakhir
      if (
        (newPosition === "bottom" && spaceBottom >= rect.height) ||
        (newPosition === "top" && spaceTop >= rect.height) ||
        (newPosition === "left" && spaceLeft >= rect.width) ||
        (newPosition === "right" && spaceRight >= rect.width)
      ) {
        setPosition(newPosition);
        return;
      }

      // Coba posisi berlawanan jika tidak cukup ruang di posisi terakhir
      if (newPosition === "bottom" && spaceTop >= rect.height) {
        newPosition = "top";
      } else if (newPosition === "top" && spaceBottom >= rect.height) {
        newPosition = "bottom";
      } else if (newPosition === "left" && spaceRight >= rect.width) {
        newPosition = "right";
      } else if (newPosition === "right" && spaceLeft >= rect.width) {
        newPosition = "left";
      }

      // Jika posisi berlawanan juga tidak cukup, cari posisi dengan ruang terbanyak
      if (
        (newPosition === "bottom" && spaceBottom < rect.height) ||
        (newPosition === "top" && spaceTop < rect.height) ||
        (newPosition === "left" && spaceLeft < rect.width) ||
        (newPosition === "right" && spaceRight < rect.width)
      ) {
        const maxSpace = Math.max(spaceBottom, spaceTop, spaceRight, spaceLeft);
        if (maxSpace === spaceBottom) newPosition = "bottom";
        else if (maxSpace === spaceTop) newPosition = "top";
        else if (maxSpace === spaceRight) newPosition = "right";
        else if (maxSpace === spaceLeft) newPosition = "left";
      }

      // Update posisi jika berubah
      if (newPosition !== position) {
        lastPosition.current = newPosition;
        setPosition(newPosition);
      }
    };

    updatePosition();
  }, [isOpen]);

  return { position };
}
