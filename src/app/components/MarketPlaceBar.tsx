import { MenuPopover } from ".";
import Link from "next/link";
import Image from "next/image";
import shopping from "../../../public/shoppingcart.svg";
import { Suspense } from "react";
const filters = [
  { name: "All", link: "#" },
  { name: "Trending", link: "#" },
  { name: "Popular", link: "#" },
  { name: "All", link: "#" },
];
export default function MarketPlaceBar() {
  return (
    <section className="mx-5 sm:mx-8">
      <form
        action=""
        className="grid grid-cols-1 lg:grid-cols-2 gap-3 font-mono"
      >
        <input
          type="text"
          className="border border-white bg-transparent rounded-none p-3 placeholder:font-mono"
          name="search"
          placeholder="Search by name"
        />

        <div className="flex gap-x-3 gap-y-3 sm:gap-y-0 text-xs sm:text-base">
          <div className="border border-white bg-transparent rounded-none py-3 px-1 md:px-3 basis-[35%] text-white">
            <MenuPopover name="Filter" items={filters} col />
          </div>

          <button className="py-3 px-1 md:px-3 bg-button_color flex justify-around basis-[30%]">
            <span>Swap</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>
          </button>

          <button className="py-3 px-1 md:px-3 tracking-tight border border-white text-white basis-[30%]">
            Buy / Sell
          </button>

          <Link href="#" className="flex items-center justify-end basis-[5%]">
            <Image src={shopping} alt="cart" />
          </Link>
        </div>
      </form>
    </section>
  );
}
