import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useI18n } from "@/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, User, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contacto | GFZ-U-Connect" },
      { name: "description", content: "Solicita información sobre nuestros servicios de expansión internacional." },
      { property: "og:title", content: "Contact | GFZ-U-Connect" },
      { property: "og:description", content: "Let's talk about your next international expansion." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[GFZ-U-Connect] ${form.company || form.name}`);
    const body = encodeURIComponent(
      `${form.name}\n${form.company}\n${form.email}\n${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:gtamez@gercom.com.mx?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-orange)]">{t("contact.eyebrow")}</span>
          <h1 className="mt-4 font-display text-4xl font-semibold text-foreground md:text-5xl">{t("contact.title")}</h1>
          <p className="mt-5 text-muted-foreground">{t("contact.subtitle")}</p>

          <div className="mt-10 space-y-5">
            <ContactRow icon={Mail} label="gtamez@gercom.com.mx" href="mailto:gtamez@gercom.com.mx" />
            <ContactRow icon={Phone} label="+52 (81) 2000 1930" href="tel:+528120001930" />
          </div>
        </div>

        <div className="lg:col-span-3">
          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={t("contact.name")} required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Field label={t("contact.company")} value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
              <Field label={t("contact.email")} type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
              <Field label={t("contact.phone")} value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
            </div>
            <div className="mt-5">
              <Label className="text-sm font-medium">{t("contact.message")}</Label>
              <Textarea
                required
                rows={5}
                className="mt-2"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <Button type="submit" size="lg" className="mt-6 w-full bg-[var(--brand-orange)] text-white hover:bg-[var(--brand-orange)]/90">
              {t("contact.send")}
            </Button>

            {sent && (
              <p className="mt-4 flex items-center gap-2 text-sm text-[var(--brand-navy)]">
                <CheckCircle2 className="h-4 w-4 text-[var(--brand-orange)]" />
                {t("contact.sent")}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, value, onChange, type = "text", required,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <Label className="text-sm font-medium">{label}{required && <span className="text-[var(--brand-orange)]"> *</span>}</Label>
      <Input type={type} required={required} value={value} onChange={(e) => onChange(e.target.value)} className="mt-2" />
    </div>
  );
}

function ContactRow({ icon: Icon, label, href }: { icon: React.ElementType; label: string; href?: string }) {
  const inner = (
    <div className="flex items-center gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-navy)] text-white">
        <Icon className="h-4 w-4" />
      </div>
      <span className="font-display text-base text-foreground">{label}</span>
    </div>
  );
  return href ? <a href={href} className="block hover:opacity-80">{inner}</a> : inner;
}
