"use client"; // Important for motion animations in Next.js 13+ app directory

import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button"; // Ensure this path is correct

// Sample Event Data
const events = [
  {
    id: 1,
    title: "Annual Science Conference",
    date: "2025-06-15",
    description:
      "Join us for the annual science conference, where experts from around the world gather to discuss cutting-edge innovations in science and technology.",
    link: "/events/annual-science-conference",
  },
  {
    id: 2,
    title: "Career Fair & Networking",
    date: "2025-07-10",
    description:
      "A fantastic opportunity for students to meet industry professionals, network, and explore potential career opportunities.",
    link: "/events/career-fair",
  },
  {
    id: 3,
    title: "Coding Bootcamp: Learn JavaScript",
    date: "2025-08-01",
    description:
      "Get ready to boost your coding skills with our hands-on JavaScript bootcamp. Perfect for beginners and intermediate learners.",
    link: "/events/coding-bootcamp",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const UpcomingEvents = () => {
  return (
    <section className="bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-semibold text-center mb-8"
        >
          Upcoming Events
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="h-6 w-6 text-primary" />
                <span className="text-sm text-muted-foreground">
                  {new Date(event.date).toLocaleDateString()}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {event.title}
              </h3>

              <p className="text-sm text-muted-foreground flex-grow mb-4">
                {event.description}
              </p>

              <Button
                asChild
                variant="outline"
                className="self-start w-full md:w-auto mt-auto"
              >
                <a href={event.link} className="text-primary">
                  Learn More
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
