"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const teachers = [
  { name: "Dr. Ayesha Rahman", subject: "Physics", experience: "10 years" },
  { name: "Mr. Tanvir Hasan", subject: "Mathematics", experience: "8 years" },
  { name: "Mrs. Laila Chowdhury", subject: "English", experience: "12 years" },
  {
    name: "Md. Fahim Ahmed",
    subject: "Computer Science",
    experience: "5 years",
  },
];

export default function AboutUs() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-10">
      {/* College History */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card>
          <CardHeader>
            <CardTitle>📜 College History</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Sunrise College, founded in 1995, has become a beacon of academic
              excellence. With over 12 departments and thousands of alumni, we
              continue to nurture future leaders with a focus on integrity and
              innovation.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Principal Message */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card>
          <CardHeader>
            <CardTitle>🎓 Principal's Message</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              "Our goal is to offer holistic education that fosters critical
              thinking, creativity, and compassion. We believe in empowering our
              students to lead change."
            </p>
            <p className="mt-2 font-semibold">
              — Prof. Dr. Mahmudul Islam, Principal
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Faculty Overview */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card>
          <CardHeader>
            <CardTitle>👩‍🏫 Faculty Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our faculty members are highly qualified professionals with years
              of academic and industry experience. From core subjects to
              emerging fields, they ensure students receive a well-rounded
              education.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Teachers List */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card>
          <CardHeader>
            <CardTitle>📚 Our Teachers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {teachers.map((teacher, idx) => (
                <Card key={idx} className="border-muted shadow-sm">
                  <CardHeader>
                    <CardTitle>{teacher.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>Subject: {teacher.subject}</p>
                    <p>Experience: {teacher.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Infrastructure */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card>
          <CardHeader>
            <CardTitle>🏫 Infrastructure</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The college campus is equipped with modern classrooms, digital
              labs, a vast library, and recreational facilities. A digital-first
              approach ensures a seamless academic experience.
            </p>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
}
