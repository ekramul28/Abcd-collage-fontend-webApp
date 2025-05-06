"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import CollegeCalendarSection from "./CollegeCalendarSection";

const PrincipalMessageSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        {/* Principal Section */}
        <section className="w-full lg:w-1/2">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8"
          >
            {/* Image */}
            <div className="flex-shrink-0 rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
              <Image
                src="/assets/images/principal.jpg"
                alt="Principal"
                height={250}
                width={250}
                className="w-64 h-64 object-cover"
              />
            </div>

            {/* Message */}
            <div className="space-y-6 max-w-lg text-center lg:text-left">
              <h3 className="text-3xl font-semibold text-primary">
                মোঃ রেজাউল ইসলাম
              </h3>
              <h4 className="text-2xl">Principal</h4>
              <p className="text-lg leading-relaxed">
                শিক্ষা একটি জাতির উন্নয়নের প্রধান ভিত্তি। আধুনিক প্রযুক্তি ও
                ডিজিটাল ব্যবস্থাপনার মাধ্যমে শিক্ষাকে আরও সহজ, আনন্দদায়ক এবং
                মানসম্পন্ন করা হয়েছে।
              </p>
              <p className="text-lg leading-relaxed">
                বর্তমান বিশ্ব পরিস্থিতিতে ইনডোর ও অনলাইন শিক্ষা একটি নতুন
                সম্ভাবনার দ্বার উন্মোচন করেছে। শিক্ষার্থীদের জ্ঞান অর্জন এখন আরও
                সহজলভ্য হয়েছে।
              </p>
              <p className="text-lg leading-relaxed">
                আমাদের কলেজ সৃজনশীল, প্রযুক্তি-নির্ভর এবং মূল্যবোধভিত্তিক
                শিক্ষার মাধ্যমে একটি আলোকিত জাতি গঠনে অবদান রাখছে। শিক্ষক ও
                শিক্ষার্থীদের ঐক্যবদ্ধ প্রচেষ্টায় আমরা ভবিষ্যতের চ্যালেঞ্জ
                মোকাবেলায় প্রস্তুত।
              </p>
            </div>
          </motion.div>
        </section>

        {/* Calendar Section */}
        <div className="w-full lg:w-1/2">
          <CollegeCalendarSection />
        </div>
      </div>
    </div>
  );
};

export default PrincipalMessageSection;
