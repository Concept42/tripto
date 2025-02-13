import { isClient } from "@/utils/utils";
import { useLayoutEffect } from "react";

/**
 * Custom hook that triggers a callback when the window resizes beyond a specified max width.
 *
 * @param  callback - Function to run when width exceeds `maxWidth`.
 * @param  maxWidth - Maximum width threshold for triggering the callback.
 * @param  reverseCallback - Optional function to run when width is below `maxWidth`.
 * @returns An object containing `initialValue`, which is `true` if the screen width is initially smaller or equal to maxWidth`, otherwise `false`.
 */
const useResize = (callback: () => void, maxWidth: number, reverseCallback?: () => void) => {
  const initialValue = isClient && window.innerWidth <= maxWidth;

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > maxWidth) {
        callback();
        document.body.removeAttribute("style");
      } else if (window.innerWidth < maxWidth && reverseCallback) {
        reverseCallback();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [callback, reverseCallback, maxWidth]);

  return { initialValue };
};

export default useResize;
