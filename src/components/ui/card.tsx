// Card.tsx
import type { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
  age?: number;
  className?: string;
  dwg?: string;
};

export default function Card({
  title,
  children,
  age,
  className,
  dwg,
}: CardProps) {
  return (
    <div
      className={`shadow-xl rounded-2xl border border-zinc-200 bg-white p-6 ${className}`}
    >
      <h1 className="text-2xl font-bold tracking-tight text-white ">{title}</h1>
      {children}
      <div></div>
      <img
        src={dwg}
        className="h-auto border border-zinc-200 rounded-2xl mt-4"
      />
      <p className="mt-4 text-sm text-gray-500">Age: {age}</p>
    </div>
  );
}
