import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Nosotros | GFZ-U-Connect" },
      { name: "description", content: "Firma especializada en desarrollo de negocios internacionales y trayectoria comercial." },
      { property: "og:title", content: "About | GFZ-U-Connect" },
      { property: "og:description", content: "Your strategic partner for international commercial expansion: the strategic bridge between companies and new markets." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-4xl px-6">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-orange)]">{t("about.eyebrow")}</span>
        <h1 className="mt-4 font-display text-4xl font-semibold text-foreground md:text-5xl">{t("about.title")}</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{t("about.p1")}</p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{t("about.p2")}</p>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[t("about.b1"), t("about.b2"), t("about.b3")].map((b) => (
            <div key={b} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <CheckCircle2 className="h-6 w-6 text-[var(--brand-orange)]" />
              <p className="mt-3 font-display text-base text-foreground">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
