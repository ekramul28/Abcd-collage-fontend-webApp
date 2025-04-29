import Navbar from "@/pages/home/Navbar";
import Footer from "@/pages/home/Footer";
import Hero from "@/pages/home/Hero";
import About from "@/pages/home/About";
import UpcomingEvents from "@/pages/home/UpcomingEvents";
import CTASection from "@/pages/home/CTASection";
import NoticeBoard from "@/pages/home/Noticeboard";
import PrincipalMessageSection from "@/pages/home/CollegeCalendarSection";
import LatestNewsSection from "@/pages/home/LatestNewsSection";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
      <PrincipalMessageSection />
      <LatestNewsSection />
      <UpcomingEvents />
      <NoticeBoard />
      <CTASection />
      <Footer />
    </main>
  );
}
