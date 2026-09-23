"use client";

import { useMemo, useState } from "react";

import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  MapPin,
  Search,
  Stethoscope,
} from "lucide-react";

// ============================================================
// 👨‍⚕️ DOCTOR DATA
// পরে এগুলো API / MongoDB থেকে আসবে
// ============================================================

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Ahmed",
    degree: "MBBS, FCPS",
    specialty: "Cardiologist",
    hospital: "Popular Diagnostic Centre",
    location: "Dhanmondi, Dhaka",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=85",
    days: "Sat, Sun & Mon",
    time: "5:00 PM - 8:00 PM",
    available: "Available Today",
  },

  {
    id: 2,
    name: "Dr. James Wilson",
    degree: "MBBS, MD",
    specialty: "Neurologist",
    hospital: "Ibn Sina Diagnostic",
    location: "Dhanmondi, Dhaka",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=85",
    days: "Sun, Tue & Thu",
    time: "4:00 PM - 7:00 PM",
    available: "Available Today",
  },

  {
    id: 3,
    name: "Dr. Emily Carter",
    degree: "MBBS, MS",
    specialty: "Orthopedic Surgeon",
    hospital: "Square Hospital",
    location: "Panthapath, Dhaka",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=85",
    days: "Mon, Wed & Fri",
    time: "6:00 PM - 9:00 PM",
    available: "Next: Tomorrow",
  },

  {
    id: 4,
    name: "Dr. Michael Brown",
    degree: "MBBS, DDV",
    specialty: "Dermatologist",
    hospital: "Labaid Diagnostic",
    location: "Dhanmondi, Dhaka",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=85",
    days: "Sat, Mon & Wed",
    time: "3:00 PM - 6:00 PM",
    available: "Available Today",
  },

  {
    id: 5,
    name: "Dr. Nusrat Jahan",
    degree: "MBBS, FCPS",
    specialty: "Gynecologist",
    hospital: "Evercare Hospital",
    location: "Bashundhara, Dhaka",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=85",
    days: "Sun, Tue & Thu",
    time: "5:30 PM - 8:30 PM",
    available: "Next: Tomorrow",
  },

  {
    id: 6,
    name: "Dr. Ahmed Hasan",
    degree: "MBBS, FCPS",
    specialty: "Medicine Specialist",
    hospital: "United Hospital",
    location: "Gulshan, Dhaka",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=85",
    days: "Sat, Mon & Thu",
    time: "4:30 PM - 7:30 PM",
    available: "Available Today",
  },

  {
    id: 7,
    name: "Dr. Maria Khan",
    degree: "MBBS, MD",
    specialty: "Pediatrician",
    hospital: "Holy Family Hospital",
    location: "Eskaton, Dhaka",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=85",
    days: "Sun, Tue & Fri",
    time: "6:00 PM - 9:00 PM",
    available: "Next: Tomorrow",
  },

  {
    id: 8,
    name: "Dr. Rakib Hasan",
    degree: "MBBS, FCPS",
    specialty: "ENT Specialist",
    hospital: "Anwer Khan Modern",
    location: "Dhanmondi, Dhaka",
    image:
      "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?auto=format&fit=crop&w=600&q=85",
    days: "Sat, Mon & Wed",
    time: "5:00 PM - 8:00 PM",
    available: "Available Today",
  },

  {
    id: 9,
    name: "Dr. Farhana Rahman",
    degree: "MBBS, FCPS",
    specialty: "Psychiatrist",
    hospital: "Bangladesh Specialized Hospital",
    location: "Shyamoli, Dhaka",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=85",
    days: "Sun, Tue & Thu",
    time: "4:00 PM - 7:00 PM",
    available: "Available Today",
  },

  {
    id: 10,
    name: "Dr. Tanvir Ahmed",
    degree: "MBBS, MS",
    specialty: "General Surgeon",
    hospital: "Square Hospital",
    location: "Panthapath, Dhaka",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=85",
    days: "Mon, Wed & Fri",
    time: "7:00 PM - 9:00 PM",
    available: "Next: Tomorrow",
  },
];

// ============================================================
// ⚙️ PAGINATION
// ============================================================

const doctorsPerPage = 6;

// ============================================================
// 🩺 PUBLIC DOCTORS PAGE
// ============================================================

