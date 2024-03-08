import { PartyPopper } from "lucide-react";
import Image from "next/image";
import React, { FC } from "react";
import example4 from "../../../../public/example4.png";
import example5 from "../../../../public/example5.png";

interface HowItWorksProps {
  // Define props here
}

const HowItWorks: FC<HowItWorksProps> = ({}) => {
  return (
    <section id="HowItWorks">
      <div className="flex pt-12 md:py-40 md:pb-40">
        <div className="md:pl-16 lg:pl-20 flex flex-col justify-start">
          <div className="hidden md:inline-block">
            <Image
              id="socraticaLogo"
              src={example4}
              alt="Socratica Logo"
              sizes="50vw"
              // Make the image display full width
              style={{
                width: "100%",
                height: "auto",
              }}
            ></Image>
          </div>
        </div>
        <div className="flex-grow pl-6 sm:pl-10 md:pl-20">
          <div className="pl-4 pt-12">
            <div
              className="flex justify-center px-4 py-2 md:px-6 md:py-3 rounded-full border-2 text-[16px]
      border-[#758F2A] text-[#758F2A] font-mono w-fit"
            >
              <PartyPopper className="mr-2 h-6 w-6 text-[#758F2A]" />
              <p className=""> HOW IT WORKS</p>
            </div>
          </div>
          <div className="p-5 pr-6 md:pr-10 lg:pr-40 text-zinc-800">
            <div className="text-xl sm:text-3xl lg:text-4xl lg:pt-9">
              Introductions,
              <br />
              two 50-min work blocks ,<br />
              ,ending with casual open demos <br />
              snacks along the way.
            </div>
            <div className="pt-5 text-[11px] md:text-[14px] text-zinc-800 font-mono">
              Socratica is a live IRL co-working session hosted every Sunday
              bringing together people who want to make stuff, and you`re
              invited
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 flex justify-center">
        <Image
          id="socraticaLogo"
          src={example5}
          alt="Socratica Logo"
          sizes="75vw"
          // Make the image display full width
          style={{
            width: "60%",
            height: "auto",
          }}
        ></Image>
      </div>
    </section>
  );
};

export default HowItWorks;
