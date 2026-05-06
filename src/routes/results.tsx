import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { Users, Award, MessageSquareQuote } from "lucide-react";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Resultados | GFZ-U-Connect" },
      { name: "description", content: "Métricas de impacto, marcas con las que hemos colaborado y testimoniales de clientes." },
      { property: "og:title", content: "Results | GFZ-U-Connect" },
      { property: "og:description", content: "Building a legacy of measurable impact." },
    ],
  }),
  component: ResultsPage,
});

function ResultsPage() {
  const { t } = useI18n();
  const cards = [
    { icon: Users, label: t("results.m1") },
    { icon: Award, label: t("results.m2") },
    { icon: MessageSquareQuote, label: t("results.m3") },
  ];
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-orange)]">{t("results.eyebrow")}</span>
          <h1 className="mt-4 font-display text-4xl font-semibold text-foreground md:text-5xl">{t("results.title")}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{t("results.subtitle")}</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {cards.map(({ icon: Icon, label }) => (
            <div key={label} className="rounded-2xl border border-border bg-card p-8 text-center shadow-[var(--shadow-soft)]">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-navy)] text-white">
                <Icon className="h-6 w-6" />
              </div>
              <div className="mt-5 font-display text-3xl text-foreground">—</div>
              <p className="mt-1 text-sm text-muted-foreground">{label}</p>
              <span className="mt-4 inline-block rounded-full bg-[var(--brand-orange)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--brand-orange)]">
                {t("results.soon")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
