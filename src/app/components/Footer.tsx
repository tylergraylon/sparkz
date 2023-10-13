import Link from "next/link";

export function NewSLetter() {
  return (
    <section className="md:mx-auto mx-5 sm:mx-8 md:w-2/5 lg:w-2/6 space-y-4 text-textshade mt-20">
      <h1 className="text-base md:text-2xl">
        SignUp To <span className="text-complimentary_1">Sparkz</span>{" "}
        Newsletter
      </h1>
      <p className="font-serrat text-sm text-opacity-80">
        Stay updated with our latest offer and development. we promise not to
        spam you.
      </p>
      <form action="" className="space-y-4 font-serrat">
        <input
          type="email"
          name="email"
          id="email"
          className="p-3 bg-transparent border border-white w-full placeholder:font-serrat rounded-none"
          placeholder="Enter Email Address"
        />

        <input
          type="button"
          value="Sign up"
          className="font-serrat cursor-pointer bg-white hover:bg-[#00FFFF] hover:text-black p-3 b w-full text-black font-semibold rounded-none"
        />
      </form>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white text-xs md:text-base flex justify-between mx-5 sm:mx-8 pt-6 mt-24 mb-5 text-white font-serrat">
      <span className="flex items-center whitespace-nowrap">
        <img src="/copyright.svg" alt="copyright" className="mr-[0.1rem] h-3" />
        {new Date().getFullYear()} SPARKZ
      </span>
      <span className="space-x-4">
        <Link href="#" className="hidden sm:inline-block">
          Privacy Policy
        </Link>
        <Link href="#">Terms of Service</Link>
      </span>
    </footer>
  );
}
