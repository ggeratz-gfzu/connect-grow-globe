import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe2, Handshake, TrendingUp, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-global.jpg";
import { useI18n } from "@/i18n";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GFZ-U-Connect | Convertimos productos en negocios globales" },
      { name: "description", content: "Firma de desarrollo de negocios internacionales con +20 años de trayectoria comercial en México y mercados globales." },
      { property: "og:title", content: "GFZ-U-Connect | International Business Development" },
      { property: "og:description", content: "We turn products into global businesses." },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useI18n();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.18 0.07 264 / 0.92), oklch(0.28 0.09 264 / 0.78))" }} />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36 lg:py-44">
          <div className="max-w-3xl text-white">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[var(--brand-orange)] backdrop-blur-sm">
              {t("hero.eyebrow")}
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
              {t("hero.title")}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              {t("hero.subtitle")}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[var(--brand-orange)] text-white hover:bg-[var(--brand-orange)]/90">
                <Link to="/contact">{t("hero.cta1")} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white">
                <Link to="/services">{t("hero.cta2")}</Link>
              </Button>
            </div>
          </div>

          <div className="mt-20 grid gap-6 border-t border-white/15 pt-10 sm:grid-cols-3">
            {[
              { v: t("hero.stat1"), d: t("hero.stat1d") },
              { v: t("hero.stat2"), d: t("hero.stat2d") },
              { v: t("hero.stat3"), d: t("hero.stat3d") },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl font-semibold text-white md:text-4xl">{s.v}</div>
                <div className="mt-1 text-sm text-white/70">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>{t("about.eyebrow")}</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl">
              {t("about.title")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{t("about.p1")}</p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t("about.p2")}</p>
          </div>
          <div className="grid gap-4 self-center">
            {[
              { icon: Globe2, t: t("about.b1") },
              { icon: TrendingUp, t: t("about.b2") },
              { icon: Handshake, t: t("about.b3") },
            ].map(({ icon: Icon, t: text }) => (
              <div key={text} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-navy)] text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="font-display text-lg text-foreground">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <Eyebrow>{t("services.eyebrow")}</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl">
              {t("services.title")}
            </h2>
            <p className="mt-4 text-muted-foreground">{t("services.subtitle")}</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {["s1", "s2", "s4", "s5"].map((k) => (
              <div key={k} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                <CheckCircle2 className="h-6 w-6 text-[var(--brand-orange)]" />
                <h3 className="mt-4 font-display text-lg text-foreground">{t(`${k}.t`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(`${k}.d`)}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button asChild variant="outline" className="border-[var(--brand-navy)] text-[var(--brand-navy)]">
              <Link to="/services">{t("nav.services")} <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center text-white">
          <h2 className="font-display text-3xl font-semibold md:text-5xl">
            {t("contact.title")}
          </h2>
          <p className="mt-4 max-w-2xl text-white/80">{t("contact.subtitle")}</p>
          <Button asChild size="lg" className="mt-8 bg-[var(--brand-orange)] text-white hover:bg-[var(--brand-orange)]/90">
            <Link to="/contact">{t("nav.cta")} <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-orange)]">
      <span className="mr-3 h-px w-8 bg-[var(--brand-orange)]" />
      {children}
    </span>
  );
}
