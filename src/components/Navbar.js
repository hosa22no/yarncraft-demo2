"use client";

// The Navbar component thats visible on larger screens 
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";
import useMediaQuery from "@/hooks/useMediaQuery";
import { PiYarn } from "react-icons/pi";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isLargeScreen) {
      setIsOpen(false);
    }
  }, [isLargeScreen]);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-custom-blue text-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <PiYarn className="w-8 h-8" />
          <p className="ml-2 text-xl font-semibold">YarnCraft</p>
          <button className="ml-4 sm:hidden" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className="hidden sm:flex space-x-4">
          
          <Link href="/" className="text-lg hover:text-custom-blue">
            Hem
          </Link>
          <Link href="/projects" className="text-lg hover:text-custom-blue">
            Projekt
          </Link>
          <Link href="/tools" className="text-lg hover:text-custom-blue">
            Verktyg
          </Link>
          <Link href="/about" className="text-lg hover:text-custom-blue">
            Om oss
          </Link>
        </div>
      </nav>
      <Sidebar isOpen={isOpen} />
    </div>
  );
}
