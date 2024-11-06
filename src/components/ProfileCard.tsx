/* eslint-disable @next/next/no-img-element */

import BlurFade from "./ui/blur-fade";
import TypingAnimation from "./ui/typing-animation";

import WordRotate from "./ui/word-rotate";
import { DockDemo } from "./ui/Icons";

interface ProfileCardProps {
  imageUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ imageUrl }) => {
  return (
    <>
      <div className=" h-[20vh] w-[40vh] flex justify-center items-center flex-col max-sm:h-[10vh] max-sm:w-[20vh] max-[500px]:w-[100vh] max-[500px]:h-[auto] ">
        <BlurFade>
          <img
            className="object-contain max-[500px]:w-[20vh] rounded-full "
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

          <DockDemo />
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
