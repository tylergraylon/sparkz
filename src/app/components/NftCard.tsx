type Props = {
  link: string;
  name: string;
  desc: string;
  public_price: number | string;
  holder_price: number | string;
};

export default function NftCard({
  name,
  desc,
  holder_price,
  public_price,
}: Partial<Props>) {
  return (
    <div className="group h-72">
      <div className="h-3/4 bg-black flex justify-center items-center">
        <button
          className="font-mono font-semibold opacity-0 group-hover:opacity-100 p-3 bg-white 
                     transition-all duration-[620ms] ease-in-out"
        >
          Place order
        </button>
      </div>

      <div
        className="h-1/4 flex px-3 py-3 justify-between transition-all 
                         duration-[620ms] ease-in-out font-mono 
                         text-white bg-[#4E4E4E] group-hover:bg-button_color 
                        bg-opacity-30 group-hover:text-black text-xs lg:text:sm"
      >
        <div className="space-y-2">
          <h3>Sparkz {name ? name : "Name"}</h3>
          <p className="text-textshade text-opacity-80 group-hover:text-black">
            {desc ? desc : "Product description +"}
          </p>
        </div>

        <div className="flex divide-x divide-neutral-400 ">
          <div className="pr-3 space-y-2">
            <h3>{holder_price ? holder_price : "0.00"}</h3>
            <p className="text-textshade text-opacity-80 group-hover:text-black">
              Holders
            </p>
          </div>
          <div className="pl-3 space-y-2">
            <h3>{public_price ? public_price : "0.00"}</h3>
            <p className="text-textshade text-opacity-80 group-hover:text-black">
              Public Price
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
