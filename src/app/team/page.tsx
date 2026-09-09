"use client";
import React from "react";
import TeamCard from "@/app/components/ui/team-card";
import gdgLead from "../../teamMembers.json";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface TeamMember {
  name: string;
  role: string;
  instagram?: string;
  twitter?: string;
  github?: string;
  linkedin?: string;
  profileLink: string;
}

interface TeamData {
  gdgLead: TeamMember[];
  teamMembers: TeamMember[];
}

const Team = () => {
  const [teamData, setTeamData] = useState<TeamData>({
    gdgLead: [],
    teamMembers: [],
  });

  useEffect(() => {
    setTeamData(gdgLead);
  }, []);

  return (
    <div className="bg-[#0a0f1e] min-h-screen text-white  custom-scrollbar overflow-y-auto">

      <div className="bg-[#0a0f1e] text-white py-16">
        <div className="text-center mb-12 px-4 ">
          <h1 className="text-4xl sm:text-5xl font-bold  text-white mb-4 font-sans tracking-tight flex justify-center">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFFDFD]">Meet the Organizers</h2>
          <p className="text-xl text-purple-400 pt-6 max-w-3xl mx-auto text-center">
            Our dedicated team of tech enthusiasts, and developers behind GDG ANDC.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* GDG Lead Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            {teamData.gdgLead.map((member, index) => (
              <TeamCard
                key={index}
                {...member}
                profileLink={member.profileLink}
              />
            ))}
          </div>
        </div>

        {/* Team Members Section */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamData.teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                {...member}
                profileLink={member.profileLink}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
