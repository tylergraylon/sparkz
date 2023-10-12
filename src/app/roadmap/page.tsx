import { PageHeader, AboutTimeline, DiscordJoin, Faq, NewSLetter } from "../components";

export default function RoadMap() {
  return (
    <main>
      <PageHeader header="Roadmap" />
      <section className="mt-12">
        <AboutTimeline />
      </section>
      <DiscordJoin />

      <Faq/>
      <NewSLetter />
    </main>
  );
}
