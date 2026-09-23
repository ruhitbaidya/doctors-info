"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronRight,
  HeartPulse,
  Hospital,
  MapPin,
  Search,
  ShieldCheck,
  Stethoscope,
  Target,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Stethoscope,
    title: "Find Doctors",
    description:
      "Explore doctors by specialty, location, chamber information and professional details.",
  },
  {
    icon: Hospital,
    title: "Discover Hospitals",
    description:
      "Find hospitals with location, emergency services, departments, contact information and facilities.",
  },
  {
    icon: Building2,
    title: "Diagnostic Centers",
    description:
      "Discover diagnostic centers and explore their services, location and important contact details.",
  },
  {
    icon: Search,
    title: "Easy Search",
    description:
      "Search and filter healthcare information quickly without going through complicated websites.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Reliable Information",
    description:
      "We aim to organize healthcare information clearly and keep important details as useful and up to date as possible.",
  },
  {
    icon: HeartPulse,
    title: "Patient First",
    description:
      "Every part of DocFind is designed around making healthcare information easier to discover and understand.",
  },
  {
    icon: BadgeCheck,
    title: "Transparency",
    description:
      "We believe healthcare information should be presented clearly without misleading claims or unnecessary complexity.",
  },
];

const steps = [
  {
    number: "01",
    title: "Search",
    description:
      "Start by searching for a doctor, hospital or diagnostic center.",
  },
  {
    number: "02",
    title: "Explore",
    description:
      "Check important information such as specialty, location, services and contact details.",
  },
  {
    number: "03",
    title: "Connect",
    description:
      "Use the available contact information to communicate directly with the healthcare provider.",
  },
];

