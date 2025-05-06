"use client";

import React from "react";
import { motion } from "framer-motion";

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
