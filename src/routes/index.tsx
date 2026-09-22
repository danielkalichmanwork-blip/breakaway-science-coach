import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Activity, Wind, LineChart, MessageSquare, CalendarCheck, ClipboardList, Check } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

const TITLE = "Breakaway Method | Science-Backed Cycling Coaching";
const DESCRIPTION = "Data-driven cycling coaching for riders who want to train with purpose, understand their performance, and make every effort count. One-on-one coaching, lactate and CdA testing.";

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
  { label: "Pricing", href: "#pricing" },
  { label: "Coach", href: "#coach" },
  { label: "Contact", href: "#contact" },
];

const PILLARS = [
  { icon: Activity, title: "Physiology first", body: "Training zones come from measured lactate and threshold data — not a percentage of a number you set three seasons ago. Remove the guess work." },
  { icon: Wind, title: "Aerodynamics that pay", body: "On road and track, watts saved beat watts gained. Real-time CdA testing turns position changes into measurable time." },
  { icon: LineChart, title: "Data with a decision", body: "Every file is reviewed with intent. You get the interpretation and the next step, not a wall of charts." },
  { icon: MessageSquare, title: "Athlete-first", body: "Your plan bends around work, family, weather and fatigue. Consistency beats a perfect plan you can't complete." },
];

const PROCESS = [
  { step: "01", icon: MessageSquare, title: "Consultation", body: "A conversation about your season, history, constraints and the result you actually care about." },
  { step: "02", icon: ClipboardList, title: "Baseline testing", body: "Lactate profiling and/or a CdA session to establish where your power and your drag really sit." },
  { step: "03", icon: CalendarCheck, title: "Build the block", body: "Weekly plan delivered in TrainingPeaks, adjusted as life and adaptation demand." },
  { step: "04", icon: LineChart, title: "Review and retest", body: "Ongoing analysis with periodic retesting so progression is verified, not assumed." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center"><img src={logoWhite} alt="Breakaway Method" width={180} height={41} className="h-9 w-auto" /></a>
          <div className="hidden items-center gap-7 md:flex">
            {NAV.map((item) => (<a key={item.href} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{item.label}</a>))}
          </div>
          <a href="#contact" className="inline-flex items-center gap-1.5 rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">Start coaching <ArrowUpRight className="size-4" /></a>
        </nav>
      </header>

      <section id="top" className="relative flex min-h-[92vh] items-end overflow-hidden">
        <img src="/hero-race-corner-bw.jpg" alt="Road cyclists cornering at speed in a race" width={1920} height={1280} className="absolute inset-0 size-full object-cover object-center" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-fade)" }} aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-32">
          <p className="eyebrow">Science-backed · Athlete-first</p>
          <h1 className="mt-4 max-w-3xl text-5xl leading-[0.95] uppercase sm:text-6xl lg:text-7xl">Train on evidence.<br /><span className="text-primary">Race on form.</span></h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">Data-driven cycling coaching for riders who want to train with purpose, understand their performance, and make every effort count.</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90 glow-primary">Book a free consultation <ArrowUpRight className="size-4" /></a>
            <a href="#method" className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 font-semibold transition-colors hover:bg-secondary">See the method</a>
          </div>
          <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 sm:grid-cols-3">
            {[{ k: "Tailored", v: "plans for every athlete" }, { k: "1:1", v: "coaching, never templated" }, { k: "Testing", v: "CdA + Lactate" }].map((s) => (<div key={s.k}><dt className="font-[family-name:var(--font-display)] text-2xl font-extrabold text-primary">{s.k}</dt><dd className="mt-1 text-sm text-muted-foreground">{s.v}</dd></div>))}
          </dl>
        </div>
      </section>

      <section id="method" className="relative border-t border-border py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.35] hairline-grid" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5">
          <p className="eyebrow">The method</p>
          <h2 className="mt-3 max-w-2xl text-4xl uppercase sm:text-5xl">Four principles, applied to every session</h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
            {PILLARS.map((p) => (<article key={p.title} className="bg-card p-8"><p.icon className="size-6 text-primary" /><h3 className="mt-5 text-xl uppercase">{p.title}</h3><p className="mt-3 text-muted-foreground">{p.body}</p></article>))}
          </div>
        </div>
      </section>

      <section id="testing" className="border-t border-border bg-card/40 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">Performance testing</p>
          <h2 className="mt-3 max-w-2xl text-4xl uppercase sm:text-5xl">Measure it, then move it</h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">Guessing is expensive. Testing is not. Both services are available to coached athletes and as standalone bookings.</p>
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {[{ img: "/cda-testing.jpg", alt: "Cyclist performing real-time aerodynamic CdA field testing on a track", tag: "Aerodynamics", title: "Real-time CdA testing", body: "Live drag measurement in the field, so position, kit and equipment changes are validated the moment you make them.", points: ["Immediate A/B comparison of positions", "Helmet, skinsuit and wheel selection", "Watts and time saved quantified per change"] }, { img: "/lactate-bw.jpg", alt: "Lactate analyser and blood sample strip in a performance testing lab", tag: "Physiology", title: "Lactate testing", body: "A full lactate profile to place your aerobic and anaerobic thresholds precisely — the foundation every training zone is built on.", points: ["True LT1 / LT2 identification", "Individualised training zones", "Fuelling and pacing targets"] }].map((t) => (
              <article key={t.title} className="overflow-hidden rounded-sm border border-border bg-card shadow-lift">
                <img src={t.img} alt={t.alt} loading="lazy" width={1200} height={900} className="h-60 w-full object-cover" />
                <div className="p-8"><p className="eyebrow">{t.tag}</p><h3 className="mt-3 text-2xl uppercase">{t.title}</h3><p className="mt-3 text-muted-foreground">{t.body}</p><ul className="mt-6 space-y-2">{t.points.map((pt) => (<li key={pt} className="flex items-start gap-2 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-primary" /><span className="text-muted-foreground">{pt}</span></li>))}</ul></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING - NEW */}
      <section id="pricing" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="eyebrow">Pricing</p>
              <h2 className="mt-3 text-4xl uppercase sm:text-5xl">One plan.<br /><span className="text-primary">Everything included.</span></h2>
              <p className="mt-5 text-muted-foreground">No tiers, no upsells. $300 per month plus a $50 one-time start-up fee for onboarding and initial plan build. Cancel anytime.</p>
              <a href="/pricing" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">See full pricing details <ArrowUpRight className="size-4" /></a>
            </div>
            <div className="rounded-sm border-2 border-primary bg-card p-8 shadow-lift">
              <div className="flex items-baseline justify-between"><p className="eyebrow text-primary">Coaching</p><p className="text-xs text-muted-foreground">$50 start-up</p></div>
              <div className="mt-3 flex items-baseline gap-2"><span className="font-[family-name:var(--font-display)] text-5xl font-black">$300</span><span className="text-muted-foreground">/ month</span></div>
              <ul className="mt-8 space-y-3">
                {["Post ride analysis of data", "Unlimited communication", "Training plans posted weekly", "Weekly updates to training plans", "Discounted rate on lactate and CdA testing", "Race strategy"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[15px]"><Check className="mt-0.5 size-4 shrink-0 text-primary" /><span>{item}</span></li>
                ))}
              </ul>
              <a href="mailto:breakawaymethod@gmail.com?subject=Get%20started%20with%20Breakaway%20Method" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90 glow-primary">Get started <ArrowUpRight className="size-4" /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 text-4xl uppercase sm:text-5xl">From first call to first result</h2>
          <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((s) => (<li key={s.step} className="border-t-2 border-primary pt-6"><div className="flex items-center gap-3"><span className="font-[family-name:var(--font-display)] text-3xl font-black text-primary/40">{s.step}</span><s.icon className="size-5 text-primary" /></div><h3 className="mt-4 text-lg uppercase">{s.title}</h3><p className="mt-2 text-sm text-muted-foreground">{s.body}</p></li>))}
          </ol>
        </div>
      </section>

      <section id="coach" className="border-t border-border bg-card/40 py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[1fr_0.85fr]">
          <div><p className="eyebrow">The coach</p><h2 className="mt-3 text-4xl uppercase sm:text-5xl">Daniel Kalichman</h2><div className="mt-6 space-y-4 leading-relaxed text-muted-foreground"><p>I am a former professional cyclist who has raced for some of the top teams in North America. I began my cycling career late, starting at age 23 while in university, but quickly made significant progress.</p><p>I understand the importance of balance; I trained, raced, and travelled while completing seven years of post-secondary education. Time management is key to success both as an athlete and in personal life.</p><p>As a marginal gains fanatic and early adopter, I have researched various claims and identified what truly works. I apply these insights to my coaching, ensuring everything an athlete does on or off the bike has purpose.</p><p>The Breakaway Method emphasizes the use of data—including power output, heart rate, race analysis, training load, heart rate variability (HRV), lactate threshold, and aerodynamics (CdA)—to make informed training decisions without unnecessary complexity. I work with athletes across a range of disciplines and goals, including road racing, fondos, crit racing, gravel, time trials, track cycling, and general fitness.</p><p>Based in Toronto, Ontario, I help cyclists improve their performance, better understand their training and data, and make the most of the time they have on the bike. Whether you're preparing for your first race or chasing a personal best, the Breakaway Method is about making every part of your training purposeful. To learn more about personalized cycling coaching, please reach out at <a href="mailto:breakawaymethod@gmail.com" className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80">breakawaymethod@gmail.com</a></p></div></div>
          <div className="rounded-sm border border-border bg-card p-8"><h3 className="text-lg uppercase">Coaching focus</h3><ul className="mt-5 space-y-3 text-sm">{["Road, criterium and gravel racing", "Time trial power and position optimisation", "Track endurance and pursuit pacing", "Gran fondo and long-distance events", "Return to structure after a layoff"].map((f) => (<li key={f} className="flex items-start gap-2"><Check className="mt-0.5 size-4 shrink-0 text-primary" /><span className="text-muted-foreground">{f}</span></li>))}</ul><div className="mt-8 border-t border-border pt-6"><p className="eyebrow">Trusted partner</p><p className="mt-3 text-sm text-muted-foreground">Position work is only as good as the fit underneath it. Breakaway Method athletes work with FT Cycling for professional bike fitting.</p><a href="https://www.ftcycling.ca/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">FT Cycling bike fitting <ArrowUpRight className="size-4" /></a></div></div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden border-t border-border py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.35] hairline-grid" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-5 text-center"><p className="eyebrow">Contact</p><h2 className="mt-3 text-4xl uppercase sm:text-5xl">Let's find your next level</h2><p className="mt-5 text-muted-foreground">Tell me about your season, your schedule and your goal. Free 30-minute consultation, no obligation.</p><div className="mt-10 flex flex-wrap items-center justify-center gap-3"><a href="mailto:breakawaymethod@gmail.com?subject=Coaching%20enquiry" className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90 glow-primary">breakawaymethod@gmail.com <ArrowUpRight className="size-4" /></a></div></div>
      </section>

      <footer className="border-t border-border py-10"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground sm:flex-row"><div className="flex items-center gap-3"><img src={logoWhite} alt="Breakaway Method" width={150} height={34} className="h-7 w-auto" /><span>— cycling coaching by Daniel Kalichman</span></div><a href="https://www.ftcycling.ca/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Bike fitting: FT Cycling</a></div></footer>
    </div>
  );
}
