"use client";
import React, { useState } from "react";
import About from "@/components/About";
import ProfileCard from "@/components/ProfileCard";
import Resume from "@/components/Resume";
import Sidebar from "@/components/Sidebar";
import BlurFade from "@/components/ui/blur-fade";
import RetroGrid from "@/components/ui/retro-grid";

function Page() {
  const [item, setItem] = useState("about");

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <RetroGrid angle={65} />
      <div className="flex w-full h-full">
        {/* Sidebar */}
        <div className="w-[10%] p-4 text-black">
          <BlurFade>
            <Sidebar setItem={setItem} />
          </BlurFade>
        </div>

        {/* Profile Card */}
        <div className="w-[30%] p-4 flex justify-center items-center">
          <ProfileCard imageUrl="/zeeshan.png" />
        </div>

        {/* Main Content */}
        <div className="w-[60%] p-4 text-black h-full overflow-auto">
          {item === "About" ? <About /> : <Resume />}
        </div>
      </div>
    </div>
  );
}

export default function page() {
  return (
    <div>
      <Page />
    </div>
  );
}
