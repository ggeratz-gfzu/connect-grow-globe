import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import logo from "@/assets/logo-gfz.svg";
import { useI18n, type Lang } from "@/i18n";
import { Button } from "@/components/ui/button";

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/about", label: t("nav.about") },
    { to: "/services", label: t("nav.services") },
    { to: "/coverage", label: t("nav.coverage") },
    { to: "/results", label: t("nav.results") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="GFZ-U-Connect" className="h-11 w-auto" width={120} height={44} />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-[var(--brand-orange)]"
              activeProps={{ className: "text-[var(--brand-orange)]" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LangSwitcher lang={lang} setLang={setLang} />
          <Button asChild className="bg-[var(--brand-orange)] text-white hover:bg-[var(--brand-orange)]/90">
            <Link to="/contact">{t("nav.cta")}</Link>
          </Button>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/50 bg-background lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center justify-between border-t border-border/50 pt-4">
              <LangSwitcher lang={lang} setLang={setLang} />
              <Button asChild className="bg-[var(--brand-orange)] text-white hover:bg-[var(--brand-orange)]/90">
                <Link to="/contact" onClick={() => setOpen(false)}>{t("nav.cta")}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function LangSwitcher({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const langs: Lang[] = ["es", "en", "pt"];
  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-secondary/40 p-1">
      <Globe className="ml-1.5 h-3.5 w-3.5 text-muted-foreground" />
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
            lang === l
              ? "bg-[var(--brand-navy)] text-white"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-label={`Switch to ${l}`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
