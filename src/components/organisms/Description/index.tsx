import { Button } from "@/components/ui/button";
import React, { FC } from "react";
import { Poppins } from "next/font/google";
import { Hand } from "lucide-react";
import Badge from "@/components/atoms/Badge";
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

interface DescriptionProps {
  // Define props here
}

const Description: FC<DescriptionProps> = ({}) => {
  return (
    <div id="what-is-this">
      <div className="flex justify-center items-center pt-32 pb-10">
        <div
          className="flex justify-center px-4 py-2 md:px-6 md:py-3 rounded-full border-2 text-[16px]
      border-[#C6482C] text-[#C6482C] font-mono w-fit"
        >
          <Hand className="mr-2 h-6 w-6 text-[#C6482C]" />
          <p className=""> WHAT WE ARE</p>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-y-2 items-center text-[16px] sm:text-4xl md:pt-8">
        <div className="flex items-center whitespace-nowrap sm:whitespace-normal">
          An open celebration of makers, artists,
        </div>
        <div className="flex items-center whitespace-nowrap sm:whitespace-normal">
          engineers, designers, writers, poets,
        </div>
        <div className="flex items-center whitespace-nowrap sm:whitespace-normal">
          and everything in-between
        </div>
      </div>
      <div className="flex items-center justify-center font-mono text-zinc-800 pt-5 md:pt-8 pb-40 px-12">
        <div className="text-center text-[12px] md:text-sm">
          <span className="block md:hidden">
            Socratica is a live IRL co-working session hosted every Sunday
            bringing together people who want to{" "}
            <span className="italic">make</span>
            stuff, and
            <a
              href="https://lu.ma/socratica"
              target="_blank"
              className="border-b-2 border-[#706F6B] text-[#706F6B] pl-1"
            >
              you`re invited
            </a>
            .
          </span>{" "}
          <div className="hidden md:block">
            Socratica is a live IRL co-working session hosted every Sunday
            bringing together people who want to
          </div>{" "}
          <div className="hidden md:block mx-auto">
            <span className="italic">make</span> stuff, and
            <a
              href="/map"
              className="border-b-2 border-[#706F6B] text-[#706F6B]"
            >
              you`re invited
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
