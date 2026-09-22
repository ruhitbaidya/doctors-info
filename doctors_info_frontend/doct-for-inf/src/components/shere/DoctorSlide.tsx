"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Clock3,
} from "lucide-react";

// ============================================================
// 👨‍⚕️ SPECIALIST DOCTOR DATA
// পরে API থেকে এই data আসবে
// ============================================================

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Ahmed",
    degree: "MBBS, FCPS",
    specialty: "Cardiology",
    location: "Dhanmondi, Dhaka",
    available: "Available Today",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=85",
  },

  {
    id: 2,
    name: "Dr. James Wilson",
    degree: "MBBS, MD",
    specialty: "Neurology",
    location: "Gulshan, Dhaka",
    available: "Available Today",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=85",
  },

  {
    id: 3,
    name: "Dr. Emily Carter",
    degree: "MBBS, MS",
    specialty: "Orthopedic",
    location: "Banani, Dhaka",
    available: "Available Tomorrow",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=85",
  },

  {
    id: 4,
    name: "Dr. Michael Brown",
    degree: "MBBS, FCPS",
    specialty: "Dermatology",
    location: "Uttara, Dhaka",
    available: "Available Today",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=85",
  },

  {
    id: 5,
    name: "Dr. Olivia Martin",
    degree: "MBBS, FCPS",
    specialty: "Gynecology",
    location: "Mirpur, Dhaka",
    available: "Available Today",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=85",
  },

  {
    id: 6,
    name: "Dr. Daniel Smith",
    degree: "MBBS, MD",
    specialty: "Child Specialist",
    location: "Mohammadpur, Dhaka",
    available: "Available Tomorrow",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=85",
  },

  {
    id: 7,
    name: "Dr. Sophia Miller",
    degree: "MBBS, FCPS",
    specialty: "Medicine Specialist",
    location: "Wari, Dhaka",
    available: "Available Today",
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=600&q=85",
  },

  {
    id: 8,
    name: "Dr. Robert Taylor",
    degree: "MBBS, MD",
    specialty: "ENT Specialist",
    location: "Khilgaon, Dhaka",
    available: "Available Today",
    image:
      "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=600&q=85",
  },
];

// ============================================================
// 🩺 SPECIALIST DOCTORS
// ============================================================

export default function SpecialistDoctors() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Desktop-এর জন্য প্রতি slide-এ 4 doctor
  const doctorsPerSlide = 4;

  // মোট কতগুলো slide হবে সেটা automatic
  const totalSlides = Math.ceil(
    doctors.length / doctorsPerSlide
  );

  // ==========================================================
  // NEXT
  // ==========================================================

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === totalSlides - 1 ? 0 : prev + 1
    );
  };

  // ==========================================================
  // PREVIOUS
  // ==========================================================

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  };

  // ==========================================================
  // CURRENT SLIDE DOCTORS
  // ==========================================================

  const startIndex = currentSlide * doctorsPerSlide;

  const currentDoctors = doctors.slice(
    startIndex,
    startIndex + doctorsPerSlide
  );

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">

      {/* ======================================================
          Background Decoration
      ====================================================== */}

      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-cyan-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="mb-9 flex items-end justify-between">

          <div>

            <div className="mb-3 flex items-center gap-2">

              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 sm:text-sm">
                Specialist Doctors
              </span>

            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Find Your
              <span className="text-blue-600">
                {" "}Specialist
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Explore trusted specialists and find the right
              healthcare professional near you.
            </p>

          </div>

          {/* ==================================================
              NAVIGATION
          ================================================== */}

          <div className="hidden gap-2 sm:flex">

            <button
              onClick={prevSlide}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              aria-label="Previous"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              onClick={nextSlide}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700"
              aria-label="Next"
            >
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

        {/* ==================================================
            DOCTOR CARDS
        ================================================== */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {currentDoctors.map((doctor) => (

            <article
              key={doctor.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_15px_40px_rgba(15,23,42,0.09)]"
            >

              {/* =================================================
                  SMALL DOCTOR IMAGE
              ================================================= */}

              <div className="relative h-48 overflow-hidden bg-slate-100">

                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />

                {/* Specialty */}
                <div className="absolute left-3 top-3">

                  <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-blue-600 shadow-sm backdrop-blur">
                    {doctor.specialty}
                  </span>

                </div>

              </div>

              {/* =================================================
                  DOCTOR INFORMATION
              ================================================= */}

              <div className="p-4">

                {/* Name */}
                <h3 className="text-base font-bold text-slate-900">
                  {doctor.name}
                </h3>

                {/* Degree */}
                <p className="mt-0.5 text-xs font-medium text-blue-600">
                  {doctor.degree}
                </p>

                {/* Location */}
                <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500">

                  <MapPin
                    size={14}
                    className="shrink-0 text-blue-500"
                  />

                  <span className="truncate">
                    {doctor.location}
                  </span>

                </div>

                {/* =================================================
                    AVAILABILITY
                ================================================= */}

                <div className="mt-2 flex items-center gap-1.5 text-xs">

                  <Clock3
                    size={14}
                    className="text-emerald-500"
                  />

                  <span className="font-medium text-emerald-600">
                    {doctor.available}
                  </span>

                </div>

                {/* =================================================
                    BOTTOM ACTION
                ================================================= */}

                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">

                  <span className="text-xs font-medium text-slate-400">
                    View details
                  </span>

                  <button
                    aria-label={`View ${doctor.name}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                  >
                    <ArrowUpRight size={15} />
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

        {/* ======================================================
            SLIDER BOTTOM
        ====================================================== */}

        <div className="mt-7 flex items-center justify-between">

          {/* Counter */}
          <p className="text-xs font-medium text-slate-400">
            <span className="text-slate-800">
              {String(currentSlide + 1).padStart(2, "0")}
            </span>
            {" / "}
            {String(totalSlides).padStart(2, "0")}
          </p>

          {/* Dots */}
          <div className="flex items-center gap-1.5">

            {Array.from({
              length: totalSlides,
            }).map((_, index) => (

              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-7 bg-blue-600"
                    : "w-1.5 bg-slate-300"
                }`}
                aria-label={`Slide ${index + 1}`}
              />

            ))}

          </div>

          {/* Mobile arrows */}
          <div className="flex gap-2 sm:hidden">

            <button
              onClick={prevSlide}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200"
            >
              <ArrowLeft size={15} />
            </button>

            <button
              onClick={nextSlide}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white"
            >
              <ArrowRight size={15} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}