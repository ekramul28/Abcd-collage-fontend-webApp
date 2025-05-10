"use client";
import React from "react";
import { motion } from "framer-motion";

const newsItems = [
  "🚗 20% off on premium car wash this weekend!",
  "🧼 New ceramic coating service launched!",
  "🕒 Book your wash now and skip the queue!",
];

function LatestNewsSection() {
  return (
    <div className="fixed bottom-0 w-full bg-gray-100 z-50">
      <div className="overflow-hidden whitespace-nowrap py-2 mx-auto ">
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="inline-block"
        >
          {newsItems.map((item, idx) => (
            <span key={idx} className="mx-8 text-sm font-medium text-red-800">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default LatestNewsSection;
