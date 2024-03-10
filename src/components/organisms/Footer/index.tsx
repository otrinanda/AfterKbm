import { BackgroundBeams } from "@/components/ui/backgroundBeams";
import React, { FC } from "react";

interface FooterProps {
  // Define props here
}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <section id="footer">
      <footer className="h-[40rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="w-full grid xs:grid-cols-3 md:grid-cols-4 px-10 sm:px-14">
          <div className="pt-16">
            <h3 className="text-[#FBF8EF] font-base text-sm -tracking-[0.48px] leading-[20px] pb-4 font-mono">
              FRIENDS OF SOCRATICA
            </h3>
          </div>
          <div className="pt-16">
            <h3 className="text-[#FBF8EF] font-base text-sm -tracking-[0.48px] leading-[20px] pb-4 font-mono">
              MORE LINKS
            </h3>
          </div>
          <div className="pt-16 col-span-2">
            <h3 className="text-[#FBF8EF] font-base text-sm -tracking-[0.48px] leading-[20px] pb-4 font-mono">
              MORE LINKS
            </h3>
          </div>
        </div>
        <BackgroundBeams/>
      </footer>
    </section>
  );
};

export default Footer;
