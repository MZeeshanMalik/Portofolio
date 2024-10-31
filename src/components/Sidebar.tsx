import React, { useEffect, useRef } from "react";
import Button from "./Button";
import { IoMenuSharp, IoPersonSharp } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import { IoMdStats } from "react-icons/io";
import { MdOutlineContactPhone } from "react-icons/md";

function Sidebar({ setItem }) {
  const [resume, setResume] = React.useState(false);
  const [about, setAbout] = React.useState(false);
  return (
    <div>
      <div className="flex justify-center  flex-col text-sm font-extralight text-black ">
        <Button>
          <IoMenuSharp size={"30px"} />
          Menue
        </Button>
        <Button onclick={() => setItem("About")}>
          <IoPersonSharp size={"30px"} />
          About
        </Button>
        <Button onclick={() => setItem("Resume")}>
          <TiDocumentText size={"30px"} />
          Resume
        </Button>
        <Button>
          <IoMdStats size={"30px"} />
          Stats
        </Button>
        <Button>
          <MdOutlineContactPhone size={"30px"} />
          Contact
        </Button>
        <Button>
          <MdOutlineContactPhone size={"30px"} />
          Experience
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
