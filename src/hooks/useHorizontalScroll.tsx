import React, { useRef, useState } from "react";

const SNAP_THRESHOLD = 30;

const useHorizontalScroll = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [hasSnappedThisDrag, setHasSnappedThisDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentChildIndex, setCurrentChildIndex] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!ref.current) return;
    setIsDragging(true);
    setHasSnappedThisDrag(false);
    setStartX(e.clientX);

    const container = ref.current;
    const scrollLeft = container.scrollLeft;

    let closestDistance = Infinity;
    let closestIndex = 0;
    Array.from(container.children).forEach((child, i) => {
      const offsetLeft = (child as HTMLElement).offsetLeft;
      const distance = Math.abs(offsetLeft - scrollLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    });

    setCurrentChildIndex(closestIndex);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !ref.current) return;

    const deltaX = e.clientX - startX;

    if (!hasSnappedThisDrag && Math.abs(deltaX) > SNAP_THRESHOLD) {
      const container = ref.current;
      const totalChildren = container.children.length;

      let newIndex = currentChildIndex;
      if (deltaX < 0) {
        newIndex = Math.min(currentChildIndex + 1, totalChildren - 1);
      } else {
        newIndex = Math.max(currentChildIndex - 1, 0);
      }

      const newChild = container.children[newIndex] as HTMLElement;
      container.scrollTo({
        left: newChild.offsetLeft,
        behavior: "smooth"
      });

      setCurrentChildIndex(newIndex);
      setHasSnappedThisDrag(true);
    }
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  return {
    ref,
    onMouseDown,
    onMouseMove,
    onMouseUp
  };
};

export default useHorizontalScroll;
