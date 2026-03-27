import Navbar from "./Navbar";

const providers = [
  "Dr. Adam Williams",
  "Dr. Anees Shukkoor",
  "Dr. Brett Orr",
  "Dr. Codruta Abhilash",
  "Dr. Connor Low",
  "Dr. Darin Orr",
  "Dr. David Stewart",
  "Dr. Genevieve Nwankwo",
  "Dr. Joel Weaver",
  "Dr. Mark Cahill",
  "Dr. Nita Vankwani",
  "Dr. Robert Low",
  "Dr. Wayne Burton",
  "Kimberly Wescott, NP",
].sort((a, b) => {
  const getLastName = (name: string) => {
    const parts = name.replace("Dr. ", "").split(" ");
    return parts[parts.length - 1];
  };

  return getLastName(a).localeCompare(getLastName(b));
});

export default function Main() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.10),transparent_35%),radial-gradient(circle_at_left,rgba(16,185,129,0.08),transparent_30%)]" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 py-8 lg:px-8 lg:py-10">
          <Navbar />

          <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
                Welcome to Family Medical Centre
              </span>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Friendly family care in Lethbridge.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                A modern family practice focused on accessible, compassionate
                care for patients and families in our community.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:4033282326"
                  className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Contact the Clinic
                </a>
                <a
                  href="#hours"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-white"
                >
                  See Hours
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <div className="w-full overflow-hidden bg-slate-100">
                <img
                  src="/clinic.jpeg"
                  alt="Family Medical Centre building"
                  className="w-full h-auto"
                />
              </div>

              <div className="grid gap-3 border-t border-slate-200 bg-white p-4 sm:grid-cols-3 sm:p-5">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                    Location
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-950">
                    2931 20 Ave S
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Lethbridge, AB T1K 3M5
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                    Phone
                  </p>
                  <a
                    href="tel:4033282326"
                    className="mt-2 block text-sm font-semibold text-slate-950 hover:text-sky-700"
                  >
                    403-328-2326
                  </a>
                  <p className="mt-1 text-sm text-slate-600">
                    Available by phone after 8:30 am
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                    Fax
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-950">
                    403-942-4565
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Professional clinic contact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-10">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
                Primary Care Providers
              </p>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
                Our medical team
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              Experienced providers offering family-focused care in a calm and
              professional setting.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {providers.map((provider) => (
              <div
                key={provider}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-800 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-900"
              >
                {provider}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-12 lg:grid-cols-3 lg:px-8 lg:pb-16">
        <div
          id="hours"
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
            Clinic Hours
          </p>
          <div className="mt-5 space-y-4">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <h3 className="font-medium text-slate-950">Monday - Thursday</h3>
                <p className="text-sm text-slate-500">Regular clinic hours</p>
              </div>
              <p className="font-semibold text-slate-900">8:15 am - 5:00 pm</p>
            </div>

            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <h3 className="font-medium text-slate-950">Friday</h3>
                <p className="text-sm text-slate-500">Shorter clinic hours</p>
              </div>
              <p className="font-semibold text-slate-900">8:15 am - 4:00 pm</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
              Available by phone after{" "}
              <span className="font-semibold text-slate-900">8:30 am</span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
            Contact
          </p>
          <div className="mt-5 space-y-4 text-sm text-slate-600">
            <div>
              <p className="text-slate-500">Phone</p>
              <a
                href="tel:4033282326"
                className="mt-1 block text-lg font-semibold text-slate-950 hover:text-sky-700"
              >
                (403) 328-2326
              </a>
            </div>

            <div>
              <p className="text-slate-500">Fax</p>
              <p className="mt-1 text-lg font-semibold text-slate-950">
                (403) 942-4565
              </p>
            </div>

            <div>
              <p className="text-slate-500">Address</p>
              <p className="mt-1 leading-7 text-slate-900">
                Family Medical Centre
                <br />
                2931 20 Ave S
                <br />
                Lethbridge, AB T1K 3M5
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
            Office Manager
          </p>
          <h3 className="mt-4 text-2xl font-semibold">Barb McNabb</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Supporting day-to-day clinic operations and helping keep patient
            care running smoothly.
          </p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
            Serving families with a simple, welcoming, and professional clinic
            experience.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-slate-950">Find Us</h3>
            <p className="mt-2 text-sm text-slate-600">
              Conveniently located in Lethbridge, Alberta.
            </p>
          </div>

          <div className="aspect-[16/9] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51317.24755911184!2d-112.85076672054677!3d49.67314098547702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536e86696d8444b5%3A0x6387e1cbd1ce9b1a!2sFamily%20Medical%20Centre!5e1!3m2!1sen!2sca!4v1774555107004!5m2!1sen!2sca"
              className="h-full w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Family Medical Centre map"
            />
          </div>
        </div>
      </section>
    </main>
  );
}