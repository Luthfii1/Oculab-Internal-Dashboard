import Link from "next/link";

export default function RecordingMethodsPage() {
  return (
    <main className="mx-auto max-w-2xl space-y-5 p-5 text-slate-900">
      <Link href="/dashboard" className="text-purple-700 underline">
        Dashboard
      </Link>
      <h1 className="text-3xl font-semibold">iOS recording methods</h1>
      <p>
        Sign in to Oculab on your iPhone and open the camera. Before each
        recording, choose Full video to send the recording or FOV on iPhone to
        select fields on the phone and send the selected images for analysis.
      </p>
    </main>
  );
}
