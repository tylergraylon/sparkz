import Image from "next/image";
export default function DiscordJoin() {
  return (
    <section className="relative sm:mx-8 h-[20rem] mt-12 grid grid-cols-1 items-center md:grid-cols-2 md:gap-x-20 px-5">
      <div className="grid-background -z-10"></div>

      <div className="space-y-5 text-white order-last md:order-none mt-16 md:mt-0 z-10">
        <h2 className="text-2xl md:text-4xl">
          Join Our <span className="text-sky-400">Telegram</span>
        </h2>

        <p className="font-serrat text-textshade text-opacity-80 text-base">
          Participate in the contest for rewards whether you are a creator,
          contributor or a community manager, you will find what you are looking
          for
        </p>

        <button className="font-serrat hover:bg-[#00FFFF] hover:text-black p-3 border border-white w-full md:w-auto">
          Join Our Community
        </button>
      </div>

      <Image
        src="/telegram.svg"
        alt="Telegram"
        width={310}
        height={200}
        className="justify-self-end w-24 md:w-72 absolute top-5 right-2 -2-10"
      />
    </section>
  );
}
