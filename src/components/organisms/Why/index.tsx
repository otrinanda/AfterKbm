import { Smile } from "lucide-react";
import React, { FC } from "react";

interface WhyWeDoProps {
  // Define props here
}

const WhyWeDo: FC<WhyWeDoProps> = ({}) => {
  return (
    <section id="why-we-do">
      <div className="h-[20rem] md:h-[20rem] w-full dark:bg-black  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex pb-40 pl-8 md:pl-16 lg:pl-20">
          <div className="flex-grow md:pl-16 lg:pl-20">
            <div className="pt-2">
              <div
                className="flex justify-center px-4 py-2 md:px-6 md:py-3 rounded-full border-2 text-[16px]
      border-[#2C64B7] text-[#2C64B7] font-mono w-fit"
              >
                <Smile className="mr-2 h-6 w-6 text-[#2C64B7]" />
                <p className=""> WHY WE DO WHAT WE DO</p>
              </div>
            </div>
            <div className="py-5 md:pr-24 sm:pr-40">
              <span className="font-mono text-[12px] md:text-xl mb-2">
                Tiap sudut Smansawi mengingatkan kita yang selalu sama,
                <br className="sm:block hidden" /> yang berubah hanya foto
                Presiden di kelas-kelas.
              </span>
              <div className="text-xl xs:text-3xl sm:text-3xl md:text-4xl text-zinc-800 pt-4">
                Cerita-cerita kita akan bertahan tanpa batas usia.
                <br />
                Butuh di-<span className="italic">maintenance</span>, dengan nostalgia.
                <br className="sm:hidden md:hidden" />
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc_vtO1Xi34g4dj3-ERXUloZS-BloHaAqlSNJfKdk2gOqsxNw/viewform?usp=sf_link"
                  className="border-b-2 border-[#E9B34A] text-[#E9B34A] ml-0 sm:ml-2"
                >
                  Yuk Kumpul !
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeDo;
