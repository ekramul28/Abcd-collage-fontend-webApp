"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Fade-in animation
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Fake data for now (to be replaced by real backend data later)
const calendarData = [
  { date: "28 April 2025", day: "Today", status: "Class Started" },
  { date: "29 April 2025", day: "Tomorrow", status: "Class Started" },
  { date: "30 April 2025", day: "Wednesday", status: "Exam Scheduled" },
  { date: "1 May 2025", day: "Thursday", status: "Holiday" },
  { date: "2 May 2025", day: "Friday", status: "Project Due" },
];

// Calendar Item Component
const CalendarItem = ({
  date,
  day,
  status,
}: {
  date: string;
  day: string;
  status: string;
}) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
    variants={fadeInUp}
  >
    <h3 className="text-xl font-semibold text-primary mb-2">{day}</h3>
    <p className="text-gray-600 text-sm mb-2">{date}</p>
    <p className="text-sm text-gray-500">{status}</p>
  </motion.div>
);

// Principal Message Section with Image
const PrincipalMessageSection = () => (
  <section className="bg-gray-100 py-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-semibold text-center mb-8"
      >
        Principal Message
      </motion.h2>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8 max-w-3xl mx-auto"
      >
        {/* Principal Image */}
        <div className="flex-shrink-0">
          <Image
            src="/assets/images/principal.jpg" // Replace with actual image URL
            alt="Principal"
            height={200}
            width={200}
            className="w-32 h-32 rounded-full shadow-lg object-cover"
          />
        </div>

        {/* Principal Message */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-primary mb-2">
            মোঃ রেজাউল ইসলাম
          </h3>
          <h4 className="text-xl text-gray-600 mb-4">Principal</h4>
          <p className="text-lg text-gray-700 leading-relaxed">
            শিক্ষা ব্যক্তির সার্বজনীন বিকাশ ও মানব সম্পদ উন্নয়নের নিয়ামক। তাই
            জাতীয় উন্নয়নের মূল শক্তিও শিক্ষা। শিক্ষা ব্যবস্থার মধ্যেই প্রতিফলিত
            হয় জাতীর আশা আকাঙ্খা। অর্থনৈতিক সামাজিক ও সাংস্কৃতিক জীবন প্রবাহ
            সময়ের পরিবর্তনের ধারায় বদলে গেছে। রাষ্ট্রীয় দর্শন, বিশ্ব পরিস্থিতি,
            আগামীর শিক্ষা ভাবনা ইত্যাদি সমকালীন চিন্তার উৎস হয়ে দাড়িয়েছে।
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            বিশ্ব পরিস্থিতির তাল মোকাবেলায় পরিবর্তন সূচীত হয়েছে বাংলাদেশের
            শিক্ষা ব্যবস্থাতেও। বিজ্ঞান ও প্রযুক্তি আধুনিক শিক্ষা ব্যবস্থার সাথে
            সংযুক্ত হয়ে শিক্ষা ব্যবস্থাকে গড়ে তোলা হয়েছে বিশ্বমানের। বাংলাদেশের
            সমসাময়িক শিক্ষা ব্যবস্থার সকল ক্ষেত্রে Networking Education System
            শিক্ষক ও শিক্ষার্থীদের পাঠকে করে তুলেছে আনন্দঘন, প্রযুক্তি নির্ভর ও
            নিরাপদ। বৈশ্বিক সংকটের কারণে Campus Education এখন Indoor Education এ
            রূপান্তরিত হয়েছে। ফলে আমার ঘর আমার স্কুল শ্লোগানে শিক্ষা ব্যবস্থা
            এগিয়ে চলেছে। বাংলাদেশ সরকারের টেকসই শিক্ষা ভাবনায় বিশ্বায়নের
            চ্যালেঞ্জ মোকাবেলায় রূপকল্প ২০২১ বাস্তবায়নে যশোর জেলার চৌগাছা
            উপজেলার এ.বি.সি.ডি কলেজটি শিক্ষক ছাত্র সম্মিলিত পাঠন পঠন ও দূরপাঠে
            অংশ গ্রহনে শিক্ষা ব্যবস্থাকে আরও সুদৃঢ় করে তুলবে বলে আশা রাখি।
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

// College Calendar Section
const CollegeCalendarSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-semibold text-center mb-8"
        >
          College Calendar
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {calendarData.map((event, index) => (
            <CalendarItem
              key={index}
              date={event.date}
              day={event.day}
              status={event.status}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const PrincipalAndCalendar = () => {
  return (
    <div className="space-y-16">
      <PrincipalMessageSection />
      <CollegeCalendarSection />
    </div>
  );
};

export default PrincipalAndCalendar;
