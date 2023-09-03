import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="mt-28 text-center space-y-9">
        <h1 className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-button_color to-complimentary_1">
          Web3 Marketplace For Everyone.
        </h1>

        <p className="text-textshade w-11/12 md:w-3/5 mx-auto text-sm xs:text-base">
          Sparkz brings marketplace directly to the people. Sparkz streamlines
          the web3 marketplace for both seasoned power users and individuals new
          to the concept, ensuring accessibility for everyone.{" "}
        </p>

        <div className="flex space-x-4 md:space-x-10 justify-center font-mono font-bold">
          <button className="p-3 bg-gradient-to-r from-button_color to-complimentary_1">
            Join Sparkz
          </button>

          <button className="p-3 border border-white text-white">
            Read Roadmap
          </button>
        </div>
      </div>
    </main>
  );
}
