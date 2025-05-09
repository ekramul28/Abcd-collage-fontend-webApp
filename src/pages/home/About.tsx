"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Teachers from "./Teachers";

const teachers = [
  {
    name: "ডঃ জন ডো",
    subject: "পদার্থবিজ্ঞান",
    image: "/teachers/john.jpg",
    linkedin: "#",
    email: "john.doe@example.com",
    phone: "+8801xxxxxxxxx",
  },
  {
    name: "প্রফেসর জেইন স্মিথ",
    subject: "গণিত",
    image: "/teachers/jane.jpg",
    linkedin: "#",
    email: "jane.smith@example.com",
    phone: "+8801xxxxxxxxx",
  },
  {
    name: "ডঃ এমিলি হোয়াইট",
    subject: "রসায়ন",
    image: "/teachers/emily.jpg",
    linkedin: "#",
    email: "emily.white@example.com",
    phone: "+8801xxxxxxxxx",
  },
  {
    name: "জনাব ডেভিড ব্রাউন",
    subject: "কম্পিউটার বিজ্ঞান",
    image: "/teachers/david.jpg",
    linkedin: "#",
    email: "david.brown@example.com",
    phone: "+8801xxxxxxxxx",
  },
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
          স্বাগতম এ.বি.সি.ডি কলেজে
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
          ২০০০ সাল থেকে যশোরের চৌগাছা অঞ্চলে শিক্ষার মানোন্নয়নে ও একাডেমিক
          উৎকর্ষতায় নিরলসভাবে কাজ করে যাচ্ছে ABCD কলেজ।
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
        {["আমাদের ভিশন", "আমাদের মিশন", "আমাদের ইতিহাস"].map((title, idx) => (
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
                {title === "আমাদের ভিশন" &&
                  "একটি উদ্ভাবনী, সৃজনশীল এবং গ্লোবাল মানসম্পন্ন শিক্ষাপ্রতিষ্ঠান হিসেবে শিক্ষার্থীদের জীবনকে আলোকিত করা।"}
                {title === "আমাদের মিশন" &&
                  "শিক্ষার্থীদের জ্ঞান, দক্ষতা ও মূল্যবোধে নৈতিক নেতৃত্ব সামাজিক সচেতনতা উদ্ভাবনের ক্ষমতা নৈতিক সাহস মানবিক সহানুভূতি বিকশিত করে সমাজ ও বিশ্বের জন্য উপযোগী নাগরিক হিসেবে গড়ে তোলা।"}
                {title === "আমাদের ইতিহাস" &&
                  "২০০০ সালের শেষ দিকে যশোর জেলার চৌগাছা উপজেলার উত্তর অঞ্চলে চৌগাছা-কোটচাঁদপুর মহাসড়কের পাশে, গাছ-গাছালি পরিবেষ্টিত এক মনোরম পরিবেশে হাকিমপুর ইউনিয়নের অধীন দেবীপুর গ্রামে ২.০০ একর জমির উপর কলেজটি প্রতিষ্ঠিত হয়।"}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.section>

      {/* Meet Our Faculty */}
      {/* <Teachers /> */}

      {/* Facilities Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <h2 className="text-4xl font-semibold">আধুনিক সুযোগ-সুবিধা</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          এ.বি.সি.ডি কলেজে রয়েছে আধুনিক ল্যাব, সমৃদ্ধ লাইব্রেরি, মানসম্মত
          ক্যান্টিন ও মেস, খেলাধুলার মাঠ এবং পরিবেশবান্ধব ক্যাম্পাস, যা
          শিক্ষার্থীদের উন্নয়নে সহায়ক।
        </p>
      </motion.section>
    </div>
  );
}
