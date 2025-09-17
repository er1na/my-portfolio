import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="mx-auto max-w-6xl px-4 py-6 md:py-10">
        <Card className="rounded-3xl border-zinc-100">
          <CardHeader>
            <CardTitle className="text-zinc-800">Contact</CardTitle>
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
                <Button className="rounded-2xl bg-zinc-900 hover:bg-zinc-800">
                  <Mail className="w-4 h-4 mr-1"/> 送信する
                </Button>
                <a href="#" className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900">
                  <Github className="w-4 h-4"/> GitHub
                </a>
                <a href="#" className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900">
                  <Linkedin className="w-4 h-4"/> LinkedIn
                </a>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    )
}