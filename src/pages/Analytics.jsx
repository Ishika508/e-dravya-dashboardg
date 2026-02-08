import React from "react";
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from "recharts";
import { TrendingUp, AlertTriangle, Activity, Layers } from "lucide-react";

/* ---------- MOCK DATA (can be replaced by API later) ---------- */

const purityTrend = [
  { day: "Day 1", purity: 86 },
  { day: "Day 2", purity: 88 },
  { day: "Day 3", purity: 87 },
  { day: "Day 4", purity: 89 },
  { day: "Day 5", purity: 87 },
];

const batchComparison = [
  { batch: "HAL-01", purity: 98.2 },
  { batch: "HAL-02", purity: 94.5 },
  { batch: "HAL-03", purity: 91.8 },
];

const sensorDrift = [
  { time: "T1", MQ3: 2, MQ2: 1, MQ7: 3 },
  { time: "T2", MQ3: 3, MQ2: 2, MQ7: 4 },
  { time: "T3", MQ3: 2, MQ2: 1, MQ7: 2 },
];

/* ---------- PAGE ---------- */

export default function Analytics() {
  return (
    <div className="space-y-8">

      {/* HEADER */}
      <header>
        <h1 className="text-3xl font-bold text-slate-800">Analytics</h1>
        <p className="text-slate-500 mt-1">
          Deep insights across batches, purity trends & sensor behavior
        </p>
      </header>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard icon={<TrendingUp />} label="Avg Purity" value="96.4%" />
        <StatCard icon={<Layers />} label="Batches Analyzed" value="18" />
        <StatCard icon={<AlertTriangle />} label="Alerts Raised" value="2" />
        <StatCard icon={<Activity />} label="Drift Events" value="1" />
      </div>

      {/* FILTERS */}
      <div className="bg-white border rounded-xl p-4 flex flex-wrap gap-4 items-center">
        <select className="border rounded-lg px-3 py-2 text-sm">
          <option>Haldi (Curcuma longa)</option>
          <option>Ginger</option>
          <option>Ashwagandha</option>
        </select>

        <input type="date" className="border rounded-lg px-3 py-2 text-sm" />
        <input type="date" className="border rounded-lg px-3 py-2 text-sm" />

        <button className="ml-auto bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm">
          Apply Filters
        </button>
      </div>

      {/* GRAPHS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* PURITY TREND */}
        <Card title="Purity Trend">
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={purityTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis domain={[80, 100]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="purity"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* BATCH COMPARISON */}
        <Card title="Batch Purity Comparison">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={batchComparison}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="batch" />
              <YAxis domain={[80, 100]} />
              <Tooltip />
              <Bar dataKey="purity" fill="#34d399" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* SENSOR DRIFT */}
        <Card title="Sensor Drift Analysis" className="lg:col-span-2">
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={sensorDrift}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line dataKey="MQ3" stroke="#22c55e" strokeWidth={2} />
              <Line dataKey="MQ2" stroke="#f59e0b" strokeWidth={2} />
              <Line dataKey="MQ7" stroke="#ef4444" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

      </div>
    </div>
  );
}

/* ---------- REUSABLE UI ---------- */

const StatCard = ({ icon, label, value }) => (
  <div className="bg-white border rounded-xl p-5 flex items-center gap-4">
    <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
      {icon}
    </div>
    <div>
      <p className="text-xs text-slate-500">{label}</p>
      <p className="text-xl font-bold text-slate-800">{value}</p>
    </div>
  </div>
);

const Card = ({ title, children, className = "" }) => (
  <div className={`bg-white border rounded-xl p-6 ${className}`}>
    <h3 className="font-semibold text-slate-700 mb-4">{title}</h3>
    {children}
  </div>
);

