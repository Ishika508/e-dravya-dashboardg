import React, { useState } from "react";
import { UploadCloud } from "lucide-react";

export default function ImageUpload() {
  const [preview, setPreview] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
  };

  return (
    <label className="border-2 border-dashed border-slate-300 rounded-xl bg-slate-50 hover:bg-white transition p-6 flex flex-col items-center justify-center text-center cursor-pointer h-full">
      <input type="file" accept="image/*" className="hidden" onChange={handleUpload} />

      {preview ? (
        <img
          src={preview}
          alt="Uploaded herb"
          className="max-h-48 rounded-lg object-contain"
        />
      ) : (
        <>
          <UploadCloud className="text-slate-400 mb-3" size={28} />
          <h4 className="font-semibold text-slate-700">Upload Herb Image</h4>
          <p className="text-xs text-slate-400 mt-2">
            Visual authentication preview (demo)
          </p>
        </>
      )}
    </label>
  );
}

