"use client";
import Link from 'next/link';
import { useMode } from '@/context/ModeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Server, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';
import { getThemeStyles } from '@/lib/theme';

export default function Navbar() {
  const { mode, toggleMode, theme, appearance, toggleAppearance } = useMode();
  const [isOpen, setIsOpen] = useState(false);
  const themeClasses = getThemeStyles(theme);

  const navLinks = [
    { name: 'Overview', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={clsx(
      "fixed top-0 w-full z-50 backdrop-blur-xl border-b transition-colors duration-300",
      appearance === 'light' ? "bg-white/70 border-slate-200" : "bg-slate-950/80 border-slate-800/60"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-2">
            <span className={clsx("transition-colors duration-300", themeClasses.accentText)}>
              {mode === 'dev' ? '<Nicholas />' : '[Nicholas]'}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={clsx(
                  "text-sm font-medium transition-colors",
                  appearance === 'light' ? "text-slate-600 hover:text-slate-900" : "text-slate-300 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            {/* The Toggle Switch */}
            <div
              onClick={() => toggleMode(mode === 'dev' ? 'it' : 'dev')}
              className={clsx(
                'relative flex items-center w-32 h-10 rounded-full cursor-pointer p-1 transition-colors duration-300',
                appearance === 'light' ? 'border border-slate-200 bg-white/80' : 'border border-slate-800 bg-slate-900/70'
              )}
            >
              <motion.div
                layout
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className={clsx(
                  'absolute h-8 rounded-full',
                  themeClasses.accentBg
                )}
                style={{
                  width: '50%',
                  left: mode === 'dev' ? '0.25rem' : 'calc(50% - 0.25rem)',
                }}
              />
              <div className="relative z-10 grid grid-cols-2 w-full text-xs font-semibold">
                <div className={clsx("flex items-center justify-center gap-1", mode === 'dev' ? 'text-white' : 'text-slate-400')}>
                  <Code2 size={14} />
                  DEV
                </div>
                <div className={clsx("flex items-center justify-center gap-1", mode === 'it' ? 'text-white' : 'text-slate-400')}>
                  <Server size={14} />
                  IT
                </div>
              </div>
            </div>

            <button
              onClick={toggleAppearance}
              className={clsx(
                "flex items-center justify-center h-10 w-10 rounded-full border transition-colors",
                appearance === 'light' ? 'border-slate-200 bg-white/70 text-slate-700 hover:bg-slate-100' : 'border-slate-800 bg-slate-900/70 text-slate-300 hover:bg-slate-800'
              )}
            >
              {appearance === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={clsx(appearance === 'light' ? "text-slate-700" : "text-slate-300")}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-slate-900 border-b border-slate-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                    appearance === 'light'
                      ? "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                      : "text-slate-300 hover:text-white hover:bg-slate-800"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-5 pt-4 pb-3">
                <div
                  onClick={() => toggleMode(mode === 'dev' ? 'it' : 'dev')}
                  className={clsx(
                    'relative flex items-center h-10 rounded-full cursor-pointer p-1 transition-colors duration-300',
                    appearance === 'light' ? 'border border-slate-200 bg-white' : 'border border-slate-800 bg-slate-900'
                  )}
                >
                  <motion.div
                    layout
                    className={clsx(
                      'absolute h-8 rounded-full',
                      themeClasses.accentBg
                    )}
                    style={{
                      left: mode === 'dev' ? '0.25rem' : 'calc(50% - 0.25rem)',
                      width: '50%',
                    }}
                  />
                  <div className="relative z-10 flex justify-around w-full text-sm font-medium">
                    <span className={mode === 'dev' ? 'text-white' : 'text-slate-400'}>DEV</span>
                    <span className={mode === 'it' ? 'text-white' : 'text-slate-400'}>IT</span>
                  </div>
                </div>
                <button
                  onClick={toggleAppearance}
                  className={clsx(
                    "mt-3 w-full flex items-center justify-center gap-2 h-10 rounded-full border transition-colors",
                    appearance === 'light'
                      ? 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                      : 'border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800'
                  )}
                >
                  {appearance === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                  {appearance === 'light' ? 'Dark mode' : 'Light mode'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
