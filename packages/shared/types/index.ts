export interface ContentManifest {
  contentHash: string;       // sha256 of the media file
  creator: string;           // Stellar public key (G...)
  timestamp: string;         // ISO 8601
  metadata?: {
    device?: string;
    location?: string;
    aiModel?: string;
    [key: string]: string | undefined; // additional creator-supplied fields
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

/** Evidence produced by the TEE oracle and checked against the registry contract. */
export interface AttestationEvidence {
  enclave: string;               // e.g. "AWS Nitro Enclave"
  attestationHash: string;
  attestationValid: boolean;     // signed attestation document verified
  teeCodeHash: string;
  teeCodeHashApproved: boolean;  // registry.is_approved(teeCodeHash)
  contentHashMatches: boolean;   // recomputed media hash equals manifest.contentHash
  creatorSigned: boolean;        // creator authorised the request with their Stellar key
}

export type ProvenanceEventType =
  | "manifest_created"
  | "uploaded"
  | "verification_requested"
  | "attestation_generated"
  | "certificate_minted"
  | "verification_failed";

export interface ProvenanceEvent {
  type: ProvenanceEventType;
  timestamp: string;             // ISO 8601
  actor?: string;                // Stellar public key or service name
  detail?: string;
  txHash?: string;               // Stellar transaction hash, for on-chain events
}

/** Everything the UI needs to present one verified (or in-progress) asset. */
export interface VerificationRecord {
  id: string;
  title: string;
  mediaType: "image" | "video" | "audio" | "document";
  status: VerificationStatus;
  manifest: ContentManifest;
  cert?: ProvenanceCert;         // present once minted
  evidence?: AttestationEvidence; // present once the oracle has run
  timeline: ProvenanceEvent[];
}
