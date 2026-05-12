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
    variant === "full" ? "w-[340px] md:w-[420px]" : "w-[170px] md:w-[210px]";

  return (
    <img
      src={exactLogo}
      alt="Allied Health Plus Hospital logo"
      className={cn("h-auto rounded-2xl", sizeClass, className)}
      loading="eager"
      decoding="async"
    />
  );
}
