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
  const baseStyles = "rounded-full font-display text-sm font-black tracking-widest uppercase transition-all duration-300 px-10 py-5 shadow-lg active:scale-95 whitespace-nowrap flex items-center justify-center hover:shadow-2xl hover:-translate-y-0.5";
  
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
