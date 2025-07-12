import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Projects />
      <Footer />
    </div>
  )
}