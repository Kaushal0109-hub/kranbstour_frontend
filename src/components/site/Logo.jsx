import { cn } from "@/lib/utils";

export function Logo({ className, imgClassName, plate = false }) {
  return (
    <span className={cn("inline-flex items-center", plate && "logo-plate px-5 py-2", className)}>
      <img
        src="/kranbstour-logo.png"
        alt="KranbsTour — Agra, Delhi, Jaipur"
        width={1332}
        height={484}
        className={cn("h-11 w-auto", imgClassName)}
      />
    </span>
  );
}
