// Accordion.tsx
import { useState } from "react";

export default function Accordion() {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-3 text-left font-medium"
      >
        click to see more?
      </button>

      {open && (
        <div className="border-t px-4 py-3 text-zinc-600">Content 1.</div>
      )}
      {open && (
        <div className="border-t px-4 py-3 text-zinc-600">Content 2.</div>
      )}
      {open && (
        <div className="border-t px-4 py-3 text-zinc-600">Content 3.</div>
      )}
    </div>
  );
}
