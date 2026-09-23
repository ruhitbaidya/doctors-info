"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileCheck2,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Stethoscope,
  UserRound,
  UsersRound,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const benefits = [
  {
    icon: UserRound,
    title: "Professional Profile",
    description:
      "Create a clear and professional profile that helps patients understand your qualifications, specialty and services.",
  },
  {
    icon: Search,
    title: "Be Easier to Find",
    description:
      "Help patients discover your name, specialty, workplace and chamber information in one convenient place.",
  },
  {
    icon: Building2,
    title: "Show Your Chambers",
    description:
      "Present your hospital, clinic, chamber address and visiting schedule in an organized way.",
  },
  {
    icon: Clock3,
    title: "Keep Information Updated",
    description:
      "Make it easier to keep your professional and chamber information accurate and up to date.",
  },
];

const steps = [
  {
    number: "01",
    icon: FileCheck2,
    title: "Share Your Information",
    description:
      "Provide your professional details, qualifications, specialty and chamber information.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Information Review",
    description:
      "Our team reviews the submitted information before your professional profile is published.",
  },
  {
    number: "03",
    icon: BadgeCheck,
    title: "Build Your Profile",
    description:
      "Once approved, your information can be presented as a professional DocFind doctor profile.",
  },
];

const faqs = [
  {
    question: "Who can join DocFind?",
    answer:
      "Eligible medical professionals can contact DocFind and submit their professional information for review.",
  },
  {
    question: "What information should I prepare?",
    answer:
      "Keep your name, degrees, specialty, professional registration details, workplace, chamber information, visiting hours and appointment contact ready.",
  },
  {
    question: "Can I add more than one chamber?",
    answer:
      "Yes. If you practice at multiple locations, the profile can be structured to show your relevant chamber information.",
  },
  {
    question: "Can my information be updated later?",
    answer:
      "Yes. Professional information such as chamber details, visiting hours and contact information may need updates over time.",
  },
];

