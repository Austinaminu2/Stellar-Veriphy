# StellarVeriphy user guide

## Submitting content (creators)

1. Open **Upload** and choose your media file. Your browser computes the file's SHA-256 fingerprint. The file itself is not sent anywhere during this step.
2. Enter your Stellar **public** key (it starts with `G`). Never enter your secret key (`S…`); the form rejects it.
3. Set when the content was created. Optionally add the device, location and, if AI was involved, the AI model.
4. Select **Submit for verification**. If anything is missing or invalid, the form lists what to fix and highlights each field.

## Tracking verification

After you submit, your content goes into a verification queue. **My jobs** lists every submission made from this browser:

| Status | What it means | What to expect |
|--------|---------------|----------------|
| **Queued** | Waiting for a verifier | Shows your place in the queue and an estimated wait once there is recent history to base it on |
| **Running** | Being verified | Usually short; the page updates on its own |
| **Complete** | Verified | The provenance record is confirmed and anyone can check copies against it |
| **Failed** | Could not be verified | The reason is shown; fix it and submit again |

You can refresh or leave the page and come back later. Status is fetched from the server each time. Your job list is saved in this browser only, so another device or a cleared browser won't show it.

## Checking a file against its provenance record

Open **Verify a file**:

1. Choose the file you want to check. It is fingerprinted in your browser and never uploaded.
2. Paste the recorded hash from the certificate or provenance record, or select **Search StellarVeriphy records for this file**.

### Reading the result

- **✓ Match**: the file is byte-for-byte identical to the one that was recorded.
- **✗ No match**: the file differs from the recorded one. Even a one-byte change produces a completely different fingerprint, so a mismatch does not tell you *how much* changed. Common causes:
  - the file was re-saved, compressed, resized or converted (social networks and messaging apps do this automatically)
  - camera or location metadata was added or stripped
  - it is a different version or export of the same content
  - the recorded hash came from a different certificate
  
  Ask the creator for the original file, and treat the copy as unverified until the fingerprints match.
- **Can't be compared**: the pasted hash is not a valid SHA-256 value. For example, it may be too short or be an MD5 or SHA-1 hash. Differences in capital letters, spaces or a `0x` prefix are ignored automatically.

### For technical users

The fingerprint is SHA-256 over the file's raw bytes. Every file type is handled the same way, so you can reproduce it with standard tools:

```sh
sha256sum photo.jpg        # Linux
shasum -a 256 photo.jpg    # macOS
certutil -hashfile photo.jpg SHA256   # Windows
```

**Technical details** shows both hashes side by side with differing characters highlighted, along with the file size, type and hashing time.
