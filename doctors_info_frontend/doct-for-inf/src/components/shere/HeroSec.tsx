"use client";

import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Search,
  Stethoscope,
  UserRound,
} from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7faff]">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[360px] w-[360px] rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-11">
        {/* TOP TYPEWRITER */}
        <div className="mb-7 flex justify-center">
          <div className="inline-flex items-center rounded-full border border-blue-100/80 bg-white px-4 py-2 shadow-[0_8px_30px_-15px_rgba(37,99,235,0.35)]">
            <span className="whitespace-nowrap text-xs font-semibold text-slate-500 sm:text-sm">
              Find{" "}
              <span className="font-bold text-blue-600">
                <Typewriter
                  words={[
                    "Trusted Doctors",
                    "Diagnostic Centers",
                    "Healthcare Services",
                    "Better Care",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={65}
                  deleteSpeed={40}
                  delaySpeed={1600}
                />
              </span>
            </span>
          </div>
        </div>

        {/* SEARCH SECTION */}
        <div className="mx-auto max-w-5xl">
          {/* Search Heading */}
          <div className="mb-4 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-blue-600 sm:text-[11px]">
              Healthcare Search
            </p>

            <h2 className="mt-1.5 text-xl font-bold tracking-tight text-slate-800 sm:text-2xl">
              Find the care you need
            </h2>
          </div>

          {/* SEARCH BOX */}
          <div className="rounded-[26px] border border-white bg-white p-2 shadow-[0_25px_70px_-30px_rgba(37,99,235,0.35)] ring-1 ring-slate-100">
            <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
              {/* LOCATION */}
              <div className="group flex min-h-[66px] flex-1 items-center gap-3 rounded-[19px] px-4 transition-all duration-200 hover:bg-blue-50/60">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 transition group-hover:bg-blue-100">
                  <MapPin size={19} className="text-blue-600" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                    Location
                  </p>

                  <input
                    type="text"
                    placeholder="City, area or location"
                    className="mt-1 w-full bg-transparent text-sm font-semibold text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* DIVIDER */}
              <div className="hidden h-10 w-px bg-slate-200 lg:block" />

              {/* FIND */}
              <div className="group flex min-h-[66px] flex-1 items-center gap-3 rounded-[19px] px-4 transition-all duration-200 hover:bg-blue-50/60">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 transition group-hover:bg-blue-100">
                  <Stethoscope size={19} className="text-blue-600" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                    Find
                  </p>

                  <input
                    type="text"
                    placeholder="Doctor, specialty or service"
                    className="mt-1 w-full bg-transparent text-sm font-semibold text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* SEARCH BUTTON */}
              <button
                type="button"
                className="group flex min-h-[60px] items-center justify-center gap-2 rounded-[18px] bg-blue-600 px-8 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25 active:scale-[0.98]"
              >
                <Search
                  size={18}
                  className="transition-transform duration-200 group-hover:scale-110"
                />
                <span>Search</span>
              </button>
            </div>
          </div>

          {/* POPULAR SEARCHES */}
          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2">
            <span className="mr-1 text-[11px] font-medium text-slate-400">
              Popular:
            </span>

            {[
              "Cardiologist",
              "Dentist",
              "Neurologist",
              "Dermatologist",
            ].map((item) => (
              <button
                key={item}
                type="button"
                className="rounded-full border border-slate-200/90 bg-white px-3.5 py-1.5 text-[11px] font-semibold text-slate-500 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {/* Find Doctor */}
          <button
            type="button"
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_25px_-10px_rgba(37,99,235,0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_16px_30px_-10px_rgba(37,99,235,0.65)] sm:w-auto"
          >
            <Search size={17} />

            <span>Find a Doctor</span>

            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>

          {/* Join Doctor */}
          <button
            type="button"
            className="group flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 hover:shadow-md sm:w-auto"
          >
            <UserRound
              size={17}
              className="transition-transform duration-200 group-hover:scale-105"
            />

            <span>Join as Doctor</span>
          </button>
        </div>

        {/* TRUST POINTS */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
            <CheckCircle2 size={15} className="text-emerald-500" />
            <span>Trusted Information</span>
          </div>

          <div className="hidden h-3 w-px bg-slate-200 sm:block" />

          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
            <CheckCircle2 size={15} className="text-emerald-500" />
            <span>Easy Search</span>
          </div>

          <div className="hidden h-3 w-px bg-slate-200 sm:block" />

          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
            <CheckCircle2 size={15} className="text-emerald-500" />
            <span>Healthcare Near You</span>
          </div>
        </div>
      </div>
    </section>
  );
}