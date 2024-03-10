import { Smile } from "lucide-react";
import React, { FC } from "react";

interface WhyWeDoProps {
  // Define props here
}

const WhyWeDo: FC<WhyWeDoProps> = ({}) => {
  return (
    <section id="why we do">
      <div className="h-[30rem] w-full dark:bg-black  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex pb-40 pl-8 md:pl-16 lg:pl-20">
          <div className="flex-grow md:pl-16 lg:pl-20">
            <div className="pt-14">
              <div
                className="flex justify-center px-4 py-2 md:px-6 md:py-3 rounded-full border-2 text-[16px]
      border-[#2C64B7] text-[#2C64B7] font-mono w-fit"
              >
                <Smile className="mr-2 h-6 w-6 text-[#2C64B7]" />
                <p className=""> WHY WE DO WHAT WE DO</p>
              </div>
            </div>
            <div className="py-5 md:pr-24 sm:pr-40">
              <div className="text-xl xs:text-3xl sm:text-3xl md:text-4xl text-zinc-800 font-light font-tiempos-headline pt-4">
                We like helping good people
                <br className="sm:hidden" /> do great things.
                <div>
                  Got an extra minute?
                  <br className="sm:hidden md:hidden" />
                  <a
                    href="/about"
                    className="border-b-2 border-[#706F6B] text-[#706F6B] ml-2"
                  >
                    We have more to say
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeDo;
