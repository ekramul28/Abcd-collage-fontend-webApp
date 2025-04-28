"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const teachers = [
  {
    name: "Dr. John Doe",
    subject: "Physics",
    image: "/teachers/john.jpg",
    linkedin: "#",
    email: "john.doe@example.com",
    phone: "+1-555-1234",
  },
  {
    name: "Prof. Jane Smith",
    subject: "Mathematics",
    image: "/teachers/jane.jpg",
    linkedin: "#",
    email: "jane.smith@example.com",
    phone: "+1-555-5678",
  },
  {
    name: "Dr. Emily White",
    subject: "Chemistry",
    image: "/teachers/emily.jpg",
    linkedin: "#",
    email: "emily.white@example.com",
    phone: "+1-555-9012",
  },
  {
    name: "Mr. David Brown",
    subject: "Computer Science",
    image: "/teachers/david.jpg",
    linkedin: "#",
    email: "david.brown@example.com",
    phone: "+1-555-3456",
  },
];

const stats = [
  { label: "Students", value: "2,500+" },
  { label: "Courses", value: "150+" },
  { label: "Teachers", value: "120+" },
  { label: "Awards", value: "30+" },
];

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-24">
      {/* Introduction */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <h1 className="text-5xl font-bold tracking-tight">
          Welcome to XYZ College
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
          Shaping futures through excellence in education and innovation since
          1990.
        </p>
      </motion.section>

      {/* Vision, Mission, History */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        {["Our Vision", "Our Mission", "Our History"].map((title, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-xl transition">
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {title === "Our Vision" &&
                  "To be a global leader in education fostering creativity, innovation, and lifelong learning."}
                {title === "Our Mission" &&
                  "Empowering students with knowledge, skills, and values to become responsible global citizens."}
                {title === "Our History" &&
                  "Established in 1990, XYZ College has consistently ranked among the top educational institutions nationally."}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.section>

      {/* College Statistics */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-100 dark:bg-gray-800 rounded-xl py-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Meet Our Faculty */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-semibold text-center mb-12">
          Meet Our Esteemed Faculty
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="flex flex-col items-center text-center p-6 hover:shadow-2xl transition group">
                <Avatar className="h-28 w-28 mb-4">
                  <AvatarImage
                    src={teacher.image || "/default-avatar.png"}
                    alt={teacher.name}
                  />

                  <AvatarFallback>
                    {teacher.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <CardHeader className="p-0 space-y-1">
                  <CardTitle className="text-xl group-hover:text-primary transition">
                    {teacher.name}
                  </CardTitle>
                  <div className="text-muted-foreground">{teacher.subject}</div>
                </CardHeader>

                <CardContent className="flex gap-4 justify-center mt-4">
                  <Button variant="ghost" size="icon" asChild>
                    <a
                      href={teacher.linkedin}
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5 text-blue-600" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={`mailto:${teacher.email}`} aria-label="Email">
                      <Mail className="h-5 w-5 text-red-500" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={`tel:${teacher.phone}`} aria-label="Phone">
                      <Phone className="h-5 w-5 text-green-500" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Facilities Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <h2 className="text-4xl font-semibold">World-Class Facilities</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Our college boasts state-of-the-art laboratories, a vast library,
          sports complexes, innovation hubs, and eco-friendly campus
          initiatives.
        </p>
      </motion.section>
    </div>
  );
}
