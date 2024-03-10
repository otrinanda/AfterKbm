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
      <div className="h-[35rem]  w-full dark:bg-black  dark:bg-dot-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="flex flex-col">
          <div className="flex justify-center items-center pt-32 pb-10">
            <div
              className="flex justify-center px-4 py-2 md:px-6 md:py-3 rounded-full border-2 text-[16px]
      border-[#C6482C] text-[#C6482C] font-mono w-fit"
            >
              <Hand className="mr-2 h-6 w-6 text-[#C6482C]" />
              <p className=""> WHAT WE ARE</p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-y-2 items-center text-[16px] md:text-4xl md:pt-8 pb-4">
            <div className="flex items-center whitespace-nowrap sm:whitespace-normal">
              <span className="bg-[#C34F31] md:w-8 md:h-8 w-6 h-6 rounded-full md:mx-2 mx-1" />
              Bekas
              <span className=" border-dashed border-b-2 border-[#CDC19F] mx-1">
                Smansawi 2015.
              </span>
            </div>
            <div className="flex items-center whitespace-nowrap sm:whitespace-normal">
              Kalau belum bekas, tiada kenangan.
              <span className="bg-[#758F2A] md:w-8 md:h-8 w-6 h-6 rounded-full md:mx-2 mx-1" />
            </div>
            <div className="flex items-center whitespace-nowrap sm:whitespace-normal">
              Karena membekas,
              <span className=" border-solid border-b-2 md:border-b-4 border-[#CDC19F] mx-1">
                selamanya
              </span>
              <span className="bg-[#E9B34A] md:w-8 md:h-8 w-6 h-6 rounded-full md:mx-2 mx-1" />
              bertahan.
            </div>
          </div>
          <div className="flex items-center justify-center font-mono text-zinc-800 pt-5 md:pt-8 pb-40 px-12">
            <div className="text-center text-[12px] md:text-xl">
              <span className="">
                After KBM di Aula Putih mari kita Bicara seru, Ngopi, Nostalgi
                di senin pagi,
                sembari Ngobrol sana sini dan tentu saja
                <br />
                <a
                  href="https://lu.ma/socratica"
                  target="_blank"
                  className="border-b-2 border-dashed border-[#C34F31] text-[#C34F31] px-1 font-semibold"
                >
                  kamu diundang
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
    </div>
  );
};

export default Description;
