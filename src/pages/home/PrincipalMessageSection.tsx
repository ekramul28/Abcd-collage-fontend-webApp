"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import CollegeCalendarSection from "./CollegeCalendarSection";

const PrincipalMessageSection = () => {
  // Fade-in animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="flex container mx-auto px-4 sm:px-6 lg:px-8 gap-2 py-20">
      <section className=" flex-1/2 ">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold text-center text-primary mb-12"
        >
          Principal Message
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12 max-w-5xl mx-auto"
        >
          {/* Principal Image */}
          <div className="flex-shrink-0 rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
            <Image
              src="/assets/images/principal.jpg" // Replace with actual image URL
              alt="Principal"
              height={250}
              width={250}
              className="w-64 h-64 object-cover"
            />
          </div>

          {/* Principal Message */}
          <div className="space-y-6 max-w-lg mx-auto lg:mx-0">
            <h3 className="text-3xl font-semibold text-primary mb-2">
              মোঃ রেজাউল ইসলাম
            </h3>
            <h4 className="text-2xl  mb-6">Principal</h4>
            <p className="text-lg  leading-relaxed">
              শিক্ষা ব্যক্তির সার্বজনীন বিকাশ ও মানব সম্পদ উন্নয়নের নিয়ামক। তাই
              জাতীয় উন্নয়নের মূল শক্তিও শিক্ষা। শিক্ষা ব্যবস্থার মধ্যেই
              প্রতিফলিত হয় জাতীর আশা আকাঙ্খা। অর্থনৈতিক সামাজিক ও সাংস্কৃতিক
              জীবন প্রবাহ সময়ের পরিবর্তনের ধারায় বদলে গেছে।
            </p>
            <p className="text-lg  leading-relaxed mt-4">
              বিশ্ব পরিস্থিতির তাল মোকাবেলায় পরিবর্তন সূচীত হয়েছে বাংলাদেশের
              শিক্ষা ব্যবস্থাতেও। বিজ্ঞান ও প্রযুক্তি আধুনিক শিক্ষা ব্যবস্থার
              সাথে সংযুক্ত হয়ে শিক্ষা ব্যবস্থাকে গড়ে তোলা হয়েছে বিশ্বমানের।
              বাংলাদেশের সমসাময়িক শিক্ষা ব্যবস্থার সকল ক্ষেত্রে Networking
              Education System শিক্ষক ও শিক্ষার্থীদের পাঠকে করে তুলেছে আনন্দঘন,
              প্রযুক্তি নির্ভর ও নিরাপদ।
            </p>
            <p className="text-lg  leading-relaxed mt-4">
              বৈশ্বিক সংকটের কারণে Campus Education এখন Indoor Education এ
              রূপান্তরিত হয়েছে। ফলে আমার ঘর আমার স্কুল শ্লোগানে শিক্ষা ব্যবস্থা
              এগিয়ে চলেছে। বাংলাদেশ সরকারের টেকসই শিক্ষা ভাবনায় বিশ্বায়নের
              চ্যালেঞ্জ মোকাবেলায় রূপকল্প ২০২১ বাস্তবায়নে যশোর জেলার চৌগাছা
              উপজেলার এ.বি.সি.ডি কলেজটি শিক্ষক ছাত্র সম্মিলিত পাঠন পঠন ও দূরপাঠে
              অংশ গ্রহনে শিক্ষা ব্যবস্থাকে আরও সুদৃঢ় করে তুলবে বলে আশা রাখি।
            </p>
          </div>
        </motion.div>
      </section>
      <div className="flex-1/2">
        <CollegeCalendarSection />
      </div>
    </div>
  );
};

export default PrincipalMessageSection;
