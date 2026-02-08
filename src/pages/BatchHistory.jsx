import React, { useState } from "react";
import {
  FileText,
  CheckCircle,
  AlertTriangle,
  Clock,
  Download,
} from "lucide-react";
import jsPDF from "jspdf";

/* -------------------- DATA -------------------- */

const batches = [
  {
    id: "HAL-BATCH-001",
    herb: "Haldi (Curcuma longa)",
    date: "02 Feb 2026",
    purity: "98.2%",
    status: "Verified",
    adulteration: "None detected",
    decision: "Approved for domestic & export use",
  },
  {
    id: "HAL-BATCH-002",
    herb: "Haldi (Curcuma longa)",
    date: "28 Jan 2026",
    purity: "94.6%",
    status: "Review",
    adulteration: "Minor rice flour traces",
    decision: "Domestic use only",
  },
  {
    id: "HAL-BATCH-003",
    herb: "Haldi (Curcuma longa)",
    date: "18 Jan 2026",
    purity: "89.3%",
    status: "Verified",
    adulteration: "None detected",
    decision: "Approved",
  },
];

const statusUI = {
  Verified: {
    color: "text-emerald-600 bg-emerald-50",
    icon: <CheckCircle size={16} />,
  },
  Review: {
    color: "text-amber-600 bg-amber-50",
    icon: <AlertTriangle size={16} />,
  },
};

/* -------------------- COMPONENT -------------------- */

export default function BatchHistory() {
  const [exportingId, setExportingId] = useState(null);

  const exportPDF = (batch) => {
    setExportingId(batch.id);

    const doc = new jsPDF("p", "mm", "a4");

    /* ---------- HEADER ---------- */
    doc.setFontSize(18);
    doc.text("E-Dravya — AI Herbal Authentication Lab Report", 20, 20);

    doc.setFontSize(11);
    doc.text(
      "Generated for regulatory & certification review (FSSAI compliant format)",
      20,
      28
    );

    doc.line(20, 32, 190, 32);

    /* ---------- BATCH DETAILS ---------- */
    doc.setFontSize(12);
    doc.text("Batch Details", 20, 45);

    doc.setFontSize(11);
    doc.text(`Batch ID: ${batch.id}`, 20, 55);
    doc.text(`Herb Identified: ${batch.herb}`, 20, 62);
    doc.text(`Analysis Date: ${batch.date}`, 20, 69);
    doc.text(`Purity Level: ${batch.purity}`, 20, 76);
    doc.text(`Adulteration: ${batch.adulteration}`, 20, 83);
    doc.text(`Final Status: ${batch.status}`, 20, 90);

    doc.line(20, 96, 190, 96);

    /* ---------- AI DECISION ---------- */
    doc.setFontSize(12);
    doc.text("AI Decision Summary", 20, 110);

    doc.setFontSize(11);
    doc.text(
      `• E-Nose VOC fingerprint matched Curcuma longa reference\n` +
        `• E-Tongue profile within acceptable bitterness & sweetness limits\n` +
        `• No synthetic adulterants detected\n` +
        `• MQ gas sensors within safety thresholds\n\n` +
        `Decision: ${batch.decision}`,
      20,
      120
    );

    doc.line(20, 155, 190, 155);

    /* ---------- FOOTER ---------- */
    doc.setFontSize(10);
    doc.text(
      "This is a digitally generated AI-assisted report by E-Dravya.\nNo physical signature required.",
      20,
      170
    );

    doc.save(`${batch.id}_Lab_Report.pdf`);

    setTimeout(() => setExportingId(null), 600);
  };

  return (
    <main className="p-8 space-y-8">
      {/* HEADER */}
      <header>
        <h1 className="text-3xl font-bold text-slate-800">Batch History</h1>
        <p className="text-slate-500 mt-2">
          Certification-ready history of analyzed herbal batches
        </p>
        <div className="h-1 w-16 bg-emerald-500 mt-4 rounded-full" />
      </header>

      {/* KPI SUMMARY */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard title="Total Batches" value="18" />
        <SummaryCard title="Verified Batches" value="15" highlight />
        <SummaryCard title="Avg Purity" value="96.1%" />
      </div>

      {/* TIMELINE */}
      <div className="bg-white rounded-xl shadow border border-slate-200">
        <div className="p-6 border-b">
          <h3 className="font-semibold text-slate-800 flex items-center gap-2">
            <Clock size={18} /> Batch Timeline
          </h3>
        </div>

        <div className="divide-y">
          {batches.map((batch) => (
            <div
              key={batch.id}
              className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:bg-slate-50 transition"
            >
              {/* LEFT */}
              <div>
                <h4 className="font-semibold text-slate-800">{batch.id}</h4>
                <p className="text-sm text-slate-500">
                  {batch.herb} • {batch.date}
                </p>
              </div>

              {/* PURITY */}
              <div className="text-sm">
                <span className="text-slate-500">Purity</span>
                <div className="font-semibold text-slate-800">
                  {batch.purity}
                </div>
              </div>

              {/* STATUS */}
              <div
                className={`flex items-center gap-2 text-sm px-3 py-1 rounded-full ${statusUI[batch.status].color}`}
              >
                {statusUI[batch.status].icon}
                {batch.status}
              </div>

              {/* ACTIONS */}
              <div className="flex gap-3">
                <ActionBtn label="View" icon={<FileText size={14} />} />

                <button
                  onClick={() => exportPDF(batch)}
                  disabled={exportingId === batch.id}
                  className={`flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg border transition ${
                    exportingId === batch.id
                      ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                      : "border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                  }`}
                >
                  <Download size={14} />
                  {exportingId === batch.id ? "Exporting…" : "Export PDF"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

/* -------------------- SMALL COMPONENTS -------------------- */

function SummaryCard({ title, value, highlight }) {
  return (
    <div
      className={`rounded-xl p-6 border ${
        highlight
          ? "bg-emerald-50 border-emerald-200"
          : "bg-white border-slate-200"
      }`}
    >
      <p className="text-sm text-slate-500">{title}</p>
      <h3 className="text-2xl font-bold text-slate-800 mt-1">{value}</h3>
    </div>
  );
}

function ActionBtn({ label, icon }) {
  return (
    <button className="flex items-center gap-2 text-sm border border-slate-300 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition">
      {icon}
      {label}
    </button>
  );
}


