import { useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { ChapterMark } from "../components/ChapterMark";
import { Magnetic } from "../components/MagneticButton";
import { site } from "../data/site";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initial: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "CFO Services",
  message: "",
};

export function ContactPage() {
  const [form, setForm] = useState<FormState>(initial);
  const [sent, setSent] = useState(false);

  const set = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [key]: e.target.value });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Begin the conversation"
        numeral="I"
        title={
          <>
            Tell us what's on your desk — <em className="text-gold-300">we'll take it from here.</em>
          </>
        }
        subtitle="Most inquiries hear back within 24 hours. For urgent matters, call the office directly."
        image="/images/city.avif"
      />

      <section className="relative section bg-cream-50 overflow-hidden">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_380px] lg:gap-20">
            <Reveal>
              {sent ? (
                <div className="relative overflow-hidden rounded-sm border border-gold-400/40 bg-cream-100 p-12 md:p-16 text-center">
                  <div className="absolute inset-0 bg-radial-warm opacity-30" />
                  <div className="relative">
                    <CheckCircle2 className="mx-auto h-12 w-12 text-gold-600" />
                    <h2 className="mt-8 font-display text-display-md text-ink-900 tracking-tight">
                      Thanks — <em className="text-gold-600">message received.</em>
                    </h2>
                    <p className="mt-5 text-ink-500 leading-relaxed max-w-md mx-auto">
                      We'll be in touch within one business day. For anything urgent, the office line is{" "}
                      <a href={site.phoneHref} className="text-ink-900 font-medium underline decoration-gold-500 underline-offset-4">
                        {site.phone}
                      </a>
                      .
                    </p>
                    <button
                      onClick={() => {
                        setSent(false);
                        setForm(initial);
                      }}
                      className="btn-ghost mt-10 inline-flex"
                    >
                      Send another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={submit} className="relative">
                  <ChapterMark numeral="II" label="Start a conversation" />
                  <h2 className="mt-10 font-display text-display-lg text-ink-900 text-balance">
                    Tell us a bit about <em className="text-gold-600">your business.</em>
                  </h2>

                  <div className="mt-12 grid gap-8 sm:grid-cols-2 border-t border-ink-900/10 pt-10">
                    <Field label="Full name" required value={form.name} onChange={set("name")} />
                    <Field label="Company" value={form.company} onChange={set("company")} />
                    <Field label="Email" type="email" required value={form.email} onChange={set("email")} />
                    <Field label="Phone" type="tel" value={form.phone} onChange={set("phone")} />
                  </div>

                  <div className="mt-8">
                    <label className="block">
                      <span className="text-[10px] font-medium uppercase tracking-luxe text-ink-400">
                        Primary interest
                      </span>
                      <select
                        value={form.service}
                        onChange={set("service")}
                        className="mt-3 w-full border-0 border-b border-ink-900/20 bg-transparent px-0 py-3 text-ink-900 font-display text-lg focus:border-gold-500 focus:outline-none focus:ring-0 transition-colors"
                      >
                        {[
                          "CFO Services",
                          "Finance Solutions",
                          "Accounting & Reporting",
                          "Budgeting & Planning",
                          "Advisory & Consulting",
                          "Business Formation",
                          "Bookkeeping",
                          "Payroll",
                          "Something else",
                        ].map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <div className="mt-8">
                    <label className="block">
                      <span className="text-[10px] font-medium uppercase tracking-luxe text-ink-400">
                        What's on your desk?
                      </span>
                      <textarea
                        value={form.message}
                        onChange={set("message")}
                        rows={5}
                        className="mt-3 w-full border-0 border-b border-ink-900/20 bg-transparent px-0 py-3 text-ink-900 focus:border-gold-500 focus:outline-none focus:ring-0 resize-none transition-colors"
                        placeholder="A sentence or two about what brought you here is enough."
                      />
                    </label>
                  </div>

                  <Magnetic>
                    <button
                      type="submit"
                      className="btn-primary mt-10 inline-flex w-full justify-center sm:w-auto"
                    >
                      Send message
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </Magnetic>
                  <p className="mt-5 text-[11px] uppercase tracking-caps text-ink-400">
                    By submitting, you agree to our{" "}
                    <a href="/privacy-policy" className="underline decoration-gold-500 underline-offset-4">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              )}
            </Reveal>

            <Reveal delay={0.1}>
              <aside className="space-y-8 lg:sticky lg:top-32">
                <InfoCard icon={<Phone className="h-5 w-5" />} label="Call the office">
                  <a href={site.phoneHref} className="font-display text-2xl text-ink-900 tracking-tight hover:text-gold-700 transition-colors">
                    {site.phone}
                  </a>
                  <p className="mt-2 text-[11px] uppercase tracking-caps text-ink-400">
                    {site.hours}
                  </p>
                </InfoCard>
                <InfoCard icon={<Mail className="h-5 w-5" />} label="Email">
                  <a href={site.emailHref} className="font-display text-2xl text-ink-900 tracking-tight hover:text-gold-700 transition-colors">
                    {site.email}
                  </a>
                  <p className="mt-2 text-[11px] uppercase tracking-caps text-ink-400">
                    Responses within one business day
                  </p>
                </InfoCard>
                <InfoCard icon={<MapPin className="h-5 w-5" />} label="Office">
                  <p className="font-display text-lg text-ink-900 leading-snug">
                    {site.address}
                  </p>
                  <p className="mt-2 text-[11px] uppercase tracking-caps text-ink-400">
                    Visits by appointment
                  </p>
                </InfoCard>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  required,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-[10px] font-medium uppercase tracking-luxe text-ink-400">
        {label} {required && <span className="text-gold-600">*</span>}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="mt-3 w-full border-0 border-b border-ink-900/20 bg-transparent px-0 py-3 text-ink-900 font-display text-lg focus:border-gold-500 focus:outline-none focus:ring-0 transition-colors"
      />
    </label>
  );
}

function InfoCard({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative rounded-sm border border-ink-900/10 bg-cream-50 p-8 transition-all duration-500 hover:border-gold-500/40 hover:shadow-soft">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-sm border border-ink-900/15 text-gold-500">
          {icon}
        </div>
        <p className="text-[10px] font-medium uppercase tracking-luxe text-ink-400">
          {label}
        </p>
      </div>
      <div className="mt-6">{children}</div>
    </div>
  );
}
