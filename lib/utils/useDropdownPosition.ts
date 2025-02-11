import { useState, useEffect, useRef, RefObject } from "react";

export function useDropdownPosition(
  targetRef: RefObject<HTMLElement | null>,
  isOpen: boolean,
  defaultPosition: "left" | "right" | "top" | "bottom" = "bottom"
) {
  const [position, setPosition] = useState<"left" | "right" | "top" | "bottom">(
    defaultPosition
  );
  const lastValidPosition = useRef(defaultPosition); // Simpan posisi terakhir yang valid

  useEffect(() => {
    if (!targetRef.current || !isOpen) return;

    const target = targetRef.current;

    const updatePosition = () => {
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const threshold = 5; // Jika kurang dari 5px, ganti posisi

      let newPosition = lastValidPosition.current; // Mulai dengan posisi terakhir yang valid

      // Cek posisi vertikal
      if (windowHeight - rect.bottom < threshold) {
        newPosition = "top";
      } else if (rect.top < threshold) {
        newPosition = "bottom";
      }

      // Cek posisi horizontal
      if (rect.left < threshold) {
        newPosition = "right";
      } else if (windowWidth - rect.right < threshold) {
        newPosition = "left";
      }

      // Jika posisi baru valid, simpan sebagai posisi terakhir
      if (newPosition !== lastValidPosition.current) {
        lastValidPosition.current = newPosition;
        setPosition(newPosition);
      }
    };

    updatePosition();

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true); // Update saat scroll

    // Gunakan MutationObserver untuk mendeteksi perubahan DOM
    const observer = new MutationObserver(updatePosition);
    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
      observer.disconnect();
    };
  }, [targetRef, isOpen]); // Tetap gunakan `isOpen` agar event listener dihapus saat dropdown ditutup

  return { position };
}
