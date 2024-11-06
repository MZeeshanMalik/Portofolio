import React, { useEffect, useRef } from "react";
import Button from "./Button";
import { IoMenuSharp, IoPersonSharp } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import { IoMdStats } from "react-icons/io";
import { MdOutlineContactPhone } from "react-icons/md";

function Sidebar({ setItem, item }) {
  // const [resume, setResume] = React.useState(false);
  // const [about, setAbout] = React.useState(false);
  // const [works, setWorks] = React.useState(false);
  // const [contact, setContact] = React.useState(false);
  return (
    <div className="flex justify-center items-center h-[100%] ">
      <div className="flex w-[100%] justify-evenly items-center  flex-col text-sm font-extralight  text-black max-md:flex-row h-[100%]">
        <div>
          <Button
            className={item == "About" ? "text-green-600" : ""}
            onclick={() => setItem("About")}
          >
            <IoPersonSharp
              size={"30px"}
              className={item == "About" ? "text-green-500" : ""}
            />
            About
          </Button>
        </div>
        <div>
          <Button
            className={item == "Resume" ? "text-green-600" : ""}
            onclick={() => setItem("Resume")}
          >
            <TiDocumentText
              className={item == "Resume" ? "text-green-500" : ""}
              size={"30px"}
            />
            Resume
          </Button>
        </div>
        <div>
          <Button
            className={item == "Works" ? "text-green-600" : ""}
            onclick={() => setItem("Works")}
          >
            <IoMdStats
              className={item == "Works" ? "text-green-500" : ""}
              size={"30px"}
            />
            Projects
          </Button>
        </div>
        <div>
          <Button
            className={item == "Contact" ? "text-green-600" : ""}
            onclick={() => setItem("Contact")}
          >
            <MdOutlineContactPhone
              className={item == "Contact" ? "text-green-500" : ""}
              size={"30px"}
            />
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
