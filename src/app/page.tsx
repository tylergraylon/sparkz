import {
  NftCard,
  NewSLetter,
  DiscordJoin,
  ExploreMore,
  ExploreMoreCarousel,
} from "./components";
import painting_hand from "../../public/painting_hand.png";
import jelly from "../../public/jelly.png";

export const Nfts = [
  {
    name: '"Birdy"',
    holder_price: 0.0,
    public_price: 0.0,
    img: jelly,
  },
  {
    name: '"Black Mantle"',
    holder_price: 0.0,
    public_price: 0.0,
    img: painting_hand,
  },
];

export default function Home() {
  return (
    <main className="">
      <section className="h-[35rem] bg-black text-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl pt-60 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-complimentary_1 brightness-110">
          Web3 Marketplace
        </h1>
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

        <div className="flex space-x-4 md:space-x-10 justify-center font-mono font-bold">
          <button className="p-3 bg-gradient-to-r from-button_color to-complimentary_1">
            Learn More
          </button>

          <button className="p-3 border border-white text-white">
            View Roadmap
          </button>
        </div>
      </section>

      {/* Featured Drops section */}

      <section className="">
        <h1 className="text-white text-base mb-5 ml-5 sm:ml-8 ">
          Featured Drops
        </h1>
        <ExploreMoreCarousel />
        <div className="flex justify-center">
          <button className="p-3 border font-mono font-bold border-white text-white mx-auto my-16">
            View All Drops
          </button>
        </div>
      </section>

      {/* Explore More section */}

      <section className="mt-14 mx-5 sm:mx-8">
        <h1 className="text-white text-base">Explore More</h1>

        <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-y-20 gap-x-5 mt-5">
          {Nfts.map((nft, index) => (
            <ExploreMore img={nft.img} name={nft.name} key={index} />
          ))}
          <div className="h-72 bg-black hidden md:block mt-20 md:mt-0"></div>

          <div className="h-72 flex flex-col text-base md:text-2xl mt-20 md:mt-0 text-center justify-evenly text-textshade border border-white border-opacity-40">
            <h2 className="">Partnerships</h2>
            <p className="text-textshade text-opacity-40 font-mono">
              Coming soon...
            </p>
          </div>
        </div>
      </section>

      <DiscordJoin />
      <NewSLetter />
    </main>
  );
}
