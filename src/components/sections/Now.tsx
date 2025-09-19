import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Now() {
    return (
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
    )
}