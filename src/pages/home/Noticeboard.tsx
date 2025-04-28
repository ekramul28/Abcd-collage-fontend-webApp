"use client"; // Important for motion animations in Next.js 13+ app directory

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react"; // Icon for "Read more" links or other actions
import { jsPDF } from "jspdf"; // Import jsPDF for PDF generation

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const notices = [
  {
    title: "New Semester Schedule Released",
    description:
      "The new semester schedule is now available for download. Please check the academic calendar for all important dates.",
    link: "/semesters/schedule",
    pdfContent: "This is the content for the Semester Schedule notice.",
  },
  {
    title: "Student Portal Maintenance",
    description:
      "The student portal will undergo maintenance this weekend. It will be unavailable from 10:00 PM on Friday to 6:00 AM on Saturday.",
    link: "/maintenance",
    pdfContent:
      "This is the content for the Student Portal Maintenance notice.",
  },
  {
    title: "Join the Annual Sports Day",
    description:
      "Our annual sports day is just around the corner! Register for the event and get ready to show your skills.",
    link: "/events/sports-day",
    pdfContent: "This is the content for the Sports Day notice.",
  },
  {
    title: "Career Counseling Session",
    description:
      "We are hosting a career counseling session for all students this Friday. Don't miss out on this opportunity to boost your career prospects.",
    link: "/events/career-counseling",
    pdfContent: "This is the content for the Career Counseling notice.",
  },
];

const generatePDF = (title: string, content: string) => {
  const doc = new jsPDF();
  doc.text("Notice Title: " + title, 10, 10);
  doc.text("Notice Content: " + content, 10, 20);
  doc.save(`${title}.pdf`);
};

const NoticeBoard = () => {
  return (
    <section className=" py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-semibold text-center mb-8"
        >
          Latest Notices
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {notices.map((notice, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">
                {notice.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {notice.description}
              </p>
              <div className="flex justify-between items-center">
                <a
                  href={notice.link}
                  className="flex items-center text-primary hover:text-primary-dark transition-colors"
                >
                  <span className="text-sm">Read More</span>
                  <ChevronRight className="h-4 w-4 ml-2" />
                </a>
                <button
                  onClick={() => generatePDF(notice.title, notice.pdfContent)}
                  className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
                >
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NoticeBoard;
