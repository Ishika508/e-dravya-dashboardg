import React from "react";
import { Crown, Calendar, AlertTriangle, X } from "lucide-react";

export default function SubscriptionStatus({ onRenew }) {
  return (
    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 space-y-4 relative">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Crown className="text-emerald-600" size={22} />
          <h3 className="text-lg font-bold text-slate-800">
            Pro Subscription
          </h3>
        </div>

        <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
          Active
        </span>
      </div>

      {/* Renewal date */}
      <div className="flex items-center gap-2 text-sm text-slate-600">
        <Calendar size={16} />
        Renews on <strong>12 March 2026</strong>
      </div>

      {/* Warning */}
      <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 text-amber-700 p-3 rounded-lg text-sm">
        <AlertTriangle size={18} className="mt-0.5" />
        <span>
          Subscription expires in <strong>14 days</strong>. Renew to avoid
          service interruption.
        </span>
      </div>

      {/* Renew Button */}
      <button
        onClick={onRenew}
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-lg transition"
      >
        Renew Subscription
      </button>
    </div>
  );
}




