import Link from "next/link";

export function NewSLetter() {
  return (
    <section className="md:mx-auto mx-8 md:w-2/5 lg:w-2/6 space-y-4 text-textshade mt-12">
      <h1 className="">
        SignUp To <span className="text-complimentary_1">Sparkz</span>{" "}
        NewsLetter
      </h1>
      <p className="font-serrat text-xs">
        Stay updated with our latest offer and development. we promise not to
        spam you.
      </p>
      <form action="" className="space-y-4 text-sm font-mono">
        <input
          type="email"
          name="email"
          id="email"
          className="p-2 bg-transparent border border-white w-full placeholder:font-mono rounded-none"
          placeholder="Enter Email Address"
        />

        <input
          type="button"
          value="Sign up"
          className="font-mono bg-white p-2 b w-full text-black font-semibold rounded-none"
        />
      </form>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white text-xs flex justify-between mx-8 pt-6 mt-24 mb-5 text-white font-mono">
      <span className="flex items-center">
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
