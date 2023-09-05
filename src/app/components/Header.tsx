"use client";

import { useState } from "react";
import { MenuPopover, MobileMenuPopover } from ".";
import Link from "next/link";

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
      <header className="h-20  text-white px-10 flex items-center justify-between border-b border-[#E9EEEF] border-opacity-20">
        <div className="text-lg space-x-2">
          <span className="rounded-full px-4 py-1 bg-white"></span>
          <span>SPARKZ</span>
        </div>

        <div className="md:flex items-center space-x-5 text-xs xl:text-sm hidden font-mono">
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
            <button className="md:flex text-xs xl:text-sm hidden p-2 bg-white text-black font-mono font-semibold">
              Connect Wallet
            </button>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 md:hidden"
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
