import { useRef, useEffect, useState } from "react";

const useDraggableDrawer = (
  open: boolean,
  setOpenChange: (state: boolean) => void
) => {
  const startY = useRef<number | null>(null);
  const translateY = useRef(0);
  const isDragging = useRef(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const animationFrame = useRef<number | null>(null);
  const dragEnded = useRef(false);

  // Gunakan useState untuk memicu re-render
  const [draggingState, setDraggingState] = useState(false);

  // Fungsi untuk memulai drag (Mouse & Touch)
  const handleStart = (
    e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>
  ) => {
    startY.current = "touches" in e ? e.touches[0].clientY : e.clientY;
    isDragging.current = false;
    dragEnded.current = false;
    setDraggingState(false);

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", handleEnd);
    document.addEventListener("touchmove", handleMove);
    document.addEventListener("touchend", handleEnd);
  };

  // Fungsi untuk menangani pergerakan drag (Mouse & Touch)
  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!startY.current) return;

    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    const deltaY = clientY - startY.current;

    if (deltaY > 5) {
      isDragging.current = true;
      translateY.current = deltaY;
      setDraggingState(true); // Memicu re-render

      if (drawerRef.current) {
        if (animationFrame.current)
          cancelAnimationFrame(animationFrame.current);
        animationFrame.current = requestAnimationFrame(() => {
          if (drawerRef.current) {
            drawerRef.current.style.transform = `translateY(${deltaY}px)`;
          }
        });
      }
    }
  };

  // Fungsi untuk menyelesaikan drag (Mouse & Touch)
  const handleEnd = () => {
    if (isDragging.current && translateY.current >= 100) {
      setOpenChange(false);
    } else {
      if (drawerRef.current) {
        drawerRef.current.style.transform = "translateY(0)";
      }
    }

    dragEnded.current = true;
    isDragging.current = false;
    setDraggingState(false);
    startY.current = null;
    translateY.current = 0;

    document.removeEventListener("mousemove", handleMove);
    document.removeEventListener("mouseup", handleEnd);
    document.removeEventListener("touchmove", handleMove);
    document.removeEventListener("touchend", handleEnd);
  };

  useEffect(() => {
    if (open && drawerRef.current) {
      drawerRef.current.style.transform = "translateY(0)";
      if (draggingState) {
        drawerRef.current.classList.add("duration-0");
        drawerRef.current.classList.remove("duration-300");
      } else {
        drawerRef.current.classList.remove("duration-0");
        drawerRef.current.classList.add("duration-300");
      }
    }
  }, [open, draggingState]);

  return {
    drawerRef,
    handleMouseDown: handleStart,
    handleTouchStart: handleStart,
    dragEnded,
  };
};

export default useDraggableDrawer;
