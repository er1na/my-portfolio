"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/cards/ProjectCard";

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

export default function Projects() {
    return (
        <section id="projects" className="mx-auto max-w-6xl px-4 pb-6 md:pb-10">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Projects</h2>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">最近の制作</span>
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
              <ProjectCard title={p.title} description={p.description} tags={p.tags} link={p.link} />
            </motion.div>
          ))}
        </div>
      </section>
    )
}