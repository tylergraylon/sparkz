import Image from "next/image";
import raffle from "../../../public/raffle.svg";
import check from "../../../public/check.svg";

const conditions = [
  "Must be a discord member of $Sparkz",
  "Follow $Sparkz on Twitter and Medium ",
  "Must be a member of $Sparkz Telegram channel",
  "Make sure number of choice is different from others in contest section ",
  "Sit back and relax",
];

export default function Raffle() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10  text-white">
      <Image src={raffle} alt="Raffle Image" />

      <div className="flex flex-col justify-around items-center md:items-start">
        <h1 className="text-4xl mb-10 md:mb-0">Raffle Draw</h1>

        <div className=" ">
          <h2 className="mb-6 text-xl text-[#00FFFF] text-center md:text-start">
            Terms & Conditions
          </h2>

          {conditions.map((cond, index) => (
            <div
              className="flex items-center space-x-3 space-y-2 font-serrat"
              key={index}
            >
              <Image src={check} alt="check" />

              <p className="">{cond}</p>
            </div>
          ))}
        </div>

        <button className="p-3 border border-white text-white font-mono w-40 mt-10 md:mt-0">
          Join Contest
        </button>
      </div>
    </div>
  );
}
