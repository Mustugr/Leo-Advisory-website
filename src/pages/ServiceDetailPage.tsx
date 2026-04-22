import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { CTASection } from "../components/CTASection";
import { ChapterMark } from "../components/ChapterMark";
import { Magnetic } from "../components/MagneticButton";
import { ParallaxImage } from "../components/ParallaxImage";
import { services } from "../data/services";

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <section className="section container-px mx-auto max-w-3xl pt-40 text-center">
        <h1 className="font-display text-display-md">Service not found</h1>
        <Link to="/services" className="btn-primary mt-8 inline-flex">
          Back to services
        </Link>
      </section>
    );
  }

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const Icon = service.icon;
  const index = services.findIndex((s) => s.slug === service.slug) + 1;
  const roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"][index - 1] ?? "*";

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[18rem] md:min-h-[22rem] items-end overflow-hidden bg-ink-950 pt-24 pb-8 md:pt-28 md:pb-10 text-cream-50">
        <ParallaxImage
          src={service.image}
          className="absolute inset-0 h-full w-full"
          imgClassName="opacity-[0.35] object-cover"
          amount={25}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/55 via-ink-950/70 to-ink-950/95" />
        <div className="absolute inset-0 bg-radial-warm opacity-30" />
        <div className="noise-dark animate-grain-drift" aria-hidden />

        <div className="relative container-px mx-auto max-w-7xl">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-caps text-cream-100/60 hover:text-gold-300 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All services
          </Link>

          <Reveal>
            <div className="mt-6 flex items-center gap-4">
              <span className="font-editorial italic text-lg text-gold-300">{roman}</span>
              <motion.span
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="h-px w-12 bg-gold-400/60"
              />
              <span className="text-[10px] font-medium uppercase tracking-luxe text-cream-50/70">
                {service.title}
              </span>
            </div>

            <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <h1 className="max-w-4xl font-display text-display-sm md:text-display-md text-balance text-cream-50">
                {service.lede}
              </h1>
              <div className="hidden lg:flex h-14 w-14 items-center justify-center rounded-sm border border-gold-400/40 text-gold-300">
                <Icon className="h-5 w-5" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="relative section bg-cream-50 overflow-hidden">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
            <Reveal className="lg:col-span-5">
              <ChapterMark numeral="II" label="What's included" />
              <h2 className="mt-10 font-display text-display-lg text-balance">
                The shape of <em className="text-gold-600">the work.</em>
              </h2>
              <p className="mt-8 text-ink-500 leading-relaxed max-w-md">
                Every engagement is scoped to your business, but here's the core of what gets done when we partner on {service.title.toLowerCase()}.
              </p>
            </Reveal>
            <div className="lg:col-span-7 grid gap-0 border-t border-ink-900/10 sm:grid-cols-2">
              {service.features.map((f, i) => (
                <Reveal key={f.label} delay={i * 0.05}>
                  <div
                    className={`h-full border-b border-ink-900/10 p-6 md:p-8 transition-colors hover:bg-cream-100/50 ${
                      i % 2 === 0 ? "sm:border-r sm:border-ink-900/10" : ""
                    }`}
                  >
                    <p className="font-editorial italic text-lg text-gold-500">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-5 font-display text-xl text-ink-900 tracking-tight">
                      {f.label}
                    </h3>
                    <p className="mt-4 text-sm text-ink-500 leading-relaxed">
                      {f.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables + ideal for */}
      <section className="relative section bg-ink-950 text-cream-50 overflow-hidden">
        <div className="absolute inset-0 bg-radial-warm opacity-30" />
        <div className="noise-dark animate-grain-drift" aria-hidden />
        <div className="relative container-px mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <Reveal>
              <ChapterMark numeral="III" label="Deliverables" dark />
              <h2 className="mt-10 font-display text-display-lg text-balance text-cream-50">
                What you'll get <em className="text-gold-300">each month.</em>
              </h2>
              <ul className="mt-12 border-t border-cream-50/10">
                {service.deliverables.map((d, i) => (
                  <li
                    key={d}
                    className="flex items-center gap-5 border-b border-cream-50/10 py-5"
                  >
                    <span className="font-editorial italic text-sm text-gold-400 w-8">
                      0{i + 1}
                    </span>
                    <span className="text-cream-100/85">{d}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative rounded-sm border border-cream-50/10 bg-ink-900/70 p-10 md:p-12 backdrop-blur">
                <ChapterMark numeral="IV" label="Ideal for" dark />
                <ul className="mt-10 space-y-6">
                  {service.idealFor.map((i) => (
                    <li key={i} className="flex items-start gap-4 text-cream-100/85">
                      <span className="mt-2 h-px w-6 shrink-0 bg-gold-400" />
                      <span className="text-lg leading-relaxed">{i}</span>
                    </li>
                  ))}
                </ul>
                <Magnetic>
                  <Link to="/contact" className="mt-12 btn-gold inline-flex">
                    Start the conversation
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="relative section bg-cream-100/60 overflow-hidden">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <ChapterMark numeral="V" label="Related practice" />
            <h2 className="mt-10 font-display text-display-lg text-balance">
              Frequently paired <em className="text-gold-600">with this work.</em>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-0 border-t border-ink-900/10 md:grid-cols-3">
            {others.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.1}>
                <Link
                  to={`/services/${s.slug}`}
                  className={`group block h-full border-b border-ink-900/10 p-8 md:p-10 transition-colors hover:bg-cream-50 ${
                    i < others.length - 1 ? "md:border-r md:border-ink-900/10" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-editorial italic text-xl text-gold-500">
                      {String(services.findIndex((x) => x.slug === s.slug) + 1).padStart(2, "0")}
                    </p>
                    <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-ink-900/15 text-gold-500 transition-all duration-500 group-hover:border-gold-500 group-hover:bg-gold-400 group-hover:text-ink-950">
                      <s.icon className="h-4 w-4" />
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl text-ink-900 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-ink-500 leading-relaxed line-clamp-3">
                    {s.short}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
