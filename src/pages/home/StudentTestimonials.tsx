"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "তানভীর হাসান",
    college: "ঢাকা কলেজ",
    message:
      "লার্ন উইথ সুমিত কেবল একটি প্ল্যাটফর্ম নয়, এটি আমার ক্যারিয়ার গঠনের অন্যতম পথপ্রদর্শক। সুমিত ভাইয়ের পড়ানোর ধরন অসাধারণ।",
    image: "/testimonials/tanvir.jpg",
  },
  {
    name: "সাবিহা রহমান",
    college: "ইডেন মহিলা কলেজ",
    message:
      "এই প্ল্যাটফর্ম আমাকে প্রোগ্রামিং শেখার প্রতি ভালোবাসা তৈরি করতে সাহায্য করেছে। টিচিং স্টাইল খুবই প্রাঞ্জল এবং প্র্যাকটিকাল। এই প্ল্যাটফর্ম আমাকে প্রোগ্রামিং শেখার প্রতি ভালোবাসা তৈরি করতে সাহায্য করেছে। টিচিং স্টাইল খুবই প্রাঞ্জল এবং প্র্যাকটিকাল।",
    image: "/testimonials/sabiha.jpg",
  },
  {
    name: "রাকিবুল ইসলাম",
    college: "নটর ডেম কলেজ",
    message:
      "সুমিত ভাইয়ের গাইডলাইন ও কনটেন্টের মান এক কথায় দুর্দান্ত! প্রতিটি লেকচার খুব সুন্দরভাবে গঠিত। সুমিত ভাইয়ের গাইডলাইন ও কনটেন্টের মান এক কথায় দুর্দান্ত! প্রতিটি লেকচার খুব সুন্দরভাবে গঠিত",
    image: "/testimonials/rakib.jpg",
  },
  {
    name: "নাজমুল হক",
    college: "সিটি কলেজ",
    message:
      "আমি এক্সেল থেকে রিয়েক্ট পর্যন্ত অনেক কিছু শিখেছি এই প্ল্যাটফর্ম থেকে। প্রতিটি মডিউলই বাস্তবভিত্তিক ও সহজবোধ্য।",
    image: "/testimonials/nazmul.jpg",
  },
  {
    name: "আফরোজা শারমিন",
    college: "বেগম বদরুন্নেসা কলেজ",
    message:
      "লার্ন উইথ সুমিত এর কমিউনিটি এবং সাপোর্ট সিস্টেম খুবই শক্তিশালী। যেকোন প্রশ্নের দ্রুত উত্তর পাওয়া যায়। সুমিত ভাইয়ের গাইডলাইন ও কনটেন্টের মান এক কথায় দুর্দান্ত! প্রতিটি লেকচার খুব সুন্দরভাবে গঠিত",
    image: "/testimonials/afroza.jpg",
  },
  {
    name: "জুবায়ের আহমেদ",
    college: "কুমিল্লা ভিক্টোরিয়া কলেজ",
    message:
      "জাভাস্ক্রিপ্টের ভীতটা এখান থেকেই গড়ে উঠেছে। এখন আমি ওয়েব ডেভেলপমেন্ট নিয়ে আত্মবিশ্বাসী। সুমিত ভাইয়ের গাইডলাইন ও কনটেন্টের মান এক কথায় দুর্দান্ত! প্রতিটি লেকচার খুব সুন্দরভাবে গঠিত সুমিত ভাইয়ের গাইডলাইন ও কনটেন্টের মান এক কথায় দুর্দান্ত! প্রতিটি লেকচার খুব সুন্দরভাবে গঠিত",
    image: "/testimonials/jubayer.jpg",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const StudentTestimonials = () => {
  return (
    <section className="py-16 bg-background dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center text-primary dark:text-white mb-4"
        >
          স্টুডেন্টদের মতামত
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-muted-foreground dark:text-gray-300 text-base mb-12"
        >
          এবিসিডি কলেজের সম্পর্কে শিক্ষার্থীদের মতামত
        </motion.p>

        {/* Using CSS Columns instead of grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow mb-8 break-inside-avoid-column"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-primary dark:text-white">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground dark:text-gray-400">
                    {item.college}
                  </p>
                </div>
              </div>

              <Quote className="h-6 w-6 mt-2 text-blue-500 mb-4" />

              <p className="text-sm text-gray-700 dark:text-gray-300 flex-1 mb-4">
                {item.message}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;
