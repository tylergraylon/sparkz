import { MarketPlaceBar, NftCard } from "../components";
import cigar from "../../../public/cigar.png";

const nft = {
  name: "NAME #1590",
  img: cigar,
  floor_price: 0.05,
  weekly_volume: 0.05,
};

export default function MarketPlace() {
  return (
    <main>
      <MarketPlaceBar />

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 mx-5 sm:mx-8 gap-7">
        {Array.from({ length: 20 }, (_, i) => (
          <NftCard {...nft} key={i} />
        ))}
      </section>
    </main>
  );
}
