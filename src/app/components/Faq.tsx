import Link from "next/link";

export default function Faq() {
  return (
    <section className="my-24 text-center">
      <div className="relative w-full flex justify-center items-center">
        <h1 className="header-text-bg"> FAQ</h1>
        <h1 className="text-[1.8vw]  py-5 text-transparent bg-clip-text bg-gradient-to-r from-white to-complimentary_1 brightness-110">
          Frequently Asked
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-white to-complimentary_1 brightness-110">
            Questions
          </div>
        </h1>
      </div>

      <h1 className="text-[1.2vw] my-10 text-white font-serrat">
        For a comprehensive set of Frequently Asked Questions, please view our{" "}
        <Link
          href="#"
          className="text-complimentary_1 underline underline-offset-1 cursor-pointer"
        >
          Support Guide.
        </Link>
      </h1>
    </section>
  );
}
