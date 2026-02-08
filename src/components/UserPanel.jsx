import React, { useState } from "react";
import { User, LogOut, Crown } from "lucide-react";

export default function UserPanel() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
          <User className="text-emerald-600" size={18} />
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-800">
            Lab Operator
          </p>
          <p className="text-xs text-slate-500">
            operator@edravya.ai
          </p>
        </div>
      </div>

      {loggedIn ? (
        <button
          onClick={() => setLoggedIn(false)}
          className="text-xs flex items-center gap-1 text-slate-500 hover:text-red-500"
        >
          <LogOut size={14} /> Logout
        </button>
      ) : (
        <button
          onClick={() => setLoggedIn(true)}
          className="text-xs text-emerald-600 font-medium"
        >
          Login
        </button>
      )}
    </div>
  );
}
