import { PageHeader, AboutTimeline } from "../components";

export default function About() {
  return (
    <main>
      <PageHeader header="About Us" />
      <section className="mt-12">
        <AboutTimeline />
      </section>
    </main>
  );
}
