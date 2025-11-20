"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ThemeName } from '@/lib/theme';

export type Mode = 'dev' | 'it';
export type Appearance = 'dark' | 'light';

interface ModeContextType {
  mode: Mode;
  toggleMode: (selected: Mode) => void;
  theme: ThemeName; // 'blue' or 'emerald'
  appearance: Appearance;
  toggleAppearance: () => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>('dev');
  const [appearance, setAppearance] = useState<Appearance>('dark');

  const toggleMode = (selected: Mode) => setMode(selected);
  const toggleAppearance = () =>
    setAppearance((prev) => (prev === 'dark' ? 'light' : 'dark'));
  const theme = mode === 'dev' ? 'blue' : 'emerald';

  return (
    <ModeContext.Provider value={{ mode, toggleMode, theme, appearance, toggleAppearance }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (!context) throw new Error('useMode must be used within a ModeProvider');
  return context;
}
