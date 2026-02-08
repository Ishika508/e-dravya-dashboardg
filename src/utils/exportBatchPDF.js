import jsPDF from "jspdf";
import "jspdf-autotable";

export function exportBatchPDF(batch) {
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("E-Dravya AI Lab — Herbal Analysis Report", 14, 20);

  doc.setFontSize(10);
  doc.text(`Report ID: ${batch.id}`, 14, 28);
  doc.text(`Date: ${batch.date}`, 14, 34);

  doc.autoTable({
    startY: 40,
    head: [["Field", "Value"]],
    body: [
      ["Herb", batch.herb],
      ["Batch ID", batch.id],
      ["Purity", batch.purity],
      ["Status", batch.status],
    ],
  });

  doc.autoTable({
    startY: doc.lastAutoTable.finalY + 10,
    head: [["Sensor", "Value", "Status"]],
    body: [
      ["MQ-3 (Alcohol)", "245 ppm", "Normal"],
      ["MQ-2 (Gas)", "180 ppm", "Warning"],
      ["MQ-7 (CO)", "85 ppm", "Normal"],
    ],
  });

  doc.autoTable({
    startY: doc.lastAutoTable.finalY + 10,
    head: [["Compound", "Detected", "Reference", "Match"]],
    body: [
      ["Ethanol", "245 ppm", "230–260", "✔"],
      ["Methanol", "0 ppm", "0", "✔"],
      ["Acetaldehyde", "12 ppm", "<15", "✔"],
    ],
  });

  doc.text(
    "AI Decision: ACCEPTABLE for non-export use. Raman confirmation recommended.",
    14,
    doc.lastAutoTable.finalY + 15
  );

  doc.save(`${batch.id}_Lab_Report.pdf`);
}

