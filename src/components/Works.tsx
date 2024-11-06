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
    projectLink: " https://pizza-app-eight-nu.vercel.app",
  },
  {
    title: "Furni flex",
    description:
      "Furni felx is an ecommerence website built using react and states are managed using redux.",
    imageUrl: "/Furniflex.png",
    projectLink: "https://furni-flex-j6h5.vercel.app/",
  },
  {
    title: "Annonymou feedback",
    description:
      "Furni felx is an ecommerence website built using react and states are managed using redux.",
    imageUrl: "/feedback.png",
    projectLink: "https://anonymus-feedbacks.vercel.app/",
  },
  {
    title: "Technest",
    description:
      "Technest is an ecommerence website built using react and states are managed using redux.",
    imageUrl: "/technest.png",
    projectLink: "https://tech-nest-phi.vercel.app/",
  },
  {
    title: "Codingdev",
    description:
      "codingdevp is an blogging website built using react and tailwind. You can read blogs related to moderen technology in software industary.",
    imageUrl: "/codingdev.png",
    projectLink: "https://codingdevp.com/",
  },
  {
    title: "Worldwise",
    description:
      "worldwise is a website built using react and tailwind. You can see any city in world and mark that city as your favourite.",
    imageUrl: "/worldwise.png",
    projectLink: "https://worldwise-ochre.vercel.app/",
  },
];

function Works() {
  return (
    <div className="flex justify-center flex-col">
      <BlurFade>
        <h1 className="text-3xl font-bold border-b-2">Projects</h1>
        <div className="flex flex-col justify-center mt-4">
          <div className="flex flex-row justify-center items-center flex-wrap">
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-full md:w-[40%] lg:w-[45%] mb-8 ml-2"
              >
                <MagicCard className="relative flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
                  {/* Project Image */}
                  <div className="w-full h-48 relative overflow-hidden rounded-lg">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Project Title and Description */}
                  <div className="flex flex-col items-center text-center mt-4">
                    <h2 className="text-2xl font-semibold text-yellow-300 mb-2">
                      {project.title}
                    </h2>
                    {project.description}
                  </div>

                  {/* View Project Button */}
                  <div className="flex justify-center items-center">
                    <a href={project.projectLink} target="blank">
                      <p className=" mt-4 inline-block px-4 py-2 bg-yellow-500 text-white rounded-md font-medium transition-colors duration-300 hover:bg-yellow-600">
                        🔗 View Project
                      </p>
                    </a>
                  </div>
                </MagicCard>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>
    </div>
  );
}

export default Works;
