import React from "react";
import { MagicCard } from "./ui/magic-card";
import Marquee from "./ui/marquee";
import { ReviewCard } from "./ui/Testonomial";
import BlurFade from "./ui/blur-fade";

function About() {
  return (
    <BlurFade>
      <div
        className="flex justify-center flex-col 
    "
      >
        <h1 className="text-3xl font-bold border-b-2">About</h1>
        <div className="flex flex-col justify-center mt-4 ]">
          <p className="text-sm mt-2 mb-2">
            I am a full-stack web developer with a passion for creating
            beautiful and functional websites. I have experience with HTML, CSS,
            JavaScript, React, Node.js, and more. I am always looking to learn
            new technologies and improve my skills. I am currently looking for
            new opportunities to work on exciting projects and expand my
            knowledge.
          </p>
          <hr />
          <div className="flex justify-between mt-2">
            <div>Age ..... 22</div>
            <div>Residence .......... Pakistan</div>
          </div>
          <div className="flex justify-between mt-2">
            <div>Freelance ...... Avalible</div>
            <div>Address ........ Bahawalpur</div>
          </div>

          <h1 className="text-3xl font-bold border-b-2 mt-4">Services</h1>
          <div>
            <MagicCard className="mt-4 p-4 w-50%">
              <h1 className="text-2xl font-bold">Front end development</h1>
              <p className="mt-2">
                I can create beautiful and functional websites using HTML, CSS,
                and JavaScript and react. I have experience with ui libraries
                like Material ui, shadcn and more.
              </p>
            </MagicCard>
            <MagicCard className="mt-4 p-4 w-50%">
              <h1 className="text-2xl font-bold">Back end development</h1>
              <p className="mt-2">
                I can create beautiful and functional websites using HTML, CSS,
                and JavaScript and react. I have experience with ui libraries
                like Material ui, shadcn and more.
              </p>
            </MagicCard>
            <MagicCard className="mt-4 p-4 w-50%">
              <h1 className="text-2xl font-bold">Database Mannagement</h1>
              <p className="mt-2">
                I can create beautiful and functional websites using HTML, CSS,
                and JavaScript and react. I have experience with ui libraries
                like Material ui, shadcn and more.
              </p>
            </MagicCard>
          </div>
          <h1 className="text-3xl font-bold border-b-2 mt-4">Testonomials</h1>
          <div>
            <Marquee>
              <ReviewCard
                img={"./pic2.jpg"}
                name={"Michael"}
                username={"@michael"}
                body={
                  "Working with M Zeeshan was a game-changer! They revamped our site’s performance and design, improving our user experience and increasing conversions. Highly recommend!"
                }
              />
              <ReviewCard
                img={"./pic3.jpg"}
                name={"John"}
                username={"@john"}
                body={
                  "M Zeeshan is a fantastic developer with an eye for detail. They optimized our platform, cutting load times significantly, and kept our team in the loop throughout. Amazing work!"
                }
              />
              <ReviewCard
                img={"./pic4.jpg"}
                name={"Elisa"}
                username={"@elisa"}
                body={
                  "M Zeeshan brought our app’s UX/UI to the next level. Their blend of creativity and technical skill made a noticeable difference in our user satisfaction. Couldn’t be happier!"
                }
              />
            </Marquee>
          </div>
        </div>
      </div>
    </BlurFade>
  );
}

export default About;
