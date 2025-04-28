"use client"; // Important for motion animations in Next.js 13+ app directory

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Ensure this path is correct

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-semibold text-white mb-6"
          >
            Ready to Take the Next Step?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-muted-foreground mb-8"
          >
            Join our community, stay ahead of the curve, and take control of
            your future. Get started with us today!
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center gap-4"
          >
            <Button size="lg" className="px-6 py-3 text-lg sm:text-xl">
              Join Now
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="px-6 py-3 text-lg sm:text-xl"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
