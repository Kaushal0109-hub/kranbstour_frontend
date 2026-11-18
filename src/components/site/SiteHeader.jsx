"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { navItems } from "./nav";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-paper/95 backdrop-blur-md transition-all duration-500",
        scrolled ? "border-transparent shadow-soft" : "border-border",
      )}
    >
      <div
        className={cn(
          "mx-auto grid max-w-[88rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 transition-all duration-500 sm:px-6 lg:px-10 xl:grid-cols-[auto_1fr_auto]",
          scrolled ? "h-16" : "h-[4.5rem] sm:h-20",
        )}
      >
        <Link href="/" aria-label="KranbsTour home" className="min-w-0 justify-self-start">
          <Logo
            imgClassName={cn("transition-all duration-500", scrolled ? "h-10" : "h-10 sm:h-12")}
          />
        </Link>

        <nav aria-label="Main" className="hidden justify-center xl:flex">
          <ul className="flex items-center gap-0.5">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href || `/#${item.hash}`}
                  className="group relative block rounded-full px-3.5 py-2 font-display text-[0.95rem] font-medium text-royal transition-colors duration-300 hover:bg-mint hover:text-royal"
                >
                  {item.label}
                  <span className="absolute inset-x-4 bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-saffron transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Button asChild variant="saffron" size="pill" className="hidden sm:inline-flex">
            <Link href="/#plan">
              Book Now <ArrowUpRight />
            </Link>
          </Button>

          <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
            <DialogPrimitive.Trigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="grid h-11 w-11 place-items-center rounded-full bg-mint text-royal transition-colors hover:bg-royal hover:text-ivory xl:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
            </DialogPrimitive.Trigger>
            <DialogPrimitive.Portal>
              <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-navy/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
              <DialogPrimitive.Content className="fixed inset-y-0 right-0 z-50 flex w-[min(24rem,88vw)] flex-col overflow-hidden bg-pastel-gradient p-6 duration-500 data-[state=open]:animate-in data-[state=open]:slide-in-from-right data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right">
                <div className="flex items-center justify-between gap-4">
                  <Logo imgClassName="h-10" />
                  <DialogPrimitive.Close
                    aria-label="Close menu"
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-paper text-royal shadow-soft transition-transform duration-300 hover:rotate-90"
                  >
                    <X className="h-5 w-5" />
                  </DialogPrimitive.Close>
                </div>
                <DialogPrimitive.Title className="sr-only">Menu</DialogPrimitive.Title>
                <DialogPrimitive.Description className="sr-only">
                  Site navigation
                </DialogPrimitive.Description>
                <p className="hand mt-10 text-3xl text-saffron">Where to next?</p>
                <nav aria-label="Mobile" className="mt-4 flex-1">
                  <ul className="space-y-2">
                    {navItems.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href || `/#${item.hash}`}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-4 rounded-2xl bg-paper/70 px-4 py-3 font-display text-xl font-semibold text-royal transition-all hover:translate-x-1 hover:bg-paper"
                        >
                          <span className="grid h-9 w-9 place-items-center rounded-full bg-mint font-display text-sm font-bold text-royal">
                            ✦
                          </span>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-auto border-t border-royal/10 pt-6">
                  <Button asChild variant="saffron" size="pill-lg" className="w-full">
                    <Link href="/#plan" onClick={() => setOpen(false)}>
                      Book Now <ArrowUpRight />
                    </Link>
                  </Button>
                </div>
              </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
          </DialogPrimitive.Root>
        </div>
      </div>
    </header>
  );
}
