import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Mode = "data" | "backend";

interface ModeContextType {
  mode: Mode;
  toggleMode: () => void;
  isData: boolean;
  isBackend: boolean;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>("data");

  const toggleMode = () => setMode((m) => (m === "data" ? "backend" : "data"));

  useEffect(() => {
    document.documentElement.classList.toggle("mode-backend", mode === "backend");
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, toggleMode, isData: mode === "data", isBackend: mode === "backend" }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error("useMode must be used within ModeProvider");
  return ctx;
}
