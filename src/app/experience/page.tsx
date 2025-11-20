"use client";

import { useMode } from "@/context/ModeContext";
import { experiences, personas } from "@/data/site";
import { getAppearanceStyles, getThemeStyles } from "@/lib/theme";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function Experience() {
  const { mode, theme, appearance } = useMode();
  const themeClasses = getThemeStyles(theme);
  const appearanceClasses = getAppearanceStyles(appearance);
  const persona = personas[mode];
  const filtered = experiences
    .filter((exp) => exp.category === mode)
    .sort((a, b) => a.order - b.order);

  return (
    <div className={clsx("min-h-screen max-w-4xl mx-auto px-6 py-12 space-y-10", appearanceClasses.page)}>
      <header className="space-y-3">
        <p className={clsx("uppercase tracking-[0.25em] text-sm", appearanceClasses.muted)}>Experience</p>
        <h1 className={clsx("text-4xl font-bold", appearanceClasses.strong)}>Roles that {persona.verb}</h1>
        <p className={clsx("text-lg", appearanceClasses.muted)}>Curated timeline aligned to the current persona.</p>
      </header>

      <div className="relative pl-8">
        <div className={clsx("absolute left-0 top-0 bottom-0 w-px", appearance === 'light' ? "bg-slate-200" : "bg-slate-800")} />

        {filtered.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            className="relative mb-10 last:mb-0"
          >
            <div
              className="absolute left-[-2.3rem] top-2 w-4 h-4 rounded-full border-2"
              style={{ background: mode === "dev" ? "#3b82f6" : "#10b981", borderColor: appearance === 'light' ? "#f8fafc" : "#020617" }}
            />

            <div className={clsx("rounded-2xl border p-5 space-y-2", appearanceClasses.card)}>
              <div className="flex items-center gap-2">
                <h3 className={clsx("text-xl font-semibold", appearanceClasses.strong)}>{exp.role}</h3>
                <span
                  className={clsx(
                    "text-xs px-3 py-1 rounded-full border",
                    themeClasses.accentBorder,
                    themeClasses.accentBgSoft,
                    themeClasses.accentText
                  )}
                >
                  {exp.company}
                </span>
              </div>
              <p className={clsx("text-sm", appearanceClasses.muted)}>{exp.date}</p>
              <ul className={clsx("mt-3 space-y-2", appearanceClasses.muted)}>
                {exp.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className={clsx("mt-2 h-1.5 w-1.5 rounded-full", themeClasses.accentBg)} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
