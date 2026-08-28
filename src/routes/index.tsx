import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Activity,
  Wind,
  LineChart,
  MessageSquare,
  CalendarCheck,
  ClipboardList,
  Check,
} from "lucide-react";

import heroCyclist from "@/assets/hero-race-corner-bw.jpg.asset.json";
import lactateTesting from "@/assets/lactate-bw.jpg.asset.json";
import cdaTesting from "@/assets/tt-solo-cropped.jpg.asset.json";

const TITLE = "Breakaway Method | Science-Backed Cycling Coaching";
const DESCRIPTION =
  "One-on-one cycling coaching built on physiology, not guesswork. Real-time CdA aero testing, lactate profiling, and athlete-first training plans for $160/month.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Method", href: "#method" },
  { label: "Testing", href: "#testing" },
  { label: "Coach", href: "#coach" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const PILLARS = [
  {
    icon: Activity,
    title: "Physiology first",
    body: "Training zones come from measured lactate and threshold data — not a percentage of a number you set three seasons ago.",
  },
  {
    icon: Wind,
    title: "Aerodynamics that pay",
    body: "On road and track, watts saved beat watts gained. Real-time CdA testing turns position changes into measurable time.",
  },
  {
    icon: LineChart,
    title: "Data with a decision",
    body: "Every file is reviewed with intent. You get the interpretation and the next step, not a wall of charts.",
  },
  {
    icon: MessageSquare,
    title: "Athlete-first",
    body: "Your plan bends around work, family, weather and fatigue. Consistency beats a perfect plan you can't complete.",
  },
];

const PROCESS = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Consultation",
    body: "A conversation about your season, history, constraints and the result you actually care about.",
  },
  {
    step: "02",
    icon: ClipboardList,
    title: "Baseline testing",
    body: "Lactate profiling and/or a CdA session to establish where your power and your drag really sit.",
  },
  {
    step: "03",
    icon: CalendarCheck,
    title: "Build the block",
    body: "Weekly plan delivered in TrainingPeaks, adjusted as life and adaptation demand.",
  },
  {
    step: "04",
    icon: LineChart,
    title: "Review and retest",
    body: "Ongoing analysis with periodic retesting so progression is verified, not assumed.",
  },
];

