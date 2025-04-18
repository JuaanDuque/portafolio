import AboutMe from "@/components/about-me";
import Introduction from "@/components/introduction";
import Navbar from "@/components/navbar";
import Experience from '@/components/experience'
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="pb-40">
      <Navbar />
      <Introduction />
      <AboutMe />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
