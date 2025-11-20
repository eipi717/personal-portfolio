"use client";

import { useMode } from "@/context/ModeContext";
import { personal, personas, experiences, projects } from "@/data/site";
import { getAppearanceStyles, getThemeStyles } from "@/lib/theme";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { mode, theme, appearance } = useMode();
  const themeClasses = getThemeStyles(theme);
  const appearanceClasses = getAppearanceStyles(appearance);
  const persona = personas[mode];

  return (
    <div className={clsx("relative min-h-screen overflow-hidden transition-colors duration-300", appearanceClasses.page)}>
      <BackgroundDecor themeClasses={themeClasses} appearance={appearance} />
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12 py-14 md:py-18 space-y-16 relative">
        <Hero persona={persona} themeClasses={themeClasses} appearanceClasses={appearanceClasses} />
        <QuickLinks themeClasses={themeClasses} appearanceClasses={appearanceClasses} />
        <Snapshot mode={mode} themeClasses={themeClasses} appearanceClasses={appearanceClasses} />
      </div>
    </div>
  );
}

function BackgroundDecor({ themeClasses, appearance }: { themeClasses: ReturnType<typeof getThemeStyles>; appearance: "light" | "dark" }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className={clsx(
        "absolute inset-0",
        appearance === "light"
          ? "bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.08),transparent_22%)]"
          : "bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_22%)]"
      )} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:46px_46px]" />
      <div className={clsx("absolute -top-24 left-10 w-72 h-72 blur-[120px] rounded-full opacity-40", themeClasses.accentGlow)} />
      <div className={clsx("absolute top-1/3 right-0 w-96 h-96 blur-[140px] rounded-full opacity-30", themeClasses.accentGlow)} />
      <motion.div
        className={clsx("absolute bottom-[-4rem] left-20 w-80 h-80 rounded-full blur-3xl opacity-20", themeClasses.accentBg)}
        animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
      />
    </div>
  );
}

