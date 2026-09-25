import { HashComparison } from "@/components/HashComparison";

export default function Verify() {
  return (
    <main>
      <h1>Verify a file</h1>
      <p>Check whether a file is exactly the one recorded in a StellarVeriphy provenance record.</p>
      <HashComparison />
    </main>
  );
}
