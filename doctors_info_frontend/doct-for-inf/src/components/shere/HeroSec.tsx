"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  HeartPulse,
  Hospital,
  MapPin,
  Search,
  ShieldCheck,
  Stethoscope,
  UserRound,
} from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7faff]">

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      {/* Main blue glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-blue-200/40 blur-3xl" />

      {/* Cyan glow */}
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-200/30 blur-3xl" />

      {/* Small decorative circles */}
      <div className="pointer-events-none absolute right-[18%] top-[18%] hidden h-3 w-3 rounded-full bg-blue-300/60 lg:block" />

      <div className="pointer-events-none absolute left-[12%] top-[30%] hidden h-2 w-2 rounded-full bg-cyan-400/60 lg:block" />

      {/* =====================================================
          HERO CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

        {/* =================================================
            TOP BADGE
        ================================================== */}

        <div className="flex justify-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-4 py-2 shadow-[0_10px_35px_-15px_rgba(37,99,235,0.35)] backdrop-blur">

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50">
              <HeartPulse
                size={12}
                className="text-blue-600"
              />
            </span>

            <span className="text-xs font-semibold text-slate-500 sm:text-sm">
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

        {/* =================================================
            MAIN HERO GRID
        ================================================== */}

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="text-center lg:text-left">

            {/* Small label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/70 px-3 py-1.5">

              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
                Your Healthcare Directory
              </span>

            </div>

            {/* Main heading */}
            <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[58px]">

              Find the right
              <span className="block">
                healthcare
              </span>

              <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                with confidence.
              </span>

            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-500 sm:text-base lg:mx-0 lg:text-lg lg:leading-8">
              Discover doctors, hospitals and diagnostic centers
              with useful information about specialties, locations,
              services and contact details — all in one place.
            </p>

            {/* =================================================
                SEARCH BOX
            ================================================== */}

            <div className="mt-8">

              <div className="rounded-[26px] border border-white bg-white/95 p-2 shadow-[0_25px_70px_-25px_rgba(37,99,235,0.28)] ring-1 ring-slate-100 backdrop-blur">

                <div className="flex flex-col gap-2 lg:flex-row lg:items-center">

                  {/* LOCATION */}
                  <div className="group flex min-h-[64px] flex-1 items-center gap-3 rounded-[19px] px-4 transition hover:bg-blue-50/70">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 transition group-hover:bg-blue-100">
                      <MapPin
                        size={19}
                        className="text-blue-600"
                      />
                    </div>

                    <div className="min-w-0 flex-1 text-left">

                      <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
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
                  <div className="hidden h-9 w-px bg-slate-200 lg:block" />

                  {/* FIND */}
                  <div className="group flex min-h-[64px] flex-1 items-center gap-3 rounded-[19px] px-4 transition hover:bg-blue-50/70">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 transition group-hover:bg-blue-100">
                      <Stethoscope
                        size={19}
                        className="text-blue-600"
                      />
                    </div>

                    <div className="min-w-0 flex-1 text-left">

                      <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
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
                  <Link
                    href="/doctors"
                    className="group flex min-h-[58px] items-center justify-center gap-2 rounded-[18px] bg-blue-600 px-7 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl active:scale-[0.98]"
                  >
                    <Search
                      size={18}
                      className="transition-transform duration-200 group-hover:scale-110"
                    />

                    <span>Search</span>

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </Link>

                </div>
              </div>

              {/* Popular searches */}
              <div className="mt-3 flex flex-wrap items-center justify-center gap-2 lg:justify-start">

                <span className="mr-1 text-[11px] font-medium text-slate-400">
                  Popular:
                </span>

                {[
                  "Cardiologist",
                  "Dentist",
                  "Neurologist",
                  "Dermatologist",
                ].map((item) => (
                  <Link
                    key={item}
                    href={`/doctors?specialty=${item}`}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-500 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md"
                  >
                    {item}
                  </Link>
                ))}

              </div>
            </div>

            {/* =================================================
                CTA BUTTONS
            ================================================== */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:justify-start">

              <Link
                href="/doctors"
                className="group flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_30px_-12px_rgba(37,99,235,0.7)] transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                <Stethoscope size={17} />

                <span>Find a Doctor</span>

                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/join-doctor"
                className="group flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
              >
                <UserRound
                  size={17}
                  className="transition group-hover:scale-105"
                />

                <span>Join as Doctor</span>
              </Link>

            </div>

            {/* =================================================
                TRUST POINTS
            ================================================== */}

            <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-3 lg:justify-start">

              {[
                "Trusted Information",
                "Easy Search",
                "Healthcare Near You",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 text-xs font-medium text-slate-400"
                >
                  <CheckCircle2
                    size={15}
                    className="text-emerald-500"
                  />

                  <span>{item}</span>

                  {index !== 2 && (
                    <span className="ml-3 hidden h-3 w-px bg-slate-200 sm:block" />
                  )}
                </div>
              ))}

            </div>
          </div>

          {/* =================================================
              RIGHT VISUAL
          ================================================== */}

          <div className="relative mx-auto w-full max-w-[540px]">

            {/* Background glow */}
            <div className="absolute inset-8 rounded-full bg-blue-200/40 blur-3xl" />

            {/* Main glass container */}
            <div className="relative rounded-[34px] border border-white/80 bg-white/60 p-4 shadow-[0_30px_80px_-25px_rgba(37,99,235,0.28)] backdrop-blur-xl sm:p-5">

              {/* Main healthcare card */}
              <div className="overflow-hidden rounded-[27px] border border-slate-100 bg-white shadow-xl">

                {/* Card header */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 sm:p-7">

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white">
                        <HeartPulse size={22} />
                      </div>

                      <div>
                        <p className="text-xs font-medium text-blue-100">
                          DocFind
                        </p>

                        <h3 className="text-lg font-bold text-white">
                          Healthcare Directory
                        </h3>
                      </div>

                    </div>

                    <div className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-[10px] font-bold text-emerald-100">
                      VERIFIED
                    </div>

                  </div>

                  {/* Search preview */}
                  <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3.5 ring-1 ring-white/10">

                    <Search
                      size={18}
                      className="text-blue-100"
                    />

                    <span className="text-sm font-medium text-white/80">
                      Search healthcare...
                    </span>

                  </div>
                </div>

                {/* Categories */}
                <div className="p-5 sm:p-6">

                  <div className="grid grid-cols-3 gap-3">

                    {/* Doctor */}
                    <Link
                      href="/doctors"
                      className="group rounded-2xl border border-slate-100 bg-slate-50 p-4 text-center transition hover:-translate-y-1 hover:border-blue-100 hover:bg-blue-50"
                    >
                      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                        <Stethoscope size={21} />
                      </div>

                      <p className="mt-3 text-xs font-bold text-slate-700">
                        Doctors
                      </p>
                    </Link>

                    {/* Hospital */}
                    <Link
                      href="/hospitals"
                      className="group rounded-2xl border border-slate-100 bg-slate-50 p-4 text-center transition hover:-translate-y-1 hover:border-emerald-100 hover:bg-emerald-50"
                    >
                      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition group-hover:bg-emerald-600 group-hover:text-white">
                        <Hospital size={21} />
                      </div>

                      <p className="mt-3 text-xs font-bold text-slate-700">
                        Hospitals
                      </p>
                    </Link>

                    {/* Diagnostic */}
                    <Link
                      href="/diagnostic"
                      className="group rounded-2xl border border-slate-100 bg-slate-50 p-4 text-center transition hover:-translate-y-1 hover:border-violet-100 hover:bg-violet-50"
                    >
                      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                        <Building2 size={21} />
                      </div>

                      <p className="mt-3 text-xs font-bold text-slate-700">
                        Diagnostics
                      </p>
                    </Link>

                  </div>

                  {/* Info rows */}
                  <div className="mt-5 space-y-3">

                    {/* Verified */}
                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                          <BadgeCheck size={18} />
                        </div>

                        <div>
                          <p className="text-xs font-bold text-slate-800">
                            Verified Information
                          </p>

                          <p className="text-[10px] text-slate-400">
                            Clear & organized details
                          </p>
                        </div>

                      </div>

                      <CheckCircle2
                        size={17}
                        className="text-emerald-500"
                      />

                    </div>

                    {/* Location */}
                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                          <MapPin size={18} />
                        </div>

                        <div>
                          <p className="text-xs font-bold text-slate-800">
                            Healthcare Near You
                          </p>

                          <p className="text-[10px] text-slate-400">
                            Explore by location
                          </p>
                        </div>

                      </div>

                      <ArrowRight
                        size={16}
                        className="text-slate-300"
                      />

                    </div>

                  </div>
                </div>
              </div>

              {/* =================================================
                  FLOATING CARD - VERIFIED
              ================================================== */}

              <div className="absolute -left-4 top-[22%] hidden w-[185px] rounded-2xl border border-white bg-white p-3 shadow-[0_20px_45px_-15px_rgba(15,23,42,0.2)] sm:block">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <ShieldCheck size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-800">
                      Trusted
                    </p>

                    <p className="text-[10px] text-slate-400">
                      Healthcare information
                    </p>
                  </div>

                </div>
              </div>

              {/* =================================================
                  FLOATING CARD - OPEN
              ================================================== */}

              <div className="absolute -right-4 bottom-[20%] hidden w-[175px] rounded-2xl border border-white bg-white p-3 shadow-[0_20px_45px_-15px_rgba(15,23,42,0.2)] sm:block">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Clock3 size={19} />
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                      <p className="text-xs font-bold text-slate-800">
                        Available
                      </p>
                    </div>

                    <p className="mt-0.5 text-[10px] text-slate-400">
                      Find care anytime
                    </p>
                  </div>

                </div>
              </div>

            </div>

            {/* =================================================
                BOTTOM MINI STATS
            ================================================== */}

            <div className="relative mt-4 grid grid-cols-3 gap-3">

              <div className="rounded-2xl border border-white bg-white/80 p-3 text-center shadow-sm backdrop-blur">
                <Stethoscope
                  size={17}
                  className="mx-auto text-blue-600"
                />

                <p className="mt-1.5 text-[10px] font-bold text-slate-700 sm:text-xs">
                  Doctors
                </p>
              </div>

              <div className="rounded-2xl border border-white bg-white/80 p-3 text-center shadow-sm backdrop-blur">
                <Hospital
                  size={17}
                  className="mx-auto text-emerald-600"
                />

                <p className="mt-1.5 text-[10px] font-bold text-slate-700 sm:text-xs">
                  Hospitals
                </p>
              </div>

              <div className="rounded-2xl border border-white bg-white/80 p-3 text-center shadow-sm backdrop-blur">
                <Building2
                  size={17}
                  className="mx-auto text-violet-600"
                />

                <p className="mt-1.5 text-[10px] font-bold text-slate-700 sm:text-xs">
                  Diagnostics
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* =================================================
            BOTTOM TRUST STRIP
        ================================================== */}

        <div className="mt-14 border-t border-slate-200/70 pt-6 lg:mt-16">

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center sm:justify-between">

            <div className="flex items-center gap-2">

              <CheckCircle2
                size={17}
                className="text-emerald-500"
              />

              <span className="text-xs font-semibold text-slate-500">
                Easy Healthcare Search
              </span>

            </div>

            <div className="hidden h-4 w-px bg-slate-200 sm:block" />

            <div className="flex items-center gap-2">

              <MapPin
                size={17}
                className="text-blue-500"
              />

              <span className="text-xs font-semibold text-slate-500">
                Search by Location
              </span>

            </div>

            <div className="hidden h-4 w-px bg-slate-200 sm:block" />

            <div className="flex items-center gap-2">

              <ShieldCheck
                size={17}
                className="text-blue-500"
              />

              <span className="text-xs font-semibold text-slate-500">
                Organized Information
              </span>

            </div>

            <div className="hidden h-4 w-px bg-slate-200 sm:block" />

            <div className="flex items-center gap-2">

              <HeartPulse
                size={17}
                className="text-rose-500"
              />

              <span className="text-xs font-semibold text-slate-500">
                Patient Focused
              </span>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}