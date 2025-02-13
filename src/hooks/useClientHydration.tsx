// useClientHydration.ts
import { useEffect, useState } from "react";

export default function useClientHydration() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
}
