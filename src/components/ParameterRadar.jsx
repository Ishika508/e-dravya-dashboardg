import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  { subject: 'pH Level', A: 90, fullMark: 100 },
  { subject: 'TDS', A: 85, fullMark: 100 },
  { subject: 'Aroma', A: 95, fullMark: 100 },
  { subject: 'Color', A: 80, fullMark: 100 },
  { subject: 'Texture', A: 70, fullMark: 100 },
  { subject: 'Clarity', A: 88, fullMark: 100 },
];

const ParameterRadar = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-slate-700">Multi-Parameter Analysis</h3>
        <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-500">Live Data</span>
      </div>
      
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
            <PolarGrid stroke="#e2e8f0" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            <Radar
              name="Sample"
              dataKey="A"
              stroke="#059669"
              strokeWidth={2}
              fill="#10b981"
              fillOpacity={0.2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-2">
        <SummaryCard label="pH Stability" value="7.2" status="Neutral" />
        <SummaryCard label="Fingerprint Match" value="98.2%" status="High" color="text-emerald-600" />
      </div>
    </div>
  );
};

const SummaryCard = ({ label, value, status, color = "text-slate-800" }) => (
  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
    <p className="text-xs text-slate-500">{label}</p>
    <div className="flex justify-between items-end mt-1">
      <span className={`font-bold ${color}`}>{value}</span>
      <span className="text-[10px] text-slate-400">{status}</span>
    </div>
  </div>
);

export default ParameterRadar;