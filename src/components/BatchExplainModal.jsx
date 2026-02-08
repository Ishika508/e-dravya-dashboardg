import React from "react";
import { X, Sparkles } from "lucide-react";

export default function BatchExplainModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl relative p-6">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
        >
          <X />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="text-emerald-500" />
          <h2 className="text-xl font-bold text-slate-800">
            Explain Current Batch
          </h2>
        </div>

        {/* Explanation */}
        <div className="space-y-4 text-sm text-slate-700 leading-relaxed">

          <p>
            <strong>Herb:</strong> Haldi (<i>Curcuma longa</i>)
          </p>

          <p>
            <strong>Overall Purity:</strong> 87% — acceptable for commercial use.
          </p>

          <p>
            <strong>Adulteration:</strong> Low-level rice flour detected. Quantity
            is below FSSAI rejection threshold but flagged for transparency.
          </p>

          <p>
            <strong>E-Nose Analysis:</strong> VOC fingerprint closely matches
            certified Haldi reference with minor ethanol deviation.
          </p>

          <p>
            <strong>E-Tongue:</strong> Sweetness and bitterness ratios align with
            authentic Curcuma profile. pH stable.
          </p>

          <p className="bg-emerald-50 border border-emerald-200 p-3 rounded-lg">
            ✅ <strong>Decision:</strong> Batch approved for non-export use.
            Raman confirmation recommended for pharmaceutical grade.
          </p>
        </div>
      </div>
    </div>
  );
}
