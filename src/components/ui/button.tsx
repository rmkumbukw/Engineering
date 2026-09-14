import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export default function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
  px-4 py-2 rounded-xl font-medium transition-all duration-200
  ${variant === "primary" ? "bg-black text-white hover:bg-zinc-800" : ""}
  ${variant === "secondary" ? "bg-zinc-200 hover:bg-zinc-300" : ""}
  ${variant === "ghost" ? "hover:bg-zinc-100" : ""}
  ${variant === "danger" ? "bg-red-500 text-white hover:bg-red-600" : ""}
  ${className || ""}
`}
      {...props}
    />
  );
}
