"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <header className="mx-auto max-w-6xl px-4 pt-14 pb-10">
            <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-6 md:p-10 bg-[#f0f0f0] border border-zinc-100 shadow-sm"
            >
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="shrink-0">
                    <div className="w-28 h-28 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br from-pink-200 via-rose-200 to-sky-200 p-1">
                        <div className="w-full h-full rounded-2xl bg-white grid place-items-center text-3xl">
                        ✨
                    </div>
                </div>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
                可愛い × モダンな UI が好きなフロントエンド開発者
              </h1>
              <p className="mt-3 text-zinc-600">
                Next.js / Flutter を中心に、保守性の高い設計と使って楽しい体験を両立させます。
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Button className="rounded-2xl bg-pink-500 hover:bg-pink-600">
                  <a href="#projects" className="flex items-center gap-2">
                    作品を見る <ArrowRight className="w-4 h-4"/>
                  </a>
                </Button>
                <Button variant="outline" className="rounded-2xl">
                  <a href="#resume" className="flex items-center gap-2">
                    <Download className="w-4 h-4"/> 履歴書（PDF）
                  </a>
                </Button>
                <a href="#" className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900">
                  <Github className="w-4 h-4"/> GitHub
                </a>
                <a href="#" className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900">
                  <Linkedin className="w-4 h-4"/> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </header>
    )
}