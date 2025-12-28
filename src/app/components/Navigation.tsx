"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Toggle the menu visibility
  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  // Check if the link is active
  const isActive = (path: string) => pathname === path;


  return (
    <nav className="fixed top-0 w-full z-40 bg-[#0a0f1e] bg-opacity-60 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl h-20 mx-auto flex items-center justify-between px-4  z-50">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg md:text-2xl z-50">
          <Image
            src="/gdg-chapterlogo.svg"
            alt="GDG Logo"
            width={90}
            height={90}
            className="object-contain"
          />
          GDG ANDC
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 font-medium">
          {[
            { name: "HOME", path: "/" },
            { name: "TEAM", path: "/team" },
            { name: "EVENTS", path: "/events" },
            { name: "ABOUT US", path: "/about-us" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="relative tracking-wide transition-colors group"
            >
              <span className={`${isActive(item.path) ? "text-purple-400 font-semibold" : "text-white  "}`}>
                {item.name}
              </span>
              {/* Show bar on active page or hover */}
              <div className={`absolute -bottom-2 left-0 right-0 h-0.5 overflow-hidden rounded-full bg-purple-200 transition-opacity ${isActive(item.path) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}>
                <div className="h-full w-full animate-wave bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 bg-[length:200%_100%]" />
              </div>
            </Link>
          ))}
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="lg:hidden z-50">
          <button onClick={toggleMenu} aria-label="Toggle Navigation">
            {isMenuOpen ? <FaTimes size={30} color="white" /> : <FaBars size={30} color="white" />}
          </button>
        </div>
      </div>


      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 opacity-100 shadow-xl  z-50" />

      {/* Mobile Menu (Visible when toggled) */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={toggleMenu}
      >
        <div
          className={`absolute top-20 w-full h-auto bg-black bg-opacity-80 text-white pr-4 pl-4 overflow-y-auto backdrop-blur-lg rounded-b-2xl shadow-xl transition-transform duration-300 ${isMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          onClick={(e) => e.stopPropagation()} 
        >
          <div className="mt-2 font-bold space-y-2">
            {[
              { name: "HOME", path: "/" },
              { name: "TEAM", path: "/team" },
              { name: "EVENTS", path: "/events" },
              { name: "ABOUT US", path: "/about-us" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`block py-3 text-center drop-shadow-md ${isActive(item.path)
                    ? "text-purple-400"
                    : "text-White hover:text-purple-400"
                  } transition-colors`}
                onClick={toggleMenu} // close menu on item click
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navigation;
