// Accordion.tsx
import { useState } from "react";

type AccordionProps = {
  title: string;
  contents: string[];
  defaultOpen?: boolean;
};

export default function Accordion({
  title,
  contents,
  defaultOpen = false,
}: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-3 text-left font-medium justify-center flex"
      >
        {title}
      </button>

      {open &&
        contents.map((text, i) => (
          <div className="border-t px-5 py-5 ">
            <p key={i}>{text}</p>
          </div>
        ))}
    </div>
  );
}
