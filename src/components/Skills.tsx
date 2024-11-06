import React from "react";
import AnimatedCircularProgressBar from "./ui/animated-circular-progress-bar";
import { FaNodeJs } from "react-icons/fa";
import { RiBookMarkedFill } from "react-icons/ri";

function Skills() {
  return (
    <div className="text-black p-8">
      <h1 className="text-3xl font-bold mb-8 border-b-2">Skills</h1>

      <div className="flex justify-between max-[600px]:flex-col max-[500px]:mt-5">
        {/* Back-End Skills Section */}
        <div className="w-1/2 max-[600px]:w-[100%] max-[600px]:flex-col">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center justify-around mb-4">
              <FaNodeJs />
              <h2 className="text-lg font-semibold">Technologies</h2>
            </div>
            <div className="flex justify-around flex-wrap items-center mt-4">
              <div className="flex flex-col items-center ">
                <AnimatedCircularProgressBar
                  className="max-[400px]:w-[50px]"
                  max={100}
                  value={87}
                  min={0}
                  gaugePrimaryColor="green"
                  gaugeSecondaryColor="black"
                />
                <p className="mt-2">Next js</p>
              </div>

              <div className="flex flex-col items-center">
                <AnimatedCircularProgressBar
                  className="max-[400px]:w-[50px]"
                  max={100}
                  value={90}
                  min={0}
                  gaugePrimaryColor="green"
                  gaugeSecondaryColor="black"
                />
                <p className="mt-2">React</p>
              </div>

              <div className="flex flex-col items-center">
                <AnimatedCircularProgressBar
                  className="max-[400px]:w-[50px]"
                  max={100}
                  value={88}
                  min={0}
                  gaugePrimaryColor="green"
                  gaugeSecondaryColor="black"
                />
                <p className="mt-2">Node.js</p>
              </div>

              <div className="flex flex-col items-center">
                <AnimatedCircularProgressBar
                  className="max-[400px]:w-[50px]"
                  max={100}
                  value={92}
                  min={0}
                  gaugePrimaryColor="green"
                  gaugeSecondaryColor="black"
                />
                <p className="mt-2">Express</p>
              </div>
              <div className="flex flex-col items-center">
                <AnimatedCircularProgressBar
                  className="max-[400px]:w-[50px]"
                  max={100}
                  value={92}
                  min={0}
                  gaugePrimaryColor="green"
                  gaugeSecondaryColor="black"
                />
                <p className="mt-2">Mongodb</p>
              </div>
              <div className="flex flex-col items-center">
                <AnimatedCircularProgressBar
                  className="max-[400px]:w-[50px]"
                  max={100}
                  value={92}
                  min={0}
                  gaugePrimaryColor="green"
                  gaugeSecondaryColor="black"
                />
                <p className="mt-2">Git</p>
              </div>
            </div>
          </div>
        </div>

        {/* Knowledge Section */}
        <div className="w-1/2 max-[600px]:w-[100%] max-[600px]:mt-5">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center mb-4">
              <RiBookMarkedFill />

              <h2 className="text-lg font-semibold">KNOWLEDGE</h2>
            </div>
            <ul className="list-none space-y-2 text-left text-base">
              <li>✔ Responsive and mobile-ready</li>
              <li>✔ GraphCMS Development</li>
              <li>✔ Full-stack web app</li>
              <li>✔ API Integration</li>
              <li>✔ Authentication</li>
              <li>✔ Database Integration</li>
              <li>✔ W3C validated coding</li>
              <li>✔ MERN or T3 stack</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
