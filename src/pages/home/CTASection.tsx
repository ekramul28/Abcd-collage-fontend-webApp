"use client"; // Important for motion animations in Next.js 13+ app directory

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Ensure this path is correct

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CTASection = () => {
  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{
        backgroundImage: "url('/path-to-your-college-background.jpg')", // Replace with your college-related image path
      }}
    >
      <div className="absolute inset-0 bg-neutral-800"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-semibold text-white mb-6"
          >
            আপনার শিক্ষা জীবনে পরবর্তী ধাপ নিতে প্রস্তুত?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-white mb-8"
          >
            আমাদের কলেজে যোগ দিন, আপনার ভবিষ্যত গড়ুন, এবং শিক্ষার নতুন সম্ভাবনার
            সন্ধান করুন। আজই আমাদের সাথে শুরু করুন!
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center gap-4"
          >
            <Button
              size="lg"
              className="px-6 py-3 text-lg bg-[#6D28D9] text-white sm:text-xl"
            >
              এখনই ভর্তি হতে আবেদন করুন
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="px-6 py-3 text-lg sm:text-xl"
            >
              আরও জানুন
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
