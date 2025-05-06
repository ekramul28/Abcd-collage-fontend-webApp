"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Facebook, Phone } from "lucide-react";

const teachers = [
  {
    name: "ড. জন ডো",
    subject: "পদার্থবিজ্ঞান",
    image: "/teachers/john.jpg",
    email: "john@example.com",
    facebook: "#",
    phone: "+880123456789",
  },
  {
    name: "প্রফেসর জেন স্মিথ",
    subject: "গণিত",
    image: "/teachers/jane.jpg",
    email: "jane@example.com",
    facebook: "#",
    phone: "+880198765432",
  },
  {
    name: "ড. এমিলি হোয়াইট",
    subject: "রসায়ন",
    image: "/teachers/emily.jpg",
    email: "emily@example.com",
    facebook: "#",
    phone: "+880177778888",
  },
  {
    name: "জনাব ডেভিড ব্রাউন",
    subject: "কম্পিউটার বিজ্ঞান",
    image: "/teachers/david.jpg",
    email: "david@example.com",
    facebook: "#",
    phone: "+880166666666",
  },
  {
    name: "মোঃ হাসান আলী",
    subject: "বাংলা",
    image: "/teachers/hasan.jpg",
    email: "hasan@example.com",
    facebook: "#",
    phone: "+880199999999",
  },
  {
    name: "শাহানা পারভিন",
    subject: "ইংরেজি",
    image: "/teachers/shahana.jpg",
    email: "shahana@example.com",
    facebook: "#",
    phone: "+880188888888",
  },
  {
    name: "রিয়াজ আহমেদ",
    subject: "ইতিহাস",
    image: "/teachers/riaz.jpg",
    email: "riaz@example.com",
    facebook: "#",
    phone: "+880177777777",
  },
];

// Split teachers into batches of 5
const batchSize = 5;
const batches = Array.from(
  { length: Math.ceil(teachers.length / batchSize) },
  (_, i) => teachers.slice(i * batchSize, i * batchSize + batchSize)
);

const slideVariants = {
  enter: { opacity: 0, x: 100 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

export default function Teachers() {
  const [batchIndex, setBatchIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBatchIndex((prev) => (prev + 1) % batches.length);
    }, 8000); // Change batch every 8 seconds
    return () => clearInterval(interval);
  }, []);

  const currentBatch = batches[batchIndex];

  return (
    <div className="container mx-auto py-12 space-y-6 text-center">
      <h2 className="text-3xl font-semibold">আমাদের শিক্ষকবৃন্দ</h2>
      <AnimatePresence mode="wait">
        <motion.div
          key={batchIndex}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {currentBatch.map((teacher, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow hover:shadow-md transition"
            >
              <Avatar className="h-28 w-full mx-auto mb-4 rounded-none">
                <AvatarImage src={teacher.image} alt={teacher.name} />
                <AvatarFallback>
                  {teacher.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold">{teacher.name}</h3>
              <p className="text-muted-foreground text-sm">{teacher.subject}</p>
              <div className="mt-3 flex justify-center items-center gap-4 text-muted-foreground">
                <a
                  href={`mailto:${teacher.email}`}
                  className="hover:scale-110 transition"
                  title="Email"
                >
                  <Mail className="h-5 w-5 text-blue-500" />
                </a>
                <a
                  href={`tel:${teacher.phone}`}
                  className="hover:scale-110 transition"
                  title="Call"
                >
                  <Phone className="h-5 w-5 text-green-600" />
                </a>
                <a
                  href={teacher.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-110 transition"
                  title="Facebook"
                >
                  <Facebook className="h-5 w-5 text-blue-700" />
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
