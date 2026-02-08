import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Samples from "./pages/Samples";
import Analytics from "./pages/Analytics";
import BatchHistory from "./pages/BatchHistory";
import AIAssistant from "./pages/AIAssistant";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Sidebar />

      {/* MAIN CONTENT AREA */}
      <div className="ml-64 p-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/samples" element={<Samples />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/batch-history" element={<BatchHistory />} />
          <Route path="/ai-assistant" element={<AIAssistant />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;






