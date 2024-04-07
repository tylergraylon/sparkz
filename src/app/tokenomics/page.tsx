import {
  TokenomicsMeter,
  NewSLetter,
  DiscordJoin,
  PageHeader,
} from "../components";

const tokenomics = [
  {
    percent: "50%",
    color: "to-[#D7F28B]",
    text: "Pre-sale",
    gradPercent: "w-[50%]",
  },
  {
    percent: "15%",
    color: "to-[#46FEDC]",
    text: "Liquidity",
    gradPercent: "w-[20%]",
  },
  {
    percent: "15%",
    color: "to-[#F3D4FE]",
    text: "Utility & Marketplace",
    gradPercent: "w-[20%]",
  },
  {
    percent: "5%",
    color: "to-[#E9EEEF]",
    text: "Cex Listing",
    gradPercent: "w-[7%]",
  },
  {
    percent: "5%",
    color: "to-[#B071C7]",
    text: "Marketing/Partnership",
    gradPercent: "w-[7%]",
  },
  {
    percent: "4%",
    color: "to-[#10AC8F]",
    text: "Airdrop",
    gradPercent: "w-[5%]",
  },
  {
    percent: "4%",
    color: "to-[#92AE42]",
    text: "Treasury",
    gradPercent: "w-[5%]",
  },
  {
    percent: "2%",
    color: "to-[#92AE42]",
    text: "Team",
    gradPercent: "w-[3%]",
  },
];

export default function Tokenomics() {
  return (
    <main>
      <PageHeader header="Tokenomics" />

      <section className="mx-4 py-10 sm:mx-12 mt-12 border border-textshade">
        {tokenomics.map((token, index) => (
          <TokenomicsMeter {...token} key={index} />
        ))}
      </section>

      <section className="mt-20">
        <DiscordJoin />
      </section>

      <section className="mt-15">
        <NewSLetter />
      </section>
    </main>
  );
}
