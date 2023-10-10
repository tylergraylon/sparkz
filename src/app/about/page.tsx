import { PageHeader, AboutTimeline, DiscordJoin, Faq, NewSLetter } from "../components";

export default function About() {
  return (
    <main>
      <PageHeader header="About Us" />
      <section className="mt-12">
        <AboutTimeline />
      </section>
      <DiscordJoin />

      <Faq/>
      <NewSLetter />
    </main>
  );
}
