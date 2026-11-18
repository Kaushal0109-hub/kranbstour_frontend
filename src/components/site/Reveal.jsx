"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/** Gently fades content in as it enters the viewport. */
export function Reveal({ children, className, delay = 0, as = "div" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as;
  const style = { transitionDelay: `${delay}ms` };

  return (
    <Tag ref={ref} data-visible={visible} style={style} className={cn("reveal", className)}>
      {children}
    </Tag>
  );
}
