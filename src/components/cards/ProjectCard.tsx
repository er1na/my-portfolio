import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ title, description, tags, link }: { title: string, description: string, tags: string[], link: string }) {
    return (
        <Card className="rounded-3xl border-zinc-100 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-zinc-800 dark:text-zinc-100">
                    {title}
                    <a href={link} className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200">
                      <ExternalLink className="w-4 h-4"/>
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-rose-100 via-pink-100 to-sky-100 dark:from-rose-300/15 dark:via-pink-300/10 dark:to-sky-300/10 grid place-items-center text-5xl">
                    💖
                  </div>
                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">{description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {tags.map(t => (
                      <Badge key={t} variant="secondary" className="rounded-xl bg-white text-zinc-700 border dark:bg-zinc-800 dark:text-zinc-300">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
    )
}