import About from "@/sections/About";
import Experience from "@/sections/Experience";

export default function LandingPage() {
  return (
    <main className="w-full max-w-7xl mx-auto p-4 px-4 md:px-8 space-y-12 md:space-y-16">
      <About />
      <Experience />
    </main>
  );
}
