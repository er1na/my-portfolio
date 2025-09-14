"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Mail, Github, Linkedin, Download, ArrowRight, Sparkles, MapPin, Phone, ExternalLink, Sun, Moon } from "lucide-react";

const projects = [
  {
    title: "PetCare Calendar",
    description: "ペットのワクチン・通院・服薬スケジュールを可視化するカレンダーアプリ。",
    tags: ["Next.js", "Prisma", "MySQL"],
    link: "#",
  },
  {
    title: "Taskee",
    description: "スマホ時間の見える化とルールで集中をサポートする Flutter タスクアプリ。",
    tags: ["Flutter", "Riverpod", "Layered Arch"],
    link: "#",
  },
  {
    title: "Portfolio CMS",
    description: "microCMS + Next.js で手早く公開できるポートフォリオ CMS。",
    tags: ["Next.js", "microCMS", "Ant Design"],
    link: "#",
  },
];

const skills = [
  { name: "TypeScript", level: 85 },
  { name: "React / Next.js", level: 88 },
  { name: "Flutter / Dart", level: 82 },
  { name: "DB (Prisma/MySQL)", level: 75 },
  { name: "UI/UX", level: 72 },
];

export default function CuteModernPortfolio() {
  const [dark, setDark] = useState(false);

  return (
    <div className={(dark ? "dark " : "") + "min-h-dvh bg-gradient-to-b from-pink-50 via-white to-sky-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-900"}>
      {/* ナビ */}
      <nav className="sticky top-0 z-30 backdrop-blur bg-white/60 dark:bg-zinc-900/60 border-b border-zinc-100 dark:border-zinc-800">
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
            <Button variant="ghost" className="rounded-2xl" onClick={() => setDark(v => !v)}>
              {dark ? <Sun className="w-4 h-4"/> : <Moon className="w-4 h-4"/>}
            </Button>
            <Button className="rounded-2xl bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white">
              <a href="#contact" className="flex items-center gap-2">
                <Mail className="w-4 h-4"/> Contact
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* ヒーロー */}
      <header className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-6 md:p-10 bg-white/70 dark:bg-zinc-900/70 border border-zinc-100 dark:border-zinc-800 shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="shrink-0">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br from-pink-200 via-rose-200 to-sky-200 dark:from-pink-400/30 dark:via-rose-400/20 dark:to-sky-400/20 p-1">
                <div className="w-full h-full rounded-2xl bg-white dark:bg-zinc-800 grid place-items-center text-3xl">
                  ✨
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                可愛い × モダンな UI が好きなフロントエンド開発者
              </h1>
              <p className="mt-3 text-zinc-600 dark:text-zinc-300">
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
                <a href="#" className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">
                  <Github className="w-4 h-4"/> GitHub
                </a>
                <a href="#" className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">
                  <Linkedin className="w-4 h-4"/> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* プロジェクト */}
      <section id="projects" className="mx-auto max-w-6xl px-4 pb-6 md:pb-10">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Projects</h2>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">最近の制作</span>
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
              <Card className="rounded-3xl border-zinc-100 dark:border-zinc-800 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-zinc-800 dark:text-zinc-100">
                    {p.title}
                    <a href={p.link} className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200">
                      <ExternalLink className="w-4 h-4"/>
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-rose-100 via-pink-100 to-sky-100 dark:from-rose-300/15 dark:via-pink-300/10 dark:to-sky-300/10 grid place-items-center text-5xl">
                    💖
                  </div>
                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map(t => (
                      <Badge key={t} variant="secondary" className="rounded-xl bg-white text-zinc-700 border dark:bg-zinc-800 dark:text-zinc-300">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* スキル */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-6 md:py-10">
        <h2 className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">Skills</h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {skills.map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}>
              <Card className="rounded-3xl border-zinc-100 dark:border-zinc-800">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-zinc-800 dark:text-zinc-100">{s.name}</span>
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">{s.level}%</span>
                  </div>
                  <div className="mt-2 h-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-pink-400 via-rose-400 to-sky-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* アバウト */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-6 md:py-10">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <Card className="rounded-3xl border-zinc-100 dark:border-zinc-800 md:col-span-2">
            <CardHeader>
              <CardTitle className="text-zinc-800 dark:text-zinc-100">About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                フロントエンドとモバイルが得意です。設計はレイヤード／MVVM を状況に応じて使い分け、可読性と DX を重視します。
                UI は「かわいく・軽快で・触っていて気持ちいい」ことがモットー。
              </p>
              <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300"><MapPin className="w-4 h-4"/> Yokohama, JP</div>
                <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300"><Phone className="w-4 h-4"/> お問い合わせはメールから</div>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-3xl border-zinc-100 dark:border-zinc-800">
            <CardHeader>
              <CardTitle className="text-zinc-800 dark:text-zinc-100">Now</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
              <div>• Next.js + microCMS でポートフォリオ CMS 構築中</div>
              <div>• Flutter アプリ「Taskee」UI 調整</div>
              <div>• 記事：Controller ライフサイクル / MVCC まとめ</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* お問い合わせ */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-6 md:py-10">
        <Card className="rounded-3xl border-zinc-100 dark:border-zinc-800">
          <CardHeader>
            <CardTitle className="text-zinc-800 dark:text-zinc-100">Contact</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid md:grid-cols-3 gap-3">
              <Input placeholder="お名前" className="rounded-2xl"/>
              <Input placeholder="メールアドレス" className="rounded-2xl"/>
              <Input placeholder="件名" className="rounded-2xl"/>
              <div className="md:col-span-3">
                <Input placeholder="メッセージ" className="rounded-2xl"/>
              </div>
              <div className="md:col-span-3 flex items-center gap-3">
                <Button className="rounded-2xl bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white">
                  <Mail className="w-4 h-4 mr-1"/> 送信する
                </Button>
                <a href="#" className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">
                  <Github className="w-4 h-4"/> GitHub
                </a>
                <a href="#" className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">
                  <Linkedin className="w-4 h-4"/> LinkedIn
                </a>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* フッター */}
      <footer className="mx-auto max-w-6xl px-4 py-10 text-center text-sm text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} Erina Suzuki. Built with ❤️ Next.js / Tailwind / shadcn / Framer Motion.
      </footer>
    </div>
  );
}
