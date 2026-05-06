import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { Globe2, TrendingUp, Handshake, Rocket, Network, FileSignature, Building2, Mic } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Servicios | GFZ-U-Connect" },
      { name: "description", content: "Estrategia de entrada a mercado, distribución, alianzas internacionales y ejecución comercial." },
      { property: "og:title", content: "Services | GFZ-U-Connect" },
      { property: "og:description", content: "End-to-end international expansion services." },
    ],
  }),
  component: ServicesPage,
});

const items = [
  { k: "s1", icon: Globe2 },
  { k: "s2", icon: TrendingUp },
  { k: "s3", icon: Handshake },
  { k: "s4", icon: Rocket },
  { k: "s5", icon: Network },
  { k: "s6", icon: FileSignature },
  { k: "s7", icon: Building2 },
  { k: "s8", icon: Mic },
];

function ServicesPage() {
  const { t } = useI18n();
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-orange)]">{t("services.eyebrow")}</span>
          <h1 className="mt-4 font-display text-4xl font-semibold text-foreground md:text-5xl">{t("services.title")}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{t("services.subtitle")}</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ k, icon: Icon }) => (
            <div key={k} className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-[var(--brand-orange)]/40 hover:shadow-[var(--shadow-elegant)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-navy)] text-white transition-colors group-hover:bg-[var(--brand-orange)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl text-foreground">{t(`${k}.t`)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(`${k}.d`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
