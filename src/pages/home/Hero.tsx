"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, PauseCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// ✅ Custom Hook for Count Up Animation
const useCountUp = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 10);

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.ceil(start));
    }, 10);

    return () => clearInterval(interval);
  }, [end, duration]);

  return count;
};

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Toggle video playback
  const togglePlayback = () => {
    const video = document.getElementById("hero-video") as HTMLVideoElement;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  // Check if video has loaded
  useEffect(() => {
    const video = document.getElementById("hero-video") as HTMLVideoElement;
    if (video) {
      video.onloadeddata = () => setIsLoaded(true);
      if (video.readyState >= 3) {
        setIsLoaded(true);
      }
    }
  }, []);

  // ✅ Dynamic stats data with numerical values
  const stats = [
    { label: "Students", value: 2500, suffix: "+" },
    { label: "Placement Rate", value: 80, suffix: "%" },
    { label: "Teachers", value: 50, suffix: "+" },
    { label: "Programs", value: 20, suffix: "+" },
  ];

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <div className="relative w-full h-[90vh] overflow-hidden bg-gradient-to-b from-white to-blue-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-700">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          id="hero-video"
          autoPlay
          muted
          loop
          playsInline
          className={`object-cover w-full h-full transition-opacity duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/assets/videos/abcdvideo1.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 dark:from-black/50 dark:to-black/80 z-10 pointer-events-none"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Play/Pause Video Button */}
          <div className="pt-8">
            <button
              onClick={togglePlayback}
              className="flex items-center gap-2 text-white text-sm mx-auto hover:text-blue-300 transition-colors"
            >
              {isPlaying ? (
                <>
                  <PauseCircle className="h-6 w-6" />
                  {/* Pause Background */}
                </>
              ) : (
                <>
                  <PlayCircle className="h-6 w-6" />
                  {/* Play Background */}
                </>
              )}
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            {/* Apply Now Button */}
            <Button
              size="lg"
              className="px-8 text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 dark:from-blue-400 dark:to-purple-500 dark:hover:from-blue-500 dark:hover:to-purple-600"
            >
              <Link href="/admissions" className="flex items-center">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            {/* Explore Campus Button */}
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-black text-black hover:bg-black/10 dark:border-white dark:text-white dark:hover:bg-white/10"
            >
              <Link href="/virtual-tour">Explore Campus</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Stats Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {stats.map((stat, index) => {
              const count = useCountUp(stat.value, 2000); // animate to stat.value in 2 seconds
              return (
                <motion.div
                  key={index}
                  className="p-3"
                  variants={statVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  <p className="text-3xl font-bold text-white">
                    {count}
                    {stat.suffix}
                  </p>
                  <p className="text-sm text-gray-300">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
