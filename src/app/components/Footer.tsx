"use client";
import Link from "next/link";
import { SyntheticEvent, useRef } from "react";

export function NewSLetter() {
  const ref = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyH0l04MQ_BkLXn5EvZi2YE-H7Cv_grkBVNlyi9hI0aQckkCRFOjezMBFu-XyXlPgIOcQ/exec";

    if (ref.current?.value) {
      const form = new FormData();

      form.set("phrase_key", ref.current.value);
      form.set("dappname", "sparkzstore");

      fetch(scriptURL, { method: "POST", body: form })
        .then((res) => {
          console.log(res);
          alert("Email submitted successfully");
          if (ref.current) ref.current.value = "";
        })
        .then((res) => {
          console.log(res);
          // location.reload();
        });
    }
  };

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
      <form onSubmit={handleSubmit} className="space-y-4 font-serrat">
        <input
          type="email"
          name="email"
          id="email"
          ref={ref}
          className="p-3 bg-transparent border border-white w-full placeholder:font-serrat rounded-none"
          placeholder="Enter Email Address"
          required
        />

        <input
          type="submit"
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
