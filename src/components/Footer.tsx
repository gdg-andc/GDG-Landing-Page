'use client';
import React, { useEffect, useState } from "react";
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  const [showGoTop, setShowGoTop] = useState(false);
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#";
  const twitterUrl = process.env.NEXT_PUBLIC_TWITTER_URL || "#";
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || "#";
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  // Handle scroll event to toggle the visibility of the "Go to Top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Show button after scrolling 300px
        setShowGoTop(true);
      } else {
        setShowGoTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-8 text-center relative">
      <div className="flex justify-center mb-4">
        <Image
          src="/gdg.png"
          alt="GDG Logo"
          width={64}
          height={64}
          className="object-contain"
        />
      </div>

      <p className="text-lg font-semibold">GOOGLE DEVELOPER GROUPS</p>
      <p className="text-lg font-semibold mb-4">ACHARYA NARENDRA DEV COLLEGE</p>

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
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-2xl hover:text-blue-500 hover:scale-110 transition-all duration-300"
        >
          <FaTwitter />
        </a>
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

      <div className="flex flex-col md:flex-row justify-between items-center px-8 text-sm">
        <p>© {new Date().getFullYear()} GDG-ANDC. All Rights Reserved</p>
        <a href={`mailto:${email}`} className="hover:underline mt-2 md:mt-0">
          {email}
        </a>
      </div>

      {/* Go to Top Button */}
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
