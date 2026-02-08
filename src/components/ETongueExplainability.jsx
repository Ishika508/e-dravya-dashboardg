import React from "react";

const factors = [
  { label: "Sweetness (Curcumin)", value: 35 },
  { label: "Bitterness", value: 15 },
  { label: "Astringency", value: 20 },
  { label: "Acidity", value: 10 },
  { label: "Aftertaste Stability", value: 20 },
];

export default function ETongueExplainability() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5">
      <h3 className="font-semibold text-slate-700 mb-4">
        E-Tongue Decision Weights
      </h3>

      <div className="space-y-3">
        {factors.map((f, i) => (
          <div key={i}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-600">{f.label}</span>
              <span className="font-medium">{f.value}%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full">
              <div
                className="h-2 bg-emerald-500 rounded-full transition-all"
                style={{ width: `${f.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-xs text-emerald-700 bg-emerald-50 p-3 rounded-lg">
        ✓ Taste fingerprint falls within trained Haldi reference envelope.
      </div>
    </div>
  );
}
