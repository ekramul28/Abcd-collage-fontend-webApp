"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Facebook, Phone } from "lucide-react"; // using lucide icons

const teachers = [
  {
    name: "ড. জন ডো",
    subject: "পদার্থবিজ্ঞান",
    image: "/teachers/john.jpg",
    email: "john@example.com",
    facebook: "https://facebook.com/john.doe",
    phone: "+880123456789",
  },
  {
    name: "প্রফেসর জেন স্মিথ",
    subject: "গণিত",
    image: "/teachers/jane.jpg",
    email: "jane@example.com",
    facebook: "https://facebook.com/jane.smith",
    phone: "+880198765432",
  },
  {
    name: "ড. এমিলি হোয়াইট",
    subject: "রসায়ন",
    image: "/teachers/emily.jpg",
    email: "emily@example.com",
    facebook: "https://facebook.com/emily.white",
    phone: "+880177778888",
  },
  {
    name: "জনাব ডেভিড ব্রাউন",
    subject: "কম্পিউটার বিজ্ঞান",
    image: "/teachers/david.jpg",
    email: "david@example.com",
    facebook: "https://facebook.com/david.brown",
    phone: "+880166666666",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const Teachers = () => {
  const [[index, direction], setIndex] = useState([0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(([prevIndex]) => [(prevIndex + 1) % teachers.length, 1]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const teacher = teachers[index];

  return (
    <div className="w-full max-w-lg mx-auto py-12 text-center space-y-6">
      <h2 className="text-3xl font-semibold">আমাদের শিক্ষকবৃন্দ</h2>
      <div className="relative overflow-hidden h-[400px]">
        <AnimatePresence custom={direction}>
          <motion.div
            key={teacher.name}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="absolute  flex flex-col items-center justify-center bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 space-y-2"
          >
            <Avatar className="h-24 w-24 mb-3">
              <AvatarImage src={teacher.image} alt={teacher.name} />
              <AvatarFallback>
                {teacher.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-semibold">{teacher.name}</h3>
            <p className="text-muted-foreground">{teacher.subject}</p>

            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center justify-center gap-2">
                <Mail size={16} className="text-primary" /> {teacher.email}
              </p>
              <p className="flex items-center justify-center gap-2">
                <Phone size={16} className="text-primary" /> {teacher.phone}
              </p>
              <p className="flex items-center justify-center gap-2">
                <Facebook size={16} className="text-primary" />
                <a
                  href={teacher.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Facebook Profile
                </a>
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Teachers;
