import {
  TokenomicsMeter,
  NewSLetter,
  DiscordJoin,
  PageHeader,
} from "../components";

const tokenomics = [
  {
    percent: "40%",
    color: "to-[#D7F28B]",
    text: "Pre-sale",
    gradPercent: "w-[50%]",
  },
  {
    percent: "40%",
    color: "to-[#46FEDC]",
    text: "Liquidity",
    gradPercent: "w-[50%]",
  },
  {
    percent: "10%",
    color: "to-[#F3D4FE]",
    text: "Utility",
    gradPercent: "w-[20%]",
  },
  {
    percent: "1.5%",
    color: "to-[#E9EEEF]",
    text: "Team",
    gradPercent: "w-[2.5%]",
  },
  {
    percent: "2%",
    color: "to-[#B071C7]",
    text: "Airdrop",
    gradPercent: "w-[3%]",
  },
  {
    percent: "3.5%",
    color: "to-[#10AC8F]",
    text: "Treasury",
    gradPercent: "w-[4.5%]",
  },
  {
    percent: "3%",
    color: "to-[#92AE42]",
    text: "Ambassador Incentives",
    gradPercent: "w-[4%]",
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
