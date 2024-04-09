import Image, { StaticImageData } from "next/image";

export type NftProps = {
  name: string;
  img: string | StaticImageData;
  floor_price: number | string;
  weekly_volume: number | string;
  type: string;
  chain: string;
};

export default function NftCard({
  name,
  img,
  weekly_volume,
  floor_price,
  type,
  chain,
}: NftProps) {
  const transition = "transition-all duration-[700ms] ease-in-out";
  const visibility = "opacity-0 group-hover:opacity-100";
  return (
    <>
      <div className="group grid grid-rows-7 relative">
        {type != "gadget" && (
          <div
            className={`${visibility} backdrop-brightness-50
         absolute w-full h-full ${transition}`}
          ></div>
        )}

        <div className="row-span-6 relative">
          <div
            className={`${visibility} backdrop-brightness-50
         absolute w-full h-full ${transition}`}
          ></div>
          <button
            className={`text-white absolute font-serrat font-semibold ${visibility} bg-black 
                     ${transition} inset-0 m-auto w-[75%] h-[3.2rem] z-10`}
          >
            Wait for market launch
          </button>
          <div className={`w-full h-64`}>
            <Image
              alt="Image"
              src={img}
              fill
              style={{
                objectFit: "cover",
                // cover, contain, none
              }}
            />
          </div>
        </div>

        <div
          className={`flex px-3 py-3 justify-between ${transition}
                         text-white bg-[#4E4E4E]
                           text-xs lg:text:sm`}
        >
          <div className="space-y-3">
            <h3 className="font-serrat text-ellipsis overflow-hidden">
              {name ?? "N/A"}
            </h3>
            <div className="space-y-1 font-serrat ">
              <h3 className="text-opacity-70 text-textshade">
                {type == "gadget" ? "Price" : "Floor Price"}
              </h3>
              <p className="">
                {floor_price ?? "N/A"}{" "}
                {type == "gadget" ? "USD" : chain == "ethereum" ? "ETH" : "SOL"}
              </p>
            </div>
          </div>

          {type == "gadget" ? (
            <button
              className="p-3 self-end
             font-serrat border border-white text-white
              hover:text-black hover:bg-white transition-colors
               duration-200 ease-in-out group/cart"
            >
              <span className="group-hover/cart:hidden">Add To Cart</span>{" "}
              <span className="hidden group-hover/cart:inline">
                {" "}
                coming soon
              </span>
            </button>
          ) : (
            <div className="self-end font-serrat">
              <div className="pr-1 space-y-1">
                <h3 className="">Volume</h3>
                <p className="whitespace-nowrap">
                  {weekly_volume ?? "N/A"} {chain == "ethereum" ? "ETH" : "SOL"}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export const Loader = () => (
  <div className="group grid grid-rows-7 animate-pulse">
    <div className="row-span-6 relative bg-[#5c5c5c] h-60"></div>

    <div
      className={`flex px-3 py-3 space-x-2 justify-between  bg-[#4E4E4E] animate-pulse`}
    >
      <div className="space-y-4 basis-3/5">
        <div className="h-2 bg-textshade rounded-md"></div>
        <div className="space-y-2">
          <div className="h-2 bg-textshade rounded-md"></div>
          <div className="h-2 bg-textshade rounded-md"></div>
        </div>
      </div>

      <div className="basis-2/5 self-end">
        <div className="space-y-2">
          <div className="h-2 bg-textshade rounded-md"></div>
          <div className="h-2 bg-textshade rounded-md"></div>
        </div>
      </div>
    </div>
  </div>
);
