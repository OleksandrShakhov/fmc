export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-semibold text-slate-950">Family Medical Centre</p>
          <p className="mt-1">2931 20 Ave S, Lethbridge, AB, T1K 3M5</p>
        </div>

        <div className="flex flex-col gap-1 sm:text-right">
          <p>Phone: 403-328-2326 · Fax: 403-942-4565</p>
          <p>Monday - Thursday, 8:15 am - 5:00 pm · Friday, 8:15 am - 4:00 pm</p>
          <p>© Family Medical Centre. All rights reserved. {year}</p>
        </div>
      </div>
    </footer>
  );
}