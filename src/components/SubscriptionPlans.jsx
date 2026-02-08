import React from "react";
import { X, Crown, Zap } from "lucide-react";

export default function SubscriptionPlans({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      {/* Modal */}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl p-6 relative animate-fadeIn">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
        >
          <X size={22} />
        </button>

        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Choose Your Plan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Pro Plan */}
          <div className="border rounded-xl p-5 space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="text-emerald-600" />
              <h3 className="font-bold text-lg">Go Pro</h3>
            </div>

            <div className="text-3xl font-bold">₹999<span className="text-sm font-normal"> / month</span></div>

            <ul className="text-sm text-slate-600 space-y-2">
              <li>✔ AI authenticity analysis</li>
              <li>✔ E-Nose & E-Tongue insights</li>
              <li>✔ Basic lab reports</li>
              <li>✔ Email support</li>
            </ul>

            <button className="w-full border border-emerald-600 text-emerald-700 py-2 rounded-lg hover:bg-emerald-50">
              Choose Pro
            </button>
          </div>

          {/* Premium Plan */}
          <div className="border-2 border-emerald-600 rounded-xl p-5 space-y-4 bg-emerald-50">
            <div className="flex items-center gap-2">
              <Crown className="text-emerald-600" />
              <h3 className="font-bold text-lg">Premium Lab</h3>
            </div>

            <div className="text-3xl font-bold">₹1999<span className="text-sm font-normal"> / month</span></div>

            <ul className="text-sm text-slate-700 space-y-2">
              <li>✔ Everything in Pro</li>
              <li>✔ Downloadable PDF lab reports</li>
              <li>✔ Raman & VOC spectrum visuals</li>
              <li>✔ Batch-wise history</li>
              <li>✔ Priority support</li>
            </ul>

            <button className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700">
              Choose Premium
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}


