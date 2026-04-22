import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { CTASection } from "../components/CTASection";
import { ChapterMark } from "../components/ChapterMark";
import { posts } from "../data/posts";

export function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero
        eyebrow="Financial Insights"
        numeral="I"
        size="feature"
        title={
          <>
            Plain-English perspectives for <em className="text-gold-300">small-business owners.</em>
          </>
        }
        subtitle="Short reads on pricing, margin, cash, capital, and the quiet habits that make finance less scary."
        image="/images/briefcase.avif"
      />

      <section className="relative section bg-cream-50 overflow-hidden">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <ChapterMark numeral="II" label="Featured" />
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              to={`/blog/${featured.slug}`}
              className="group mt-12 grid gap-12 overflow-hidden border-t border-ink-900/10 pt-12 lg:grid-cols-2 lg:gap-16"
            >
              <div className="aspect-[5/4] overflow-hidden rounded-sm bg-ink-100">
                <img
                  src={featured.cover}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-caps text-gold-600">
                  <span>Featured</span>
                  <span className="h-px w-4 bg-gold-400/60" />
                  <span>{featured.category}</span>
                  <span className="h-px w-4 bg-gold-400/60" />
                  <span className="text-ink-400">{featured.readTime}</span>
                </div>
                <h2 className="mt-6 font-display text-display-lg text-balance text-ink-900 transition-colors group-hover:text-gold-700">
                  {featured.title}
                </h2>
                <p className="mt-6 text-lg text-ink-500 leading-relaxed">{featured.excerpt}</p>
                <p className="mt-10 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-caps text-ink-900 transition-all duration-500 group-hover:gap-3">
                  Read the article
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </p>
              </div>
            </Link>
          </Reveal>

          <div className="mt-24">
            <Reveal>
              <ChapterMark numeral="III" label="More reading" />
            </Reveal>
            <div className="mt-12 grid gap-16 md:grid-cols-2">
              {rest.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.1}>
                  <Link to={`/blog/${p.slug}`} className="group block h-full">
                    <div className="aspect-[5/4] overflow-hidden rounded-sm bg-ink-100">
                      <img
                        src={p.cover}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-6">
                      <div className="flex items-center gap-3 text-[10px] uppercase tracking-caps text-gold-600">
                        <span>{p.category}</span>
                        <span className="h-px w-4 bg-gold-400/60" />
                        <span className="text-ink-400">{p.readTime}</span>
                      </div>
                      <h3 className="mt-5 font-display text-2xl md:text-3xl text-ink-900 tracking-tight leading-snug transition-colors group-hover:text-gold-700">
                        {p.title}
                      </h3>
                      <p className="mt-5 text-ink-500 leading-relaxed line-clamp-3">
                        {p.excerpt}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