function Hero({
  persona,
  themeClasses,
  appearanceClasses,
}: {
  persona: (typeof personas)["dev"];
  themeClasses: ReturnType<typeof getThemeStyles>;
  appearanceClasses: ReturnType<typeof getAppearanceStyles>;
}) {
  const Icon = persona.icon;

  return (
    <section className="pt-4 text-center md:text-left space-y-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 max-w-3xl"
        >
          <span
            className={clsx(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-mono uppercase tracking-wide",
              themeClasses.accentBorder,
              themeClasses.accentBgSoft,
              themeClasses.accentText
            )}
          >
            <Icon size={16} />
            {persona.role}
          </span>

          <AnimatePresence>
            <motion.h1
              key={persona.headline}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className={clsx("text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight", appearanceClasses.strong)}
            >
              {persona.headline}
            </motion.h1>
          </AnimatePresence>

          <p className={clsx("text-xl md:text-2xl leading-relaxed", appearanceClasses.muted)}>{persona.tagline}</p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/contact"
              className={clsx(
                "px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 shadow-lg",
                themeClasses.primaryButton,
                themeClasses.primaryButtonHover,
                "text-white"
              )}
            >
              Contact
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/projects"
              className={clsx(
                "px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 border",
                appearanceClasses.panel,
                appearanceClasses.surfaceHover,
                themeClasses.accentBorder
              )}
            >
              View projects
              <ExternalLink size={16} />
            </Link>
          </div>
        </motion.div>

        <div className="flex-1">
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 via-slate-900/50 to-slate-950 rounded-3xl blur-xl opacity-60" />
            <div className={clsx("relative rounded-3xl p-6 space-y-4 shadow-[0_12px_40px_-25px_rgba(0,0,0,0.45)] border", appearanceClasses.card)}>
              <div className={clsx("h-1 w-16 rounded-full", themeClasses.accentBg)} />
              <div className="flex items-center gap-3">
                <div className={clsx("h-10 w-10 rounded-full flex items-center justify-center", themeClasses.accentBg)}>
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <p className={clsx("text-sm", appearanceClasses.muted)}>Persona</p>
                  <p className={clsx("text-lg font-semibold", appearanceClasses.strong)}>{persona.role}</p>
                </div>
              </div>
              <p className={clsx("leading-relaxed", appearanceClasses.muted)}>{persona.summary}</p>
              <div className="space-y-2">
                {persona.highlights.map((item) => (
                  <div key={item} className={clsx("flex items-start gap-2", appearanceClasses.muted)}>
                    <span className={clsx("mt-1 h-2 w-2 rounded-full", themeClasses.accentBg)} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickLinks({
  themeClasses,
  appearanceClasses,
}: {
  themeClasses: ReturnType<typeof getThemeStyles>;
  appearanceClasses: ReturnType<typeof getAppearanceStyles>;
}) {
  const cards = [
    { title: "About", desc: "Story, values, and credentials.", href: "/about" },
    { title: "Experience", desc: "Timeline tailored to the current persona.", href: "/experience" },
    { title: "Projects", desc: "Deep dives, repos, and tech stacks.", href: "/projects" },
    { title: "Services", desc: "Engagement models and offerings.", href: "/services" },
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <div className={clsx("h-10 w-10 rounded-full grid place-items-center", themeClasses.accentBg)}>
          <span className="text-white font-mono text-xs">NAV</span>
        </div>
        <div>
          <p className={clsx("text-sm uppercase tracking-[0.2em]", appearanceClasses.muted)}>Navigate</p>
          <h2 className={clsx("text-2xl font-bold", appearanceClasses.strong)}>Jump into the details</h2>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {cards.map((card) => (
          <Link key={card.title} href={card.href}>
            <div
              className={clsx(
                "group p-5 rounded-2xl border transition-all flex items-center justify-between gap-4",
                appearanceClasses.card,
                appearanceClasses.surfaceHover
              )}
            >
              <div>
                <p className={clsx("text-lg font-semibold", appearanceClasses.strong)}>{card.title}</p>
                <p className={clsx("text-sm mt-1", appearanceClasses.muted)}>{card.desc}</p>
              </div>
              <div className={clsx("h-10 w-10 rounded-full grid place-items-center transition-all", themeClasses.accentBg, "group-hover:scale-105")}>
                <ArrowRight size={16} className="text-white" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Snapshot({
  mode,
  themeClasses,
  appearanceClasses,
}: {
  mode: "dev" | "it";
  themeClasses: ReturnType<typeof getThemeStyles>;
  appearanceClasses: ReturnType<typeof getAppearanceStyles>;
}) {
  const topExperience = experiences.filter((e) => e.category === mode)[0];
  const topProjects = projects.filter((p) => p.category === mode).slice(0, 2);

  return (
    <section className="grid lg:grid-cols-[1.3fr_1fr] gap-6 items-start">
      <div className={clsx("p-6 rounded-3xl border space-y-4", appearanceClasses.card)}>
        <div className="flex items-center gap-3">
          <div className={clsx("h-10 w-10 rounded-full grid place-items-center", themeClasses.accentBg)}>
            <span className="text-white font-mono text-xs">EXP</span>
          </div>
          <div>
            <p className={clsx("text-sm uppercase tracking-[0.2em]", appearanceClasses.muted)}>Latest Role</p>
            <h3 className={clsx("text-xl font-semibold", appearanceClasses.strong)}>{topExperience?.company}</h3>
          </div>
        </div>
        <p className={clsx("text-sm", appearanceClasses.muted)}>{topExperience?.date}</p>
        <p className={clsx("text-lg font-semibold", appearanceClasses.strong)}>{topExperience?.role}</p>
        <ul className={clsx("mt-3 space-y-2", appearanceClasses.muted)}>
          {topExperience?.bullets.slice(0, 3).map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className={clsx("mt-1 h-2 w-2 rounded-full", themeClasses.accentBg)} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Link href="/experience" className={clsx("inline-flex items-center gap-2 text-sm font-semibold", themeClasses.accentText)}>
          View full timeline <ArrowRight size={14} />
        </Link>
      </div>

      <div className="space-y-4">
        <div className={clsx("p-6 rounded-3xl border", appearanceClasses.card)}>
          <div className="flex items-center gap-3 mb-3">
            <div className={clsx("h-10 w-10 rounded-full grid place-items-center", themeClasses.accentBg)}>
              <span className="text-white font-mono text-xs">PRJ</span>
            </div>
            <div>
              <p className={clsx("text-sm uppercase tracking-[0.2em]", appearanceClasses.muted)}>Highlighted Projects</p>
              <h3 className={clsx("text-xl font-semibold", appearanceClasses.strong)}>Recent Work</h3>
            </div>
          </div>
          <div className="space-y-3">
            {topProjects.map((project) => (
              <Link key={project.title} href="/projects">
                <div
                  className={clsx(
                    "rounded-2xl border p-4 transition-all",
                    appearanceClasses.subPanel,
                    appearanceClasses.surfaceHover
                  )}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className={clsx("font-semibold", appearanceClasses.strong)}>{project.title}</p>
                      <p className={clsx("text-sm mt-1", appearanceClasses.muted)}>{project.desc}</p>
                    </div>
                    <ExternalLink size={16} className={themeClasses.accentText} />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
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
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className={clsx("p-6 rounded-3xl border flex flex-col gap-3", appearanceClasses.card)}>
          <p className="text-sm font-semibold">Contact</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`mailto:${personal.email}`}
              className={clsx(
                "flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-semibold transition-colors",
                appearanceClasses.subPanel,
                appearanceClasses.surfaceHover
              )}
            >
              <Mail size={16} />
              {personal.email}
            </Link>
            <Link
              href={personal.links.linkedin}
              target="_blank"
              className={clsx(
                "flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-semibold transition-colors",
                appearanceClasses.subPanel,
                appearanceClasses.surfaceHover
              )}
            >
              <Linkedin size={16} />
              LinkedIn
            </Link>
            <Link
              href={personal.links.github}
              target="_blank"
              className={clsx(
                "flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-semibold transition-colors",
                appearanceClasses.subPanel,
                appearanceClasses.surfaceHover
              )}
            >
              <Github size={16} />
              GitHub
            </Link>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin size={16} className={themeClasses.accentText} />
            <span className={appearanceClasses.muted}>{personal.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
