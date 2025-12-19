"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ActiveLink } from "../active-link/active-link";
import { useState } from "react";

export const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 z-50 w-full
        border-b border-border
        bg-background/95
        backdrop-blur
        supports-[backdrop-filter]:bg-background/60
      "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3 bg-muted p-1 rounded-lg">
            <Link
              href="/"
              className={cn(
                "text-sm font-semibold transition-colors",
                isHomePage
                  ? "bg-gradient-to-r from-green-400 to-green-800 bg-clip-text text-transparent font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Growlympics
            </Link>
            <span className="text-xs">🌱</span>
          </div>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <ActiveLink href="/" exact>Home</ActiveLink>
            <ActiveLink href="/blog">Forestarium</ActiveLink>

            <Button variant="secondary" className="font-semibold hover:text-green-500">
               <Link href="/plants/register">
                    Plant a Tree 🌳
                </Link>
            </Button>
          </nav>

          {/* BOTÃO MOBILE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md hover:bg-muted transition"
            aria-label="Abrir menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <nav className="md:hidden border-t border-border bg-background px-4 py-4">
          <ul className="flex flex-col gap-4 text-sm">
            <li>
              <ActiveLink href="/" exact onClick={() => setOpen(false)}>
                Home
              </ActiveLink>
            </li>

            <li>
              <ActiveLink href="/blog" onClick={() => setOpen(false)}>
                Forestarium
              </ActiveLink>
            </li>

            {/* onClick={() => setOpen(false)} */}
           <Button
            asChild
            variant="secondary"
            className="mt-2 font-semibold hover:text-green-500"
            >
            <Link href="/plants/register">
                Plant a Tree 🌳
            </Link>
            </Button>

          </ul>
        </nav>
      )}
    </header>
  );
};
