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
import Pagination from "./pagination";
import { Suspense } from "react";

const nft = {
  name: "NAME #1590",
  img: cigar,
  floor_price: 0.05,
  weekly_volume: 0.05,
};

interface DataDto {
  data: Array<NftProps>;
  count: number;
  pages: number;
  numofItems: number;
  currentPage: string | number;
}

export default function MarketPlace() {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");
  const page = searchParams.get("p");
  const { getData } = useMarketPlace();

  const {
    data: nfts,
    isLoading,
    error,
  } = getData<DataDto>("/api/seacollections", filter, page);

  // console.log(nfts?.data);

  return (
    <main>
      <MarketPlaceBar />


      <Suspense>
      
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 mx-5 sm:mx-8 gap-7">
        {isLoading
          ? Array.from({ length: 20 }, (_, i) => <Loader key={i} />)
          : nfts && nfts.data.data.length > 0
          ? nfts.data.data.map((nft, i) => <NftCard {...nft} key={i} />)
          : Array.from({ length: 10 }, (_, i) => <Loader key={i} />)}
      </section>
      </Suspense>
      {isLoading ? null : nfts && nfts.data.pages > 1 ? (
        <section className="mt-8 mx-5 sm:mx-8 flex justify-center text-white">
          <Pagination
            pages={nfts.data.pages}
            currentPage={Number(nfts.data.currentPage)}
          />
        </section>
      ) : null}

      <h1 className="py-4 text-xl mt-16 text-white mx-5 sm:mx-8 font-serrat">
        Explore Categories
      </h1>
      <Categories />
    </main>
  );
}
