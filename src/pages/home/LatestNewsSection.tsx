import React from "react";
import { motion } from "framer-motion";

// Latest News Section
export default function LatestNewsSection() {
  // Dummy data for Latest News (this will be replaced with backend data in real implementation)
  const latestNewsData = [
    {
      title: "Important Announcement Regarding College Admissions",
      description:
        "The college administration has announced that applications for the upcoming academic year will be accepted from June 1st. Ensure you submit your application before the deadline.",
      date: "25 April 2025",
      author: "Admin",
    },
    {
      title: "Exam Schedule Released for Spring Semester",
      description:
        "The spring semester exam schedule has been released. Check the official website for detailed dates and instructions.",
      date: "22 April 2025",
      author: "Exams Committee",
    },
    {
      title: "Sports Day Event Coming Soon",
      description:
        "Get ready for the annual sports day event! Participation from all departments is encouraged. Stay tuned for more details.",
      date: "20 April 2025",
      author: "Sports Department",
    },
    {
      title: "New Online Portal for Student Resources Launched",
      description:
        "The college has launched a new online portal where students can access resources, track their academic progress, and interact with faculty members.",
      date: "18 April 2025",
      author: "Tech Department",
    },
    {
      title: "Annual Cultural Fest Registration Now Open",
      description:
        "The registration for the college’s annual cultural fest is now open! Get your team together and register for a chance to win exciting prizes.",
      date: "15 April 2025",
      author: "Cultural Club",
    },
  ];

  // Fade-in animation for each item
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className=" py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-semibold text-center mb-8"
        >
          Latest News
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {latestNewsData.map((news, index) => (
            <div key={index}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                <p className="text-sm text-gray-500 mb-4">
                  {news.author} | {news.date}
                </p>
                <p className="text-gray-700">{news.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
