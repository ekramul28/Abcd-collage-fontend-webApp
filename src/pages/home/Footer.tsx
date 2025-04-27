import React from "react";
import Link from "next/link";
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

  return (
    <footer className="bg-background border-t">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: College Info */}
          <div className="space-y-4">
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
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Events & News
                </Link>
              </li>
              <li>
                <Link
                  href="/academic-calendar"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Academic Calendar
                </Link>
              </li>
              <li>
                <Link
                  href="/scholarships"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Scholarships
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="space-y-4">
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
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
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
          </div>
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
