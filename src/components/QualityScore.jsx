import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const QualityScore = ({ score }) => {
  const data = [
    { name: 'Score', value: score },
    { name: 'Remaining', value: 100 - score },
  ];
  const COLORS = ['#10b981', '#e2e8f0']; // Emerald vs Slate

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-full flex flex-col justify-center items-center relative">
      <h3 className="text-slate-500 text-sm font-semibold absolute top-4 left-4">Overall Quality</h3>
      
      <div className="w-full h-48 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        
        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-slate-800">{score}</span>
          <span className="text-xs text-slate-400 uppercase tracking-wider">/ 100</span>
        </div>
      </div>

      <div className="text-center mt-2">
        <div className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold">
          Grade A (Excellent)
        </div>
        <p className="text-xs text-slate-400 mt-3 px-4 leading-relaxed">
          Sample passes all FSSAI benchmarks for purity. No adulterants detected.
        </p>
      </div>
    </div>
  );
};

export default QualityScore;