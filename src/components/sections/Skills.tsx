"use client";

import { motion } from "framer-motion";
import SkillsCard from "@/components/cards/SkillsCard";

const skills = [
  { name: "TypeScript", level: 85 },
  { name: "React / Next.js", level: 88 },
  { name: "Flutter / Dart", level: 82 },
  { name: "DB (Prisma/MySQL)", level: 75 },
  { name: "UI/UX", level: 72 },
];

export default function Skills() {
    return (
        <section id="skills" className="mx-auto max-w-6xl px-4 py-6 md:py-10">
        <h2 className="text-xl md:text-2xl font-semibold dark:text-zinc-50 mb-4">Skills</h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {skills.map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}>
              <SkillsCard name={s.name} level={s.level} />
            </motion.div>
          ))}
        </div>
      </section>
    )
}