import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";

const FloatingAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text:
        "Hello! I've analyzed the current batch. Purity is high and no adulterants were detected. What would you like to know?",
    },
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const generateReply = (question) => {
    const q = question.toLowerCase();

    if (q.includes("purity"))
      return "The overall purity level is 87/100 (Grade A – Excellent), meeting FSSAI quality benchmarks.";

    if (q.includes("adulteration"))
      return "No chemical or structural adulterants were detected in this batch.";

    if (q.includes("ethanol") || q.includes("mq-3"))
      return "Ethanol levels detected by MQ-3 are within safe and expected reference limits.";

    if (q.includes("mq-7") || q.includes("carbon"))
      return "Carbon monoxide levels were slightly elevated but remain within safe tolerance.";

    if (q.includes("fingerprint"))
      return "The digital fingerprint match is 98.2%, indicating strong similarity with trained reference samples.";

    if (q.includes("image"))
      return "You can upload a raw herb image for visual authentication. This feature will use OpenCV in the next phase.";

    if (q.includes("herb"))
      return "The detected herb profile matches Glycyrrhiza glabra (Licorice / Mulethi).";

    return "I’m here to help with purity, sensors, fingerprint matching, or herb identification. Try asking about those!";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    const aiMessage = { role: "ai", text: generateReply(input) };

    setMessages((prev) => [...prev, userMessage, aiMessage]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden mb-2">
          {/* Header */}
          <div className="bg-emerald-600 p-4 flex justify-between items-center text-white">
            <span className="font-bold text-sm">Dravya AI Assistant</span>
            <button onClick={() => setIsOpen(false)}>
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 h-64 bg-slate-50 overflow-y-auto text-sm space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg max-w-[85%] ${
                  msg.role === "ai"
                    ? "bg-white border border-slate-100 text-slate-700"
                    : "bg-emerald-600 text-white ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask about purity, sensors, herb..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 text-sm bg-slate-50 border border-slate-200 rounded-full px-4 py-2 focus:outline-none focus:border-emerald-500"
            />
            <button
              onClick={handleSend}
              className="p-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105"
      >
        <MessageSquare size={24} />
      </button>
    </div>
  );
};

export default FloatingAssistant;
