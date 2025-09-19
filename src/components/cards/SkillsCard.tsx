import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function SkillsCard({
  name,
  level,
}: {
  name: string;
  level: number;
}) {
  return (
    <Card className="rounded-3xl border-zinc-100">
      <CardContent className="pt-5">
        <div className="flex items-center justify-between">
          <span className="font-medium text-zinc-800">{name}</span>
          <span className="text-sm text-zinc-500">{level}%</span>
        </div>
        <div className="mt-2 h-3 rounded-xl bg-zinc-100 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-pink-400 via-rose-400 to-sky-400"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
