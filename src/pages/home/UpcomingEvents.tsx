"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    id: 1,
    title: "বার্ষিক বিজ্ঞান সম্মেলন",
    date: "2025-06-15",
    description:
      "বিশ্বব্যাপী বিজ্ঞান ও প্রযুক্তির উদ্ভাবন নিয়ে আলোচনা করার জন্য বিশেষজ্ঞদের একত্রিত করার একটি দুর্দান্ত প্ল্যাটফর্ম।",
    link: "/events/annual-science-conference",
  },
  {
    id: 2,
    title: "ক্যারিয়ার ফেয়ার ও নেটওয়ার্কিং",
    date: "2025-07-10",
    description:
      "শিক্ষার্থীদের জন্য শিল্প পেশাদারদের সাথে দেখা ও পেশাগত নেটওয়ার্ক গড়ে তোলার একটি চমৎকার সুযোগ।",
    link: "/events/career-fair",
  },
  {
    id: 3,
    title: "কোডিং বুটক্যাম্প: জাভাস্ক্রিপ্ট শেখা",
    date: "2025-08-01",
    description:
      "শুরুর থেকে মধ্যবর্তী স্তরের শিক্ষার্থীদের জন্য হাতে-কলমে জাভাস্ক্রিপ্ট শেখার একটি কার্যকরী প্রশিক্ষণ।",
    link: "/events/coding-bootcamp",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const UpcomingEvents = () => {
  return (
    <section className=" pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-primary mb-12"
        >
          আসন্ন ইভেন্টসমূহ
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl p-6 flex flex-col justify-between border border-gray-100"
            >
              <div className="mb-4 flex items-center space-x-2 text-muted-foreground text-sm">
                <Calendar className="w-5 h-5 text-primary" />
                <span>{new Date(event.date).toLocaleDateString("bn-BD")}</span>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {event.title}
              </h3>

              <p className="text-base text-gray-600 mb-6">
                {event.description}
              </p>

              <Button asChild variant="outline" className="w-full">
                <a href={event.link} className="text-sm font-medium">
                  বিস্তারিত দেখুন
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
