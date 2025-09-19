import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-6 md:py-10">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">About</h2>
      <Card className="rounded-3xl border-zinc-100 md:col-span-2">
        <CardContent>
          <p className="text-zinc-600 leading-relaxed pt-6">
            モバイル・Webアプリケーションのフロント寄りを中心に開発しています。
            24歳新米エンジニア。
          </p>
          <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2 text-zinc-600">
              <MapPin className="w-4 h-4" /> Yokohama, JP
            </div>
            <div className="flex items-center gap-2 text-zinc-600">
              <Mail className="w-4 h-4" /> お問い合わせはメールから
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
