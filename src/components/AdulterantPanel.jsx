const AdulterantPanel = () => (
  <div className="bg-white p-6 rounded-xl border shadow-sm">
    <h3 className="font-bold text-slate-700 mb-4">Adulterant Comparison</h3>
    <ul className="space-y-3 text-sm">
      
    <li className="flex justify-between">
      <span>Chalk Powder</span>
      <span className="text-emerald-600 font-medium">Absent</span>
    </li>
    <li className="flex justify-between">
      <span>Synthetic Sweeteners</span>
      <span className="text-emerald-600 font-medium">Absent</span>
    </li>
    <li className="flex justify-between">
      <span>Artificial Aroma</span>
      <span className="text-emerald-600 font-medium">Absent</span>
    </li>
    <li className="flex justify-between">
      <span>Natural VOC Fingerprint</span>
      <span className="text-blue-600 font-medium">Matched</span>
    </li>
 

  <div className="mt-4 p-3 bg-emerald-50 text-emerald-700 text-xs rounded-lg">
    ✔ No known adulterants detected across chemical, aroma, or taste signatures.
  </div>


    </ul>
    </div>
);

export default AdulterantPanel;
