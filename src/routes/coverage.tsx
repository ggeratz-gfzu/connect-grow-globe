import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";

const countries = [
  { name: "México", flag: "🇲🇽" },
  { name: "Cuba", flag: "🇨🇺" },
  { name: "República Dominicana", flag: "🇩🇴" },
  { name: "Panamá", flag: "🇵🇦" },
  { name: "Colombia", flag: "🇨🇴" },
  { name: "Honduras", flag: "🇭🇳" },
  { name: "Brasil", flag: "🇧🇷" },
  { name: "Nigeria", flag: "🇳🇬" },
  { name: "Tailandia", flag: "🇹🇭" },
  { name: "España", flag: "🇪🇸" },
];

export const Route = createFileRoute("/coverage")({
  head: () => ({
    meta: [
      { title: "Cobertura internacional | GFZ-U-Connect" },
      { name: "description", content: "Experiencia comercial activa en 4 continentes: América, África, Asia y Europa." },
      { property: "og:title", content: "International Coverage | GFZ-U-Connect" },
      { property: "og:description", content: "Active commercial experience across 4 continents." },
    ],
  }),
  component: CoveragePage,
});

function CoveragePage() {
  const { t } = useI18n();
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-orange)]">{t("coverage.eyebrow")}</span>
          <h1 className="mt-4 font-display text-4xl font-semibold text-foreground md:text-5xl">{t("coverage.title")}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{t("coverage.subtitle")}</p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {countries.map((c) => (
            <div key={c.name} className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-soft)]">
              <span className="text-4xl">{c.flag}</span>
              <span className="font-display text-sm text-foreground">{c.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-4">
          {["América", "África", "Asia", "Europa"].map((c) => (
            <div key={c} className="rounded-2xl bg-[var(--brand-navy)] p-6 text-white">
              <div className="font-display text-2xl">{c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
