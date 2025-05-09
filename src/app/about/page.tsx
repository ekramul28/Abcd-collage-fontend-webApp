"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const teachers = [
  {
    name: "ড. আয়েশা রহমান",
    subject: "পদার্থবিজ্ঞান",
    experience: "১০ বছরের অভিজ্ঞতা",
    image: "",
  },
  {
    name: "জনাব তানভীর হাসান",
    subject: "গণিত",
    experience: "৮ বছরের অভিজ্ঞতা",
    image: "",
  },
  {
    name: "মিসেস লায়লা চৌধুরী",
    subject: "ইংরেজি",
    experience: "১২ বছরের অভিজ্ঞতা",
    image: "",
  },
  {
    name: "মো. ফাহিম আহমেদ",
    subject: "কম্পিউটার বিজ্ঞান",
    experience: "৫ বছরের অভিজ্ঞতা",
    image: "",
  },
];

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      {/* ব্যানার */}
      <div>
        <Image
          src="/assets/images/aboutBanner.jpeg"
          height={200}
          width={200}
          alt="ব্যানার"
          className="w-full h-40 object-cover"
        />
      </div>

      {/* কলেজ ইতিহাস */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card>
          <CardHeader>
            <CardTitle>📜 আমাদের কলেজের ইতিহাস</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              সানরাইজ কলেজ ১৯৯৫ সালে প্রতিষ্ঠিত হয় এবং তখন থেকেই একাডেমিক
              উৎকর্ষতার প্রতীক হিসেবে কাজ করছে। আমাদের রয়েছে ১২টিরও বেশি বিভাগ
              এবং হাজার হাজার প্রাক্তন শিক্ষার্থী যারা বিভিন্ন ক্ষেত্রে সফলভাবে
              প্রতিষ্ঠিত।
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* প্রিন্সিপালের বার্তা */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card>
          <CardHeader>
            <CardTitle>🎓 প্রিন্সিপালের বার্তা</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-4 items-center">
            <Image
              src="/assets/images/principal.jpeg"
              alt="Principal"
              height={200}
              width={200}
              className="w-32 h-32 object-cover rounded-full border"
            />
            <div>
              <p>
                “আমরা শিক্ষার্থীদের সমগ্র বিকাশে বিশ্বাস করি—সমালোচনামূলক
                চিন্তা, সৃজনশীলতা এবং মানবিক গুণাবলির বিকাশ ঘটিয়ে তাদের
                নেতৃত্বের উপযোগী করে গড়ে তুলি।”
              </p>
              <p className="mt-2 font-semibold">
                — অধ্যাপক ড. মাহমুদুল ইসলাম, প্রিন্সিপাল
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* শিক্ষক পর্যালোচনা */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card>
          <CardHeader>
            <CardTitle>👩‍🏫 শিক্ষক পর্যালোচনা</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              আমাদের শিক্ষকগণ অত্যন্ত অভিজ্ঞ ও যোগ্য। তাঁরা একাডেমিক ও বাস্তব
              জ্ঞানে পারদর্শী এবং শিক্ষার্থীদের একটি ভারসাম্যপূর্ণ ও মানসম্মত
              শিক্ষা প্রদানের লক্ষ্যে সর্বদা নিয়োজিত।
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* শিক্ষক তালিকা */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card>
          <CardHeader>
            <CardTitle>📚 আমাদের শিক্ষকবৃন্দ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {teachers.map((teacher, idx) => (
                <Card key={idx} className="border-muted shadow-sm">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Image
                      height={400}
                      width={400}
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-16 h-16 object-cover rounded-full border"
                    />
                    <CardTitle>{teacher.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>বিষয়: {teacher.subject}</p>
                    <p>অভিজ্ঞতা: {teacher.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* অবকাঠামো */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card>
          <CardHeader>
            <CardTitle>🏫 অবকাঠামো</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              আমাদের কলেজ ক্যাম্পাসে রয়েছে আধুনিক শ্রেণিকক্ষ, ডিজিটাল ল্যাব,
              সমৃদ্ধ লাইব্রেরি ও বিনোদনমূলক সুবিধা। ডিজিটাল-প্রথম নীতিতে আমরা
              শিক্ষার্থীদের জন্য একটি মসৃণ ও প্রযুক্তিনির্ভর শিক্ষার পরিবেশ
              নিশ্চিত করি।
            </p>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
}
