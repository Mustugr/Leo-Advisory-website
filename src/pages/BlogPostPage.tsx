import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { CTASection } from "../components/CTASection";
import { ChapterMark } from "../components/ChapterMark";
import { ParallaxImage } from "../components/ParallaxImage";
import { posts } from "../data/posts";

export function BlogPostPage() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="section container-px mx-auto max-w-3xl pt-40 text-center">
        <h1 className="font-display text-display-md">Article not found</h1>
        <Link to="/blog" className="btn-primary mt-8 inline-flex">
          Back to insights
        </Link>
      </section>
    );
  }

  const others = posts.filter((p) => p.slug !== post.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[18rem] md:min-h-[22rem] items-end overflow-hidden bg-ink-950 pt-24 pb-8 md:pt-28 md:pb-10 text-cream-50">
        <ParallaxImage
          src={post.cover}
          className="absolute inset-0 h-full w-full"
          imgClassName="opacity-[0.35] object-cover"
          amount={25}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/55 via-ink-950/70 to-ink-950/95" />
        <div className="absolute inset-0 bg-radial-warm opacity-30" />
        <div className="noise-dark animate-grain-drift" aria-hidden />

        <div className="relative container-px mx-auto max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-caps text-cream-100/60 hover:text-gold-300 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All insights
          </Link>

          <Reveal>
            <div className="mt-6 flex items-center gap-4">
              <span className="font-editorial italic text-xl text-gold-300">*</span>
              <motion.span
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="h-px w-14 bg-gold-400/60"
              />
              <span className="text-[10px] font-medium uppercase tracking-luxe text-cream-50/70">
                {post.category}
              </span>
            </div>
            <h1 className="mt-5 font-display text-display-md md:text-display-lg text-balance text-cream-50">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-[11px] uppercase tracking-caps text-cream-100/65">
              <span className="flex items-center gap-2">
                <User className="h-3.5 w-3.5 text-gold-400" />
                {post.author}
              </span>
              <span className="h-px w-4 bg-cream-100/20" />
              <span className="flex items-center gap-2">
                <Calendar className="h-3.5 w-3.5 text-gold-400" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="h-px w-4 bg-cream-100/20" />
              <span className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-gold-400" />
                {post.readTime}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Body */}
      <section className="relative section bg-cream-50 overflow-hidden">
        <div className="container-px mx-auto max-w-3xl">
          <Reveal>
            <p className="font-editorial italic text-2xl md:text-3xl leading-snug text-ink-900">
              {post.excerpt}
            </p>
            <div className="mt-14 space-y-12 border-t border-ink-900/10 pt-12">
              {post.body.map((block, i) => (
                <div key={i}>
                  {block.heading && (
                    <h2 className="font-display text-2xl md:text-3xl text-ink-900 tracking-tight">
                      {block.heading}
                    </h2>
                  )}
                  <div
                    className={`${block.heading ? "mt-6" : ""} space-y-6 text-lg leading-relaxed text-ink-600`}
                  >
                    {block.paragraphs.map((p, j) => (
                      <p key={j} className={i === 0 && j === 0 && !block.heading ? "drop-cap" : ""}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 relative overflow-hidden rounded-sm border border-gold-400/30 bg-cream-100/60 p-10">
              <div className="absolute inset-0 bg-radial-warm opacity-40 pointer-events-none" />
              <div className="relative">
                <ChapterMark numeral="*" label="Want the perspective on your numbers?" />
                <p className="mt-8 font-display text-2xl md:text-3xl text-ink-900 tracking-tight max-w-2xl">
                  A free thirty-minute call. Come with the question, <em className="text-gold-600">leave with a direction.</em>
                </p>
                <Link to="/contact" className="btn-primary mt-10 inline-flex">
                  Book a consult
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Keep reading */}
      <section className="relative section bg-cream-100/60 overflow-hidden">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <ChapterMark numeral="II" label="Keep reading" />
            <h2 className="mt-8 font-display text-display-lg text-balance">
              More <em className="text-gold-600">perspectives.</em>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-16 md:grid-cols-2">
            {others.map((p, i) => (
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
                    <p className="text-[10px] uppercase tracking-caps text-gold-600">{p.category}</p>
                    <h3 className="mt-4 font-display text-2xl text-ink-900 tracking-tight line-clamp-2 transition-colors group-hover:text-gold-700">
                      {p.title}
                    </h3>
                    <p className="mt-4 text-ink-500 leading-relaxed line-clamp-2">
                      {p.excerpt}
                    </p>
                  </div>
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
