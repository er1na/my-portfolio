"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/cards/ProjectCard";

interface ProjectsClientProps {
  latestRepos: {
    name: string;
    description: string | null;
    url: string;
    updated_at: string | null | undefined
    languages: string | null | undefined;
  }[];
}

export default function ProjectsClient({ latestRepos }: ProjectsClientProps) {
  
    return (
        <section id="projects" className="mx-auto max-w-6xl px-4 pb-6 md:pb-10">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-semibold text-zinc-900">Projects</h2>
          <span className="text-sm text-zinc-500">最近の制作</span>
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {latestRepos.map((repo, i) => (
            <motion.div key={repo.name} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
              <ProjectCard title={repo.name} description={repo.description} languages={repo.languages} link={repo.url} />
            </motion.div>
          ))}
        </div>
      </section>
    )
}