const INCLUDED = [
  "Fully individualised weekly training plan",
  "Unlimited plan adjustments as life changes",
  "Structured workouts delivered to your head unit",
  "Ride-by-ride file analysis and feedback",
  "Race and event tactical preparation",
  "Direct messaging access to your coach",
  "Monthly video or phone check-in call",
  "Pacing, fuelling and equipment guidance",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-[family-name:var(--font-display)] text-lg font-black uppercase tracking-tight">
              Breakaway
            </span>
            <span className="eyebrow">Method</span>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start coaching
            <ArrowUpRight className="size-4" />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-[92vh] items-end overflow-hidden">
        <img
          src={heroCyclist.url}
          alt="Road cyclists cornering at speed in a race"
          width={1920}
          height={1280}
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-fade)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-32">
          <p className="eyebrow">Science-backed · Athlete-first</p>
          <h1 className="mt-4 max-w-3xl text-5xl leading-[0.95] uppercase sm:text-6xl lg:text-7xl">
            Train on evidence.
            <br />
            <span className="text-primary">Race on form.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Breakaway Method is one-on-one cycling coaching built around measured physiology and
            measured aerodynamics — for riders who want to know why they're faster.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90 glow-primary"
            >
              Book a free consultation
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#method"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 font-semibold transition-colors hover:bg-secondary"
            >
              See the method
            </a>
          </div>
          <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 sm:grid-cols-3">
            {[
              { k: "Tailored", v: "plans for every athlete" },
              { k: "1:1", v: "coaching, never templated" },
              { k: "CdA + Lactate", v: "testing in-house" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-[family-name:var(--font-display)] text-2xl font-extrabold text-primary">
                  {s.k}
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Method */}
      <section id="method" className="relative border-t border-border py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.35] hairline-grid" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5">
          <p className="eyebrow">The method</p>
          <h2 className="mt-3 max-w-2xl text-4xl uppercase sm:text-5xl">
            Four principles, applied to every session
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
            {PILLARS.map((p) => (
              <article key={p.title} className="bg-card p-8">
                <p.icon className="size-6 text-primary" />
                <h3 className="mt-5 text-xl uppercase">{p.title}</h3>
                <p className="mt-3 text-muted-foreground">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testing */}
      <section id="testing" className="border-t border-border bg-card/40 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">Performance testing</p>
          <h2 className="mt-3 max-w-2xl text-4xl uppercase sm:text-5xl">Measure it, then move it</h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Guessing is expensive. Testing is not. Both services are available to coached athletes
            and as standalone bookings.
          </p>
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {[
              {
                img: cdaTesting.url,
                alt: "Cyclist performing real-time aerodynamic CdA field testing on a track",
                tag: "Aerodynamics",
                title: "Real-time CdA testing",
                body: "Live drag measurement in the field, so position, kit and equipment changes are validated the moment you make them.",
                points: [
                  "Immediate A/B comparison of positions",
                  "Helmet, skinsuit and wheel selection",
                  "Watts and time saved quantified per change",
                ],
              },
              {
                img: lactateTesting.url,
                alt: "Lactate analyser and blood sample strip in a performance testing lab",
                tag: "Physiology",
                title: "Lactate testing",
                body: "A full lactate profile to place your aerobic and anaerobic thresholds precisely — the foundation every training zone is built on.",
                points: [
                  "True LT1 / LT2 identification",
                  "Individualised training zones",
                  "Fuelling and pacing targets",
                ],
              },
            ].map((t) => (
              <article
                key={t.title}
                className="overflow-hidden rounded-sm border border-border bg-card shadow-lift"
              >
                <img
                  src={t.img}
                  alt={t.alt}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-60 w-full object-cover"
                />
                <div className="p-8">
                  <p className="eyebrow">{t.tag}</p>
                  <h3 className="mt-3 text-2xl uppercase">{t.title}</h3>
                  <p className="mt-3 text-muted-foreground">{t.body}</p>
                  <ul className="mt-6 space-y-2">
                    {t.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 text-4xl uppercase sm:text-5xl">From first call to first result</h2>
          <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((s) => (
              <li key={s.step} className="border-t-2 border-primary pt-6">
                <div className="flex items-center gap-3">
                  <span className="font-[family-name:var(--font-display)] text-3xl font-black text-primary/40">
                    {s.step}
                  </span>
                  <s.icon className="size-5 text-primary" />
                </div>
                <h3 className="mt-4 text-lg uppercase">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Coach */}
      <section id="coach" className="border-t border-border bg-card/40 py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="eyebrow">The coach</p>
            <h2 className="mt-3 text-4xl uppercase sm:text-5xl">Daniel Kalichman</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                I’m an ex-pro cyclist and now a coach who believes the best results derive from
                both experience and evidence. Everything I ask of an athlete, I’ve tested myself —
                through training, racing, wind, fatigue, and high-pressure competition.
              </p>
              <p>
                Breakaway Method was built around a simple idea: replace inherited training habits
                with measurable, individualized coaching. I use data including lactate, power,
                aerodynamics, training load, and race performance to turn physiology and sports
                science into practical decisions.
              </p>
              <p>
                I coach road, gravel, time trial, and track cyclists — from developing racers to
                athletes pursuing national-level performance. The approach is always individual.
                The standard of evidence is not.
              </p>
            </div>
          </div>
          <div className="rounded-sm border border-border bg-card p-8">
            <h3 className="text-lg uppercase">Coaching focus</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                "Road, criterium and gravel racing",
                "Time trial power and position optimisation",
                "Track endurance and pursuit pacing",
                "Gran fondo and long-distance events",
                "Return to structure after a layoff",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-border pt-6">
              <p className="eyebrow">Trusted partner</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Position work is only as good as the fit underneath it. Breakaway Method athletes
                work with FT Cycling for professional bike fitting.
              </p>
              <a
                href="https://www.ftcycling.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                FT Cycling bike fitting
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">Pricing</p>
          <h2 className="mt-3 text-4xl uppercase sm:text-5xl">One plan. Everything included.</h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border lg:grid-cols-[0.8fr_1.2fr]">
            <div className="bg-card p-10">
              <h3 className="text-xl uppercase">Full coaching</h3>
              <p className="mt-6 flex items-end gap-2">
                <span className="font-[family-name:var(--font-display)] text-6xl font-black text-primary">
                  $160
                </span>
                <span className="pb-2 text-sm text-muted-foreground">/ month</span>
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Month to month. No contract, no tiers, no upsells — every athlete gets the full
                service.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Apply for a spot
                <ArrowUpRight className="size-4" />
              </a>
              <p className="mt-4 text-xs text-muted-foreground">
                CdA and lactate testing sessions are quoted separately.
              </p>
            </div>
            <div className="bg-card p-10">
              <h3 className="text-lg uppercase">What you get</h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {INCLUDED.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden border-t border-border py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.35] hairline-grid" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-5 text-center">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 text-4xl uppercase sm:text-5xl">Let's find your next level</h2>
          <p className="mt-5 text-muted-foreground">
            Tell me about your season, your schedule and your goal. Free 30-minute consultation,
            no obligation.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:coach@breakawaymethod.com?subject=Coaching%20enquiry"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90 glow-primary"
            >
              coach@breakawaymethod.com
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground sm:flex-row">
          <p>
            <span className="font-[family-name:var(--font-display)] font-bold uppercase text-foreground">
              Breakaway Method
            </span>{" "}
            — cycling coaching by Daniel Kalichman
          </p>
          <a
            href="https://www.ftcycling.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            Bike fitting: FT Cycling
          </a>
        </div>
      </footer>
    </div>
  );
}
