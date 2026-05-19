'use client';

import { useEffect } from 'react';

export default function AlbedoCallbackPage() {
  useEffect(() => {
    const params = Object.fromEntries(new URLSearchParams(window.location.search));

    if (window.opener) {
      window.opener.postMessage({ type: 'ALBEDO_RESULT', payload: params }, window.location.origin);
    }

    window.close();
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100">
      <p className="rounded-3xl border border-slate-800 bg-slate-900/90 px-6 py-4 text-center text-sm">
        Connecting wallet…
      </p>
    </main>
  );
}
