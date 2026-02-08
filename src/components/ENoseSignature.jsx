import React from "react";

export default function ENoseSignature() {
  const rows = [
    { compound: "Ethanol", detected: "245 ppm", reference: "230–260", status: "Matched" },
    { compound: "Methanol", detected: "0 ppm", reference: "0", status: "Absent" },
    { compound: "Acetaldehyde", detected: "12 ppm", reference: "<15", status: "Matched" },
    { compound: "Synthetic VOCs", detected: "0 ppm", reference: "0", status: "Absent" },
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5">
      <h3 className="font-semibold text-slate-700 mb-4">
        E-Nose VOC Signature
      </h3>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-slate-500 border-b">
            <th className="text-left pb-2">Compound</th>
            <th className="text-left pb-2">Detected</th>
            <th className="text-left pb-2">Reference</th>
            <th className="text-right pb-2">Status</th>
          </tr>
        </thead>

        <tbody className="divide-y">
          {rows.map((r, i) => (
            <tr key={i} className="text-slate-700">
              <td className="py-2">{r.compound}</td>
              <td>{r.detected}</td>
              <td>{r.reference}</td>
              <td className={`text-right font-medium ${
                r.status === "Matched" ? "text-emerald-600" : "text-slate-500"
              }`}>
                {r.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-3 text-xs text-slate-500">
        VOC profile aligns with certified *Curcuma longa* (Haldi) fingerprint.
      </p>
    </div>
  );
}
