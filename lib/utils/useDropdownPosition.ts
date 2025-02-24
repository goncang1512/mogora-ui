import { useState, useEffect, useRef, RefObject } from "react";
import { Position } from "./type";

export function useDropdownPosition(
  targetRef: RefObject<HTMLElement | null>,
  isOpen: boolean,
  defaultPosition: Position = "bottom"
) {
  const [position, setPosition] = useState<Position>(defaultPosition);
  const lastPosition = useRef<Position>(defaultPosition); // Simpan posisi terakhir

  useEffect(() => {
    if (!targetRef.current || !isOpen) return;

    const updatePosition = () => {
      if (!targetRef.current) return;
      const target = targetRef.current;
      const rect = target.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      let newPosition: Position = lastPosition.current;

      // Cek apakah masih ada ruang di posisi defaultnya
      const hasSpaceBottom = rect.bottom + target.offsetHeight <= windowHeight;
      const hasSpaceTop = rect.top - target.offsetHeight >= 0;
      const hasSpaceRight = rect.right + target.offsetWidth <= windowWidth;
      const hasSpaceLeft = rect.left - target.offsetWidth >= 0;

      // Jika posisi awalnya bottom atau top, cek apakah masih muat
      if (lastPosition.current === "bottom" || lastPosition.current === "top") {
        if (
          lastPosition.current === "bottom" &&
          !hasSpaceBottom &&
          hasSpaceTop
        ) {
          newPosition = "top";
        } else if (
          lastPosition.current === "top" &&
          !hasSpaceTop &&
          hasSpaceBottom
        ) {
          newPosition = "bottom";
        }
      }

      // Jika posisi awalnya left atau right, cek apakah masih muat
      if (lastPosition.current === "left" || lastPosition.current === "right") {
        if (lastPosition.current === "left" && !hasSpaceLeft && hasSpaceRight) {
          newPosition = "right";
        } else if (
          lastPosition.current === "right" &&
          !hasSpaceRight &&
          hasSpaceLeft
        ) {
          newPosition = "left";
        }
      }

      lastPosition.current = newPosition; // Simpan posisi terakhir
      setPosition(newPosition);
    };

    updatePosition();
  }, [isOpen]); // Hanya update saat dropdown dibuka kembali

  return { position };
}
