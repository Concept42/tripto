import { useEffect } from "react";

export function useResizeObserver(
  elementRef: React.RefObject<HTMLElement | null>,
  callback: (entry: ResizeObserverEntry) => void
) {
  useEffect(() => {
    if (!elementRef.current) return;
    const observer = new ResizeObserver(([entry]) => {
      callback(entry);
    });
    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [elementRef, callback]);
}
