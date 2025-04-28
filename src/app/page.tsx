import Navbar from "@/pages/home/Navbar";
import Footer from "@/pages/home/Footer";
import Hero from "@/pages/home/Hero";
import About from "@/pages/home/About";
import UpcomingEvents from "@/pages/home/UpcomingEvents";
import CTASection from "@/pages/home/CTASection";
export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
      <UpcomingEvents />
      <CTASection />
      <Footer />
    </main>
  );
}
