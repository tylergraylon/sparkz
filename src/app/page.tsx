import {
  NewSLetter,
  DiscordJoin,
  ExploreMore,
  ExploreMoreCarousel,
  Raffle,
  Faq,
} from "./components";
import mac_bg from "../../public/mac-bg.png";
import flower_bg from "../../public/flower-bg.png";
import iphone_bg from "../../public/iphone-bg.png";
import skull_bg from "../../public/skull-bg.png";
import sparks_ring from "../../public/sparkz-ring.png";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const pics = [skull_bg, iphone_bg, mac_bg, flower_bg];

// const Nfts = [
//   {
//     name: '"Birdy"',
//     holder_price: 0.0,
//     public_price: 0.0,
//     img: jelly,
//   },
//   {
//     name: '"Black Mantle"',
//     holder_price: 0.0,
//     public_price: 0.0,
//     img: painting_hand,
//   },
// ];

const getData = async () => {
  try {
    const res = await axios.get(
      "https://sparkz-iota.vercel.app/api/seacollections?query=carousel"
    );

    if (res.status === 200) {
      return res;
    }
  } catch (error) {
    return null;
  }
};

export default async function Home() {
  let data = null;
  const result = await getData();

  if (result?.data && result.data.data.length > 0) {
    data = result.data.data;
  }

  console.log("carousel");

  return (
    <main className="">
      <section className="h-[34rem] px-10 bg-[url('/fluid_background.png')] grid grid-cols-1 md:grid-cols-2 pt-14 gap-2 ">
        <h1
          className="text-2xl sm:text-4xl 
        text-center md:text-start lg:text-5xl
         text-white uppercase order-2 md:order-none"
        >
          Discover <br /> and <br /> collect <br /> the best <br />
          <span className="text-[#00FFFF]">products here</span>
        </h1>

        <div className="order-1 md:order-none relative">
          <Image
            src={skull_bg}
            alt="background"
            className="mx-auto w-64 md:w-[30rem] lg:w-[34rem]"
          />
        </div>
      </section>

      <section className="relative mt-12 text-center sm:mx-8 h-[20rem] flex flex-col justify-evenly">
        <div className="grid-background -z-10"></div>

        <h3 className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-b from-textshade to-stone-700">
          WHO WE ARE
        </h3>
        <p className="text-textshade font-serrat w-11/12 md:w-3/5 mx-auto text-base xs:text-lg text-opacity-70">
          We bring marketplace directly to the people. Sparkz{" "}
          <span className="text-white">streamlines</span> the web3 marketplace
          for both seasoned <span className="text-white">power users</span> and
          individuals <span className="text-white">new</span> to the concept,
          ensuring{" "}
          <span className="text-white"> accessibility for everyone.</span>
        </p>

        <div className="flex space-x-4 md:space-x-10 justify-center font-serrat font-bold ">
          <button className="p-3 bg-white hover:bg-[#00FFFF] hover:text-[#00FFFF]">
            <Link href="/about" className="text-black">
            Learn More
            </Link>
            
          </button>

          <button className="p-3 border border-white hover:border-[#00FFFF] hover:text-[#00FFFF] text-white">
            <Link href="/roadmap">View Roadmap</Link>
          </button>
        </div>
      </section>

      {/* Featured Drops section */}

      <section className="mt-14 ">
        <h1 className="text-white text-xl md:text-3xl ml-5 sm:ml-8 mb-5">
          AMAZING AND SUPER <br />
          <span className="text-[#00FFFF]">UNIQUE PRODUCTS</span>
        </h1>
        <div className="space-y-8">
          <ExploreMoreCarousel data={data ? data.slice(0, 6) : data} />
          <ExploreMoreCarousel data={data ? data.slice(6, 12) : data} opp />
        </div>

        <div className="flex justify-center">
          <button className="p-3 border font-serrat font-bold border-white hover:bg-[#00FFFF] hover:text-black text-white mx-auto my-16">
            <Link href="/marketplace">View All Drops</Link>
          </button>
        </div>
      </section>

      <section className="mt-14 mx-5 sm:mx-8">
        <Raffle />
      </section>

      {/* Explore More section */}

      <section className="my-16 mx-5 sm:mx-8">
        {/* <h1 className="text-white text-base">Explore More</h1> */}

        {/* <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-y-20 gap-x-5 mt-5"> */}
        {/* {Nfts.map((nft, index) => (
            <ExploreMore img={nft.img} name={nft.name} key={index} />
          ))}
          <div className="h-72 bg-black hidden md:block mt-20 md:mt-0"></div> */}

        {/* </div> */}

        <div className="h-72 flex flex-col text-base md:text-2xl mt-20 md:mt-0 text-center justify-evenly text-textshade border border-white border-opacity-40">
          <h2 className="">Partnerships</h2>
          <p className="text-textshade text-opacity-40 font-serrat">
            Coming soon...
          </p>
        </div>
      </section>

      <DiscordJoin />

      <Faq />
      <NewSLetter />
    </main>
  );
}
