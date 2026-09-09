import React from "react";
import { Button } from "@/app/components/ui/button";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16 text-center">

      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-sans tracking-tight flex justify-center">
        <Link
          href="https://gdg.community.dev/gdg-on-campus-acharya-narendra-dev-college-delhi-india/"
          className="flex items-center gap-2 text-white font-bold text-xl z-0 justify-center"
        >
          <Image
            src="/GDG-black.svg"
            alt="GDG Logo"
            width={400}
            height={90}
            className="object-contain"
          />
        </Link>
      </h1>



      {/* Subtitle */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-purple-400 mb-8 sm:mb-12 tracking-wide">
        ACHARYA NARENDRA DEV COLLEGE, UNIVERSITY OF DELHI
      </h2>

      {/* <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8 sm:mb-12 tracking-wide">
        <span className="text-blue-600">A</span>
        CHARYA{ " "}
        <span className="text-red-600">N</span>
        ARENDRA{ " "}
        <span className="text-yellow-500">D</span>
        EV{ " "}
        <span className="text-green-600">C</span>
        OLLEGE,         <span className="text-purple-600">UNIVERSITY OF DELHI</span></h2> */}
      {/* Banner Image */}
      <div className="my-8 overflow-hidden text-center rounded-xl shadow-xl">

        <Image
          src="/gdg-banner-remake.svg"
          alt="GDG ANDC Banner"
          width={1200}
          height={400}
          quality={100}
          className="object-cover w-full h-full transition-all"
        />
      </div>
      <br />
      {/* Description */}
      <TextGenerateEffect
        words="Welcome to GDG on Campus, ANDC, your hub for technology enthusiasts, aspiring developers, and innovators at Acharya Narendra Dev College, Delhi University. We are part of the global Google Developer Groups (GDGs), dedicated to fostering a thriving tech community on campus. Join us as we explore the latest technologies, collaborate on exciting projects, and empower each other to grow!"
        className="max-w-3xl sm:max-w-5xl mx-auto text-gray-300 mb-8 sm:mb-12 leading-relaxed font-bold text-sm sm:text-base"
      />

      {/* Button */}
      <div className="flex justify-center gap-6 mb-8">
        <a
          href={process.env.NEXT_PUBLIC_GDG_COMMUNITY_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white px-6 sm:px-12 py-3 sm:py-5 rounded-2xl font-bold text-sm sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:ring-4 focus:ring-purple-400">
            Sign Up
          </Button>
        </a>
      </div>
    </main>
  );
};

export default Hero;
