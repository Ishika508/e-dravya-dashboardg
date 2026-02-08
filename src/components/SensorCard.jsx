import React from 'react';
import { Activity, AlertTriangle, CheckCircle } from 'lucide-react';

const SensorCard = ({ name, description, value, unit, status }) => {
  const getStatusColor = (s) => {
    if (s === 'GOOD') return 'text-emerald-600 bg-emerald-50 border-emerald-200';
    if (s === 'WARNING') return 'text-amber-600 bg-amber-50 border-amber-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-bold text-slate-700">{name}</h3>
          <p className="text-xs text-slate-500 mt-1">{description}</p>
        </div>
        <span className={`text-[10px] font-bold px-2 py-1 rounded-full border ${getStatusColor(status)}`}>
          {status}
        </span>
      </div>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-2xl font-bold text-slate-800">{value}</span>
        <span className="text-sm text-slate-400 font-medium">{unit}</span>
      </div>
    </div>
  );
};

export default SensorCard;