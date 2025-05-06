import Hero from "@/pages/home/Hero";
import About from "@/pages/home/About";
import UpcomingEvents from "@/pages/home/UpcomingEvents";
import CTASection from "@/pages/home/CTASection";
import NoticeBoard from "@/pages/home/Noticeboard";

import LatestNewsSection from "@/pages/home/LatestNewsSection";
import PrincipalMessageSection from "@/pages/home/PrincipalMessageSection";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <PrincipalMessageSection />
      <LatestNewsSection />
      <UpcomingEvents />
      <NoticeBoard />
      <CTASection />
    </main>
  );
}
