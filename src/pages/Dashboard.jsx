import React, { useState } from "react";

import HerbSummary from "../components/HerbSummary";
import SensorCard from "../components/SensorCard";
import QualityScore from "../components/QualityScore";
import TasteProfile from "../components/TasteProfile";
import ParameterRadar from "../components/ParameterRadar";
import AIInsights from "../components/AIInsights";
import ImageUpload from "../components/ImageUpload";
import AdulterantPanel from "../components/AdulterantPanel";
import ENoseSignature from "../components/ENoseSignature";
import UserPanel from "../components/UserPanel";
import SubscriptionStatus from "../components/SubscriptionStatus";
import SubscriptionPlans from "../components/SubscriptionPlans";
import PurityTrend from "../components/PurityTrend";
import FloatingAssistant from "../components/FloatingAssistant";

export default function Dashboard() {
  // ✅ STATE GOES HERE
  const [showPlans, setShowPlans] = useState(false);

  return (
    <main className="p-8">

      {/* HEADER */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Herbal Purity, Digitized.
        </h1>
        <p className="text-slate-500 mt-2 max-w-2xl">
          Real-time IIoT dashboard for herbal authentication
        </p>
        <div className="h-1 w-20 bg-emerald-500 mt-6 rounded-full"></div>
      </header>
<div className="space-y-4 mb-6">
      <UserPanel />

      {/* ✅ PASS HANDLER TO STATUS */}
      <SubscriptionStatus onRenew={() => setShowPlans(true)} />


      <HerbSummary />
</div>
      {/* MAIN GRID */}
      <div className="grid grid-cols-12 gap-6 items-start">

        {/* Sensors */}
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <SensorCard name="MQ-3" description="Alcohol & Ethanol" value="245" unit="ppm" status="GOOD" />
          <SensorCard name="MQ-2" description="Combustible Gas" value="180" unit="ppm" status="WARNING" />
          <SensorCard name="MQ-7" description="Carbon Monoxide" value="85" unit="ppm" status="CRITICAL" />
        </div>

        {/* Left */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <QualityScore score={87} />
          <TasteProfile />
        </div>

        {/* Right */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ParameterRadar />
          <AIInsights />
          <ImageUpload />
          <PurityTrend />
        </div>

        {/* LOWER ANALYSIS */}
        <div className="col-span-12 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-5">
            <ENoseSignature />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <AdulterantPanel />
          </div>
        </div>
      </div>

      {/* ✅ CONDITIONAL PLANS PANEL */}
      {showPlans && (
        <SubscriptionPlans onClose={() => setShowPlans(false)} />
      )}

      <FloatingAssistant />
    </main>
  );
}



