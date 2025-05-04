"use client";

import React, { ReactNode } from "react";

import Footer from "@/pages/home/Footer";
import Navbar from "@/pages/home/Navbar";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-500">
      <Navbar />

      {/* Page Content */}
      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
