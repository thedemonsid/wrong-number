"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddStatementForm } from "./add-statement-form";
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-serif font-bold">Wrong Number</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="/"
                className={cn(
                  "font-serif transition-colors hover:text-foreground/80",
                  pathname === "/" ? "text-foreground" : "text-foreground/60"
                )}
              >
                Statements
              </Link>
              <Link
                href="/people"
                className={cn(
                  "font-serif transition-colors hover:text-foreground/80",
                  pathname === "/people"
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                People
              </Link>
            </nav>
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="font-serif">
                Let&apos;s catch someone being wrong
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Add Statement</DialogTitle>
                <DialogDescription>
                  Add a statement that you believe is incorrect or misleading.
                </DialogDescription>
              </DialogHeader>
              <AddStatementForm onClose={() => setIsDialogOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
