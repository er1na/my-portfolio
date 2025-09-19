"use client";
import { useEffect, useRef } from "react";

type Particle = {
  el: HTMLSpanElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  emoji: string;
};

export default function FloatingEmojisFloating({
  emojis = ["🎀", "😃", "🐶", "❄️"],
  count = 12,
  speed = 1.2,
}: {
  emojis?: string[];
  count?: number;
  speed?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const emoji = emojis[i % emojis.length];
      const size = 60 + Math.random() * 24;
      const span = document.createElement("span");
      span.textContent = emoji;
      span.style.position = "absolute";
      span.style.fontSize = `${size}px`;
      span.style.opacity = "0.3";
      span.style.pointerEvents = "none";

      const x = Math.random() * (width - size);
      const y = Math.random() * (height - size);
      const vx = (Math.random() - 0.5) * 2 * speed;
      const vy = (Math.random() - 0.5) * 2 * speed;

      container.appendChild(span);

      particles.push({ el: span, x, y, vx, vy, size, emoji });
    }

    let animationFrame: number;
    const tick = () => {
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= 0 || p.x + p.size >= width) {
          p.vx *= -1;
          p.x = Math.max(0, Math.min(width - p.size, p.x));
        }
        if (p.y <= 0 || p.y + p.size >= height) {
          p.vy *= -1;
          p.y = Math.max(0, Math.min(height - p.size, p.y));
        }

        p.el.style.transform = `translate(${p.x}px, ${p.y}px)`;
      }
      animationFrame = requestAnimationFrame(tick);
    };

    animationFrame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationFrame);
      particles.forEach((p) => p.el.remove());
    };
  }, [count, emojis, speed]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
    />
  );
}
