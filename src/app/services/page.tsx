"use client";

import { useMode } from "@/context/ModeContext";
import { personas, personal } from "@/data/site";
import { getAppearanceStyles, getThemeStyles } from "@/lib/theme";
import clsx from "clsx";
import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const SERVICE_SETS = {
  dev: [
    { title: "Full-Stack Delivery", desc: "Design, build, and ship web apps with React/Next.js + Python/FastAPI or Java/Spring." },
    { title: "APIs & Integrations", desc: "Secure REST APIs with auth, observability, and documentation your team can own." },
    { title: "Automation & LLMs", desc: "Scraping, data cleanup, and LLM-assisted workflows to remove repetitive toil." },
  ],
  it: [
    { title: "Network & Security", desc: "VLAN design, Sophos firewalls, VPN hardening, and DMZ isolation for critical devices." },
    { title: "Identity & Devices", desc: "Hybrid AD/Entra ID governance, Intune hardening, and M365 administration." },
    { title: "On-site Projects", desc: "CCTV/access control rollouts, server upgrades, and resilient backup/recovery plans." },
  ],
};

export default function ServicesPage() {
  const { mode, theme, appearance } = useMode();
  const themeClasses = getThemeStyles(theme);
  const appearanceClasses = getAppearanceStyles(appearance);
  const persona = personas[mode];
  const services = SERVICE_SETS[mode];

  return (
    <div className={clsx("min-h-screen max-w-5xl mx-auto px-6 py-12 space-y-10", appearanceClasses.page)}>
      <header className="space-y-3">
        <p className={clsx("uppercase tracking-[0.25em] text-sm", appearanceClasses.muted)}>Services</p>
        <h1 className={clsx("text-4xl font-bold", appearanceClasses.strong)}>Engage me as your {persona.role}</h1>
        <p className={clsx("text-lg", appearanceClasses.muted)}>Modular offerings tailored to how your team works.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className={clsx("rounded-2xl border p-6 space-y-3 transition-all hover:-translate-y-1", appearanceClasses.card, appearanceClasses.surfaceHover)}
          >
            <h3 className={clsx("text-lg font-semibold", appearanceClasses.strong)}>{service.title}</h3>
            <p className={clsx("text-sm", appearanceClasses.muted)}>{service.desc}</p>
          </div>
        ))}
      </div>

      <div className={clsx("rounded-3xl border p-8 text-center space-y-6", appearanceClasses.card)}>
        <h2 className={clsx("text-2xl font-semibold", appearanceClasses.strong)}>Ready when you are</h2>
        <p className={clsx("text-lg max-w-3xl mx-auto", appearanceClasses.muted)}>
          Whether it&apos;s a sprint-sized build or a network stabilization project, I can integrate with your team quickly and leave documentation behind.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={`mailto:${personal.email}`}
            className={clsx(
              "px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2",
              themeClasses.primaryButton,
              themeClasses.primaryButtonHover,
              "text-white"
            )}
          >
            <Mail size={18} /> Email
          </Link>
          <Link
            href={personal.links.linkedin}
            target="_blank"
            className={clsx(
              "px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 border",
              appearanceClasses.panel,
              appearanceClasses.surfaceHover,
              themeClasses.accentBorder
            )}
          >
            <Linkedin size={18} /> LinkedIn
          </Link>
          <Link
            href={personal.links.github}
            target="_blank"
            className={clsx(
              "px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 border",
              appearanceClasses.panel,
              appearanceClasses.surfaceHover,
              themeClasses.accentBorder
            )}
          >
            <Github size={18} /> GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
