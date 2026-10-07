"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type ExamMode = "SAT" | "IELTS";

interface ExamModeContextType {
  mode: ExamMode;
  setMode: (mode: ExamMode) => void;
  toggleMode: () => void;
}

const ExamModeContext = createContext<ExamModeContextType | undefined>(undefined);

const STORAGE_KEY = "prepsphere_exam_mode";

export function ExamModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ExamMode>("SAT");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as ExamMode | null;
      if (saved === "SAT" || saved === "IELTS") {
        setModeState(saved);
      }
    } catch {
      // ignore
    }
  }, []);

  const setMode = (newMode: ExamMode) => {
    setModeState(newMode);
    try {
      localStorage.setItem(STORAGE_KEY, newMode);
    } catch {
      // ignore
    }
  };

  const toggleMode = () => {
    setModeState((prev) => {
      const next = prev === "SAT" ? "IELTS" : "SAT";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignore
      }
      return next;
    });
  };

  return (
    <ExamModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ExamModeContext.Provider>
  );
}

export function useExamMode() {
  const context = useContext(ExamModeContext);
  if (!context) {
    return {
      mode: "SAT" as ExamMode,
      setMode: () => {},
      toggleMode: () => {},
    };
  }
  return context;
}