export default function DoctorsPage() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // ==========================================================
  // 🔎 SEARCH
  // ==========================================================

  const filteredDoctors = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return doctors;

    return doctors.filter((doctor) => {
      return (
        doctor.name.toLowerCase().includes(query) ||
        doctor.specialty.toLowerCase().includes(query) ||
        doctor.location.toLowerCase().includes(query) ||
        doctor.hospital.toLowerCase().includes(query)
      );
    });
  }, [search]);

  // ==========================================================
  // 📄 PAGINATION CALCULATION
  // ==========================================================

  const totalPages = Math.ceil(
    filteredDoctors.length / doctorsPerPage
  );

  const startIndex = (currentPage - 1) * doctorsPerPage;

  const currentDoctors = filteredDoctors.slice(
    startIndex,
    startIndex + doctorsPerPage
  );

  // ==========================================================
  // 🔎 SEARCH CHANGE
  // ==========================================================

  const handleSearch = (value: string) => {
    setSearch(value);

    // Search করলে প্রথম page-এ নিয়ে যাবে
    setCurrentPage(1);
  };

  // ==========================================================
  // 📄 PAGE CHANGE
  // ==========================================================

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-[#f8fafc]">

      {/* ======================================================
          HERO / SEARCH SECTION
      ====================================================== */}

      <section className="border-b border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

          <div className="max-w-3xl">

            {/* Small label */}

            <div className="mb-3 flex items-center gap-2">

              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Stethoscope size={17} />
              </div>

              <span className="text-sm font-semibold text-blue-600">
                Find a Doctor
              </span>

            </div>

            {/* Heading */}

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">

              Find the right doctor
              <span className="text-blue-600"> for you</span>

            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Search doctors by name, specialty, hospital or location
              and find the right specialist for your needs.
            </p>

          </div>

          {/* ==================================================
              SEARCH BAR
          ================================================== */}

          <div className="mt-7 max-w-4xl">

            <div className="relative">

              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search doctor, specialist, hospital or location..."
                className="
                  h-14 w-full rounded-2xl
                  border border-slate-200
                  bg-slate-50
                  pl-12 pr-5
                  text-sm text-slate-800
                  outline-none
                  transition
                  placeholder:text-slate-400
                  focus:border-blue-400
                  focus:bg-white
                  focus:ring-4
                  focus:ring-blue-50
                "
              />

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          DOCTORS SECTION
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Section header */}

        <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">

          <div>

            <h2 className="text-xl font-bold text-slate-900">
              All Doctors
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {filteredDoctors.length} doctors found
            </p>

          </div>

          <div className="text-xs text-slate-400">
            Showing{" "}
            <span className="font-semibold text-slate-600">
              {filteredDoctors.length === 0
                ? 0
                : startIndex + 1}
            </span>{" "}
            -
            <span className="font-semibold text-slate-600">
              {" "}
              {Math.min(
                startIndex + doctorsPerPage,
                filteredDoctors.length
              )}
            </span>{" "}
            of {filteredDoctors.length}
          </div>

        </div>


        {/* ==================================================
            DOCTOR GRID
        ================================================== */}

        {currentDoctors.length > 0 ? (

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

            {currentDoctors.map((doctor) => (

              <DoctorCard
                key={doctor.id}
                doctor={doctor}
              />

            ))}

          </div>

        ) : (

          // ==================================================
          // NO RESULT
          // ==================================================

          <div className="rounded-2xl border border-slate-200 bg-white py-20 text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">

              <Search size={24} />

            </div>

            <h3 className="mt-4 font-semibold text-slate-800">
              No doctors found
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Try searching with another doctor name or specialty.
            </p>

          </div>

        )}


        {/* ======================================================
            PAGINATION
        ====================================================== */}

        {totalPages > 1 && (

          <div className="mt-10 flex items-center justify-center">

            <div className="flex items-center gap-1 rounded-xl border border-slate-200 bg-white p-1.5 shadow-sm">

              {/* Previous */}

              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-lg text-slate-500
                  transition
                  hover:bg-slate-100
                  disabled:cursor-not-allowed
                  disabled:opacity-30
                "
              >
                <ChevronLeft size={17} />
              </button>


              {/* Page numbers */}

              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((page) => (

                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`
                    flex h-9 min-w-9 items-center justify-center
                    rounded-lg px-2 text-sm font-semibold
                    transition
                    ${
                      currentPage === page
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-slate-500 hover:bg-slate-100"
                    }
                  `}
                >
                  {page}
                </button>

              ))}


              {/* Next */}

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-lg text-slate-500
                  transition
                  hover:bg-slate-100
                  disabled:cursor-not-allowed
                  disabled:opacity-30
                "
              >
                <ChevronRight size={17} />
              </button>

            </div>

          </div>

        )}

      </section>

    </main>
  );
}