export default function JoinDoctorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7faff] text-slate-900">
      {/* =========================================================
          HERO SECTION
      ========================================================== */}
      <section className="relative">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-64 w-64 rounded-full bg-indigo-100/40 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            {/* LEFT */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Join DocFind as a Doctor
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Make your professional
                <span className="block bg-gradient-to-r from-blue-700 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                  presence easier to find.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Your medical expertise deserves a professional digital
                presence. Join DocFind and help patients discover your
                specialty, qualifications, chambers and consultation
                information in one organized place.
              </p>

              {/* Motivation */}
              <div className="mt-8 rounded-3xl border border-blue-100 bg-white/80 p-5 shadow-[0_20px_60px_-30px_rgba(37,99,235,0.35)] backdrop-blur sm:p-6">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                    <Stethoscope className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Your work matters. Let patients find it.
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Patients often need clear information before choosing
                      where to seek care. A well-organized professional
                      profile can make your qualifications, specialty and
                      practice information easier to understand.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#apply"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  Start Your Profile
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>

                <a
                  href="#benefits"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700"
                >
                  See Benefits
                </a>
              </div>
            </div>

            {/* RIGHT - PREMIUM PROFILE PREVIEW */}
            <div className="relative mx-auto w-full max-w-xl">
              {/* Floating badge */}
              <div className="absolute -left-3 top-10 z-20 hidden rounded-2xl border border-white/70 bg-white px-4 py-3 shadow-xl sm:flex sm:items-center sm:gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50">
                  <BadgeCheck className="h-5 w-5 text-emerald-600" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-500">
                    Professional
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    Profile Ready
                  </p>
                </div>
              </div>

              {/* Main card */}
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_35px_100px_-35px_rgba(15,23,42,0.35)]">
                {/* Card top */}
                <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 px-6 pb-20 pt-7 sm:px-8">
                  <div className="absolute right-[-50px] top-[-70px] h-48 w-48 rounded-full bg-white/10" />
                  <div className="absolute bottom-[-80px] left-20 h-44 w-44 rounded-full bg-cyan-300/20 blur-2xl" />

                  <div className="relative flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
                        DocFind
                      </p>
                      <p className="mt-1 text-sm font-medium text-white/90">
                        Professional Doctor Profile
                      </p>
                    </div>

                    <div className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
                      Verified Info
                    </div>
                  </div>
                </div>

                {/* Profile */}
                <div className="relative -mt-14 px-5 pb-7 sm:px-7">
                  <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-xl">
                    <div className="flex gap-4">
                      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100">
                        <UserRound className="h-9 w-9 text-blue-600" />
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-black text-slate-900">
                            Dr. Your Name
                          </h3>

                          <BadgeCheck className="h-4 w-4 text-blue-600" />
                        </div>

                        <p className="mt-1 text-sm font-semibold text-blue-600">
                          MBBS, FCPS
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          Specialist • Your Specialty
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      <ProfileInfo
                        icon={Building2}
                        title="Workplace"
                        value="Your Hospital / Clinic"
                      />

                      <ProfileInfo
                        icon={Clock3}
                        title="Visiting Hours"
                        value="5:00 PM — 9:00 PM"
                      />

                      <ProfileInfo
                        icon={MapPinIcon}
                        title="Chamber"
                        value="Dhaka, Bangladesh"
                      />

                      <ProfileInfo
                        icon={Phone}
                        title="Appointment"
                        value="01XXXXXXXXX"
                      />
                    </div>

                    <div className="mt-5 flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                      <div>
                        <p className="text-xs text-slate-500">
                          Profile information
                        </p>
                        <p className="mt-0.5 text-sm font-bold text-slate-800">
                          Clear & organized
                        </p>
                      </div>

                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom floating card */}
              <div className="absolute -bottom-5 -right-2 hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-2xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                    <UsersRound className="h-5 w-5 text-blue-600" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Patient-friendly</p>
                    <p className="text-sm font-bold text-slate-900">
                      Information in one place
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BENEFITS
      ========================================================== */}
      <section id="benefits" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Why join DocFind?
            </span>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              More than just a doctor listing.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Build a clear digital identity that gives patients useful
              information before they contact your chamber.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_-25px_rgba(37,99,235,0.35)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          MOTIVATIONAL SECTION
      ========================================================== */}
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
            <Stethoscope className="h-6 w-6 text-cyan-300" />
          </div>

          <h2 className="mx-auto mt-7 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
            “Your knowledge can change a life.
            <span className="text-cyan-300">
              {" "}
              Let people find the right doctor.
            </span>
            ”
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
            Every day, patients search for the right specialist, the right
            chamber and the right information. A professional online profile
            can help make that journey simpler.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              Your Expertise
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              Your Experience
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              Your Practice
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================== */}
      <section className="bg-[#f7faff] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                Simple process
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Getting started is simple.
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-slate-600">
                Share your professional information with our team and take the
                first step toward creating a clear digital profile.
              </p>

              <a
                href="#apply"
                className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="space-y-4">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="flex gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
                  >
                    <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <span className="text-[10px] font-black">
                        {step.number}
                      </span>
                      <Icon className="mt-1 h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {step.title}
                      </h3>

                      <p className="mt-1.5 text-sm leading-6 text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          APPLICATION CTA
      ========================================================== */}
      <section id="apply" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-7 text-white shadow-[0_30px_80px_-30px_rgba(37,99,235,0.55)] sm:p-10 lg:p-14">
            <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-white/10" />
            <div className="absolute bottom-[-100px] left-[-50px] h-64 w-64 rounded-full bg-cyan-300/10 blur-2xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold backdrop-blur">
                  <ShieldCheck className="h-4 w-4" />
                  Doctor Registration
                </div>

                <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                  Ready to build your DocFind profile?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-blue-50">
                  Send us your professional information. Our team will guide
                  you through the next steps and help organize your doctor
                  profile.
                </p>
              </div>

              <a
                href="#whatsapp"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-black text-blue-700 shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-50"
              >
                Contact Support
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================== */}
      <section className="bg-[#f7faff] py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              FAQ
            </span>

            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Before you join
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                  >
                    <span className="font-bold text-slate-900">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-slate-500 transition ${
                        isOpen ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-sm leading-7 text-slate-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHATSAPP SUPPORT
      ========================================================== */}
      <section id="whatsapp" className="bg-white px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-green-50 p-7 shadow-[0_25px_70px_-35px_rgba(16,185,129,0.4)] sm:p-10">
            {/* Decorative circles */}
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-100/70" />
            <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-green-100/60" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-lg shadow-green-500/20">
                    <MessageCircle className="h-7 w-7" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-emerald-700">
                      Doctor Support
                    </p>

                    <h2 className="text-2xl font-black text-slate-950">
                      Need help joining?
                    </h2>
                  </div>
                </div>

                <p className="mt-5 max-w-2xl leading-7 text-slate-600">
                  If you have questions about registration, required
                  information, profile updates or the joining process, contact
                  our support team directly on WhatsApp.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm ring-1 ring-slate-100">
                    Registration Help
                  </span>

                  <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm ring-1 ring-slate-100">
                    Profile Support
                  </span>

                  <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm ring-1 ring-slate-100">
                    Information Update
                  </span>
                </div>
              </div>

              {/* CHANGE THIS NUMBER */}
              <a
                href="https://wa.me/8801XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-7 py-4 text-sm font-black text-white shadow-xl shadow-green-500/20 transition hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Bottom note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500">
              We believe better healthcare information starts with better
              professional information.
            </p>

            <Link
              href="/"
              className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700"
            >
              Back to DocFind
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   SMALL PROFILE INFO COMPONENT
========================================================= */

function ProfileInfo({
  icon: Icon,
  title,
  value,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3.5">
      <div className="flex items-start gap-3">
        <Icon className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />

        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            {title}
          </p>

          <p className="mt-1 truncate text-xs font-bold text-slate-700">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAP PIN ICON
========================================================= */

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}