"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, PauseCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

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
      // If video is already loaded
      if (video.readyState >= 3) {
        setIsLoaded(true);
      }
    }
  }, []);

  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
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
          //   poster="/assets/videos/abcdvideo1.mp4"
        >
          <source src="/assets/videos/abcdvideo1.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-indigo-900/60 to-purple-900/70"></div> */}

        {/* Optional: Add a noise texture overlay for more visual interest */}
        {/* <div className="absolute inset-0 bg-[url('/assets/images/noise.png')] opacity-5 mix-blend-overlay"></div> */}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Excellence
            </span>{" "}
            in Education
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
            Empowering students with cutting-edge facilities, experienced
            faculty, and a vibrant campus life. Join us to shape your future.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button
              size="lg"
              className="px-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0"
            >
              <Link href="/admissions" className="flex items-center">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="px-8 text-white border-white hover:bg-white/10"
            >
              <Link href="/virtual-tour">Explore Campus</Link>
            </Button>
          </div>

          <div className="pt-8">
            <button
              onClick={togglePlayback}
              className="flex items-center gap-2 text-white text-sm mx-auto hover:text-blue-300 transition-colors"
            >
              {isPlaying ? (
                <>
                  <PauseCircle className="h-6 w-6" />
                  Pause Background
                </>
              ) : (
                <>
                  <PlayCircle className="h-6 w-6" />
                  Play Background
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Stats Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3">
              <p className="text-3xl font-bold text-white">5,000+</p>
              <p className="text-sm text-gray-300">Students</p>
            </div>
            <div className="p-3">
              <p className="text-3xl font-bold text-white">95%</p>
              <p className="text-sm text-gray-300">Placement Rate</p>
            </div>
            <div className="p-3">
              <p className="text-3xl font-bold text-white">200+</p>
              <p className="text-sm text-gray-300">Expert Faculty</p>
            </div>
            <div className="p-3">
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="text-sm text-gray-300">Programs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
