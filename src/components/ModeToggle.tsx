import { motion } from "framer-motion";
import { Brain, Code } from "lucide-react";
import { useMode } from "@/contexts/ModeContext";

export function ModeToggle() {
  const { mode, toggleMode, isData } = useMode();

  return (
    <button
      onClick={toggleMode}
      className="relative flex items-center gap-1 rounded-full border border-border bg-secondary p-1 transition-colors"
      aria-label={`Switch to ${isData ? "Backend Engineer" : "Data Scientist"} mode`}
    >
      <div className="relative z-10 flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono">
        <Brain className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Data</span>
      </div>
      <div className="relative z-10 flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono">
        <Code className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Backend</span>
      </div>
      <motion.div
        className="absolute top-1 bottom-1 rounded-full bg-primary"
        initial={false}
        animate={{
          left: isData ? "4px" : "50%",
          right: isData ? "50%" : "4px",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
    </button>
  );
}
