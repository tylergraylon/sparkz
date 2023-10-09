export default function PageHeader({ header }: { header: string }) {
  return (
    <section className="relative -mt-2 text-white text-2xl sm:mx-8 h-[20rem] flex justify-center items-center">
      <div className="grid-background -z-20"></div>

      <div className="relative w-full flex justify-center items-center">
        <h1 className="header-text-bg"> {header}</h1>
        <h1 className="text-[4vw] py-5 text-transparent bg-clip-text bg-gradient-to-r from-white to-complimentary_1 brightness-110">
          {header}
        </h1>
      </div>
    </section>
  );
}
