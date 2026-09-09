"use client";

import React from "react";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";


interface TeamCardProps {
  name: string;
  role: string;
  instagram?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  profileLink: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  role,
  instagram,
  twitter,
  github,
  linkedin,
  profileLink,
}) => {
  // Default fallback image
  const fallbackImage =
    "https://res.cloudinary.com/drnjjbg2a/image/upload/t_Profile/v1731150003/fallbackimage_pehasf.jpg";

  // Ensure that the profileLink is a valid URL or use the fallback
  const imageSrc =
    profileLink &&
    (profileLink.startsWith("http") || profileLink.startsWith("/"))
      ? profileLink
      : fallbackImage;

  return (
    <div className="text-center p-4">
      <div className="rounded-full w-32 h-32 mx-auto mb-4 bg-gray-300 shadow-lg hover:shadow-2xl transition-all hover:scale-105 hover:shadow-purple-500/50 duration-300 hover:ring-4 hover:ring-purple-300">
        <a
          href={linkedin || "#"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name}'s profile`}
        >
          <Image
            src={imageSrc} // Use the valid imageSrc
            alt={`${name}'s Profile`}
            className="rounded-full w-full h-full object-cover"
            width={500}
            height={500}
            quality={95}
            onError={(e) => {
              // Fallback if image fails to load
              e.currentTarget.src = fallbackImage;
            }}
          />
        </a>
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-400">{role}</p>
      <div className="flex justify-center gap-4 mt-2">
        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="text-lg text-white hover:text-purple-400" />
          </a>
        )}
        {twitter && (
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="text-lg text-white hover:text-purple-400" />
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="text-lg text-white hover:text-purple-400" />
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-lg text-white hover:text-purple-400" />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;