import React from "react";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "2xl";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: ContainerSize;
}

const sizeMap: Record<ContainerSize, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-5xl",
  "2xl": "max-w-6xl",
};

export default function Container({
  children,
  className = "",
  size = "xl",
}: ContainerProps) {
  const maxWidthClass = sizeMap[size];

  return (
    <div
      className={`w-full mx-auto ${maxWidthClass} px-5 md:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
