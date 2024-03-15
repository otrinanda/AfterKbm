import { Baby } from "lucide-react";
import Image from "next/image";
import React, { FC } from "react";
import example4 from "../../../../public/people.svg";

interface PeopleProps {
  // Define props here
}

const People: FC<PeopleProps> = ({}) => {
  return (
    <div className="pt-24 md:pt-20">
      <div className="pl-8 md:pl-20 lg:pl-44">
        <div
          className="flex justify-center px-4 py-2 md:px-6 md:py-3 rounded-full border-2 text-[16px]
      border-[#854F6F] text-[#854F6F] font-mono w-fit"
        >
          <Baby className="mr-2 h-6 w-6 text-[#854F6F]" />
          <p className=""> WHO CAN COME</p>
        </div>
      </div>
      <div className="pt-6 pl-8 md:pl-2- lg:pl-44 w-11/12 md:w-full">
        <div className="text-[20px] text-xl xs:text-3xl sm:text-3xl md:text-4xl">
          Smansawi 51, 
          <br/>
          sejauh apapun kamu, 
          <br className="hidden md:block ml-1"  />
          tempat ini selalu untukmu.
        </div>
        <div className="pt-2 md:pt-6 text-[11px] sm:text-[14px] sm:text-md font-mono">
          We know it can be struggle to start
          <br />
          (We`ve been there).
        </div>
      </div>
      <div className="-mt-[5rem] sm:-mt-[8rem] md:-mt-[9rem] lg:-mt-[20rem">
        <Image
          id="socraticaLogo"
          src={example4}
          alt="Socratica Logo"
          sizes="75vw"
          // Make the image display full width
          style={{
            width: "100%",
            height: "auto",
          }}
        ></Image>
      </div>
    </div>
  );
};

export default People;
