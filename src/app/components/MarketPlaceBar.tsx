"use client";

import { SelectPopover } from ".";
import Link from "next/link";
import Image from "next/image";
import shopping from "../../../public/shoppingcart.svg";
import { useRouter } from "next/navigation";
import useQueryLink from "@/utils/utilshook";

export default function MarketPlaceBar() {
  const router = useRouter();

  const { queryLink } = useQueryLink(true);

  const filters = [
    { name: "All", link: queryLink("filter", "all") },
    { name: "Top", link: queryLink("filter", "top") },
    { name: "Popular", link: queryLink("filter", "popular") },
    { name: "Gadgets", link: queryLink("filter", "gadgets") },
    {
      name: "Price Low To High",
      link: queryLink("filter", "price_low_to_high"),
    },
    {
      name: "Price High To Low",
      link: queryLink("filter", "price_high_to_low"),
    },
  ];

  return (
    <section className="mx-5 sm:mx-8">
      <form
        action=""
        className="grid grid-cols-1 lg:grid-cols-2 gap-3 font-serrat"
      >
        <input
          type="text"
          className="border border-white text-white bg-transparent rounded-none p-3 placeholder:font-serrat"
          name="search"
          placeholder="Search by name"
        />

        <div className="flex gap-x-3 gap-y-3 sm:gap-y-0 text-xs sm:text-base">
          <div className="border border-white bg-transparent rounded-none py-3 px-1 md:px-3 basis-[33%] text-white">
            <SelectPopover items={filters} />
          </div>

          <button
            type="button"
            className="py-3 px-2 md:px-3 bg-[#0202CB] flex justify-center items-center sm:justify-between basis-[28%]"
            onClick={() => {
              router.push("/marketplace/swap");
            }}
          >
            <span className="text-white text-sm xl:text-base">Swap</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fff"
              className="w-6 h-6 hidden sm:block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>
          </button>

          <button className="py-3 px-1 md:px-3 tracking-tight border hover:bg-white hover:text-black border-white text-white basis-[30%] text-sm xl:text-base group">
            <span className="group-hover:hidden">Buy / Sell</span>  <span className="hidden group-hover:inline">Coming soon</span>
          </button>

          <Link href="#" className="flex items-center justify-end basis-[9%]">
            <Image src={shopping} alt="cart" />
          </Link>
        </div>
      </form>
    </section>
  );
}
