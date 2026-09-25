import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StellarVeriphy",
  description: "Decentralized content verification on the Stellar blockchain",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <a href="/">StellarVeriphy</a>
          <a href="/creator/upload-content">Upload</a>
          <a href="/creator/jobs">My jobs</a>
          <a href="/verify">Verify a file</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
