"use client";
import { useState } from "react";

export default function CookieBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div className="fixed inset-x-0 bottom-4 z-50 mx-auto w-[min(96%,900px)] rounded-2xl border border-white/10 bg-black/70 p-4 backdrop-blur">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-subt">
          We use cookies to enhance your experience. By continuing, you agree to
          our{" "}
          <a className="underline" href="#cookies">
            cookie policy
          </a>
          .
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setDismissed(true)}
            className="button px-4 py-2"
          >
            Accept
          </button>
          <button
            onClick={() => setDismissed(true)}
            className="rounded-full border border-white/10 px-4 py-2 text-sm"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
