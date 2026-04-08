import React from "react";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  dark?: boolean;
  ariaLabelledBy?: string;
}

export default function Section({
  children,
  id,
  className = "",
  dark = false,
  ariaLabelledBy,
}: SectionProps) {
  const bgClass = dark
    ? "bg-[var(--color-navy)] text-white"
    : "bg-white text-gray-900";

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`py-20 md:py-14 w-full ${bgClass} ${className}`}
    >
      {children}
    </section>
  );
}
