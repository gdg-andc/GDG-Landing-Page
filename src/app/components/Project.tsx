"use client";

import React, { useState, useEffect, useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

const Projects = () => {
  // Dummy project data
  const projects = [
    {
      title: "Project 1",
      description:
        "Hello, how are you? This project was made by our team, and all the above are good. We are the students of ANDC, and we would welcome you all to GDG ANDC.",
    },
    {
      title: "Project 2",
      description:
        "Hello, how are you? This project was made by our team, and all the above are good. We are the students of ANDC, and we would welcome you all to GDG ANDC.",
    },
    {
      title: "Project 3",
      description:
        "Hello, how are you? This project was made by our team, and all the above are good. We are the students of ANDC, and we would welcome you all to GDG ANDC.",
    },
    {
      title: "Project 4",
      description:
        "Hello, how are you? This project was made by our team, and all the above are good. We are the students of ANDC, and we would welcome you all to GDG ANDC.",
    },
    {
      title: "Project 5",
      description:
        "Hello, how are you? This project was made by our team, and all the above are good. We are the students of ANDC, and we would welcome you all to GDG ANDC.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
  const cardContainerRef = useRef<HTMLDivElement | null>(null);

  // Function to go to the next project
  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  // Function to go to the previous project
  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  // Start the auto-rotation of the projects
  const startAutoRotation = () => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }
    intervalIdRef.current = setInterval(nextProject, 3000);
  };

  // Stop the auto-rotation
  const stopAutoRotation = () => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    }
  };

  // Start the auto-rotation when the component mounts
  useEffect(() => {
    startAutoRotation();

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [startAutoRotation]);

  // Ensure the container is shifted based on the current index
  useEffect(() => {
    if (cardContainerRef.current) {
      cardContainerRef.current.style.transform = `translateX(-${currentIndex * 778.38}px)`;
    }
  }, [currentIndex]);

  return (
    <main className="max-w-7xl mx-auto px-4 py-16 text-center relative">
      <h1 className="text-5xl font-bold text-white mb-4 font-sans tracking-tight">
        Projects
      </h1>
      <p className="text-lg text-gray-400 mb-8">
        There are many variations available, but the majority have suffered
        alteration in some form, by injected humour, or randomised words which
        don&apos;t look even slightly believable.
      </p>

      <div className="relative overflow-hidden mb-20">
        <div
          ref={cardContainerRef}
          className="flex transition-transform duration-500 ease-in-out"
        >
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="w-[778.38px] h-[350px] bg-white bg-opacity-80 backdrop-blur-lg rounded-[69px] shadow-lg flex-shrink-0 mr-6"
            >
              <CardHeader>
                <CardTitle className="uppercase text-white">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-left">
                <p className="text-sm text-gray-400 mb-4">{project.description}</p>
                <Button className="border-gray-600 text-white bg-grey-800 hover:bg-gray-400 px-8 py-2 rounded-full font-extrabold">
                  Know More {"\u2192"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 right-4 p-4 flex gap-4">
        <Button
          onClick={() => {
            prevProject();
            stopAutoRotation();
            startAutoRotation();
          }}
          className="text-[#FFFDFD] bg-[#0a0f1e] p-6 rounded-full font-extrabold text-4xl transition-all flex items-center justify-center relative hover:bg-white hover:backdrop-blur-md hover:bg-opacity-20 hover:shadow-xl hover:shadow-white hover:ring-2 hover:ring-purple-500 hover:ring-opacity-50 hover:scale-105"
          aria-label="Previous Project"
        >
          <span className="absolute bottom-2 text-4xl">{"\u2190"}</span>
        </Button>

        <Button
          onClick={() => {
            nextProject();
            stopAutoRotation();
            startAutoRotation();
          }}
          className="text-[#FFFDFD] bg-[#0a0f1e] p-6 rounded-full font-extrabold text-4xl transition-all flex items-center justify-center relative hover:bg-white hover:backdrop-blur-md hover:bg-opacity-20 hover:shadow-xl hover:shadow-white hover:ring-2 hover:ring-purple-500 hover:ring-opacity-50 hover:scale-105"
          aria-label="Next Project"
        >
          <span className="absolute bottom-2 text-4xl">{"\u2192"}</span>
        </Button>
      </div>
    </main>
  );
};

export default Projects;
