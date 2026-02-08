import React from "react";
import { X } from "lucide-react";
import SubscriptionPlans from "./SubscriptionPlans";

export default function SubscriptionDrawer({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="flex-1 bg-black/40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="w-full max-w-md bg-white h-full shadow-xl p-6 animate-slide-in-right">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-slate-800">
            Upgrade Subscription
          </h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <SubscriptionPlans />
      </div>
    </div>
  );
}
