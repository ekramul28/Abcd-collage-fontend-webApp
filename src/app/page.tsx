import Hero from "@/pages/home/Hero";
import About from "@/pages/home/About";
import UpcomingEvents from "@/pages/home/UpcomingEvents";
import CTASection from "@/pages/home/CTASection";
import NoticeBoard from "@/pages/home/Noticeboard";

import LatestNewsSection from "@/pages/home/LatestNewsSection";
import PrincipalMessageSection from "@/pages/home/PrincipalMessageSection";
import Teachers from "@/pages/home/Teachers";
import StudentTestimonials from "@/pages/home/StudentTestimonials";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <PrincipalMessageSection />
      <Teachers />
      <LatestNewsSection />
      {/* <UpcomingEvents /> */}

      <NoticeBoard />
      <StudentTestimonials />
      <CTASection />
    </main>
  );
}
