import React from "react";
import { Sparkles } from "lucide-react";

export default function BatchExplainCard({ onExplain }) {
  return (
    <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-xl p-6 flex items-center justify-between">
      <div>
        <h3 className="font-semibold text-slate-800 flex items-center gap-2">
          <Sparkles className="text-emerald-600" size={18} />
          Explain Current Batch
        </h3>
        <p className="text-sm text-slate-600 mt-1 max-w-xl">
          Generate an AI explanation for Haldi purity, adulteration, and sensor behavior.
        </p>
      </div>

      <button
        onClick={onExplain}
        className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg text-sm transition"
      >
        Explain Batch
      </button>
    </div>
  );
}

