import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({
  title,
  description,
  languages,
  link,
}: {
  title: string;
  description: string | null;
  languages: string | null | undefined;
  link: string;
}) {
  return (
    <Card className="rounded-3xl border-zinc-100 hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-zinc-800">
          {title}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-700"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-rose-100 via-pink-100 to-sky-100 grid place-items-center text-5xl">
          💖
        </div>
        <p className="mt-3 text-sm text-zinc-600">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge
            variant="secondary"
            className="rounded-xl bg-white text-zinc-700 border"
          >
            {languages}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
