import { Leaf, ShieldCheck, AlertTriangle, Activity } from "lucide-react";

export default function HerbSummary() {
  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      
      <SummaryCard
        icon={<Leaf className="text-emerald-600" />}
        label="Herb Identified"
        value="Haldi (Curcuma longa)"
        badge="Verified"
        badgeColor="bg-emerald-100 text-emerald-700"
      />

      <SummaryCard
        icon={<Activity className="text-blue-600" />}
        label="Purity Level"
        value="98.2%"
        badge="High"
        badgeColor="bg-blue-100 text-blue-700"
      />

      <SummaryCard
        icon={<ShieldCheck className="text-green-600" />}
        label="Adulteration"
        value="Not Detected"
        badge="Safe"
        badgeColor="bg-green-100 text-green-700"
      />

      <SummaryCard
        icon={<AlertTriangle className="text-purple-600" />}
        label="Overall Health"
        value="Excellent"
        badge="Grade A"
        badgeColor="bg-purple-100 text-purple-700"
      />
    </div>
  );
}

function SummaryCard({ icon, label, value, badge, badgeColor }) {
  return (
    <div className="bg-white p-5 rounded-xl border shadow-sm flex items-center gap-4">
      <div className="p-3 rounded-lg bg-slate-100">{icon}</div>
      <div>
        <p className="text-xs text-slate-500">{label}</p>
        <p className="font-semibold text-slate-800">{value}</p>
        <span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full ${badgeColor}`}>
          {badge}
        </span>
      </div>
    </div>
  );
}

