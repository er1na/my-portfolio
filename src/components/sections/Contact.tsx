"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setStatus("idle");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("success");
      reset();  
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-6 md:py-10">
      <Card className="rounded-3xl border-zinc-100">
        <CardHeader>
          <CardTitle className="text-zinc-800">Contact</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-3 gap-3">
            {/* お名前 */}
            <div className="md:col-span-1">
              <Input
                placeholder="お名前"
                className="rounded-2xl"
                aria-invalid={!!errors.name}
                {...register("name", { required: "お名前は必須です" })}
              />
              {errors.name && <p className="mt-1 text-sm text-rose-600">{errors.name.message}</p>}
            </div>

            {/* メール */}
            <div className="md:col-span-1">
              <Input
                placeholder="メールアドレス"
                type="email"
                className="rounded-2xl"
                aria-invalid={!!errors.email}
                {...register("email", {
                  required: "メールアドレスは必須です",
                  pattern: { value: /^\S+@\S+$/, message: "メール形式が不正です" },
                })}
              />
              {errors.email && <p className="mt-1 text-sm text-rose-600">{errors.email.message}</p>}
            </div>

            {/* 件名 */}
            <div className="md:col-span-1">
              <Input
                placeholder="件名"
                className="rounded-2xl"
                aria-invalid={!!errors.subject}
                {...register("subject", { required: "件名は必須です" })}
              />
              {errors.subject && <p className="mt-1 text-sm text-rose-600">{errors.subject.message}</p>}
            </div>

            {/* メッセージ */}
            <div className="md:col-span-3">
              <textarea
                placeholder="メッセージ"
                className="rounded-2xl w-full min-h-28 px-3 py-2 border bg-background"
                aria-invalid={!!errors.message}
                {...register("message", { required: "メッセージは必須です", minLength: { value: 3, message: "3文字以上入力してください" } })}
              />
              {errors.message && <p className="mt-1 text-sm text-rose-600">{errors.message.message}</p>}
            </div>

            <div className="md:col-span-3 flex items-center gap-3">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="rounded-2xl bg-zinc-900 hover:bg-zinc-800"
              >
                <Mail className="w-4 h-4 mr-1" />
                {isSubmitting ? "送信中…" : "送信する"}
              </Button>

              {status === "success" && (
                <span className="text-sm text-green-600">送信しました</span>
              )}
              {status === "error" && (
                <span className="text-sm text-rose-600">送信に失敗しました</span>
              )}
              {isSubmitSuccessful && status === "idle" && (
                <span className="text-sm text-zinc-500">送信完了</span>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
