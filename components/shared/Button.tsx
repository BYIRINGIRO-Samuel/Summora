"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({ children, href, className = "", variant = "primary" }: ButtonProps) {
  const baseStyles = "rounded-full font-black text-xs tracking-[0.3em] uppercase transition-all shadow-xl active:scale-95 whitespace-nowrap px-16 py-8";
  
  const variants = {
    primary: "bg-black text-white hover:bg-neutral-800",
    secondary: "bg-neutral-100 text-neutral-500 hover:bg-neutral-200 border border-neutral-200",
    outline: "border-[3px] border-black text-black hover:bg-black hover:text-white"
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles}>
      {children}
    </button>
  );
}
