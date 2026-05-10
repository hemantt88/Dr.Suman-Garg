import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  showTagline?: boolean;
  isDark?: boolean;
}

export function Logo({ className, showText = true, showTagline = false, isDark = false }: LogoProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-center gap-3">
        {/* Icon Part: Plus with Green Figure */}
        <div className="relative w-10 h-10 flex-shrink-0">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Main Plus/Cross Shape - Blue */}
            <path 
              d="M35 15C35 12 37 10 40 10H60C63 10 65 12 65 15V35H85C88 35 90 37 90 40V60C90 63 88 65 85 65H65V85C65 88 63 90 60 90H40C37 90 35 88 35 85V65H15C12 65 10 63 10 60V40C10 37 12 35 15 35H35V15Z" 
              fill="#229EB0"
            />
            {/* Green Humanoid Figure */}
            <circle cx="50" cy="38" r="8" fill="#58C26E" />
            <path 
              d="M38 52C38 52 42 62 50 62C58 62 62 52 62 52L50 58L38 52Z" 
              fill="#58C26E"
            />
          </svg>
        </div>

        {/* Text Part */}
        {showText && (
          <div className="flex flex-col leading-tight">
            <span className={cn(
              "font-bold text-lg tracking-tight",
              isDark ? "text-white" : "text-black"
            )}>
              Allied Health Plus
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#229EB0]">
              Hospital
            </span>
          </div>
        )}
      </div>
      
      {showTagline && (
        <div className="mt-2 bg-[#58C26E] text-white text-[7px] font-bold uppercase tracking-[0.1em] px-2 py-1 rounded-sm text-center">
          EYE, DENTAL, SKIN LASER & HAIR TRANSPLANT
        </div>
      )}
    </div>
  );
}
