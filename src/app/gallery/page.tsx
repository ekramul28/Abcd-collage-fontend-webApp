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
      category: "car-wraps",
      title: "Matte Black BMW",
      description: "Full vehicle color change wrap",
      image: "/images/erik-mclean-akfhYyWvfZo-unsplash.jpg",
      height: 300,
    },
    {
      id: 2,
      category: "car-wraps",
      title: "Custom Design Wrap",
      description: "Artistic custom wrap design",
      image: "/images/alif-W0dbt27T2bo-unsplash.jpg",
      height: 400,
    },
    {
      id: 3,
      category: "fleet-wraps",
      title: "Business Fleet",
      description: "Branded fleet vehicle wraps",
      image: "/images/Business-Fleet.jpg",
      height: 350,
    },
    {
      id: 4,
      category: "advertising",
      title: "Promotional Wrap",
      description: "Advertising vehicle wrap",
      image: "/images/Advertising Wraps8.jpg",
      height: 280,
    },
    {
      id: 5,
      category: "roof-bonnet",
      title: "Roof & Bonnet",
      description: "Custom roof and bonnet wrap",
      image: "/images/Roof & Bonnet7.jpg",
      height: 320,
    },
    {
      id: 6,
      category: "truck-wraps",
      title: "Commercial Truck",
      description: "Full commercial truck wrap",
      image: "/images/pexels-bechir-lachiheb-2148044404-29897103.jpg",
      height: 380,
    },
    {
      id: 7,
      category: "paint-protection",
      title: "Paint Protection",
      description: "Premium paint protection film",
      image: "/images/Paint Protection8.jpg",
      height: 300,
    },
    {
      id: 8,
      category: "car-wraps",
      title: "Sports Car Wrap",
      description: "Performance vehicle custom wrap",
      image: "/images/erik-mclean-akfhYyWvfZo-unsplash.jpg",
      height: 340,
    },

    // truck-wraps
    {
      id: 9,
      category: "truck-wraps",
      title: "Matte Black Truck",
      description: "Stealth look with matte finish wrap",
      image: "/images/truck1.jpg",
      height: 300,
    },
    {
      id: 10,
      category: "truck-wraps",
      title: "Artistic Truck Wrap",
      description: "Creative custom design for trucks",
      image: "/images/truck2.jpg",
      height: 400,
    },
    {
      id: 11,
      category: "truck-wraps",
      title: "Fleet Truck Branding",
      description: "Professional fleet truck graphics",
      image: "/images/truck3.jpg",
      height: 350,
    },
    {
      id: 12,
      category: "truck-wraps",
      title: "Ad Wrap for Trucks",
      description: "Truck advertising for promotions",
      image: "/images/truck4.jpg",
      height: 280,
    },
    {
      id: 13,
      category: "truck-wraps",
      title: "Roof and Hood Wrap",
      description: "Truck roof and bonnet customization",
      image: "/images/truck5.jpg",
      height: 320,
    },

    {
      id: 14,
      category: "truck-wraps",
      title: "Protective Wrap",
      description: "Durable protection film for trucks",
      image: "/images/truck6.jpg",
      height: 300,
    },
    {
      id: 15,
      category: "truck-wraps",
      title: "Sport Truck Design",
      description: "Bold and sleek performance wrap",
      image: "/images/truck7.jpg",
      height: 340,
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "car-wraps", label: "Car Wraps" },
    { id: "advertising", label: "Advertising Wraps" },
    { id: "roof-bonnet", label: "Roof & Bonnet" },
    { id: "truck-wraps", label: "Truck Wraps" },
    { id: "paint-protection", label: "Paint Protection" },
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

      <div className=" ">
        {/* Header */}
        <div
          className={`text-center mb-8 md:mb-8 transition-all duration-700 ${
            visibleSection ? "opacity-100" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1 bg-[#F96C26] bg-opacity-20 text-[#F96C26] rounded-full text-sm font-medium mt-3">
            Our Work
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-6">
            Featured <span className="text-[#F96C26]">Projects</span>
          </h2>
        </div>

        {/* Filters */}
        <div
          className={`flex flex-wrap justify-center gap-2 md:gap-4 mb-6 transition-all duration-700 delay-300 ${
            visibleSection ? "opacity-100" : "opacity-0 translate-y-10"
          }`}
        >
          {filters.map((filter, index) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-xl text-sm md:text-base transition-all ${
                activeFilter === filter.id
                  ? "bg-[#F96C26] text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              // style={{ transitionDelay: `${index * 50}ms` }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div
          className={`columns-4 gap-0  transition-all duration-700 delay-500 ${
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
