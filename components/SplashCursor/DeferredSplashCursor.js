import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const SplashCursor = dynamic(
  () => import("./splash-cursor").then((m) => m.SplashCursor),
  { ssr: false, loading: () => null }
);

export function DeferredSplashCursor() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof requestIdleCallback === "undefined") {
      const t = window.setTimeout(() => setMounted(true), 500);
      return () => window.clearTimeout(t);
    }
    const id = requestIdleCallback(() => setMounted(true), { timeout: 2000 });
    return () => cancelIdleCallback(id);
  }, []);

  return mounted ? <SplashCursor /> : null;
}
