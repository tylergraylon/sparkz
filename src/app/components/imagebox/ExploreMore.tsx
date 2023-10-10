import Image, { StaticImageData } from "next/image";
export default function ExploreMore({
  img,
  name,
}: {
  img: StaticImageData | string;
  name: string;
}) {
  const transition = "transition-all duration-[700ms] ease-in-out";
  const visibility = "opacity-0 group-hover:opacity-100";
  return (
    <div className="group grid grid-rows-7">
      <div className="row-span-6 relative">
        <button
          className={`absolute font-serrat font-semibold ${visibility}  p-2 bg-white 
                     ${transition} inset-0 m-auto w-32 h-[3.2rem] z-10`}
        >
          Place order
        </button>
        <div
          className={`${visibility} backdrop-brightness-50
         absolute w-full h-full ${transition}`}
        ></div>
        <Image alt="Image" src={img} className="object-cover w-full h-80" />
      </div>

      <div
        className={`bg-[#4E4E4E] row-span-1 p-2
                        ${transition}
                    text-white group-hover:bg-button_color 
                        bg-opacity-30 group-hover:text-black`}
      >
        <p className="text-left p-2">{name}</p>
      </div>
    </div>
  );
}
