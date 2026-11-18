import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        saffron:
          "btn-shine rounded-full bg-saffron text-paper font-display font-semibold tracking-wide shadow-saffron transition-all duration-300 hover:bg-saffron-deep hover:-translate-y-0.5 [&_svg]:transition-transform hover:[&_svg]:translate-x-0.5",
        royal:
          "rounded-full bg-royal text-ivory font-semibold tracking-wide transition-all duration-300 hover:bg-royal-soft hover:-translate-y-0.5",
        white:
          "rounded-full bg-paper text-royal font-display font-semibold tracking-wide shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift",
        "outline-light":
          "rounded-full border border-ivory/50 text-ivory font-display font-semibold tracking-wide backdrop-blur-sm transition-all duration-300 hover:bg-ivory hover:text-royal",
        "outline-royal":
          "rounded-full border border-royal/25 text-royal font-semibold tracking-wide transition-all duration-300 hover:border-royal hover:bg-royal hover:text-ivory",
        "solid-light":
          "btn-shine rounded-full bg-ivory text-royal font-display font-semibold tracking-wide transition-all duration-300 hover:bg-saffron hover:text-paper",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        pill: "h-11 px-6 text-sm",
        "pill-lg": "h-14 px-8 text-base",
        "pill-xl": "h-16 px-9 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
