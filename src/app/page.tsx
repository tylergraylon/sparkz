import { NftCard, NewSLetter, Footer } from "./components";

const Nfts = [
  {
    name: '"Birdy"',
    holder_price: 0.0,
    public_price: 0.0,
  },
  {
    name: '"Black Mantle"',
    holder_price: 0.0,
    public_price: 0.0,
  },
];

export default function Home() {
  return (
    <main className="">
      <section className="h-96 sm:h-80 bg-black text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl pt-36 sm:pt-28 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-complimentary_1 brightness-110">
          Web3 Marketplace
        </h1>
      </section>

      <section className="relative mt-12 text-center sm:mx-8 h-[18rem] flex flex-col justify-evenly">
        <div className="grid-background -z-10"></div>

        <h3 className="text-lg text-transparent bg-clip-text bg-gradient-to-b from-textshade to-stone-700">
          WHO WE ARE
        </h3>
        <p className="text-textshade font-serrat w-11/12 md:w-3/5 mx-auto text-sm xs:text-base text-opacity-70">
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

      {/* Market place section */}

      <section className="mt-14 mx-8">
        <h1 className="text-white text-base">Marketplace</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
          {Nfts.map((nft, index) => (
            <NftCard {...nft} key={index} />
          ))}
          <div className="h-72 bg-black hidden md:block"></div>

          <div className="h-72 flex flex-col text-center justify-evenly text-textshade border border-white border-opacity-40">
            <h2 className="text-xl">Partnerships</h2>
            <p className="text-textshade text-opacity-40 font-mono">
              Coming soon...
            </p>
          </div>
        </div>
      </section>

      <section className="relative sm:mx-8 h-[20rem] mt-12 grid grid-cols-1 items-center md:grid-cols-2 md:gap-x-20 px-5">
        <div className="grid-background -z-10"></div>

        <div className="space-y-5 text-white order-last md:order-none mt-16 md:mt-0 z-10">
          <h2 className="text-xl">
            Join Our <span className="text-complimentary_1">Discord</span>
          </h2>

          <p className="font-serrat text-textshade text-opacity-80">
            Participate in the contest for rewards whether you are a creator,
            contributor or a community manager, you will find what you are
            looking for
          </p>

          <button className="font-mono p-3 border border-white w-full md:w-auto">
            Join Our Community
          </button>
        </div>

        <img
          src="/discord.svg"
          alt="discord"
          className="justify-self-end h-28 md:h-auto absolute top-5 right-0 md:static"
        />
      </section>
      <NewSLetter />
      <Footer />
    </main>
  );
}
