import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { services } from "../data/services";
import { site } from "../data/site";

const primary = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services", hasMega: true },
  { to: "/calculators", label: "Calculators" },
  { to: "/blog", label: "Insights" },
  { to: "/faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [mega, setMega] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobile(false);
    setMega(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-cream-50/92 backdrop-blur-xl border-b border-ink-900/10"
          : "bg-transparent"
      }`}
    >
      {/* Top hairline meta strip */}
      <div
        className={`hidden lg:block border-b transition-opacity duration-500 ${
          scrolled
            ? "opacity-0 h-0 overflow-hidden border-transparent"
            : "opacity-100 border-cream-50/10"
        }`}
      >
        <div
          className={`container-px mx-auto max-w-7xl flex items-center justify-between py-2 text-[10px] uppercase tracking-luxe ${
            scrolled ? "text-ink-400" : "text-cream-50/55"
          }`}
        >
          <span>New York · Est. {site.founded}</span>
          <span className="flex items-center gap-6">
            <span>{site.hours}</span>
            <a
              href={site.phoneHref}
              className={`transition-colors ${
                scrolled ? "hover:text-gold-600" : "hover:text-gold-300"
              }`}
            >
              {site.phone}
            </a>
          </span>
        </div>
      </div>

      <div className="container-px mx-auto max-w-7xl flex items-center justify-between py-4 md:py-5">
        <Logo variant={scrolled ? "dark" : "light"} showTagline={!scrolled} />

        <nav className="hidden lg:flex items-center gap-0.5">
          {primary.map((item) =>
            item.hasMega ? (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => setMega(true)}
                onMouseLeave={() => setMega(false)}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `relative inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                      isActive
                        ? scrolled ? "text-gold-600" : "text-gold-300"
                        : scrolled
                          ? "text-ink-700 hover:text-ink-900"
                          : "text-cream-50/85 hover:text-cream-50"
                    }`
                  }
                >
                  {item.label}
                  <span className={`text-[10px] ${scrolled ? "text-gold-500" : "text-gold-300"}`}>✦</span>
                </NavLink>
                <AnimatePresence>
                  {mega && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-1/2 top-full -translate-x-1/2 pt-4"
                    >
                      <div className="w-[760px] overflow-hidden rounded-sm border border-ink-900/10 bg-cream-50 shadow-lift">
                        <div className="grid grid-cols-[1fr_220px]">
                          <div className="p-8">
                            <div className="flex items-center justify-between">
                              <p className="eyebrow-luxe">
                                <span className="gold-rule-sm" /> The Practice
                              </p>
                              <Link
                                to="/services"
                                className="text-[11px] font-medium uppercase tracking-caps text-gold-600 link-underline"
                              >
                                View all
                              </Link>
                            </div>
                            <div className="mt-6 grid grid-cols-2 gap-1">
                              {services.map((s) => (
                                <Link
                                  key={s.slug}
                                  to={`/services/${s.slug}`}
                                  className="group flex items-start gap-3 rounded-sm px-3 py-3 transition-colors hover:bg-cream-100"
                                >
                                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-ink-900/15 text-gold-500 transition-colors group-hover:border-gold-400 group-hover:text-gold-600">
                                    <s.icon className="h-4 w-4" />
                                  </span>
                                  <span className="flex flex-col">
                                    <span className="font-display text-[14px] font-medium text-ink-900">
                                      {s.title}
                                    </span>
                                    <span className="mt-0.5 text-[11px] text-ink-400 line-clamp-1">
                                      {s.short}
                                    </span>
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>

                          <div className="relative border-l border-ink-900/10 bg-ink-950 p-7 text-cream-50">
                            <div className="absolute inset-0 bg-radial-warm opacity-60" />
                            <div className="relative">
                              <p className="eyebrow-luxe text-gold-400">
                                <span className="gold-rule-sm" /> Consult
                              </p>
                              <p className="mt-4 font-display text-lg leading-snug">
                                A 30-minute conversation about the <em className="text-gold-300">question on your desk.</em>
                              </p>
                              <Link
                                to="/contact"
                                className="mt-6 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-caps text-gold-300 hover:text-gold-200 transition-colors"
                              >
                                Book a consult
                                <ArrowUpRight className="h-3.5 w-3.5" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-4 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                    isActive
                      ? scrolled ? "text-gold-600" : "text-gold-300"
                      : scrolled
                        ? "text-ink-700 hover:text-ink-900"
                        : "text-cream-50/85 hover:text-cream-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.phone}`}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
              scrolled
                ? "border-ink-900/15 text-ink-700 hover:border-gold-400 hover:text-gold-600"
                : "border-cream-50/25 text-cream-50/85 hover:border-gold-300 hover:text-gold-300"
            }`}
          >
            <Phone className="h-4 w-4" />
          </a>
          <Link to="/contact" className={scrolled ? "btn-primary" : "btn-gold"}>
            Book a consult
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button
          onClick={() => setMobile((v) => !v)}
          className={`lg:hidden flex items-center justify-center h-11 w-11 rounded-sm border transition-colors ${
            scrolled || mobile
              ? "border-ink-900/20 text-ink-900"
              : "border-cream-50/25 text-cream-50"
          }`}
          aria-label="Toggle menu"
        >
          {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden border-t border-ink-900/10 bg-cream-50"
          >
            <div className="container-px mx-auto max-w-7xl py-8 flex flex-col gap-1">
              {primary.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `block border-b border-ink-900/10 px-1 py-5 font-display text-3xl tracking-tight transition-colors ${
                        isActive ? "text-gold-600" : "text-ink-900"
                      }`
                    }
                  >
                    <span className="flex items-center justify-between">
                      {item.label}
                      <ArrowUpRight className="h-5 w-5 opacity-40" />
                    </span>
                  </NavLink>
                </motion.div>
              ))}
              <Link to="/contact" className="btn-gold mt-6">
                Book a consult
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href={site.phoneHref}
                className="mt-4 flex items-center justify-between text-sm text-ink-500"
              >
                <span className="uppercase tracking-caps text-[11px] text-ink-400">Direct line</span>
                <span>{site.phone}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
