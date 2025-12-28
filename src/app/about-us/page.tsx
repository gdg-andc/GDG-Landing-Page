import React from "react";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";

const AboutUs = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold  text-center text-white mb-6">About Us</h2>
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

      {/* About Us Section */}
      <section className="text-center mb-12 space-y-6">
        {/* <h2 className="text-4xl font-bold text-purple-400 mb-6">About Us</h2> */}
        <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto text-justify">
          At GDG on Campus, ANDC, we believe in the power of community and
          collaboration. Our mission is to provide students with the resources
          and opportunities to learn, share, and contribute to the ever-evolving
          world of technology. Whether you&apos;re a seasoned developer or just
          starting, there&apos;s a place for you here!
        </p>
      </section>

      {/* What We Do Section */}
      <section className="mb-12 space-y-8">
        <h3 className="text-3xl font-semibold text-purple-400 mb-6 text-center">
          What We Do
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
          <li className="bg-[#0a0f1e] p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:ring-4 hover:ring-purple-300">
            <h4 className="text-xl font-semibold text-purple-400 mb-4">
              Speaker Sessions
            </h4>
            <p>
              Learn from industry experts and thought leaders as they share
              their insights on various tech topics.
            </p>
          </li>
          <li className="bg-[#0a0f1e] p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:ring-4 hover:ring-purple-300">
            <h4 className="text-xl font-semibold text-purple-400 mb-4">
              Tech Workshops
            </h4>
            <p>
              Hands-on workshops where you can enhance your skills in areas like
              web development, cloud computing, and cybersecurity.
            </p>
          </li>
          <li className="bg-[#0a0f1e] p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:ring-4 hover:ring-purple-300">
            <h4 className="text-xl font-semibold text-purple-400 mb-4">
              Hackathons
            </h4>
            <p>
              Participate in exciting hackathons to challenge your creativity
              and teamwork skills, with opportunities to win prizes and showcase
              your projects.
            </p>
          </li>
          <li className="bg-[#0a0f1e] p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:ring-4 hover:ring-purple-300">
            <h4 className="text-xl font-semibold text-purple-400 mb-4">
              Open Source Projects
            </h4>
            <p>
              Collaborate on meaningful open-source projects that contribute to
              the wider tech community and enhance your portfolio.
            </p>
          </li>
        </ul>
      </section>

      {/* Our Tracks Section */}
      <section className="mb-12 space-y-6">
        <h3 className="text-3xl font-semibold text-purple-400 mb-6 text-center">
          Our Tracks
        </h3>
        <p className="text-xl text-gray-300 mb-8 text-center max-w-3xl mx-auto leading-relaxed">
          We focus on three key areas to help you specialize and excel in your
          tech journey:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            <h4 className="text-2xl font-semibold text-purple-400 mb-4">
              Web Development
            </h4>
            <p className="text-lg text-gray-300">
              Dive into the world of frontend and backend technologies, building
              responsive and dynamic web applications.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            <h4 className="text-2xl font-semibold text-purple-400 mb-4">
              Cloud Computing
            </h4>
            <p className="text-lg text-gray-300">
              Learn how to leverage cloud technologies to develop scalable and
              efficient applications.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            <h4 className="text-2xl font-semibold text-purple-400 mb-4">
              Cybersecurity
            </h4>
            <p className="text-lg text-gray-300">
              Explore the fundamentals of cybersecurity to safeguard
              applications and data in an increasingly digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Connect with Us Section */}
      <section className="mb-12 space-y-8 text-center bg-gray-900 py-12 rounded-lg shadow-xl">
        <h2 className="text-4xl font-bold text-purple-400 mb-6 tracking-tight">
          Connect with Us
        </h2>
        <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6 md:px-8">
          Stay updated on our events, workshops, and community initiatives by
          following us on social media. Join our community and let&apos;s grow
          together!
        </p>

        {/* Social Media Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {[
            {
              name: "GDG Community",
              link: process.env.NEXT_PUBLIC_GDG_COMMUNITY_URL,
            },
            { name: "LinkedIn", link: process.env.NEXT_PUBLIC_LINKEDIN_URL },
            { name: "Instagram", link: process.env.NEXT_PUBLIC_INSTAGRAM_URL },
            { name: "YouTube", link: process.env.NEXT_PUBLIC_YOUTUBE_URL },
          ].map(({ name, link }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex justify-center items-center space-x-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 w-full max-w-xs rounded-full font-semibold text-sm shadow-md transition-all group-hover:scale-105 group-hover:shadow-lg group-hover:ring-2 group-hover:ring-purple-500 group-hover:ring-opacity-50">
                {name}
              </Button>
            </a>
          ))}
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="mb-12 space-y-6">
        <h3 className="text-3xl font-semibold text-purple-400 mb-6 text-center">
          Get Involved
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto text-justify">
          We welcome contributions from everyone! Whether you&apos;re interested
          in joining our events, contributing to our open-source projects, or
          sharing your knowledge through workshops, there&apos;s always
          something happening at GDG on Campus, ANDC.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto text-justify">
          Check out our open issues in the repository to see how you can get
          involved, or feel free to reach out to us on our socials!
        </p>
      </section>

      {/* Contact Us Section */}
      <section className="space-y-6 text-center bg-gray-900 py-12 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-purple-400 mb-6">Contact Us</h2>

        <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6 md:px-8">
          For inquiries, suggestions, or collaborations, feel free to reach out
          through our social channels or email us directly at{" "}
          <a
            href="mailto:gdg.andc@gmail.com"
            className="text-purple-400 hover:underline"
          >
            gdg.andc@gmail.com
          </a>
          .
        </p>

        <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6 md:px-8">
          Together, let&apos;s build a vibrant tech community that inspires and
          empowers each other.
          <br />
          <span className="text-white font-semibold">
            Join us today and be part of the journey!
          </span>
        </p>
      </section>
    </main>
  );
};

export default AboutUs;
