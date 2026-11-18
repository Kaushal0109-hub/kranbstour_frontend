import { Reveal } from "./Reveal";

export function PartnerWith() {
  return (
    <section className="relative border-b border-neutral-100 bg-white py-7 sm:py-9">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <Reveal className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-8 xl:gap-12">
          {/* Left: Social proof pill card */}
          <div className="flex shrink-0 items-center gap-4 rounded-2xl border border-neutral-200/90 bg-white px-5 py-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            {/* Overlapping avatars stack */}
            <div className="flex items-center -space-x-3">
              <img
                src="/avatars/avatar-1.jpg"
                alt="Traveller avatar"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
              />
              <img
                src="/avatars/avatar-2.jpg"
                alt="Traveller avatar"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
              />
              <img
                src="/avatars/avatar-3.jpg"
                alt="Traveller avatar"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
              />
              <span
                aria-hidden="true"
                className="grid h-10 w-10 place-items-center rounded-full bg-[#FFE600] font-sans text-xl font-bold leading-none text-neutral-950 ring-2 ring-white select-none"
              >
                +
              </span>
            </div>

            {/* Text beside avatars */}
            <div className="text-[0.88rem] leading-[1.3] text-neutral-800">
              <p>
                <strong className="font-bold text-neutral-950">148</strong> people used{" "}
                <strong className="font-bold text-neutral-950">Kranbstour</strong> in
              </p>
              <p>
                the last <strong className="font-bold text-neutral-950">24 hours</strong>
              </p>
            </div>
          </div>

          {/* Middle: Partner with heading & subtext */}
          <div className="flex shrink-0 flex-col text-center lg:text-left">
            <h3 className="font-sans text-[1.65rem] font-bold tracking-tight text-neutral-950 leading-tight">
              Partner with
            </h3>
            <p className="mt-1 max-w-[285px] font-sans text-[0.84rem] leading-snug text-neutral-500">
              We are a trusted partner of Viator, Trip advisor.
            </p>
          </div>

          {/* Right: Partner Logo Cards (Only Viator and TripAdvisor) */}
          <div className="flex items-center justify-center gap-3.5 sm:gap-4 shrink-0">
            {/* 1. Viator Card */}
            <div className="flex h-14 w-32 items-center justify-center rounded-xl border border-neutral-200/90 bg-white p-3 transition-shadow hover:shadow-xs sm:h-16 sm:w-36">
              <img
                src="/partners/v.avif"
                alt="Viator"
                className="max-h-8 w-auto max-w-[85%] object-contain"
              />
            </div>

            {/* 2. TripAdvisor Card */}
            <div className="flex h-14 w-32 items-center justify-center rounded-xl border border-neutral-200/90 bg-white p-3 transition-shadow hover:shadow-xs sm:h-16 sm:w-36">
              <img
                src="/partners/trip.avif"
                alt="Tripadvisor"
                className="max-h-8 w-auto max-w-[85%] object-contain"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
