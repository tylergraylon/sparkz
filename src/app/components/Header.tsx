"use client";

import { useState } from "react";
import { MenuPopover, MobileMenuPopover, ButtonConnect } from ".";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const CommunityMenu = {
  name: "Community",
  items: [
    { name: "Discord", link: "#" },
    { name: "Twitter", link: "#" },
    { name: "Telegram", link: "#" },
    { name: "Medium", link: "#" },
  ],
};

export const ResourcesMenu = {
  name: "Resources",
  items: [
    { name: "Whitepaper", link: "#" },
    { name: "Roadmap", link: "#" },
    { name: "Tokenomics", link: "#" },
  ],
};

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="h-20  text-white px-8 flex items-center justify-between border-b border-[#E9EEEF] border-opacity-20">
        <div className="text-lg lg:text-2xl space-x-2">
          <span className="rounded-full px-4 lg:px-5 py-1 bg-white"></span>
          <span>SPARKZ</span>
        </div>

        <div className="md:flex items-center space-x-5 text-xs lg:text-base xl:text-sm hidden font-mono">
          <Link href="" className="cursor-pointer">
            Company
          </Link>
          <Link href="" className="cursor-pointer">
            Marketplace
          </Link>
          <MenuPopover {...ResourcesMenu} />
          <MenuPopover {...CommunityMenu} />
        </div>

        <div className="flex justify-between">
          <div>
            <ButtonConnect className="md:flex text-xs lg:text-base xl:text-sm hidden p-2 bg-white text-black font-mono font-semibold" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 md:hidden"
              onClick={() => setOpen(!open)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </div>
        </div>
      </header>

      <MobileMenuPopover open={open} setOpen={setOpen} />
    </>
  );
}
