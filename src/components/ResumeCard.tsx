import React from "react";
import { MagicCard } from "./ui/magic-card";
import Image from "next/image";

interface ResumeCardProps {
  date: string;
  title?: string;
  location: string;
  description?: any;
  image?: string;
}

function ResumeCard({
  date,
  title,
  location,
  description,
  image = "",
}: ResumeCardProps) {
  return (
    <div>
      <div>
        <div>
          <MagicCard className="mt-4 p-4 w-50%">
            {/* timeline */}
            <div>
              <div className="text-green-400  w-fit p-1 text-sm rounded-sm">
                {date}
              </div>
            </div>
            {/* heading */}
            {image ? (
              <div className="flex justify-between items-center ">
                <p className="text-sm font-bold ">{title}</p>
                <Image
                  src={image}
                  width={40}
                  height={40}
                  alt="company logo"
                  className="w-10 h-10 rounded-full"
                />
              </div>
            ) : (
              <div>
                <p className="text-sm font-bold ">{title}</p>
              </div>
            )}
            {/* <div>
              <p className="text-sm font-bold ">{title}</p>
            </div> */}
            <p className="text-green-200">{location}</p>
            {/* company name */}
            <div></div>
            {/* paragraph */}
            <div>
              <p className="text-sm">{description}</p>
            </div>
          </MagicCard>
        </div>
      </div>
    </div>
  );
}

export default ResumeCard;
