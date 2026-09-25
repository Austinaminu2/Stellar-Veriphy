import type { Metadata } from "next";
import SettingsForm from "@/components/SettingsForm";

export const metadata: Metadata = {
  title: "Settings · StellarVeriphy",
};

export default function Settings() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      <p className="mt-2 text-slate-600">Manage your profile and how your content is shared.</p>
      <div className="mt-8">
        <SettingsForm />
      </div>
    </main>
  );
}
