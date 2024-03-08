import Image from "next/image";
import React, { FC } from "react";
import profilePic from "../../../../public/example1.png";
import landscapePic from "../../../../public/example2.png";
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
          <h1 className="text-2xl">Smansawi51</h1>
        </div>
        <div className="container mx-auto max-w-screen-xl px-6 md:px-8">
          <div className="flex flex-col items-center relative lg:h-[250px] mt-16 -mb-8 md:mb-12">
            <div className="h-[200px] w-auto object-contain">
              <Image
                id="socraticaLogo"
                src={profilePic}
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
            <div className="w-4/6 md:w-1/2">
              <p className="text-md sm:text-xl lg:text-3xl ">
                We host weekly co-working sessions for you to work on your
                passion projects with likeminded people.
              </p>
              <div className="mt-4 gap-2">
                <Button className="rounded-3xl px-8 py-4 mr-8 mb-4 font-mono ">
                  <ArrowUpRight className="mr-2 h-6 w-6" />
                  Attend A Session
                </Button>
                <Button className="rounded-3xl px-8 py-4 font-mono " variant={"outline"}>
                  <Fingerprint className="mr-2 h-6 w-6 " />
                  Dive Deeper
                </Button>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-end justify-end">
              cc here
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-28">
        <Image
          id="socraticaLogo"
          src={landscapePic}
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
