"use client";
import Image, { StaticImageData } from "next/image";
import setting_icon from "../../../../public/setting_icons.svg";
import eth from "../../../../public/eth.png";
import sparkzswap from "../../../../public/spark-logo.png";
import coming_soon from "../../../../public/coming_soon.svg";
import { useState } from "react";

enum swap {
  HIDDEN,
  SHOW,
}

export default function Swap() {
  const [click, setClick] = useState<swap>(swap.HIDDEN);

  console.log(click);

  return (
    <main className="" onClick={() => setClick(swap.HIDDEN)}>
      <div
        className="w-11/12 sm:w-4/6 lg:w-1/2 mx-auto bg-[#161336] px-5 sm:px-10 md:px-20 text-white py-5 mt-12 relative"
        onClick={(e) => {
          e.stopPropagation();
          setClick(swap.SHOW);
        }}
      >
        {click === swap.SHOW && (
          <div
            className={`absolute 
                    -top-10 -left-10 -right-10 h-[110%] w-[110%] bg-black bg-opacity-60 flex items-center justify-center text-2xl space-x-12`}
          >
            <Image src={coming_soon} alt="coming_soon" />
            <p>Coming Soon...</p>
          </div>
        )}

        <h1 className="text-2xl">Exchange Tokens</h1>

        <p className="mt-2 font-serrat text-opacity-70 text-textshade">
          Swap your tokens in a single transaction
        </p>

        <div className="mt-9 flex justify-between items-center">
          <h3 className="text-xl text-opacity-70 text-textshade">Swap</h3>

          <Image src={setting_icon} alt="settings" />
        </div>

        <p className="text-opacity-70 text-textshade font-serrat mt-7 mb-1">
          From
        </p>

        <SwapTile coin="ETH" img={eth} />

        <div className="p-3 bg-[#35315C] my-4 w-[10%] mx-auto flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#fff"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
            />
          </svg>
        </div>

        <p className="text-opacity-70 text-textshade font-serrat mb-1">To</p>

        <SwapTile coin="SPK" img={sparkzswap} />

        <button
          type="button"
          className="bg-white w-full mt-11 mb-5 font-mono font-semibold p-4 text-black"
        >
          Continue
        </button>
      </div>
    </main>
  );
}

function SwapTile({
  coin,
  img,
}: {
  coin: string;
  img: StaticImageData | string;
}) {
  return (
    <div className="flex justify-between px-5 sm:px-8 py-6 bg-[#35315C]">
      <span className="space-y-2">
        <p className="font-mono text-opacity-70 text-textshade">~$0.00</p>
        <p className="font-mono text-3xl">0</p>
      </span>

      <span className="bg-black rounded-e-full rounded-s-full px-4 flex items-center space-x-2">
        <Image src={img} alt="sparkz_swap" />

        <p>{coin}</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </span>
    </div>
  );
}
