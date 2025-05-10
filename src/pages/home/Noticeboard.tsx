"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const notices = [
  {
    title: "নতুন সেমিস্টার সময়সূচি প্রকাশিত হয়েছে",
    description:
      "নতুন সেমিস্টারের সময়সূচি এখন ডাউনলোডের জন্য উপলব্ধ। অনুগ্রহ করে সমস্ত গুরুত্বপূর্ণ তারিখের জন্য একাডেমিক ক্যালেন্ডার দেখুন।",
    link: "/semesters/schedule",
    pdfUrl: "/pdfs/semester-schedule.pdf",
  },
  {
    title: "স্টুডেন্ট পোর্টাল রক্ষণাবেক্ষণ",
    description:
      "স্টুডেন্ট পোর্টালের রক্ষণাবেক্ষণ কাজ এই সপ্তাহান্তে চলবে। শুক্রবার রাত ১০টা থেকে শনিবার সকাল ৬টা পর্যন্ত এটি ব্যবহারযোগ্য থাকবে না।",
    link: "/maintenance",
    pdfUrl: "/pdfs/portal-maintenance.pdf",
  },
  {
    title: "বার্ষিক স্পোর্টস ডে-তে যোগ দিন",
    description:
      "আমাদের বার্ষিক স্পোর্টস ডে আসছে! ইভেন্টের জন্য রেজিস্ট্রেশন করুন এবং আপনার দক্ষতা প্রদর্শনের জন্য প্রস্তুত হন।",
    link: "/events/sports-day",
    pdfUrl: "/pdfs/sports-day.pdf",
  },
  {
    title: "ক্যারিয়ার কাউন্সেলিং সেশন",
    description:
      "এই শুক্রবার আমরা একটি ক্যারিয়ার কাউন্সেলিং সেশনের আয়োজন করেছি। এটি আপনার ক্যারিয়ার উন্নয়নে সহায়ক হবে।",
    link: "/events/career-counseling",
    pdfUrl: "/pdfs/career-counseling.pdf",
  },
];

const NoticeBoard = () => {
  return (
    <section className="py-12 bg-background dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-10 text-primary dark:text-white"
        >
          সর্বশেষ নোটিশ
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {notices.map((notice, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
                {notice.title}
              </h3>
              <p className="text-sm text-muted-foreground dark:text-gray-300 mb-4">
                {notice.description}
              </p>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <a
                  href={notice.link}
                  className="flex items-center text-sm text-[#6D28D9] hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition"
                >
                  বিস্তারিত দেখুন
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>

                <div className="flex gap-2">
                  <a
                    href={notice.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600"
                  >
                    PDF দেখুন
                  </a>
                  <a
                    href={notice.pdfUrl}
                    download
                    className="text-sm bg-[#6D28D9] hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                  >
                    ডাউনলোড করুন
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NoticeBoard;
