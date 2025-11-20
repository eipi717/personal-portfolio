"use client";

import { useMode } from "@/context/ModeContext";
import { personal } from "@/data/site";
import { getAppearanceStyles, getThemeStyles } from "@/lib/theme";
import clsx from "clsx";
import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import type { ReactNode } from "react";

export default function ContactBar() {
  const { theme, appearance } = useMode();
  const themeClasses = getThemeStyles(theme);
  const appearanceClasses = getAppearanceStyles(appearance);

  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 flex justify-center px-4 md:px-0">
      <div
        className={clsx(
          "w-full max-w-4xl rounded-2xl border shadow-lg backdrop-blur-md px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3",
          appearance === "light"
            ? "border-slate-200 bg-white/90"
            : "border-slate-800 bg-slate-950/80 text-slate-100",
          appearance === "light" ? "text-slate-900" : "text-slate-100"
        )}
      >
        <div className="flex items-center gap-3">
          <div className={clsx("h-10 w-10 rounded-full grid place-items-center", themeClasses.accentBg)}>
            <Mail size={16} className="text-white" />
          </div>
          <div>
            <p className={clsx("text-xs uppercase tracking-[0.2em]", appearanceClasses.muted)}>Quick contact</p>
            <p className={clsx("text-sm font-semibold", appearanceClasses.strong)}>Ready for roles or projects</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 sm:justify-end">
          <ContactLink href={`mailto:${personal.email}`} icon={<Mail size={16} />} label="Email" themeClasses={themeClasses} appearanceClasses={appearanceClasses} appearance={appearance} />
          <ContactLink href={`tel:${personal.phone}`} icon={<Phone size={16} />} label="Call" themeClasses={themeClasses} appearanceClasses={appearanceClasses} appearance={appearance} />
          <ContactLink href={personal.links.linkedin} icon={<Linkedin size={16} />} label="LinkedIn" themeClasses={themeClasses} appearanceClasses={appearanceClasses} appearance={appearance} external />
          <ContactLink href={personal.links.github} icon={<Github size={16} />} label="GitHub" themeClasses={themeClasses} appearanceClasses={appearanceClasses} appearance={appearance} external />
        </div>
      </div>
    </div>
  );
}

function ContactLink({
  href,
  icon,
  label,
  themeClasses,
  appearanceClasses,
  appearance,
  external,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  themeClasses: ReturnType<typeof getThemeStyles>;
  appearanceClasses: ReturnType<typeof getAppearanceStyles>;
  appearance: "light" | "dark";
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={clsx(
        "flex items-center gap-2 px-3 py-2 rounded-xl border text-sm font-medium transition-colors",
        appearanceClasses.panel,
        appearanceClasses.surfaceHover,
        themeClasses.accentBorder,
        appearance === "light" ? "text-slate-900 hover:text-slate-900" : "text-slate-100 hover:text-white"
      )}
    >
      {icon}
      {label}
    </Link>
  );
}
