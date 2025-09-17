import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone } from "lucide-react";

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
                フロントエンドとモバイルが得意です。設計はレイヤード／MVVM を状況に応じて使い分け、可読性と DX を重視します。
                UI は「かわいく・軽快で・触っていて気持ちいい」ことがモットー。
              </p>
              <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-zinc-600"><MapPin className="w-4 h-4"/> Yokohama, JP</div>
                <div className="flex items-center gap-2 text-zinc-600"><Phone className="w-4 h-4"/> お問い合わせはメールから</div>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-3xl border-zinc-100">
            <CardHeader>
              <CardTitle className="text-zinc-800">Now</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-zinc-600">
              <div>• Next.js + microCMS でポートフォリオ CMS 構築中</div>
              <div>• Flutter アプリ「Taskee」UI 調整</div>
              <div>• 記事：Controller ライフサイクル / MVCC まとめ</div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
}