"use client";
import {
  MarketPlaceBar,
  NftCard,
  Loader,
  NftProps,
  MarketPlaceCategories as Categories,
} from "../components";
import cigar from "../../../public/cigar.png";
import { useMarketPlace } from "@/services/fetcher";
import { useSearchParams } from "next/navigation";

const nft = {
  name: "NAME #1590",
  img: cigar,
  floor_price: 0.05,
  weekly_volume: 0.05,
};

export default function MarketPlace() {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");
  const { getData } = useMarketPlace();

  const {
    data: nfts,
    isLoading,
    error,
  } = getData<NftProps>("/api/seacollections", filter);

  return (
    <main>
      <MarketPlaceBar />

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 mx-5 sm:mx-8 gap-7">
        {isLoading
          ? Array.from({ length: 20 }, (_, i) => <Loader key={i} />)
          : nfts && nfts.data
          ? nfts.data.data.map((nft, i) => <NftCard {...nft} key={i} />)
          : Array.from({ length: 10 }, (_, i) => <Loader key={i} />)}
      </section>

      <h1 className="py-4 text-xl mt-24 text-white mx-5 sm:mx-8 font-serrat">
        Explore Categories
      </h1>
      <Categories />
    </main>
  );
}
