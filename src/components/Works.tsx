import React from "react";
import { MagicCard } from "./ui/magic-card";
import Image from "next/image";
import BlurFade from "./ui/blur-fade";

const projects = [
  {
    title: "Fast React Pizza Co.",
    description:
      "An interactive app for ordering pizzas quickly, with customization options and real-time order tracking.",
    imageUrl: "/pizza.png",
    projectLink: "https://pizza-app-eight-nu.vercel.app",
  },
  {
    title: "Furni flex",
    description:
      "Furni flex is an e-commerce website built using React, with state managed by Redux.",
    imageUrl: "/Furniflex.png",
    projectLink: "https://furni-flex-j6h5.vercel.app/",
  },
  {
    title: "Anonymous Feedback",
    description:
      "Anonymous feedback is a website built with React that allows users to submit feedback anonymously.",
    imageUrl: "/feedback.png",
    projectLink: "https://anonymus-feedbacks.vercel.app/",
  },
  {
    title: "Technest",
    description:
      "Technest is an e-commerce website built using React, with state managed by Redux.",
    imageUrl: "/technest.png",
    projectLink: "https://tech-nest-phi.vercel.app/",
  },
  {
    title: "Codingdev",
    description:
      "Codingdev is a blogging website built with React and Tailwind. You can read blogs about modern tech in the software industry.",
    imageUrl: "/codingdev.png",
    projectLink: "https://codingdevp.com/",
  },
  {
    title: "Worldwise",
    description:
      "Worldwise is a React and Tailwind-based app where you can view and favorite cities across the globe.",
    imageUrl: "/worldwise.png",
    projectLink: "https://worldwise-ochre.vercel.app/",
  },
];

function Works() {
  return (
    <div className="flex justify-center flex-col">
      <BlurFade>
        <h1 className="text-3xl font-bold border-b-2 mb-8 text-center">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <MagicCard
              key={index}
              className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg w-full"
            >
              {/* Project Image */}
              <div className="w-full h-48 relative overflow-hidden rounded-lg">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg transition-transform duration-300 transform hover:scale-105"
                />
              </div>

              {/* Project Title and Description */}
              <div className="flex flex-col items-center text-center mt-4 flex-1">
                <h2 className="text-2xl font-semibold text-yellow-300 mb-2">
                  {project.title}
                </h2>
                <p className="text-white">{project.description}</p>
              </div>

              {/* View Project Button */}
              <div className="flex justify-center items-center mt-4">
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="inline-block px-4 py-2 bg-yellow-500 text-white rounded-md font-medium transition-colors duration-300 hover:bg-yellow-600">
                    🔗 View Project
                  </p>
                </a>
              </div>
            </MagicCard>
          ))}
        </div>
      </BlurFade>
    </div>
  );
}

export default Works;
