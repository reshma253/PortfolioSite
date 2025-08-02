import { useEffect } from "react";

declare global {
  interface Window {
    AOS: {
      init: (options?: any) => void;
      refresh: () => void;
    };
  }
}

export function useAOS() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.init({
        duration: 800,
        offset: 100,
        once: true,
        easing: "ease-out-cubic",
      });
    }
  }, []);

  const refreshAOS = () => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.refresh();
    }
  };

  return { refreshAOS };
}
