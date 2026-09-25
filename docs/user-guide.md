# StellarVeriphy User Guide

## Verification confidence score

Every item on StellarVeriphy shows a **confidence score from 0 to 100**. It tells you how much verified evidence backs the content. It does not tell you whether what the content shows is true: a score of 100 means the file is exactly what its creator registered and that it was checked by an approved verifier.

In the app, select the **?** icon next to any score for a short summary. You can reach it with the mouse, a tap, or the keyboard (Tab to focus it, Escape to close).

### How the score is calculated

The score is the sum of the points for each check that passes:

| Check | Points | What it means |
|---|---|---|
| Secure check completed | 35 | A tamper-proof secure enclave (AWS Nitro Enclave) checked the file and signed an attestation proving the check ran correctly. |
| Approved verifier | 25 | The code hash of the software that ran the check is approved in the on-chain registry contract. |
| File unchanged | 20 | The SHA-256 hash of the stored file matches the `contentHash` in the creator's manifest. |
| Creator signed | 10 | The creator authorised the submission with their Stellar account. |
| Origin details provided | 10 | Partial credit for each of the manifest's standard metadata fields that is filled in: `device`, `location`, `aiModel`. Each is worth about 3 points. Custom fields are shown but not scored. |

Checks that have not run yet earn 0 points, so content that is still pending or processing scores low until verification finishes.

### Score levels

| Level | Range | Meaning |
|---|---|---|
| High | 85–100 | All key checks passed. A High score is only possible when the secure check, approved verifier and file-unchanged checks all pass. |
| Medium | 50–84 | Most checks passed, but at least one failed or evidence is missing. Check the evidence summary to see which. |
| Low | 0–49 | Important checks failed or have not run yet. |

For example, a file that passed every check but whose creator gave no device, location or AI-model details scores 90 (High). A file changed after its manifest was created loses the 20 "File unchanged" points, so it can score at most 80 and never reaches High. Verification also fails and no certificate is issued, so always check the status next to the score.

> The scoring model is defined in `packages/shared/scoring/confidence.ts`. The in-app tooltip is generated from that file. If you change the weights or levels, update this page too.

## Viewing a certificate

Open any item from **Explore** to see its certificate page:

- **Evidence summary**: each scoring check and whether it passed.
- **History**: every step from manifest creation to minting, with Stellar transaction hashes for on-chain events.
- **Provenance**: the creator's Stellar account, when the content was created, and any origin details they provided. Fields the creator left out are shown as "Not provided".
- **Certificate**: the on-chain certificate ID, storage reference, and the hashes you can use to check the record yourself.
