import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import logo from "@/assets/logo-gfz.png";
import { useI18n } from "@/i18n";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-[var(--brand-navy-deep)] text-white/85">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="GFZ-U-Connect" className="h-12 w-auto bg-white rounded-md p-2" width={140} height={48} />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65">
            {t("footer.tagline")}
          </p>
        </div>

        <div>
          <h4 className="font-display text-base text-white">Sitemap</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-[var(--brand-orange)]">{t("nav.about")}</Link></li>
            <li><Link to="/services" className="hover:text-[var(--brand-orange)]">{t("nav.services")}</Link></li>
            <li><Link to="/coverage" className="hover:text-[var(--brand-orange)]">{t("nav.coverage")}</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--brand-orange)]">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base text-white">{t("contact.direct")}</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-[var(--brand-orange)]" />
              <a href="mailto:gtamez@gercom.com.mx" className="hover:text-white">gtamez@gercom.com.mx</a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-[var(--brand-orange)]" />
              <a href="tel:+528120001930" className="hover:text-white">+52 (81) 2000 1930</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {year} GFZ-U-Connect S.C. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
