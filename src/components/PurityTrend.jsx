import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Day 1", purity: 97.8 },
  { day: "Day 2", purity: 98.1 },
  { day: "Day 3", purity: 98.0 },
  { day: "Day 4", purity: 98.2 },
];

export default function PurityTrend() {
  return (
    <div className="bg-white p-6 rounded-xl border shadow-sm">
      <h3 className="font-semibold text-slate-700 mb-4">Purity Stability Trend</h3>

      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="day" />
            <YAxis domain={[97, 99]} hide />
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
      </div>

      <p className="text-xs text-slate-500 mt-2">
        Stable purity across storage & sampling cycles.
      </p>
    </div>
  );
}
