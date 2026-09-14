// Card.tsx
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`shadow-xl rounded-2xl border border-zinc-200 bg-white p-6 ${className}`}
    >
      {children}
    </div>
  );
}
