export interface ContentManifest {
  contentHash: string;       // sha256 of the media file
  creator: string;           // Stellar public key (G...)
  timestamp: string;         // ISO 8601
  metadata?: {
    device?: string;
    location?: string;
    aiModel?: string;
  };
}

export interface ProvenanceCert {
  id: string;
  storageRef: string;
  manifestHash: string;
  attestationHash: string;
  creator: string;
  timestamp: number;
}

export type VerificationStatus = "pending" | "processing" | "certified" | "failed";

// Upload metadata as accepted by POST /api/uploads (see docs/api/upload-metadata.md).
export interface UploadMetadata {
  fileName: string;
  mimeType: string;
  fileSize: number;          // bytes
  contentHash: string;       // sha256 of the file bytes, lowercase hex
  creator: string;           // Stellar public key (G...)
  title?: string;
  description?: string;
  tags: string[];
  manifest: ContentManifest;
}

export interface UploadRecord extends UploadMetadata {
  id: string;
  createdAt: string;         // ISO 8601
  manifestHash: string;      // sha256 of the canonical manifest JSON
}

export interface VerificationJob {
  id: string;
  uploadId: string;
  status: VerificationStatus;
  createdAt: string;
  startedAt?: string;
  completedAt?: string;
  error?: string;
  result?: { manifestHash: string };
}

// A job as returned by the API, with queue details derived at read time.
export interface VerificationJobView extends VerificationJob {
  queuePosition: number | null;     // 1-based position among pending jobs
  estimatedWaitMs: number | null;   // null when there is no history to estimate from
  averageDurationMs: number | null;
}
