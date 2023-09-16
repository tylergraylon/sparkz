export default function PageHeader({ header }: { header: string }) {
  return (
    <section className="relative -mt-2 text-white text-2xl sm:text-3xl md:text-5xl sm:mx-8 h-[20rem] flex justify-center items-center">
      <div className="grid-background -z-10"></div>
      <h1 className="">{header}</h1>
    </section>
  );
}
