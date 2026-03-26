import Image from "next/image";

export default function Navbar() {
  return (
    <header className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center gap-4">
        <div className="relative h-14 w-14">
          <Image
            src="/logo.png"
            alt="Family Medical Centre logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">
            Together for your health
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Family Medical Centre
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href="tel:4033282326"
          className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-sky-700"
        >
          Call 403-328-2326
        </a>
        <a
          href="https://maps.google.com/?q=2931+20+Ave+S,+Lethbridge,+AB+T1K+3M5"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
        >
          View Location
        </a>
      </div>
    </header>
  );
}