"use client";
import React, { useState, useEffect, useRef } from "react";
import About from "@/components/About";
import ProfileCard from "@/components/ProfileCard";
import Resume from "@/components/Resume";
import Sidebar from "@/components/Sidebar";
import BlurFade from "@/components/ui/blur-fade";
import RetroGrid from "@/components/ui/retro-grid";
import Works from "@/components/Works";
import { ProfileForm } from "@/components/Form";
import { ToastProvider } from "@/components/ui/toast";

function Page() {
  const [item, setItem] = useState("About");
  const contentRef = useRef<HTMLDivElement>(null); // Create a ref for the content container

  // Scroll to top when 'item' changes
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0; // Reset scroll position to the top
    }
  }, [item]);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl max-[500px]:overflow-y-scroll max-[500px]:h-auto">
      {/* Sidebar */}
      <div className="p-4 h-full text-black relative hidden max-md:block max-md:w-[100%] max-md:mt-20 max-[500px]:mt-0">
        <BlurFade>
          <Sidebar item={item} setItem={setItem} />
        </BlurFade>
      </div>
      <RetroGrid angle={65} />
      <div className="flex w-full h-full max-[500px]:flex-col">
        {/* Sidebar */}
        <div className=" text-black hidden relative md:flex min-md:w-[0%] justify-center items-center max-md:p-4">
          <BlurFade className="h-[100%]">
            <Sidebar item={item} setItem={setItem} />
          </BlurFade>
        </div>

        {/* Profile Card */}
        <div className="w-[40%] p-4 flex justify-center items-center max-[500px]:w-[100%]">
          <ProfileCard imageUrl="/zeeshan.png" />
        </div>

        {/* Main Content */}
        <div
          ref={contentRef} // Attach the ref to the content container
          className="w-[60%] p-4 text-black h-full overflow-auto max-[500px]:w-[100%]"
        >
          {/* Key prop added to re-render component on item change */}
          <div key={item}>
            {item === "About" ? (
              <About />
            ) : item === "Resume" ? (
              <Resume />
            ) : item === "Works" ? (
              <Works />
            ) : item === "Contact" ? (
              <ProfileForm />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function page() {
  return (
    <div>
      <ToastProvider>
        <Page />
      </ToastProvider>
    </div>
  );
}
