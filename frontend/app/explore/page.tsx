import type { Metadata } from "next";
import Link from "next/link";
import { computeConfidence } from "@stellarveriphy/shared/scoring";
import ConfidenceScore from "@/components/ConfidenceScore";
import StatusBadge from "@/components/StatusBadge";
import { SAMPLE_RECORDS } from "@/lib/sample-records";

export const metadata: Metadata = {
  title: "Explore verified content · StellarVeriphy",
};

export default function Explore() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold tracking-tight">Explore verified content</h1>
      <p className="mt-2 max-w-2xl text-slate-600">
        Content submitted to StellarVeriphy, including checks that failed. Open an item to see its provenance
        certificate and full history.
      </p>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SAMPLE_RECORDS.map((record) => (
          <li key={record.id} className="relative flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-600">
            <div className="flex items-center justify-between gap-2 text-xs uppercase tracking-wide text-slate-500">
              <span>{record.mediaType}</span>
              <StatusBadge status={record.status} />
            </div>
            <h2 className="mt-3 font-semibold">
              <Link href={`/certificates/${record.id}`} className="hover:underline focus:outline-none">
                {record.title}
              </Link>
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              {new Date(record.manifest.timestamp).toLocaleDateString("en", { dateStyle: "medium" })}
            </p>
            <div className="mt-4">
              <ConfidenceScore result={computeConfidence(record)} />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
