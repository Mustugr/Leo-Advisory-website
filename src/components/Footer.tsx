import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "../data/site";
import { services } from "../data/services";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-cream-100">
      <div className="noise-dark animate-grain-drift" aria-hidden />
      <div className="absolute inset-0 bg-radial-warm opacity-40" aria-hidden />

      <div className="relative">
        {/* Top editorial banner */}
        <div className="container-px mx-auto max-w-7xl pt-24 md:pt-28">
          <div className="flex flex-wrap items-end justify-between gap-10 border-b border-cream-50/10 pb-14">
            <div className="max-w-3xl">
              <p className="eyebrow-luxe text-gold-400">
                <span className="gold-rule-sm" /> Begin the conversation
              </p>
              <p className="mt-8 font-display text-display-lg text-balance text-cream-50">
                Clarity in the numbers. <em className="text-gold-300">Confidence in the decision.</em>
              </p>
            </div>
            <Link to="/contact" className="btn-gold">
              Book a consult
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Columns */}
        <div className="container-px mx-auto max-w-7xl py-20">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5 flex flex-col gap-8">
              <Logo variant="light" size="lg" />
              <p className="max-w-sm text-sm leading-relaxed text-cream-100/70">
                Practical finance and CFO-level guidance for contractors and small businesses. Clear numbers, cleaner systems, steadier cash flow.
              </p>
              <div className="space-y-3 text-sm">
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-3 text-cream-100/80 hover:text-gold-300 transition-colors"
                >
                  <Phone className="h-4 w-4 text-gold-400" />
                  {site.phone}
                </a>
                <a
                  href={site.emailHref}
                  className="flex items-center gap-3 text-cream-100/80 hover:text-gold-300 transition-colors"
                >
                  <Mail className="h-4 w-4 text-gold-400" />
                  {site.email}
                </a>
                <div className="flex items-start gap-3 text-cream-100/80">
                  <MapPin className="mt-0.5 h-4 w-4 text-gold-400" />
                  <span>{site.address}</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <p className="eyebrow-luxe text-gold-400">
                <span className="gold-rule-sm" /> Services
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/services/${s.slug}`}
                      className="group inline-flex items-center gap-2 text-cream-100/70 transition-colors hover:text-cream-50"
                    >
                      {s.title}
                      <span className="inline-block h-px w-0 bg-gold-400 transition-all duration-500 group-hover:w-6" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <p className="eyebrow-luxe text-gold-400">
                <span className="gold-rule-sm" /> Firm
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  ["/about", "About"],
                  ["/blog", "Insights"],
                  ["/faq", "FAQ"],
                  ["/calculators", "Calculators"],
                  ["/resources", "Resources"],
                  ["/file-share", "File Share"],
                  ["/contact", "Contact"],
                ].map(([to, label]) => (
                  <li key={to}>
                    <Link to={to} className="text-cream-100/70 hover:text-cream-50 transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <p className="eyebrow-luxe text-gold-400">
                <span className="gold-rule-sm" /> Hours
              </p>
              <p className="mt-6 text-sm text-cream-100/70">{site.hours}</p>
              <p className="mt-10 eyebrow-luxe text-gold-400">
                <span className="gold-rule-sm" /> Follow
              </p>
              <div className="mt-5 flex gap-2">
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-cream-100/15 hover:border-gold-400 hover:text-gold-300 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8h4.56v14H.22V8zm7.63 0h4.36v1.9h.06c.6-1.13 2.08-2.33 4.28-2.33 4.58 0 5.43 3.02 5.43 6.95V22h-4.55v-6.13c0-1.46-.03-3.34-2.03-3.34-2.04 0-2.35 1.59-2.35 3.24V22H7.85V8z"/>
                  </svg>
                </a>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-cream-100/15 hover:border-gold-400 hover:text-gold-300 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Huge wordmark divider */}
        <div className="container-px mx-auto max-w-7xl pb-6">
          <div className="flex items-end justify-between gap-6 border-t border-cream-50/10 pt-8">
            <p className="font-display leading-none text-cream-50/95 tracking-tightest" style={{ fontSize: "clamp(3rem, 12vw, 11rem)" }}>
              Leo <em className="text-gold-400/80 font-editorial">Advisory</em>
            </p>
            <p className="hidden md:block pb-2 text-[10px] uppercase tracking-luxe text-cream-100/40">
              MMXIX — NY
            </p>
          </div>
        </div>

        {/* Legal */}
        <div className="container-px mx-auto max-w-7xl pb-12">
          <div className="flex flex-col gap-4 text-[11px] text-cream-100/45 sm:flex-row sm:items-center sm:justify-between">
            <p className="uppercase tracking-caps">
              © {year} {site.legalName}. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 uppercase tracking-caps">
              <Link to="/privacy-policy" className="hover:text-cream-100 transition-colors">Privacy</Link>
              <Link to="/terms-of-service" className="hover:text-cream-100 transition-colors">Terms</Link>
              <Link to="/accessibility-statement" className="hover:text-cream-100 transition-colors">Accessibility</Link>
              <Link to="/disclaimer" className="hover:text-cream-100 transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
