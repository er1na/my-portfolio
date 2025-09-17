"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Sparkles } from "lucide-react";

export default function Navigation() {
    return (
        <nav className="sticky top-0 z-30 backdrop-blur bg-[#f0f0f0] border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-2xl bg-pink-200 dark:bg-pink-400/20">
              <Sparkles className="w-4 h-4 text-pink-600 dark:text-pink-300" />
            </span>
            <span className="font-semibold text-zinc-800 dark:text-zinc-100">Erina Suzuki</span>
            <Badge className="ml-2 rounded-xl bg-sky-100 text-sky-700 hover:bg-sky-100 dark:bg-sky-400/20 dark:text-sky-200">Portfolio</Badge>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <a href="#projects" className="px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">Projects</a>
            <a href="#skills" className="px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">Skills</a>
            <a href="#about" className="px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">About</a>
            <a href="#contact" className="px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <Button className="rounded-2xl bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white">
              <a href="#contact" className="flex items-center gap-2">
                <Mail className="w-4 h-4"/> Contact
              </a>
            </Button>
          </div>
        </div>
      </nav>
    )
}