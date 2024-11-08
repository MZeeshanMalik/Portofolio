import React from "react";
import { MdCastForEducation } from "react-icons/md";
import { RiGraduationCapLine } from "react-icons/ri";
import ResumeCard from "./ResumeCard";
import Skills from "./Skills";
import BlurFade from "./ui/blur-fade";

function Resume() {
  return (
    <div
      className="flex justify-center flex-col 
    "
    >
      <BlurFade>
        <h1 className="text-3xl font-bold border-b-2">Resume</h1>
        <div className="flex flex-row justify-center mt-4 max-sm:flex-col">
          <div className="w-[50%] max-sm:w-[100%]">
            <div className="flex  justify-center items-center flex-col p-4">
              <div className="border-b-2 flex items-center  justify-center w-full">
                <MdCastForEducation size={"40px"} />
                <h2 className="text-2xl font-bold ml-4 "> Education</h2>
              </div>
              <ResumeCard
                date={"2021-present"}
                title={" Islamia university Bahawalpur"}
                location={"Pakistan"}
                description={
                  "Currently pursuing a Bachelor’s in Computer Science 7th semester."
                }
              />
              <ResumeCard
                date={"2023"}
                title={"React by jonas"}
                location={"Udemy"}
                description={
                  "React course by jonas schmedtmann on udemy. This course is about react and its advance concepts."
                }
              />
              <ResumeCard
                date={"2022"}
                title={"Node js by jonas"}
                location={"Udemy"}
                description={
                  "Node js course by jonas schmedtmann on udemy. This course is about node js and its advance concepts."
                }
              />
              <ResumeCard
                date={"2022"}
                title={" React Libraries"}
                location={"Youtube"}
                description={
                  "React Libraries Material UI, Redux, React Router, React Query, React Hook Form "
                }
              />
            </div>
          </div>
          <div className="w-[50%] max-sm:w-[100%]">
            <div className="flex items-center justify-center flex-col p-4 ">
              <div className="border-b-2 flex items-center  justify-center w-full">
                <RiGraduationCapLine size={"40px"} />
                <h2 className="text-2xl font-bold ml-4 "> Experience</h2>
              </div>
              {/* <div className="flex items-center justify-center flex-col p-4"> */}
              <ResumeCard
                date={"2024-present"}
                title={"Digisol365"}
                location={"Software company"}
                description={
                  "Working as a full-stack developer and web designer."
                }
              />{" "}
              <ResumeCard
                date={"2022-present"}
                title={"Upwork"}
                location={"Inc."}
                description={
                  "Making full-stack applications on upwork for clients."
                }
                image={"./upwork-svgrepo-com.svg"}
              />
              <ResumeCard
                date={"2023-present"}
                title={"Fiverr"}
                location={"Inc."}
                description={
                  "working as full stack developer and web designer."
                }
                image={"./fiverr-svgrepo-com.svg"}
              />{" "}
              <ResumeCard
                date={"2023-present"}
                title={"Freelacer"}
                location={"Inc."}
                description={
                  "working as full stack developer and web designer."
                }
                image={"./freelancer-svgrepo-com.svg"}
              />
              {/* /* {skills sectionsskjdf} */}
              {/* </div> */}
            </div>
          </div>
        </div>
        {/* skills section  */}
        <Skills />
        <h1 className="text-3xl font-bold border-b-2 max-[600px]:text-xl quotesfonts">
          &quot;Any fool can write code that a computer can understand. Good
          programmers write code that humans can understand&quot; <br />
          <span className="text-lg text-stone-950">(Martin Fowler) </span>
        </h1>
      </BlurFade>
    </div>
  );
}

export default Resume;
