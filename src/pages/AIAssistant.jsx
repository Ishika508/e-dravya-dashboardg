import React, { useState } from "react";
import { Sparkles, X } from "lucide-react";

/* ---------- MOCK AI LOGIC (frontend only) ---------- */
const generateAIResponse = (question) => {
  const q = question.toLowerCase();

  if (q.includes("herb") || q.includes("haldi")) {
    return "The analyzed herb is Haldi (Curcuma longa). Chemical and VOC markers align with certified reference profiles.";
  }

  if (q.includes("why")) {
    return "This batch is marked ACCEPTABLE because purity is above 85%, VOC deviation is minimal, and adulterant concentration is below export-risk thresholds.";
  }

  if (q.includes("export")) {
    return "This batch is suitable for domestic distribution but requires Raman confirmation for pharmaceutical-grade export.";
  }

  if (q.includes("sensor")) {
    return "MQ-3 and MQ-2 values are within tolerance. Minor deviation detected in VOC signature but not critical.";
  }

  return "Based on current sensor, E-Nose, and E-Tongue data, this batch shows acceptable purity with low-risk deviations.";
};

/* ---------- EXPLAIN BATCH MODAL ---------- */
function ExplainBatchModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
        >
          <X />
        </button>

        <h3 className="text-xl font-bold text-slate-800 mb-2">
          Current Batch Explanation
        </h3>

        <div className="space-y-3 text-sm text-slate-700">
          <p>
            <strong>Herb:</strong> Haldi (Curcuma longa)
          </p>
          <p>
            <strong>Overall Purity:</strong> 87%
          </p>
          <p>
            <strong>E-Nose:</strong> VOC profile shows minor deviation from
            reference, within acceptable tolerance.
          </p>
          <p>
            <strong>E-Tongue:</strong> TDS slightly elevated, pH stable.
          </p>
          <p>
            <strong>Adulterant:</strong> Trace rice flour detected (low risk).
          </p>
          <p className="font-semibold text-emerald-600">
            Decision: ACCEPTABLE for non-export use
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------- MAIN PAGE ---------- */
export default function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hi! I’m your AI Lab Assistant. Ask me about Haldi purity, sensors, or batch decisions.",
    },
  ]);

  const [input, setInput] = useState("");
  const [showExplain, setShowExplain] = useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    const aiMsg = { role: "ai", text: generateAIResponse(input) };

    setMessages((prev) => [...prev, userMsg, aiMsg]);
    setInput("");
  };

  return (
    <main className="p-8 max-w-6xl">
      {/* HEADER */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          AI Lab Assistant
        </h1>
        <p className="text-slate-500 mt-2">
          Explain batch decisions and interact with E-Dravya AI
        </p>
        <div className="h-1 w-20 bg-emerald-500 mt-4 rounded-full" />
      </header>

      {/* EXPLAIN BATCH CARD */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold text-slate-800 flex items-center gap-2">
            <Sparkles className="text-emerald-600" size={18} />
            Explain Current Batch
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Generate AI explanation for Haldi purity & sensors
          </p>
        </div>

        <button
          onClick={() => setShowExplain(true)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm"
        >
          Explain Batch
        </button>
      </div>

      {/* CHAT BOX */}
      <div className="bg-white rounded-xl shadow border p-6">
        <div className="space-y-4 max-h-[420px] overflow-y-auto pr-2">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`max-w-[80%] px-4 py-2 rounded-lg text-sm ${
                msg.role === "user"
                  ? "ml-auto bg-emerald-600 text-white"
                  : "bg-slate-100 text-slate-800"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* INPUT */}
        <div className="mt-4 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about this batch..."
            className="flex-1 border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            onClick={sendMessage}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg text-sm"
          >
            Send
          </button>
        </div>
      </div>

      {/* MODAL */}
      {showExplain && <ExplainBatchModal onClose={() => setShowExplain(false)} />}
    </main>
  );
}




