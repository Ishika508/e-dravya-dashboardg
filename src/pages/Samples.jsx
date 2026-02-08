import React, { useState } from "react";
import { Search, Upload, FileText, Eye, Beaker } from "lucide-react";

const samplesData = [
  {
    id: "#HAL-2026-01",
    herb: "Haldi",
    purity: 98.2,
    status: "Verified",
  },
  {
    id: "#HAL-2026-02",
    herb: "Haldi",
    purity: 92.4,
    status: "Review",
  },
];

export default function Samples() {
  const [query, setQuery] = useState("");

  const filtered = samplesData.filter(s =>
    s.id.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="p-8 space-y-8">

      {/* HEADER */}
      <header>
        <h1 className="text-2xl font-bold text-slate-800">Samples</h1>
        <p className="text-slate-500 mt-1">
          All collected herb samples and their authentication status
        </p>
      </header>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Kpi title="Total Samples" value="24" />
        <Kpi title="Verified" value="19" accent="emerald" />
        <Kpi title="Needs Review" value="5" accent="amber" />
      </div>

      {/* CONTROLS */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by Sample ID…"
            className="w-full pl-9 pr-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm">
          <Upload size={16} />
          Upload Sample
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="text-left px-5 py-3">Sample ID</th>
              <th className="text-left px-5 py-3">Herb</th>
              <th className="text-left px-5 py-3">Purity</th>
              <th className="text-left px-5 py-3">Status</th>
              <th className="text-right px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => (
              <tr key={s.id} className="border-t">
                <td className="px-5 py-3 font-medium">{s.id}</td>
                <td className="px-5 py-3">{s.herb}</td>
                <td className="px-5 py-3">{s.purity}%</td>
                <td className="px-5 py-3">
                  <StatusBadge status={s.status} />
                </td>
                <td className="px-5 py-3 text-right space-x-2">
                  <Action icon={Eye} />
                  <Action icon={Beaker} />
                  <Action icon={FileText} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </main>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

const Kpi = ({ title, value, accent = "slate" }) => (
  <div className={`border rounded-xl p-5 bg-white`}>
    <p className="text-sm text-slate-500">{title}</p>
    <p className={`text-2xl font-bold text-${accent}-600`}>{value}</p>
  </div>
);

const StatusBadge = ({ status }) => {
  const map = {
    Verified: "bg-emerald-100 text-emerald-700",
    Review: "bg-amber-100 text-amber-700",
  };
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${map[status]}`}>
      {status}
    </span>
  );
};

const Action = ({ icon: Icon }) => (
  <button className="inline-flex items-center justify-center w-8 h-8 rounded-md border hover:bg-slate-50">
    <Icon size={14} />
  </button>
);

