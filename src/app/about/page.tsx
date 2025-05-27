"use client";

import AdUnit from "../ComponentFolder/AdUnit";

export default function HomePage() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Welcome</h1>
      <p>Here is a test Google Ad:</p>
      <AdUnit />
    </main>
  );
}
