/* eslint-disable @next/next/no-img-element */

import BlurFade from "./ui/blur-fade";
import TypingAnimation from "./ui/typing-animation";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import WordRotate from "./ui/word-rotate";
import { DockDemo } from "./ui/Icons";

interface ProfileCardProps {
  imageUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ imageUrl }) => {
  return (
    <>
      <div className=" h-[20vh] w-[40vh] flex justify-center items-center flex-col  ">
        <BlurFade>
          <img
            className="object-contain rounded-full "
            src={imageUrl}
            alt="Profile Image"
          />
        </BlurFade>

        <div className="text-2xl font-bold text-black mt-3">
          <TypingAnimation text="Muhammad" />
          <TypingAnimation text="Zeeshan" />
        </div>
        <div className="flex items-center flex-col justify-center">
          {/* <SlightFlip word="Full stack Developer" /> */}
          <WordRotate
            words={[
              "Full stack developer",
              "Front-end Developer",
              "Back-end Developer",
            ]}
          />
          {/* <div className="flex">
          <a
            className="m-2"
            href="https://www.linkedin.com/in/muhammad-zeeshan-0b1b3b1b4/"
            target="blank"
          >
            <FaLinkedin size="20px" color="white" />
          </a>{" "}
          <a
            className="m-2"
            href="https://www.linkedin.com/in/muhammad-zeeshan-0b1b3b1b4/"
            target="blank"
          >
            <FaGithubAlt size="20px" color="white" />
          </a>
          <a
            className="m-2"
            href="https://www.linkedin.com/in/muhammad-zeeshan-0b1b3b1b4/"
            target="blank"
          >
            <FaFacebook size="20px" color="white" />
          </a>
          <a
            className="m-2"
            href="https://www.linkedin.com/in/muhammad-zeeshan-0b1b3b1b4/"
            target="blank"
          >
            <TbBrandFiverr size="20px" color="white" />
          </a>
        </div> */}
          <DockDemo />
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
