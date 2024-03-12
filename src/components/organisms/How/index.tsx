import { ArrowUpRight, PartyPopper } from "lucide-react";
import Image from "next/image";
import React, { FC } from "react";
import goodPeople from "../../../../public/good people.png";
import { Button } from "@/components/ui/button";

interface HowItWorksProps {
  // Define props here
}

const HowItWorks: FC<HowItWorksProps> = ({}) => {
  return (
    <section id="how-it-works">
      <div className="md:hidden inline-block object-contain w-[100%] px-8 pt-8">
        <Image
          id="socraticaLogo"
          src={goodPeople}
          alt="Socratica Logo"
          sizes="50vw"
          // Make the image display full width
          style={{
            width: "100%",
            height: "auto",
          }}
        ></Image>
      </div>
      <div className="flex pt-12 md:py-40 md:pb-40">
        <div className="md:pl-16 lg:pl-20 flex flex-col justify-start">
          <div className="hidden md:inline-block object-contain w-[500px]">
            <Image
              id="socraticaLogo"
              src={goodPeople}
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
          <div className="pl-4 pt-4">
            <div
              className="flex justify-center px-4 py-2 md:px-6 md:py-3 rounded-full border-2 text-[16px]
      border-[#758F2A] text-[#758F2A] font-mono w-fit"
            >
              <PartyPopper className="mr-2 h-6 w-6 text-[#758F2A]" />
              <p className=""> HOW IT WORKS</p>
            </div>
          </div>
          <div className="p-5 pr-6 md:pr-10 lg:pr-40 text-zinc-800">
            <div className="text-xl sm:text-3xl lg:text-4xl lg:pt-9 ">
              Registrasi,
              {/* <span className="font-mono text-sm">*ada HTMnya 120 ya kakaa~</span> */}
              <br />
              Dateng ke SMA 1 Slawi,
              <br />
              <span className="text-[#C34F31] text-4xl leading-[4rem] lg:text-6xl lg:leading-[6rem]">
                Nostalgia...
              </span>
              <br />
              bergembira.
            </div>

            <div className="pt-5 text-[14px] md:text-[16px] text-zinc-800 font-mono text-justify">
              Penting lur!
              <br />
              Dalam rangka Nostalgia,
              <span className="font-semibold mx-1 text-[#C34F31]">15 April 2024</span>
              ini kamu ditunggu di jam 08.30 WIB yah. Busana nostalgia, kita
              samain yuk, Pakaian identik
              <span className="font-semibold mx-1 text-[#C34F31]">putih abu-abu</span> (bukan
              seragam SMA kok), atau atribut: Smansa, ekskul, dan atau Kelas
              yang masih muat
              <span className="font-semibold mx-1 text-[#C34F31]">
                (boleh kaos, jaket, topi, kemeja)
              </span>
              .
              <br />
              HTM
              <span className="font-semibold mx-1 text-[#C34F31]">120K/orang</span>, untuk
              menambah satu lagi cerita nostalgia. Nikmatilah waktu, karena kita
              tak tahu, apa esok masih me-nunggu.Huuuu~
            </div>
            <Button className="rounded-3xl px-8 mr-8 mb-4 font-mono bg-[#C34F31] my-4">
              <ArrowUpRight className="mr-2 h-6 w-6" />
              Gas Daftar
            </Button>
          </div>
        </div>
      </div>
      {/* <div className="px-10 flex justify-center">
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
      </div> */}
    </section>
  );
};

export default HowItWorks;