// ============================================================
// 👨‍⚕️ DOCTOR CARD
// ============================================================

function DoctorCard({
  doctor,
}: {
  doctor: (typeof doctors)[number];
}) {

  return (

    <article
      className="
        group overflow-hidden
        rounded-2xl
        border border-slate-200
        bg-white
        transition-all duration-300
        hover:-translate-y-1
        hover:border-blue-200
        hover:shadow-xl
        hover:shadow-slate-200/60
      "
    >

      {/* ======================================================
          IMAGE
      ====================================================== */}

      <div className="relative bg-slate-100">

        <img
          src={doctor.image}
          alt={doctor.name}
          className="
            h-60 w-full
            object-cover object-top
            transition duration-500
            group-hover:scale-[1.02]
          "
        />

        {/* Availability */}

        <div className="absolute left-4 top-4">

          <span
            className={`
              inline-flex items-center gap-1.5
              rounded-full
              px-3 py-1.5
              text-[11px]
              font-bold
              shadow-sm
              ${
                doctor.available === "Available Today"
                  ? "bg-emerald-500 text-white"
                  : "bg-white/95 text-slate-700"
              }
            `}
          >

            <span
              className={`
                h-1.5 w-1.5 rounded-full
                ${
                  doctor.available === "Available Today"
                    ? "bg-white"
                    : "bg-blue-500"
                }
              `}
            />

            {doctor.available}

          </span>

        </div>

      </div>


      {/* ======================================================
          CARD CONTENT
      ====================================================== */}

      <div className="p-5">

        {/* Specialty */}

        <div className="mb-2">

          <span className="inline-flex rounded-md bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-600">
            {doctor.specialty}
          </span>

        </div>


        {/* Name */}

        <h3 className="text-lg font-bold text-slate-900">
          {doctor.name}
        </h3>


        {/* Degree */}

        <p className="mt-1 text-xs font-medium text-slate-500">
          {doctor.degree}
        </p>


        {/* Hospital */}

        <div className="mt-4 flex items-start gap-2">

          <MapPin
            size={16}
            className="mt-0.5 shrink-0 text-slate-400"
          />

          <div>

            <p className="text-xs font-semibold text-slate-700">
              {doctor.hospital}
            </p>

            <p className="mt-0.5 text-[11px] text-slate-400">
              {doctor.location}
            </p>

          </div>

        </div>


        {/* ==================================================
            CHAMBER TIME
        ================================================== */}

        <div className="mt-4 rounded-xl bg-slate-50 p-3">

          <div className="flex items-center gap-2">

            <CalendarDays
              size={15}
              className="text-blue-600"
            />

            <span className="text-xs font-semibold text-slate-700">
              Chamber Schedule
            </span>

          </div>

          <div className="mt-2 flex items-center gap-2">

            <Clock3
              size={14}
              className="text-slate-400"
            />

            <p className="text-[11px] text-slate-500">
              {doctor.days}
            </p>

          </div>

          <p className="mt-1 pl-[22px] text-[11px] font-semibold text-blue-600">
            {doctor.time}
          </p>

        </div>


        {/* ==================================================
            CARD ACTION
        ================================================== */}

        <button
          className="
            mt-4 flex w-full
            items-center justify-between
            rounded-xl
            border border-slate-200
            px-4 py-3
            text-sm font-semibold
            text-slate-700
            transition
            hover:border-blue-600
            hover:bg-blue-600
            hover:text-white
          "
        >

          <span>
            View Doctor Details
          </span>

          <ArrowRight
            size={17}
            className="transition-transform group-hover:translate-x-1"
          />

        </button>

      </div>

    </article>
  );
}