"use client";

import { useMode } from "@/context/ModeContext";
import { projects, personas } from "@/data/site";
import { getAppearanceStyles, getThemeStyles } from "@/lib/theme";
import clsx from "clsx";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  const { mode, theme, appearance } = useMode();
  const themeClasses = getThemeStyles(theme);
  const appearanceClasses = getAppearanceStyles(appearance);
  const persona = personas[mode];
  const filtered = projects.filter((project) => project.category === mode);

  return (
    <div className={clsx("min-h-screen max-w-5xl mx-auto px-6 py-12 space-y-10", appearanceClasses.page)}>
      <header className="space-y-3">
        <p className={clsx("uppercase tracking-[0.25em] text-sm", appearanceClasses.muted)}>Projects</p>
        <h1 className={clsx("text-4xl font-bold", appearanceClasses.strong)}>Shipments that {persona.verb}</h1>
        <p className={clsx("text-lg", appearanceClasses.muted)}>Selected work aligned with this persona.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            className={clsx(
              "relative overflow-hidden rounded-2xl border p-6 flex flex-col gap-4 transition-all hover:-translate-y-1",
              appearanceClasses.card,
              appearanceClasses.surfaceHover
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className={clsx("text-lg font-semibold", appearanceClasses.strong)}>{project.title}</p>
                <p className={clsx("text-sm mt-1", appearanceClasses.muted)}>{project.desc}</p>
              </div>
              <ExternalLink size={18} className={clsx("shrink-0", themeClasses.accentText)} />
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className={clsx(
                    "text-xs px-3 py-1 rounded-full border",
                    themeClasses.accentBorder,
                    themeClasses.accentText,
                    appearanceClasses.panel
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>

      <Link href="/contact" className={clsx("inline-flex items-center gap-2 text-sm font-semibold", themeClasses.accentText)}>
        Get in touch about these <ExternalLink size={14} />
      </Link>
    </div>
  );
}