const stats = [
  {
    value: "Doctors",
    label: "Specialist information",
  },
  {
    value: "Hospitals",
    label: "Healthcare facilities",
  },
  {
    value: "Diagnostics",
    label: "Diagnostic centers",
  },
  {
    value: "64",
    label: "Districts across Bangladesh",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-slate-950">

        {/* Background decoration */}
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Left */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                <HeartPulse size={16} />
                Healthcare made easier
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Making healthcare
                <span className="block text-blue-400">
                  information easier to find.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                DocFind is a healthcare information platform designed to
                help people discover doctors, hospitals and diagnostic
                centers in one simple and organized place.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <Link
                  href="/doctors"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Find a Doctor
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/hospitals"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Hospitals
                  <ChevronRight size={17} />
                </Link>

              </div>
            </div>

            {/* Right visual */}
            <div className="relative mx-auto w-full max-w-xl">

              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur">

                {/* Main card */}
                <div className="rounded-2xl bg-white p-6 shadow-xl">

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500">
                        Healthcare Directory
                      </p>

                      <h3 className="mt-1 text-xl font-bold text-slate-900">
                        Find what you need
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Search size={22} />
                    </div>
                  </div>

                  {/* Search mockup */}
                  <div className="mt-6 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <Search
                      size={19}
                      className="text-slate-400"
                    />

                    <span className="text-sm text-slate-400">
                      Search doctors, hospitals...
                    </span>
                  </div>

                  {/* Categories */}
                  <div className="mt-5 grid grid-cols-3 gap-3">

                    <div className="rounded-xl bg-blue-50 p-4 text-center">
                      <Stethoscope
                        size={21}
                        className="mx-auto text-blue-600"
                      />
                      <p className="mt-2 text-xs font-semibold text-slate-700">
                        Doctors
                      </p>
                    </div>

                    <div className="rounded-xl bg-emerald-50 p-4 text-center">
                      <Hospital
                        size={21}
                        className="mx-auto text-emerald-600"
                      />
                      <p className="mt-2 text-xs font-semibold text-slate-700">
                        Hospitals
                      </p>
                    </div>

                    <div className="rounded-xl bg-violet-50 p-4 text-center">
                      <Building2
                        size={21}
                        className="mx-auto text-violet-600"
                      />
                      <p className="mt-2 text-xs font-semibold text-slate-700">
                        Diagnostics
                      </p>
                    </div>

                  </div>

                  {/* Small info */}
                  <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-green-600">
                      <CheckCircle2 size={18} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        Simple & organized
                      </p>

                      <p className="text-xs text-slate-500">
                        Healthcare information in one place
                      </p>
                    </div>
                  </div>

                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <ShieldCheck size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Built for trust
                    </p>

                    <p className="text-xs text-slate-500">
                      Clear healthcare information
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO / ABOUT
      ====================================================== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              About DocFind
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Healthcare information,
              <span className="text-blue-600"> simplified.</span>
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Finding healthcare information should not require searching
              through many different websites, social media pages or
              scattered phone numbers. DocFind is built to bring useful
              healthcare information together in one clean and accessible
              platform.
            </p>

          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-4">

            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`p-6 text-center sm:p-8 ${
                  index !== stats.length - 1
                    ? "border-b border-slate-200 lg:border-b-0 lg:border-r"
                    : ""
                } ${
                  index === 1
                    ? "lg:border-b-0"
                    : ""
                }`}
              >
                <p className="text-xl font-bold text-blue-600 sm:text-2xl">
                  {stat.value}
                </p>

                <p className="mt-2 text-xs font-medium text-slate-500 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT WE DO
      ====================================================== */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              What we do
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need to
              <span className="text-blue-600"> explore healthcare.</span>
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              DocFind organizes important healthcare information into
              simple categories so you can find what you are looking for
              faster.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {feature.description}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION
      ====================================================== */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Mission visual */}
            <div className="relative">

              <div className="rounded-3xl bg-blue-600 p-8 sm:p-10">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
                  <Target size={28} />
                </div>

                <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-blue-200">
                  Our Mission
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Making healthcare discovery simple for everyone.
                </h2>

                <p className="mt-5 leading-7 text-blue-100">
                  Our mission is to make useful healthcare information
                  easier to discover, understand and access—whether someone
                  is searching for a specialist, hospital or diagnostic
                  center.
                </p>

              </div>

              {/* Decorative card */}
              <div className="absolute -bottom-5 -right-5 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-lg sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-600">
                    <CheckCircle2 size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Easy to explore
                    </p>

                    <p className="text-xs text-slate-500">
                      Designed for patients
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Mission content */}
            <div>

              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Why DocFind
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                One platform.
                <span className="text-blue-600">
                  {" "}Useful information.
                </span>
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Healthcare information can often be scattered across
                different sources. DocFind aims to create a more organized
                experience where people can discover essential information
                without unnecessary complexity.
              </p>

              <div className="mt-8 space-y-5">

                {[
                  "Clear doctor and healthcare provider information",
                  "Hospital and diagnostic center discovery",
                  "Simple search and category-based browsing",
                  "Mobile-friendly experience for everyday users",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={21}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />

                    <p className="text-sm font-medium leading-6 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          OUR VALUES
      ====================================================== */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Our values
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Built around
              <span className="text-blue-600"> trust.</span>
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              The platform is designed around clarity, accessibility and
              responsible presentation of healthcare information.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {value.description}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              How it works
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Find healthcare information
              <span className="text-blue-600"> in 3 steps.</span>
            </h2>

          </div>

          <div className="relative mt-14 grid gap-8 md:grid-cols-3">

            {/* Connecting line */}
            <div className="absolute left-1/2 top-12 hidden h-px w-2/3 -translate-x-1/2 bg-slate-200 md:block" />

            {steps.map((step) => (
              <div
                key={step.number}
                className="relative text-center"
              >

                <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border-8 border-white bg-blue-600 text-2xl font-bold text-white shadow-lg ring-1 ring-slate-200">
                  {step.number}
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-500">
                  {step.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          FOR DOCTORS
      ====================================================== */}
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">

            <div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                <Users size={24} />
              </div>

              <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
                Are you a doctor or healthcare provider?
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                Join DocFind and help people discover your professional
                information more easily.
              </p>

            </div>

            <Link
              href="/join-doctor"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Join as Doctor
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="bg-blue-600 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
            <MapPin size={26} />
          </div>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
            Start exploring healthcare information.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Find doctors, hospitals and diagnostic centers through a
            simple and organized healthcare directory.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              href="/doctors"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Explore Doctors
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/diagnostic"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Find Diagnostics
              <ChevronRight size={17} />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}