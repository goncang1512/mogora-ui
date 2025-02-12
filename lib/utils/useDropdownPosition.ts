import { useState, useEffect, RefObject } from "react";
import { Position } from "./type";

export function useDropdownPosition(
  targetRef: RefObject<HTMLElement | null>,
  isOpen: boolean,
  defaultPosition: Position = "bottom"
) {
  const [position, setPosition] = useState(defaultPosition);

  useEffect(() => {
    if (!targetRef.current || !isOpen) return;

    const target = targetRef.current;
    const updatePosition = () => {
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      // Toleransi jarak dari batas viewport (dalam piksel)
      const tolerance = 0;

      let newPosition = position;

      // Jika posisi saat ini adalah bottom
      if (position === "bottom") {
        // Jika tidak ada cukup ruang di bawah, ubah ke top
        if (rect.bottom + target.offsetHeight > windowHeight - tolerance) {
          newPosition = "top";
        }
      }
      // Jika posisi saat ini adalah top
      else if (position === "top") {
        // Jika tidak ada cukup ruang di atas, ubah kembali ke bottom
        if (rect.top - target.offsetHeight < tolerance) {
          newPosition = "bottom";
        }
      }
      // Jika posisi saat ini adalah left
      else if (position === "left") {
        if (rect.left - target.offsetWidth < tolerance) {
          newPosition = "right";
        }
      }
      // Jika posisi saat ini adalah left
      else if (position === "right") {
        if (rect.right + target.offsetWidth > windowWidth - tolerance) {
          newPosition = "left";
        }
      }

      setPosition(newPosition);
    };

    updatePosition();

    const handleScroll = () => requestAnimationFrame(updatePosition);
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [targetRef, isOpen, position]);

  return { position };
}
