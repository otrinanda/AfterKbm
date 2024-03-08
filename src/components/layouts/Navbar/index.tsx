import { ArrowLeftIcon, InstagramIcon, MenuIcon, MessageSquareQuote } from "lucide-react";
import { Poppins } from "next/font/google";
import React, { FC } from "react";

interface NavbarProps {
  // Define props here
}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="h-auto left-0 fixed right-0 top-0 z-10">
      <nav className="flex items-center gap-5 justify-start overflow-hidden px-10 py-6 relative">
        <div className="flex items-center justify-center h-8 flex-nowrap overflow-visible relative w-full">
          <h1 className="scroll-m-20 text-2xl  tracking-tight lg:text-5xl text-primary" >
            Smansawi51
          </h1>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
