import React from 'react';
import {
  LayoutDashboard,
  FlaskConical,
  BarChart3,
  History,
  Sparkles,
  Activity
} from 'lucide-react';
import { NavLink } from "react-router-dom";

/* ---------- NavItem ---------- */
const NavItem = ({ icon, label, to }) => (
  <NavLink
    to={to}
    end
    className={({ isActive }) =>
      `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
      ${
        isActive
          ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-600/30'
          : 'text-slate-400 hover:bg-slate-800 hover:text-white'
      }`
    }
  >
    {icon}
    <span className="font-medium text-sm">{label}</span>
  </NavLink>
);

/* ---------- Sidebar ---------- */
const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-850 text-white flex flex-col justify-between shadow-xl z-50">
      <div>
        {/* Logo */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center gap-2 mb-1">
            <FlaskConical className="w-6 h-6 text-emerald-400" />
            <h1 className="text-xl font-bold tracking-wide">E-Dravya</h1>
          </div>
          <p className="text-xs text-slate-400">AI-Powered Herbal Auth</p>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4 space-y-2">
          <NavItem
            icon={<LayoutDashboard size={20} />}
            label="Dashboard"
            to="/"
          />
          <NavItem
            icon={<FlaskConical size={20} />}
            label="Samples"
            to="/samples"
          />
          <NavItem
            icon={<BarChart3 size={20} />}
            label="Analytics"
            to="/analytics"
          />
          <NavItem
            icon={<History size={20} />}
            label="Batch History"
            to="/batch-history"
          />

          <div className="pt-4 pb-2">
            <p className="text-xs font-semibold text-slate-500 uppercase px-4 mb-2">
              AI Tools
            </p>
            <NavItem
  to="/ai-assistant"
  label="AI Assistant"
  icon={<Sparkles size={20} />}
/>
          </div>
        </nav>
      </div>

      {/* Status */}
      <div className="p-6 bg-slate-900 border-t border-slate-700">
        <div className="flex items-center gap-2 text-sm">
          <Activity className="w-4 h-4 text-emerald-500 animate-pulse" />
          <span className="text-slate-300">System Active</span>
        </div>
        <p className="text-xs text-slate-500 mt-1">
          Version 1.0.4 (Stable)
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
