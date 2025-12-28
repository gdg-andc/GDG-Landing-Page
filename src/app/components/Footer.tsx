'use client';
import React, { useEffect, useState } from "react";
import { FaInstagram, FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const [showGoTop, setShowGoTop] = useState(false);
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#";
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL || "#";
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || "#";
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@example.com";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowGoTop(true);
      } else {
        setShowGoTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-8 text-center relative">
      <div className="flex justify-center mb-4">
        <Link
          href="https://gdg.community.dev/gdg-on-campus-acharya-narendra-dev-college-delhi-india/"
          className="flex items-center gap-2 text-white font-bold text-xl z-0 justify-center"
        >
          <Image
            src="/GDG-black.svg"
            alt="GDG Logo"
            width={300}
            height={90}
            className="object-contain"
          />
        </Link>
      </div>

      <p className="text-lg font-semibold mb-4">ACHARYA NARENDRA DEV COLLEGE, UNIVERSITY OF DELHI</p>

      <div className="flex justify-center gap-6 mb-6">
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-2xl hover:text-pink-500 hover:scale-110 transition-all duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-2xl hover:text-blue-500 hover:scale-110 transition-all duration-300"
        >
          <FaLinkedinIn />
        </a>
        {email && (
          <a
            href={`mailto:${email}`}
            aria-label="Email"
            className="text-2xl hover:text-red-500 hover:scale-110 transition-all duration-300"
          >
            <FaEnvelope />
          </a>
        )}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-2xl hover:text-gray-400 hover:scale-110 transition-all duration-300"
        >
          <FaGithub />
        </a>
      </div>

      <div className="flex justify-center border- items-center px-8 text-sm">
        <p>Copyright © {new Date().getFullYear()} GDG-ANDC. All Rights Reserved.</p>
      </div>

      {showGoTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
          aria-label="Go to Top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7-7-7 7" />
          </svg>
        </button>
      )}
    </footer>
  );
};

export default Footer;
