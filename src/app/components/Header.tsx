"use client";

import { useState } from "react";
import { MenuPopover, MobileMenuPopover, ButtonConnect } from ".";
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
    { name: "Whitepaper", link: "/whitepaper" },
    { name: "Roadmap", link: "/roadmap" },
    { name: "Tokenomics", link: "/tokenomics" },
  ],
};

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="h-20  text-white px-8 flex items-center justify-between border-opacity-20">
        <Link href="/" className="text-lg lg:text-2xl space-x-2">
          <span className="rounded-full px-4 lg:px-5 py-1 bg-white"></span>
          <span>SPARKZ</span>
        </Link>

        <div className="lg:flex items-center space-x-7 text-sm hidden font-mono">
          <Link href="/marketplace" className="cursor-pointer">
            Marketplace
          </Link>
          <Link href="" className="cursor-pointer">
            Raffle To Win
          </Link>
          <Link href="/about" className="cursor-pointer">
            Company
          </Link>

          <MenuPopover {...ResourcesMenu} />
          <MenuPopover {...CommunityMenu} />
        </div>

        <div className="flex justify-between">
          <div>
            <ButtonConnect className="lg:flex text-sm hidden p-2 bg-white text-black font-mono font-semibold" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 lg:hidden"
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
