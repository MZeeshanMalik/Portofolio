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
          <p className="text-sm mt-2 mb-2 raleway-font ">
            👋 Hi there! I'm a passionate Full-Stack Developer with a deep
            understanding of web technologies, dedicated to crafting seamless,
            user-centric applications. With expertise spanning <b> HTML</b>,
            <b>CSS</b>,<b>JavaScript</b> and <b>React</b>,<b>Next.js</b>,
            <b>Node.js</b> and <b>MongoDB</b>, I bring ideas to life with clean,
            efficient code.
            <br />
            Whether building dynamic frontends, managing robust backends, or
            optimizing data with mongodb, SQL and Firebase, I have hands-on
            experience with a variety of popular React libraries, enabling me to
            create scalable, interactive, and intuitive digital experiences.
            Driven by continuous learning and a commitment to best practices,
            I’m excited to contribute to innovative projects that make an
            impact.
            <br />
            <span className="text-lg text-stone-950 quotesfonts">
              Let’s create something amazing together!
            </span>
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
                I have a strong foundation in frontend development, with
                expertise in HTML, CSS, JavaScript, and advanced frameworks like
                React and Next.js. My skills allow me to create responsive,
                visually appealing, and user-friendly interfaces that enhance
                user engagement.
              </p>
            </MagicCard>
            <MagicCard className="mt-4 p-4 w-50%">
              <h1 className="text-2xl font-bold">Back end development</h1>
              <p className="mt-2">
                On the backend, I’m skilled in Node.js and Express, building
                secure, scalable APIs and server-side applications that handle
                data efficiently. With expertise in MongoDB, SQL, and Firebase,
                I manage data storage and retrieval with precision, ensuring
                seamless integration with frontend applications.
              </p>
            </MagicCard>
            <MagicCard className="mt-4 p-4 w-50%">
              <h1 className="text-2xl font-bold">Database Mannagement</h1>
              <p className="mt-2 text-gray-100">
                I have a solid foundation in both relational (SQL) and NoSQL
                (MongoDB, Firebase) databases, enabling me to handle a wide
                range of data requirements effectively. My SQL expertise allows
                me to design normalized schemas, optimize complex queries, and
                ensure data integrity in relational databases. With MongoDB and
                Firebase, I efficiently manage flexible, scalable data
                structures ideal for high-performance applications, handling
                large datasets and real-time updates seamlessly.
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
