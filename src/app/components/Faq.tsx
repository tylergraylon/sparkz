import Link from "next/link";

export default function Faq() {
  return (
    <section className="my-24 text-center mx-5 sm:mx-8">
      <div className="relative w-full flex justify-center items-center">
        <h1 className="faq-text-bg"> FAQ</h1>
        <h1 className="text-[2.4vw]  py-5 text-transparent bg-clip-text bg-gradient-to-r from-white to-complimentary_1 brightness-110">
          Frequently Asked
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-white to-complimentary_1 brightness-110">
            Questions
          </div>
        </h1>
      </div>

      <h1 className="text-sm my-14 text-white font-serrat">
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
