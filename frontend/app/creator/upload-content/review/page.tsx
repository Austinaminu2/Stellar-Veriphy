"use client";

import { useRouter } from "next/navigation";

import { useWizard } from "@/context/WizardContext";

export default function ReviewPage() {
  const router = useRouter();
  const {
    mode,
    file,
    contentHash,
    advancedContentHash,
    advancedManifestHash,
    manifest,
    manifestHash,
  } = useWizard();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Review Verification</h2>

      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-sm text-gray-600">Mode</p>
        <p className="font-semibold capitalize">{mode}</p>
      </div>

      {mode === "standard" && file && (
        <>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">File</p>
            <p className="font-semibold">{file.name}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Content Hash</p>
            <p className="font-mono text-sm break-all">{contentHash}</p>
          </div>
        </>
      )}

      {mode === "advanced" && (
        <>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Content Hash</p>
            <p className="font-mono text-sm break-all">{advancedContentHash}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Manifest Hash</p>
            <p className="font-mono text-sm break-all">{advancedManifestHash}</p>
          </div>
        </>
      )}

      {manifest && (
        <div className="bg-gray-50 p-4 rounded-lg max-h-64 overflow-auto">
          <p className="text-sm text-gray-600 mb-2">Manifest</p>
          <pre className="text-xs font-mono whitespace-pre-wrap break-words">
            {JSON.stringify(manifest, null, 2)}
          </pre>
        </div>
      )}

      {manifestHash && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Manifest Hash</p>
          <p className="font-mono text-sm break-all">{manifestHash}</p>
        </div>
      )}

      <button
        type="button"
        onClick={() => router.back()}
        className="text-sm font-medium text-gray-600 hover:text-gray-900 transition"
      >
        ← Back
      </button>
      <button className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
        Submit for Verification
      </button>
    </div>
  );
}
