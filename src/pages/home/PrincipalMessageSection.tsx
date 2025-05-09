"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "@/components/ui/button"; // adjust path if needed
import Link from "next/link";

const PrincipalMessageSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-[#6D28D9] dark:bg-[#0F172A] border ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 ">
          {/* Principal Section */}
          <section className="w-full">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-start gap-8"
            >
              {/* Image Section */}
              <div className=" flex-1">
                <div className="relative w-80 mx-auto lg:flex-1 h-100 shrink-0">
                  {/* Background Layer */}
                  <div className="absolute w-full h-full bg-purple-400 rounded-lg top-6 border-4 border-white rotate-6 left-4 z-0" />
                  {/* Foreground Image */}
                  <div className="absolute w-full h-full bg-white rounded-lg z-10 -top-6 -rotate-6 shadow-xl border-4 border-white overflow-hidden">
                    <Image
                      src="/assets/images/Principal1.jpg"
                      alt="Principal"
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Text Section */}
              <div className="lg:flex-1 space-y-6 text-center border-l-2 pl-3 text-white lg:text-left">
                <div className="w-[80%]">
                  <p className="text-lg leading-relaxed">
                    শিক্ষা একটি জাতির উন্নয়নের প্রধান ভিত্তি। আধুনিক প্রযুক্তি
                    ও ডিজিটাল ব্যবস্থাপনার মাধ্যমে শিক্ষাকে আরও সহজ, আনন্দদায়ক
                    এবং মানসম্পন্ন করা হয়েছে।
                  </p>
                  <p className="text-lg leading-relaxed">
                    বর্তমান বিশ্ব পরিস্থিতিতে ইনডোর ও অনলাইন শিক্ষা একটি নতুন
                    সম্ভাবনার দ্বার উন্মোচন করেছে। শিক্ষার্থীদের জ্ঞান অর্জন এখন
                    আরও সহজলভ্য হয়েছে।
                  </p>
                  <p className="text-lg leading-relaxed">
                    আমাদের কলেজ সৃজনশীল, প্রযুক্তি-নির্ভর এবং মূল্যবোধভিত্তিক
                    শিক্ষার মাধ্যমে একটি আলোকিত জাতি গঠনে অবদান রাখছে। শিক্ষক ও
                    শিক্ষার্থীদের ঐক্যবদ্ধ প্রচেষ্টায় আমরা ভবিষ্যতের চ্যালেঞ্জ
                    মোকাবেলায় প্রস্তুত।
                  </p>

                  <div>
                    <h3 className="text-3xl font-semibold mt-4">
                      মোঃ রেজাউল ইসলাম
                    </h3>
                    <h4 className="text-2xl">Principal</h4>
                  </div>
                </div>

                {/* Logo / Button */}
                <div className="flex items-center justify-center lg:justify-start pt-4">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/assets/images/logo.png"
                      alt="logo"
                      width={1000}
                      height={1000}
                      className="object-contain w-14 h-14"
                    />
                    <span className="ml-2 text-xl font-bold">
                      এ.বি.সি.ডি কলেজ
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrincipalMessageSection;
