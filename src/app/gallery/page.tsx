/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function GallerySection() {
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleSection, setVisibleSection] = useState(false);

  const galleryItems = [
    {
      id: 1,
      category: "science",
      title: "বিজ্ঞান প্রদর্শনী",
      description: "নবীনদের জন্য বৈজ্ঞানিক প্রকল্প",
      image: "/images/science.jpg",
      height: 300,
    },
    {
      id: 2,
      category: "cultural",
      title: "সংস্কৃতিক সন্ধ্যা",
      description: "সাংস্কৃতিক অনুষ্ঠানে শিক্ষার্থীদের পরিবেশনা",
      image: "/images/cultural.jpg",
      height: 350,
    },
    {
      id: 3,
      category: "sports",
      title: "খেলা প্রতিযোগিতা",
      description: "আন্তঃবিভাগীয় ফুটবল টুর্নামেন্ট",
      image: "/images/sports.jpg",
      height: 320,
    },
    {
      id: 4,
      category: "seminar",
      title: "সেমিনার",
      description: "উচ্চশিক্ষা ও ক্যারিয়ার নিয়ে আলোচনা",
      image: "/images/seminar.jpg",
      height: 300,
    },
    {
      id: 5,
      category: "campus-life",
      title: "ক্যাম্পাস জীবন",
      description: "ABCD কলেজের মনোরম পরিবেশ",
      image: "/images/campus.jpg",
      height: 340,
    },
  ];

  const filters = [
    { id: "all", label: "সব ছবি" },
    { id: "science", label: "কলেজ" },
    { id: "cultural", label: "সংস্কৃতি" },
    { id: "sports", label: "খেলা" },
    { id: "seminar", label: "সেমিনার" },
    { id: "campus-life", label: "ক্যাম্পাস জীবন" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleSection(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const filteredItems =
    activeFilter === "all"
      ? galleryItems.slice(0, 8)
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section
      ref={sectionRef}
      className="w-screen h-screen pb-16 md:pb-24 text-white transition-colors duration-500 overflow-hidden"
    >
      <style>
        {`
          @keyframes fadeSlideIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <div>
        {/* Header */}
        <div
          className={`text-center mb-8 md:mb-8 transition-all duration-700 ${
            visibleSection ? "opacity-100" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1 bg-[#6D28D9] bg-opacity-20 text-white rounded-full text-sm font-medium mt-3">
            আমাদের কার্যক্রম
          </span>
          <h2 className="text-2xl md:text-3xl text-black dark:text-white lg:text-4xl font-bold mt-6">
            নির্বাচিত <span className="text-[#6D28D9]">ছবিসমূহ</span>
          </h2>
        </div>

        {/* Filters */}
        <div
          className={`flex flex-wrap justify-center gap-2 md:gap-4 mb-6 transition-all duration-700 delay-300 ${
            visibleSection ? "opacity-100" : "opacity-0 translate-y-10"
          }`}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-xl text-sm md:text-base transition-all ${
                activeFilter === filter.id
                  ? "bg-[#6D28D9] text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div
          className={`columns-4 gap-0 transition-all duration-700 delay-500 ${
            visibleSection ? "opacity-100" : "opacity-0"
          }`}
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="break-inside-avoid bg-[#1a1a1a] border border-gray-700 rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              style={{
                animation: visibleSection
                  ? `fadeSlideIn 0.5s ease-out ${0.1 + index * 0.1}s forwards`
                  : "none",
                opacity: 0,
              }}
            >
              <div
                className="relative w-full"
                style={{ height: `${item.height}px` }}
              >
                <Image
                  src={item.image || "/images/default.jpg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
