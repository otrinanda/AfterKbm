import { Hand } from "lucide-react";
import { Poppins } from "next/font/google";
import React, { FC, ReactNode } from "react";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

interface BadgeProps {
  children: ReactNode;
  variant?: string;
}

const Badge: FC<BadgeProps> = ({ variant , children }) => {
  const color = {
    red: "#C6482C",
    purple: "#854F6F",
    green: "#758F2A",
  }[variant || "red"];
  return (
    <div
      className={` flex justify-center px-2 py-2 md:px-6 md:py-3 rounded-full border-2 text-[16px]
      border-[${color}] text-[${color}] `}
    >
      {children}
    </div>
  );
};

export default Badge;
