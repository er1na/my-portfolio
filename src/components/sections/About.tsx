import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Mail } from "lucide-react";
import Now from "./Now";
export default function About() {
    return (
        <section id="about" className="mx-auto max-w-6xl px-4 py-6 md:py-10">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <Card className="rounded-3xl border-zinc-100 md:col-span-2">
            <CardHeader>
              <CardTitle className="text-zinc-800">About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-600 leading-relaxed">
                XXXXXXXXXXXXXX
              </p>
              <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-zinc-600"><MapPin className="w-4 h-4"/> Yokohama, JP</div>
                <div className="flex items-center gap-2 text-zinc-600"><Mail className="w-4 h-4"/> お問い合わせはメールから</div>
              </div>
            </CardContent>
          </Card>
          <Now />
        </div>
      </section>
    )
}