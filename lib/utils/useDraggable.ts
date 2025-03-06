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

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    startY.current = e.clientY;
    isDragging.current = false;
    dragEnded.current = false;
    setDraggingState(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!startY.current) return;

    const deltaY = e.clientY - startY.current;
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

  const handleMouseUp = () => {
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

    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
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

  return { drawerRef, handleMouseDown, dragEnded };
};

export default useDraggableDrawer;
