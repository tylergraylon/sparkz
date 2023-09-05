export default function DiscordJoin() {
  return (
    <section className="relative sm:mx-8 h-[20rem] mt-12 grid grid-cols-1 items-center md:grid-cols-2 md:gap-x-20 px-5">
      <div className="grid-background -z-10"></div>

      <div className="space-y-5 text-white order-last md:order-none mt-16 md:mt-0 z-10">
        <h2 className="text-xl">
          Join Our <span className="text-complimentary_1">Discord</span>
        </h2>

        <p className="font-serrat text-textshade text-opacity-80">
          Participate in the contest for rewards whether you are a creator,
          contributor or a community manager, you will find what you are looking
          for
        </p>

        <button className="font-mono p-3 border border-white w-full md:w-auto">
          Join Our Community
        </button>
      </div>

      <img
        src="/discord.svg"
        alt="discord"
        className="justify-self-end h-28 md:h-auto absolute top-5 -right-8 sm:right-1 md:static overflow-clip"
      />
    </section>
  );
}
