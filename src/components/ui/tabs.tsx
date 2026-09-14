// Tabs.tsx
import { useState } from "react";
import drawings from "../imgs/drawings.jpg";

const tabs = ["Breakfast", "Lunch", "Dinner", "Other Meals"];

export default function Tabs() {
  const [active, setActive] = useState("Breakfast");

  return (
    <div>
      <div className="flex gap-2 border-b pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`rounded-lg px-4 py-2 ${
              active === tab ? "bg-black text-white" : "hover:bg-zinc-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-4">
        Active tab:
        {/* If the active tab is "Breakfast", show the breakfast content and an image. 
        Otherwise, just show the name of the active tab. */}
        {active === "Breakfast" ? (
          <div>
            Breakfast content
            <img src={drawings} alt="" />
          </div>
        ) : (
          <div>{active}</div>
        )}
      </div>
    </div>
  );
}
