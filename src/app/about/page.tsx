"use client";

import { useMode } from "@/context/ModeContext";
import { personal, personas } from "@/data/site";
import { getAppearanceStyles, getThemeStyles } from "@/lib/theme";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import type { ReactNode } from "react";

export default function About() {
  const { mode, theme, appearance } = useMode();
  const persona = personas[mode];
  const themeClasses = getThemeStyles(theme);
  const appearanceClasses = getAppearanceStyles(appearance);

  return (
    <div className={clsx("min-h-screen max-w-5xl mx-auto px-6 py-12 space-y-12 transition-colors", appearanceClasses.page)}>
      <header className="space-y-4">
        <p className={clsx("uppercase tracking-[0.25em] text-sm", appearanceClasses.muted)}>About</p>
        <h1 className={clsx("text-4xl font-bold", appearanceClasses.strong)}>{personal.name}</h1>
        <p className={clsx("text-lg max-w-3xl", appearanceClasses.muted)}>{persona.summary}</p>
        <div className="flex flex-wrap gap-3">
          <InfoPill icon={<MapPin size={16} />} label="Location" value={personal.location} appearanceClasses={appearanceClasses} />
          <InfoPill icon={<Mail size={16} />} label="Email" value={personal.email} appearanceClasses={appearanceClasses} />
        </div>
      </header>

      <section className="space-y-6">
        <h2 className={clsx("text-2xl font-semibold", appearanceClasses.strong)}>What drives me</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {persona.highlights.map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={clsx("p-4 rounded-2xl border", appearanceClasses.panel, appearanceClasses.surfaceHover)}
            >
              <div className="flex items-start gap-3">
                <span className={clsx("mt-1 h-2 w-2 rounded-full", themeClasses.accentBg)} />
                <p className={appearanceClasses.muted}>{item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-8">
        <div className={clsx("rounded-3xl border p-6 space-y-3", appearanceClasses.card)}>
          <h3 className={clsx("text-xl font-semibold", appearanceClasses.strong)}>Education</h3>
          {personal.education.map((edu) => (
            <div key={edu.school} className={clsx("rounded-2xl border p-4", appearanceClasses.subPanel, appearanceClasses.surfaceHover)}>
              <p className={clsx("font-semibold", appearanceClasses.strong)}>{edu.school}</p>
              <p className={clsx("text-sm", themeClasses.accentText)}>{edu.degree}</p>
              <p className={clsx("text-sm", appearanceClasses.muted)}>{edu.detail}</p>
              <p className={clsx("text-xs", appearanceClasses.muted)}>{edu.date}</p>
            </div>
          ))}
        </div>

        <div className={clsx("rounded-3xl border p-6 space-y-3", appearanceClasses.card)}>
          <h3 className={clsx("text-xl font-semibold", appearanceClasses.strong)}>Certifications</h3>
          <div className="space-y-2">
            {personal.certifications.map((cert) => (
              <div key={cert} className={clsx("flex items-center gap-3 rounded-2xl border p-4", appearanceClasses.subPanel, appearanceClasses.surfaceHover)}>
                <span className={clsx("h-2 w-2 rounded-full", themeClasses.accentBg)} />
                <p className={appearanceClasses.muted}>{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoPill({ icon, label, value, appearanceClasses }: { icon: ReactNode; label: string; value: string; appearanceClasses: ReturnType<typeof getAppearanceStyles> }) {
  return (
    <div className={clsx("flex items-center gap-3 px-4 py-3 rounded-xl border", appearanceClasses.panel)}>
      <div className={clsx("text-sm", appearanceClasses.muted)}>{icon}</div>
      <div>
        <p className={clsx("text-xs uppercase tracking-[0.2em]", appearanceClasses.muted)}>{label}</p>
        <p className={clsx("text-sm font-semibold", appearanceClasses.strong)}>{value}</p>
      </div>
    </div>
  );
}
