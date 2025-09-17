import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function CuteModernPortfolio() {
  return (
    <div className={"min-h-dvh bg-white"}>
      {/* ヒーロー */}
      <Hero />

      {/* プロジェクト */}
      <Projects />

      {/* スキル */}
      <Skills />

      {/* アバウト */}
      <About />

      {/* お問い合わせ */}
      <Contact />

    </div>
  );
}
