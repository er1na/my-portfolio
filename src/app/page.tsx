import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
    </div>
  );
}