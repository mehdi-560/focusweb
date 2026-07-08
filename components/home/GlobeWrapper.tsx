"use client";

import dynamic from "next/dynamic";

const Globe3D = dynamic(() => import("./Globe3D"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full flex items-center justify-center"
      style={{ aspectRatio: "1/1", maxWidth: 520 }}
    >
      <div className="flex flex-col items-center gap-3">
        <div
          className="h-12 w-12 animate-spin rounded-full border-2 border-muted/20"
          style={{ borderTopColor: "var(--color-primary)" }}
        />
        <p className="text-xs text-muted">Loading globe...</p>
      </div>
    </div>
  ),
});

export default function GlobeWrapper() {
  return <Globe3D />;
}