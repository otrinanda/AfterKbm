import Image from "next/image";
import React, { FC } from "react";
import landscape from "../../../../public/LandscapeSMA.svg";
import landscape2 from "../../../../public/Group 4.svg";
import HeroPic from "../../../../public/Hero.svg";
import landscapePic from "../../../../public/example2.png";
import logo from "../../../../public/logo.svg";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { ArrowUpRight, Fingerprint } from "lucide-react";
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

interface HeroProps {
  // Define props here
}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <>
      <div className="flex flex-col h-[670px] sm:h-[800px] justify-center">
        <div className="absolute top-5 left-1/2 trasform -translate-x-1/2">
          {/* <h1 className="text-2xl">Smansawi51</h1> */}
          <div className="object-contain w-[300px]">
            <Image
              id="socraticaLogo"
              src={logo}
              alt="Socratica Logo"
              // sizes="5vw"
              // Make the image display full width
              style={{
                width: "100%",
                height: "auto",
              }}
            ></Image>
          </div>
          <div className="font-mono text-center text-lg pt-2">
            present
            <span className="font-extrabold font-mono px-1">KUMPUL</span>
          </div>
        </div>
        <div className="container mx-auto max-w-screen-xl px-6 md:px-8">
          <div className="flex flex-col items-center relative lg:h-[250px] mt-16 -mb-8 md:mb-12">
            <div className="h-[200px] w-auto object-contain">
              <Image
                id="socraticaLogo"
                src={HeroPic}
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
          <div className="flex space-x-4 mb-8 md:mb-12">
            <div className="">
              <p className="text-md sm:text-xl lg:text-3xl lg:leading-[3rem] sm:leading-8">
                di Aula Putih ayo
                <span className=" border-dashed border-b-2 border-gray-600 ml-1">
                  Kumpul,{" "}
                </span>
                <br />
                Satu hari bicara satu masa penuh cerita,
                <br />
                aku, kamu, kita menyatu.
              </p>
              <div className="mt-4 gap-2">
                <Button className="rounded-3xl px-8 py-4 mr-8 mb-4 font-mono bg-[#C34F31]">
                  <ArrowUpRight className="mr-2 h-6 w-6" />
                  Gas Daftar
                </Button>
                <Button
                  className="rounded-3xl px-8 py-4 font-mono border-[#C34F31] text-[#C34F31]"
                  variant={"outline"}
                >
                  <Fingerprint className="mr-2 h-6 w-6 " />
                  Lihat lihat dulu boleh
                </Button>
              </div>
            </div>
            {/* <div className="flex-1 flex flex-col items-end justify-end">
              cc here
            </div> */}
          </div>
        </div>
      </div>
      <div className="-mt-28">
        <Image
          id="socraticaLogo"
          src={landscape2}
          alt="Socratica Logo"
          sizes="100vw"
          // Make the image display full width
          style={{
            width: "100%",
            height: "auto",
          }}
        ></Image>
      </div>
    </>
  );
};

export default Hero;
