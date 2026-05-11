import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  showTagline?: boolean;
  isDark?: boolean;
  variant?: 'simple' | 'full';
}

export function Logo({ className, showText = true, showTagline = false, isDark = false, variant = 'simple' }: LogoProps) {
  const isFull = variant === 'full';

  const LogoIcon = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Top Arm - Light Teal */}
      <path 
        d="M36 12 C36 9 38 7 41 7 H59 C62 7 64 9 64 12 V40 H36 V12 Z" 
        fill="#2CB1C1"
      />
      {/* Arms - Blue */}
      <path 
        d="M10 42 H40 V62 H15 C12 62 10 60 10 57 V42 Z" 
        fill="#3375B8"
      />
      <path 
        d="M60 42 H85 C88 42 90 44 90 47 V57 C90 60 88 62 85 62 H60 V42 Z" 
        fill="#3375B8"
      />
      <path 
        d="M36 60 H64 V88 C64 91 62 93 59 93 H41 C38 93 36 91 36 88 V60 Z" 
        fill="#3375B8"
      />
      
      {/* Dark Navy Wing Overlays */}
      <path 
        d="M48 45 C40 45 22 38 10 44 C12 48 20 62 48 58 Z" 
        fill="#1F4E7A"
      />
      <path 
        d="M52 45 C60 45 78 38 90 44 C88 48 80 62 52 58 Z" 
        fill="#1F4E7A"
      />

      {/* Human Figure Head */}
      <circle cx="50" cy="35" r="11" fill="white" />
      <circle cx="50" cy="35" r="8" fill="#71C259" />
      
      {/* Green Body Swoop (Comma shape) */}
      <path 
        d="M50 42 
           C65 48 68 62 65 74 
           C62 84 52 88 45 88 
           C32 88 28 78 30 70 
           C32 75 38 80 44 80 
           C52 80 58 72 58 60 
           C58 48 50 42 50 42 Z" 
        fill="#71C259"
      />
    </svg>
  );

  if (isFull) {
    return (
      <div className={cn("flex items-center", className)}>
        {/* Left Side: White box with icon */}
        <div className="relative w-24 h-24 md:w-32 md:h-32 bg-white rounded-l-3xl flex items-center justify-center p-4 shadow-xl z-20 overflow-hidden">
          <LogoIcon />
          <div className="absolute top-0 bottom-0 right-[-2px] w-6 bg-white rounded-r-full" />
        </div>

        {/* Right Side: Teal background with text */}
        <div className="relative flex flex-col justify-center bg-[#2EB1C2] h-24 md:h-32 pl-12 pr-12 rounded-r-3xl ml-[-12px] z-10 shadow-xl overflow-hidden min-w-[300px]">
          <div className="flex flex-col items-center gap-1 mt-2">
            <h1 className="text-white font-bold text-2xl md:text-4xl tracking-tight leading-none drop-shadow-sm">
              Allied Health Plus
            </h1>
            <div className="w-[85%] h-[1.5px] bg-white my-1" />
            <h2 className="text-white font-bold text-lg md:text-2xl uppercase tracking-[0.4em] leading-none">
              HOSPITAL
            </h2>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-[28%] bg-[#70C158] flex items-center justify-center">
            <span className="text-white text-[7px] md:text-[10px] font-bold uppercase tracking-[0.15em] px-4 whitespace-nowrap">
              EYE, DENTAL, SKIN LASER & HAIR TRANSPLANT
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 flex-shrink-0">
          <LogoIcon />
        </div>
        {showText && (
          <div className="flex flex-col leading-tight">
            <span className={cn("font-bold text-lg tracking-tight", isDark ? "text-white" : "text-black")}>
              Allied Health Plus
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2EB1C2]">
              Hospital
            </span>
          </div>
        )}
      </div>
      {showTagline && (
        <div className="mt-2 bg-[#70C158] text-white text-[7px] font-bold uppercase tracking-[0.1em] px-2 py-1 rounded-sm text-center">
          EYE, DENTAL, SKIN LASER & HAIR TRANSPLANT
        </div>
      )}
    </div>
  );
}
