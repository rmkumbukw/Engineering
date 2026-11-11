import { useMemo, useState } from "react";

interface PipeInputs {
  pressure: string;
  diameter: string;
  stress: string;
  efficiency: string;
  weldFactor: string;
  yFactor: string;
  corrosion: string;
  mechanical: string;
  millTolerance: string;
}

export default function PipeThicknessCalculator() {
  const [inputs, setInputs] = useState<PipeInputs>({
    pressure: "10",
    diameter: "323.9",
    stress: "138",
    efficiency: "1.0",
    weldFactor: "1.0",
    yFactor: "0.4",
    corrosion: "3",
    mechanical: "0",
    millTolerance: "12.5",
  });

  const updateInput = (field: keyof PipeInputs, value: string) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Calculate pipe thickness
  const result = useMemo(() => {
    const {
      pressure,
      diameter,
      stress,
      efficiency,
      weldFactor,
      yFactor,
      corrosion,
      mechanical,
      millTolerance,
    } = inputs;

    const P = Number(pressure);
    const D = Number(diameter);
    const S = Number(stress);
    const E = Number(efficiency);
    const W = Number(weldFactor);
    const Y = Number(yFactor);
    const CA = Number(corrosion);
    const MA = Number(mechanical);
    const MT = Number(millTolerance);

    const values = [P, D, S, E, W, Y, CA, MA, MT];

    if (
      Object.values(inputs).some((v) => v.trim() === "") ||
      !values.every(Number.isFinite) ||
      P <= 0 ||
      D <= 0 ||
      S <= 0 ||
      E <= 0 ||
      W <= 0 ||
      Y < 0 ||
      CA < 0 ||
      MA < 0 ||
      MT < 0 ||
      MT >= 100
    ) {
      return null;
    }

    const denominator = 2 * (S * E * W + P * Y);

    if (denominator <= 0) return null;

    // ASME B31.3 pressure design thickness
    const pressureThickness = (P * D) / denominator;

    // Add corrosion and mechanical allowances
    const requiredThickness = pressureThickness + CA + MA;

    // Account for mill tolerance
    const nominalThickness = requiredThickness / (1 - MT / 100);

    return {
      pressureThickness,
      requiredThickness,
      nominalThickness,
    };
  }, [inputs]);

  const fields: {
    key: keyof PipeInputs;
    label: string;
    unit: string;
    step: string;
  }[] = [
    { key: "pressure", label: "Design Pressure", unit: "MPa", step: "any" },
    {
      key: "diameter",
      label: "Pipe Outside Diameter",
      unit: "mm",
      step: "any",
    },
    { key: "stress", label: "Allowable Stress", unit: "MPa", step: "any" },
    { key: "efficiency", label: "Quality Factor (E)", unit: "", step: "any" },
    {
      key: "weldFactor",
      label: "Weld Strength Factor (W)",
      unit: "",
      step: "any",
    },
    { key: "yFactor", label: "Coefficient (Y)", unit: "", step: "any" },
    { key: "corrosion", label: "Corrosion Allowance", unit: "mm", step: "any" },
    {
      key: "mechanical",
      label: "Mechanical Allowance",
      unit: "mm",
      step: "any",
    },
    { key: "millTolerance", label: "Mill Tolerance", unit: "%", step: "any" },
  ];

  const format = (value: number) => value.toFixed(2);

  return (
    <div className="mx-auto w-full max-w-5xl rounded-2xl border border-slate-200 bg-white p-6 shadow-lg md:p-8">
      {/* Header */}
      <div className="mb-8 border-b border-slate-200 pb-5">
        <h2 className="text-2xl font-bold text-white">
          Minimum Pipe Wall Thickness Calculator
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          ASME B31.3 Internal Pressure Design
        </p>
      </div>

      {/* Input Fields */}
      <div className="mb-8">
        <h3 className="mb-4 text-lg font-semibold text-white">
          Design Parameters
        </h3>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {fields.map((field) => (
            <div key={field.key}>
              <label className="mb-2 block text-sm font-medium text-white">
                {field.label}
              </label>

              <div className="flex overflow-hidden rounded-lg border border-slate-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                <input
                  type="number"
                  step={field.step}
                  value={inputs[field.key]}
                  onChange={(e) => updateInput(field.key, e.target.value)}
                  className="w-full min-w-0 bg-white px-3 py-3 text-sm text-white outline-none"
                />

                {field.unit && (
                  <span className="flex items-center bg-slate-100 px-3 text-sm text-slate-500">
                    {field.unit}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="rounded-xl bg-[#142B45] p-6 text-white">
        <h3 className="mb-5 text-lg font-semibold">Calculation Results</h3>

        {result ? (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-white/10 p-4">
                <p className="text-sm text-white">Pressure Design Thickness</p>
                <p className="mt-2 text-2xl font-bold">
                  {format(result.pressureThickness)} mm
                </p>
              </div>

              <div className="rounded-lg bg-white/10 p-4">
                <p className="text-sm text-white">
                  Required Thickness + Allowances
                </p>
                <p className="mt-2 text-2xl font-bold">
                  {format(result.requiredThickness)} mm
                </p>
              </div>

              <div className="rounded-lg border border-blue-400 bg-blue-500/20 p-4">
                <p className="text-sm text-blue-100">
                  Required Nominal Thickness
                </p>
                <p className="mt-2 text-3xl font-bold text-white">
                  {format(result.nominalThickness)} mm
                </p>
              </div>
            </div>

            <div className="mt-5 border-t border-white/20 pt-4">
              <p className="text-xs leading-relaxed text-white">
                Nominal thickness is calculated by accounting for corrosion
                allowance, mechanical allowance, and specified mill tolerance.
              </p>
            </div>
          </>
        ) : (
          <p className="text-sm text-red-200">
            Invalid inputs. Check that all values are entered correctly.
          </p>
        )}
      </div>

      {/* Formula */}
      <div className="mt-6 rounded-lg bg-slate-50 p-5">
        <h3 className="mb-3 font-semibold text-white">Calculation Formula</h3>

        <p className="font-mono text-sm text-slate-700">
          t = (P × D) / [2 × (S × E × W + P × Y)]
        </p>

        <p className="mt-3 text-xs leading-relaxed text-slate-500">
          Where t = pressure design thickness, P = design pressure, D = outside
          diameter, S = allowable stress, E = quality factor, W = weld strength
          reduction factor, and Y = coefficient.
        </p>
      </div>

      {/* Disclaimer */}
      <p className="mt-6 text-xs leading-relaxed text-slate-400">
        Engineering reference tool only. Verify material properties, code
        edition, design conditions, applicable factors, dimensional tolerances,
        and all additional requirements against the governing piping code before
        using results for engineering design.
      </p>
    </div>
  );
}
