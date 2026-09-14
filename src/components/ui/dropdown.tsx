// Dropdown.tsx
import { useState } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-xl border px-4 py-2"
      >
        Menu
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl border bg-white shadow-lg">
          <button className="block w-full px-4 py-2 text-left hover:bg-zinc-100">
            Profile
          </button>
          <button className="block w-full px-4 py-2 text-left hover:bg-zinc-100">
            Settings
          </button>
        </div>
      )}
    </div>
  );
}
