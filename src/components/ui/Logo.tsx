import { cn } from "../../lib/utils";
import exactLogo from "../../assets/images/exact-logo.svg";

interface LogoProps {
  className?: string;
  showText?: boolean;
  showTagline?: boolean;
  isDark?: boolean;
  variant?: 'simple' | 'full';
}

export function Logo({ className, variant = "simple" }: LogoProps) {
  const sizeClass =
    variant === "full" ? "w-[240px] md:w-[420px]" : "w-[140px] md:w-[278px]";
  const radiusClass = variant === "full" ? "rounded-2xl" : "rounded-lg";

  return (
    <img
      src={exactLogo}
      alt="Allied Health Plus Hospital logo"
      className={cn("h-auto", radiusClass, sizeClass, className)}
      loading="eager"
      decoding="async"
    />
  );
}
