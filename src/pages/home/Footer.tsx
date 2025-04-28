"use client"; // if you are using 'framer-motion' in Next.js app, add this at top!

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="bg-background border-t">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: College Info */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-bold">College Management</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Providing quality education and academic excellence since 1995.
              Our mission is to empower students with knowledge and skills for a
              better future.
            </p>
            <div className="flex space-x-4 pt-4">
              {[
                { href: "https://facebook.com", icon: Facebook },
                { href: "https://twitter.com", icon: Twitter },
                { href: "https://instagram.com", icon: Instagram },
                { href: "https://linkedin.com", icon: Linkedin },
                { href: "https://youtube.com", icon: Youtube },
              ].map(({ href, icon: Icon }, idx) => (
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

          {/* Column 2: Quick Links */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/about", label: "About Us" },
                { href: "/courses", label: "Courses" },
                { href: "/admissions", label: "Admissions" },
                { href: "/events", label: "Events & News" },
                { href: "/academic-calendar", label: "Academic Calendar" },
                { href: "/scholarships", label: "Scholarships" },
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

          {/* Column 3: Contact Information */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start text-muted-foreground">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 shrink-0" />
                <span>
                  123 Education Street, Campus Area, Academic City, 12345
                </span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone className="h-5 w-5 mr-2 shrink-0" />
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone className="h-5 w-5 mr-2 shrink-0" />
                <span>+1 (987) 654-3210</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Mail className="h-5 w-5 mr-2 shrink-0" />
                <span>info@collegemanagement.edu</span>
              </li>
            </ul>

            <div className="pt-3">
              <h4 className="text-sm font-medium mb-2">Opening Hours</h4>
              <p className="text-sm text-muted-foreground">
                Monday - Friday: 8:00 AM - 8:00 PM
                <br />
                Saturday: 9:00 AM - 5:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </motion.div>

          {/* Column 4: Newsletter */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Subscribe to Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Stay updated with our latest news, events, and announcements.
            </p>

            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-background"
              />
              <Button className="w-full">Subscribe</Button>
            </div>

            <div className="pt-4">
              <h4 className="text-sm font-medium mb-2">Student Portal</h4>
              <div className="space-x-2">
                <Button variant="outline" asChild size="sm">
                  <Link href="/auth/login">Login</Link>
                </Button>
                <Button variant="outline" asChild size="sm">
                  <Link href="/auth/register">Register</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} College Management System. All rights reserved.
            </div>

            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/accessibility"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
