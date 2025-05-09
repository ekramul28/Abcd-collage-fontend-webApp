"use client";

import { Mail, Facebook, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const teachers = [
  {
    name: "ড. জন ডো",
    subject: "পদার্থবিজ্ঞান",
    image: "/assets/images/teacher1.jpg",
    email: "john@example.com",
    facebook: "#",
    phone: "+880123456789",
  },
  {
    name: "প্রফেসর জেন স্মিথ",
    subject: "গণিত",
    image: "/assets/images/teacher1.jpg",
    email: "jane@example.com",
    facebook: "#",
    phone: "+880198765432",
  },
  {
    name: "ড. এমিলি হোয়াইট",
    subject: "রসায়ন",
    image: "/assets/images/teacher1.jpg",
    email: "emily@example.com",
    facebook: "#",
    phone: "+880177778888",
  },
  {
    name: "জনাব ডেভিড ব্রাউন",
    subject: "কম্পিউটার বিজ্ঞান",
    image: "/assets/images/teacher1.jpg",
    email: "david@example.com",
    facebook: "#",
    phone: "+880166666666",
  },
  {
    name: "মোঃ হাসান আলী",
    subject: "বাংলা",
    image: "/assets/images/teacher1.jpg",
    email: "hasan@example.com",
    facebook: "#",
    phone: "+880199999999",
  },
  {
    name: "শাহানা পারভিন",
    subject: "ইংরেজি",
    image: "/assets/images/teacher1.jpg",
    email: "shahana@example.com",
    facebook: "#",
    phone: "+880188888888",
  },
  {
    name: "রিয়াজ আহমেদ",
    subject: "ইতিহাস",
    image: "/assets/images/teacher1.jpg",
    email: "riaz@example.com",
    facebook: "#",
    phone: "+880177777777",
  },
  {
    name: "সাবিনা ইয়াসমিন",
    subject: "জীববিজ্ঞান",
    image: "/assets/images/teacher1.jpg",
    email: "sabina@example.com",
    facebook: "#",
    phone: "+880155555555",
  },
  {
    name: "আরিফ খান",
    subject: "ভূগোল",
    image: "/assets/images/teacher1.jpg",
    email: "arif@example.com",
    facebook: "#",
    phone: "+880144444444",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function TeachersGridView() {
  const [showAll, setShowAll] = useState(false);
  const visibleTeachers = showAll ? teachers : teachers.slice(0, 8);

  return (
    <div className="container mx-auto py-12 px-4 text-center space-y-10">
      <motion.h2
        className="text-4xl font-bold text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        আমাদের শিক্ষকবৃন্দ
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {visibleTeachers.map((teacher, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="group bg-white dark:bg-gray-900 dark:border border-amber-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:ring-2 hover:ring-blue-400 transition-all duration-300"
          >
            <div className="relative h-44 w-full overflow-hidden">
              <Image
                src={teacher.image}
                alt={teacher.name}
                fill
                className="object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-5 text-left transition-transform duration-300 group-hover:translate-y-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {teacher.name}
              </h3>
              <p className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-800 dark:text-white mb-4">
                {teacher.subject}
              </p>

              <div className="flex gap-3 items-center">
                <a
                  href={`mailto:${teacher.email}`}
                  className="hover:bg-blue-100 p-2 rounded-full transition"
                  title="Email"
                >
                  <Mail className="h-5 w-5 text-blue-500" />
                </a>
                <a
                  href={`tel:${teacher.phone}`}
                  className="hover:bg-green-100 p-2 rounded-full transition"
                  title="Call"
                >
                  <Phone className="h-5 w-5 text-green-600" />
                </a>
                <a
                  href={teacher.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:bg-blue-100 p-2 rounded-full transition"
                  title="Facebook"
                >
                  <Facebook className="h-5 w-5 text-blue-700" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {teachers.length > 8 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            {showAll ? "কম দেখান" : "সব দেখান"}
          </button>
        </motion.div>
      )}
    </div>
  );
}
