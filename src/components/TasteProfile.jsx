import React from 'react';

const TasteBar = ({ label, value, colorClass }) => (
  <div className="mb-4">
    <div className="flex justify-between text-sm mb-1">
      <span className="font-medium text-slate-600">{label}</span>
      <span className="font-bold text-slate-800">{value}%</span>
    </div>
    <div className="w-full bg-slate-100 rounded-full h-2.5">
      <div 
        className={`h-2.5 rounded-full transition-all duration-1000 ${colorClass}`} 
        style={{ width: `${value}%` }}
      ></div>
    </div>
  </div>
);

const TasteProfile = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-full">
      <h3 className="font-bold text-slate-700 mb-6">E-Tongue Profile</h3>
      <TasteBar label="Sweetness (Glycyrrhizin)" value={78} colorClass="bg-pink-400" />
      <TasteBar label="Bitterness" value={12} colorClass="bg-amber-600" />
      <TasteBar label="Sourness / Acidity" value={4} colorClass="bg-yellow-400" />
      <TasteBar label="Astringency" value={15} colorClass="bg-purple-400" />
      
      <div className="mt-6 p-3 bg-blue-50 border border-blue-100 rounded-lg text-xs text-blue-700">
        <strong>Note:</strong> High sweetness profile aligns with premium Mulethi (Licorice) root markers.
      </div>
    </div>
  );
};

export default TasteProfile;