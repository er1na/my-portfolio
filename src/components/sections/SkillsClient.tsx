"use client";

import { motion } from "framer-motion";
import SkillsCard from "@/components/cards/SkillsCard";

interface SkillsClientProps {
  ReposLanguages: {
    lang: string;
    percent: number;
  }[];
}

export default function SkillsClient({ ReposLanguages }: SkillsClientProps) {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-6 md:py-10">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Skills</h2>
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {ReposLanguages.map((s, i) => (
          <motion.div
            key={s.lang}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <SkillsCard name={s.lang} level={s.percent} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
