import React from "react";
import { Bot, CheckCircle2 } from "lucide-react";

export default function AIInsights() {
  return (
    <div className="bg-slate-800 text-white p-6 rounded-xl shadow-lg relative overflow-hidden h-full">
      
      {/* glow */}
      <div className="absolute top-0 right-0 -mt-6 -mr-6 w-28 h-28 bg-emerald-500 rounded-full opacity-20 blur-2xl" />

      {/* header */}
      <div className="flex items-center gap-3 mb-4">
        <Bot className="text-emerald-400" size={24} />
        <h3 className="font-bold">AI Decision Logic</h3>
      </div>

      {/* explanation */}
      <p className="text-sm text-slate-300 leading-relaxed mb-5">
        The AI fusion model (E-Nose + E-Tongue + Sensor Stack) confirms
        <span className="text-white font-semibold"> Haldi (Curcuma longa)</span>{" "}
        authenticity with high confidence. Detected chemical signatures align
        with certified turmeric reference profiles.
      </p>

      {/* confidence bars */}
      <div className="space-y-3 mb-5">
        <Metric label="Authenticity Confidence" value={80} />
        <Metric label="VOC Match (E-Nose)" value={96.4} />
        <Metric label="Taste Signature (E-Tongue)" value={91.2} />
      </div>

      {/* decision summary */}
      <div className="text-xs font-mono bg-slate-900/60 p-3 rounded border border-slate-700 space-y-2">
        <DecisionLine text="Herb Identified: Haldi (Curcuma longa)" />
        <DecisionLine text="Purity Score: 87% (Grade A)" />
        <DecisionLine text="Adulterants (Flour/Starch): Not detected" />
        <DecisionLine text="Sensor Drift: Within tolerance" />
      </div>
    </div>
  );
}

/* ---------- helpers ---------- */

function Metric({ label, value }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1 text-slate-300">
        <span>{label}</span>
        <span className="text-emerald-400 font-semibold">{value}%</span>
      </div>
      <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-2 bg-emerald-500 rounded-full transition-all duration-700"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function DecisionLine({ text }) {
  return (
    <div className="flex items-center gap-2 text-emerald-400">
      <CheckCircle2 size={14} />
      <span>{text}</span>
    </div>
  );
}





