import React, { useState } from "react";
import { Send } from "lucide-react";

export default function AIChatBox({ messages, setMessages }) {
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: input },
    ]);

    setInput("");
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl flex flex-col h-[420px]">
      <div className="flex-1 p-4 space-y-3 overflow-y-auto">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`text-sm max-w-[80%] p-3 rounded-lg ${
              m.role === "assistant"
                ? "bg-slate-100 text-slate-700"
                : "bg-emerald-600 text-white ml-auto"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      <div className="border-t p-3 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about this batch…"
          className="flex-1 border rounded-lg px-3 py-2 text-sm"
        />
        <button
          onClick={sendMessage}
          className="bg-emerald-600 text-white px-4 rounded-lg"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
}

