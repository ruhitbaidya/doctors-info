"use client";

import {
  ArrowRight,
  Baby,
  Bone,
  Brain,
  ChevronRight,
  CircleDot,
  Eye,
  HeartPulse,
  Search,
  ShieldCheck,
  Smile,
  Stethoscope,
} from "lucide-react";

const specialties = [
  {
    name: "Cardiology",
    description: "Heart & cardiovascular care",
    icon: HeartPulse,
    doctors: "120+ Doctors",
  },
  {
    name: "Neurology",
    description: "Brain & nervous system",
    icon: Brain,
    doctors: "85+ Doctors",
  },
  {
    name: "Orthopedics",
    description: "Bones, joints & muscles",
    icon: Bone,
    doctors: "95+ Doctors",
  },
  {
    name: "Dermatology",
    description: "Skin, hair & nails",
    icon: CircleDot,
    doctors: "110+ Doctors",
  },
  {
    name: "Pediatrics",
    description: "Healthcare for children",
    icon: Baby,
    doctors: "75+ Doctors",
  },
  {
    name: "Ophthalmology",
    description: "Eye & vision care",
    icon: Eye,
    doctors: "65+ Doctors",
  },
  {
    name: "Dentistry",
    description: "Teeth & oral health",
    icon: Smile,
    doctors: "90+ Doctors",
  },
];

export default function Specialties() {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff] py-20 sm:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-1.5 shadow-sm">
              <Stethoscope size={14} className="text-blue-600" />

              <span className="text-xs font-bold text-blue-600">
                Medical Specialties
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[42px]">
              Find the right
              <span className="text-blue-600"> specialist</span>
              <br className="hidden sm:block" />
              for your healthcare
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
              Explore our wide range of medical specialties and connect with
              experienced healthcare professionals.
            </p>
          </div>

          <button
            type="button"
            className="group hidden items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-700 md:flex"
          >
            View all specialties
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* =====================================================
            MAIN SPECIALTY LAYOUT
        ===================================================== */}
        <div className="grid gap-5 lg:grid-cols-[1.05fr_1.95fr]">
          {/* ===================================================
              FEATURED SPECIALTY
          =================================================== */}
          <div className="group relative min-h-[390px] overflow-hidden rounded-[30px] bg-blue-600 p-7 shadow-[0_25px_60px_-25px_rgba(37,99,235,0.45)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_-25px_rgba(37,99,235,0.5)] sm:p-9">
            {/* Decorative Circle */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border-[35px] border-white/10 transition-transform duration-700 group-hover:scale-125" />

            <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-white/5" />

            {/* Icon */}
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
              <HeartPulse size={31} className="text-white" />
            </div>

            <div className="relative mt-10">
              <span className="text-xs font-semibold text-blue-100">
                MOST SEARCHED
              </span>

              <h3 className="mt-2 text-3xl font-extrabold text-white">
                Cardiology
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-6 text-blue-100">
                Get expert care for your heart and cardiovascular health from
                experienced specialists.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-white">
                <ShieldCheck size={17} />
                120+ verified doctors
              </div>
            </div>

            {/* Button */}
            <button
              type="button"
              className="group/button absolute bottom-7 left-7 flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-600 shadow-lg transition-all duration-300 hover:bg-blue-50 sm:bottom-9 sm:left-9"
            >
              Find Cardiologists

              <ArrowRight
                size={16}
                className="transition-transform group-hover/button:translate-x-1"
              />
            </button>
          </div>

          {/* ===================================================
              OTHER SPECIALTIES
          =================================================== */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {specialties.slice(1).map((specialty, index) => {
              const Icon = specialty.icon;

              return (
                <div
                  key={specialty.name}
                  className="group relative overflow-hidden rounded-[24px] border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_20px_40px_-20px_rgba(37,99,235,0.25)]"
                  style={{
                    animationDelay: `${index * 80}ms`,
                  }}
                >
                  {/* Hover Background */}
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-50 opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between">
                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 transition-all duration-300 group-hover:bg-blue-600 group-hover:shadow-lg group-hover:shadow-blue-600/20">
                      <Icon
                        size={22}
                        className="text-blue-600 transition-colors duration-300 group-hover:text-white"
                      />
                    </div>

                    {/* Arrow */}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-100 bg-white transition-all duration-300 group-hover:border-blue-100 group-hover:bg-blue-50">
                      <ChevronRight
                        size={16}
                        className="text-slate-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-blue-600"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative mt-5">
                    <h3 className="text-base font-bold text-slate-800 transition-colors duration-300 group-hover:text-blue-600">
                      {specialty.name}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      {specialty.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-400">
                        {specialty.doctors}
                      </span>

                      <span className="text-[11px] font-bold text-blue-600 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                        Explore →
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM SEARCH
        ===================================================== */}
        <div className="mt-7 flex flex-col items-center justify-between gap-4 rounded-2xl border border-blue-100 bg-white px-5 py-4 shadow-sm sm:flex-row sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
              <Search size={18} className="text-blue-600" />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-800">
                Can't find your specialty?
              </p>

              <p className="text-xs text-slate-400">
                Search from all available medical specialties.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-xs font-bold text-white transition hover:bg-blue-600 sm:w-auto"
          >
            Explore All

            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}