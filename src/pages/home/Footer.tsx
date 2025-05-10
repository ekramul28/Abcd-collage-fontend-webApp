/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: কলেজ ইনফো */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center mb-6">
              <Link href="/" className="flex items-center flex-shrink-0">
                <Image
                  src="/assets/images/logo.png"
                  alt="logo"
                  width={1000}
                  height={1000}
                  className="object-contain w-14 h-14"
                />
                <span className="ml-2 text-xl font-bold ">এ.বি.সি.ডি কলেজ</span>
              </Link>
            </div>
            <p className="text-muted-foreground text-sm">
              ২০০০ সালের শেষের দিকে যশোর জেলার চৌগাছা উপজেলার দেবীপুর গ্রামে,
              সবুজে ঘেরা মনোরম পরিবেশে ২ একর জমির উপর প্রতিষ্ঠিত হয় এ.বি.সি.ডি
              কলেজ। হাকিমপুর ইউনিয়নের প্রাক্তন চেয়ারম্যান ও বীর মুক্তিযোদ্ধা
              প্রয়াত জনাব আজিজুর রহমান কলেজের প্রতিষ্ঠাতা সভাপতি ছিলেন। আরাজী
              সুলতানপুর, বকশিপুর, চাকলা ও দেবীপুর – এই চার এলাকার প্রথম অক্ষর
              নিয়ে কলেজের নামকরণ করা হয় "এ.বি.সি.ডি কলেজ"।
            </p>
            <div className="flex space-x-4 pt-4">
              {[
                {
                  Icon: Facebook,
                  href: "https://web.facebook.com/abcdcollege.chowgacha",
                },
                { Icon: Twitter, href: "https://twitter.com" },
                { Icon: Instagram, href: "https://instagram.com" },
                { Icon: Linkedin, href: "https://linkedin.com" },
                { Icon: Youtube, href: "https://www.youtube.com/ABCDCollege" },
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: কুইক লিংকস */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">দ্রুত লিংক</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "হোম" },
                { href: "/about", label: "আমাদের সম্পর্কে" },
                { href: "/admissions", label: "ভর্তি তথ্য" },
                { href: "/events", label: "ইভেন্ট ও সংবাদ" },
                { href: "/academic-calendar", label: "একাডেমিক ক্যালেন্ডার" },
                { href: "/gallery", label: "গ্যালারি" },
                { href: "/contact", label: "যোগাযোগ" },
              ].map(({ href, label }, idx) => (
                <li key={idx}>
                  <Link
                    href={href}
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: যোগাযোগ */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">যোগাযোগ করুন</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start text-muted-foreground">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 shrink-0" />
                <span>এ. বি. সি. ডি কলেজ চৌগাছা, যশোর , বাংলাদেশ </span>
              </li>

              <li className="flex items-center text-muted-foreground">
                <Phone className="h-5 w-5 mr-2 shrink-0" />
                <span>+8801711010915</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Mail className="h-5 w-5 mr-2 shrink-0" />
                <span>abcdcollege@ymail.com</span>
              </li>
            </ul>

            <div className="pt-3">
              <h4 className="text-sm font-medium mt-4 mb-2">
                এ. বি. সি. ডি কলেজ টাইম
              </h4>
              <p className="text-sm text-muted-foreground">
                রবি - বৃহস্পতিবার: সকাল ৯টা - বিকেল ৪টা
                <br />
                শুক্রবার: বন্ধ
                <br />
                শনিবার (কখনও কখনও ক্লাস থাকতে পারে): সকাল ৯টা - দুপুর ১টা
              </p>
            </div>
          </motion.div>

          {/* Column 4: নিউজলেটার */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">
              নিউজলেটারে সাবস্ক্রাইব করুন
            </h3>
            <p className="text-sm text-muted-foreground">
              আমাদের সর্বশেষ খবর ও ইভেন্ট জানতে সাবস্ক্রাইব করুন।
            </p>

            <div className="space-y-2">
              <Input
                type="email"
                placeholder="আপনার ইমেইল লিখুন"
                className="bg-background"
              />
              <Button className="w-full bg-[#6D28D9] text-white">
                সাবস্ক্রাইব
              </Button>
            </div>

            <div className="pt-4">
              <h4 className="text-sm font-medium mb-2">স্টুডেন্ট পোর্টাল</h4>
              <div className="space-x-2">
                <Button variant="outline" asChild size="sm">
                  <Link href="/auth/login">লগইন</Link>
                </Button>
                <Button variant="outline" asChild size="sm">
                  <Link href="/auth/register">রেজিস্টার</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* নিচের ফুটার অংশ */}
      <div className="border-t pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} যশোর কলেজ ম্যানেজমেন্ট সিস্টেম। সর্বস্বত্ব
              সংরক্ষিত।
            </div>

            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                প্রাইভেসি পলিসি
              </Link>
              <Link
                href="/terms-of-service"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                পরিষেবার শর্তাবলী
              </Link>
              <Link
                href="/accessibility"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                অ্যাক্সেসিবিলিটি
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
