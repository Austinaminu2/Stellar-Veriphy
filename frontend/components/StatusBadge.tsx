import type { VerificationStatus } from "@stellarveriphy/shared/types";

const STATUS = {
  certified: { label: "Certified", className: "bg-emerald-100 text-emerald-800" },
  processing: { label: "Processing", className: "bg-sky-100 text-sky-800" },
  pending: { label: "Pending", className: "bg-slate-200 text-slate-700" },
  failed: { label: "Verification failed", className: "bg-rose-100 text-rose-800" },
} as const satisfies Record<VerificationStatus, { label: string; className: string }>;

export default function StatusBadge({ status }: { status: VerificationStatus }) {
  const s = STATUS[status];
  return <span className={`rounded px-2 py-0.5 text-xs font-medium ${s.className}`}>{s.label}</span>;
}
