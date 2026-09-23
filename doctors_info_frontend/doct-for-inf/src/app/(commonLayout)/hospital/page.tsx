"use client";

import { useMemo, useState } from "react";

import {
  Ambulance,
  ArrowRight,
  BadgeCheck,
  BedDouble,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  HeartPulse,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Siren,
  Star,
  Stethoscope,
  Users,
} from "lucide-react";

// ============================================================
// 🏥 HOSPITAL DATA
// পরে MongoDB / API থেকে আসবে
// ============================================================

const hospitals = [
  {
    id: 1,
    name: "Evercare Hospital Dhaka",
    type: "Private Hospital",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=90",
    location: "Bashundhara, Dhaka",
    address:
      "Plot 81, Block E, Bashundhara R/A, Dhaka",
    phone: "10678",
    rating: 4.9,
    reviews: 1850,
    status: "Open 24 Hours",
    beds: 425,
    doctors: 280,
    departments: 32,
    icu: 48,
    emergency: true,
    ambulance: true,
    services: [
      "Emergency",
      "ICU",
      "Cardiology",
      "Neurology",
      "Oncology",
    ],
  },

  {
    id: 2,
    name: "Square Hospital Limited",
    type: "Private Hospital",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=90",
    location: "Panthapath, Dhaka",
    address:
      "18/F, Bir Uttam Qazi Nuruzzaman Sarak, Dhaka",
    phone: "10616",
    rating: 4.8,
    reviews: 2140,
    status: "Open 24 Hours",
    beds: 700,
    doctors: 350,
    departments: 40,
    icu: 65,
    emergency: true,
    ambulance: true,
    services: [
      "Emergency",
      "ICU",
      "Surgery",
      "Cardiology",
      "Cancer Care",
    ],
  },

  {
    id: 3,
    name: "Labaid Specialized Hospital",
    type: "Specialized Hospital",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=90",
    location: "Dhanmondi, Dhaka",
    address:
      "House 1, Road 4, Dhanmondi, Dhaka",
    phone: "10606",
    rating: 4.8,
    reviews: 1670,
    status: "Open 24 Hours",
    beds: 250,
    doctors: 210,
    departments: 28,
    icu: 35,
    emergency: true,
    ambulance: true,
    services: [
      "Cardiology",
      "Neurology",
      "Emergency",
      "ICU",
      "Diagnostics",
    ],
  },

  {
    id: 4,
    name: "United Hospital Limited",
    type: "Private Hospital",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=90",
    location: "Gulshan, Dhaka",
    address:
      "Plot 15, Road 71, Gulshan, Dhaka",
    phone: "10666",
    rating: 4.7,
    reviews: 1320,
    status: "Open 24 Hours",
    beds: 500,
    doctors: 320,
    departments: 35,
    icu: 55,
    emergency: true,
    ambulance: true,
    services: [
      "Emergency",
      "Cardiac Care",
      "Nephrology",
      "Oncology",
      "NICU",
    ],
  },

  {
    id: 5,
    name: "Ibn Sina Specialized Hospital",
    type: "Specialized Hospital",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=90",
    location: "Dhanmondi, Dhaka",
    address:
      "House 48, Road 9/A, Dhanmondi",
    phone: "10615",
    rating: 4.6,
    reviews: 980,
    status: "Open 24 Hours",
    beds: 350,
    doctors: 190,
    departments: 25,
    icu: 32,
    emergency: true,
    ambulance: true,
    services: [
      "Emergency",
      "Medicine",
      "Surgery",
      "Pediatrics",
      "ICU",
    ],
  },

  {
    id: 6,
    name: "Bangladesh Specialized Hospital",
    type: "Private Hospital",
    image:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=90",
    location: "Shyamoli, Dhaka",
    address:
      "21 Shyamoli, Mirpur Road, Dhaka",
    phone: "10633",
    rating: 4.7,
    reviews: 890,
    status: "Open 24 Hours",
    beds: 350,
    doctors: 170,
    departments: 26,
    icu: 30,
    emergency: true,
    ambulance: true,
    services: [
      "Emergency",
      "Cardiology",
      "Orthopedics",
      "Neurology",
      "ICU",
    ],
  },
];

// ============================================================
// ⚙️ SETTINGS
// ============================================================

const hospitalsPerPage = 4;

// ============================================================
// 🏥 HOSPITAL PAGE
// ============================================================

export default function HospitalsPage() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // ==========================================================
  // 🔎 SEARCH
  // ==========================================================

  const filteredHospitals = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return hospitals;

    return hospitals.filter((hospital) => {
      return (
        hospital.name.toLowerCase().includes(query) ||
        hospital.type.toLowerCase().includes(query) ||
        hospital.location.toLowerCase().includes(query) ||
        hospital.address.toLowerCase().includes(query) ||
        hospital.services.some((service) =>
          service.toLowerCase().includes(query)
        )
      );
    });
  }, [search]);

  // ==========================================================
  // 📄 PAGINATION
  // ==========================================================

  const totalPages = Math.ceil(
    filteredHospitals.length / hospitalsPerPage
  );

  const startIndex =
    (currentPage - 1) * hospitalsPerPage;

  const currentHospitals = filteredHospitals.slice(
    startIndex,
    startIndex + hospitalsPerPage
  );

  // ==========================================================
  // 🔎 SEARCH
  // ==========================================================

  const handleSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  // ==========================================================
  // 📄 PAGE
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
    <main className="min-h-screen bg-[#f5f7fb]">

      {/* ======================================================
          SEARCH
      ====================================================== */}

      <section className="border-b border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-4xl">

            <div
              className="
                rounded-[24px]
                border border-slate-200
                bg-white p-2
                shadow-[0_15px_50px_-25px_rgba(15,23,42,0.35)]
              "
            >

              <div className="flex flex-col gap-2 sm:flex-row">

                {/* Search input */}

                <div className="relative flex-1">

                  <Search
                    size={20}
                    className="
                      absolute left-5 top-1/2
                      -translate-y-1/2
                      text-slate-400
                    "
                  />

                  <input
                    type="text"
                    value={search}
                    onChange={(e) =>
                      handleSearch(e.target.value)
                    }
                    placeholder="Search hospital, location, department or service..."
                    className="
                      h-14 w-full
                      rounded-2xl
                      bg-slate-50
                      pl-13 pr-5
                      text-sm font-medium
                      text-slate-800
                      outline-none
                      transition
                      placeholder:text-slate-400
                      focus:bg-blue-50/40
                    "
                  />

                </div>

                <button
                  type="button"
                  className="
                    flex h-14
                    items-center justify-center
                    gap-2
                    rounded-2xl
                    bg-blue-600
                    px-7
                    text-sm font-bold
                    text-white
                    shadow-lg
                    shadow-blue-600/20
                    transition
                    hover:bg-blue-700
                  "
                >

                  <Search size={18} />

                  Search

                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          HOSPITAL DIRECTORY
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <div className="flex items-center gap-3">

              <div
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-2xl
                  bg-blue-600
                  text-white
                  shadow-lg
                  shadow-blue-600/20
                "
              >
                <Building2 size={21} />
              </div>

              <div>

                <h1 className="text-2xl font-black tracking-tight text-slate-900">
                  Hospitals
                </h1>

                <p className="mt-0.5 text-sm text-slate-500">
                  Find hospitals, emergency care and specialized services.
                </p>

              </div>

            </div>

          </div>

          <div className="text-xs font-semibold text-slate-400">

            {filteredHospitals.length} hospitals found

          </div>

        </div>

        {/* ==================================================
            HOSPITAL CARDS
        ================================================== */}

        {currentHospitals.length > 0 ? (

          <div className="space-y-6">

            {currentHospitals.map((hospital) => (

              <HospitalCard
                key={hospital.id}
                hospital={hospital}
              />

            ))}

          </div>

        ) : (

          <div className="rounded-[28px] border border-slate-200 bg-white py-24 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">

              <Search size={26} />

            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-800">
              No hospital found
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Try searching with another hospital or location.
            </p>

          </div>

        )}

        {/* ==================================================
            PAGINATION
        ================================================== */}

        {totalPages > 1 && (

          <div className="mt-12 flex justify-center">

            <div
              className="
                flex items-center gap-1.5
                rounded-2xl
                border border-slate-200
                bg-white
                p-1.5
                shadow-sm
              "
            >

              <button
                onClick={() =>
                  goToPage(currentPage - 1)
                }
                disabled={currentPage === 1}
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                  text-slate-500
                  transition
                  hover:bg-slate-100
                  disabled:cursor-not-allowed
                  disabled:opacity-30
                "
              >
                <ChevronLeft size={18} />
              </button>

              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((page) => (

                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`
                    flex h-10 min-w-10
                    items-center justify-center
                    rounded-xl px-2
                    text-sm font-bold
                    transition
                    ${
                      currentPage === page
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                        : "text-slate-500 hover:bg-slate-100"
                    }
                  `}
                >
                  {page}
                </button>

              ))}

              <button
                onClick={() =>
                  goToPage(currentPage + 1)
                }
                disabled={
                  currentPage === totalPages
                }
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                  text-slate-500
                  transition
                  hover:bg-slate-100
                  disabled:cursor-not-allowed
                  disabled:opacity-30
                "
              >
                <ChevronRight size={18} />
              </button>

            </div>

          </div>

        )}

      </section>

    </main>
  );
}

// ============================================================
// 🏥 HOSPITAL CARD
// ============================================================

function HospitalCard({
  hospital,
}: {
  hospital: (typeof hospitals)[number];
}) {
  return (
    <article
      className="
        group overflow-hidden
        rounded-[30px]
        border border-slate-200
        bg-white
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:border-blue-200
        hover:shadow-[0_30px_80px_-35px_rgba(37,99,235,0.35)]
      "
    >

      <div className="grid lg:grid-cols-[390px_1fr]">

        {/* ==================================================
            IMAGE
        ================================================== */}

        <div className="relative h-[280px] overflow-hidden lg:h-full lg:min-h-[430px]">

          <img
            src={hospital.image}
            alt={hospital.name}
            loading="lazy"
            className="
              h-full w-full
              object-cover
              transition duration-700
              group-hover:scale-105
            "
          />

          {/* Dark gradient */}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />

          {/* Verified */}

          <div className="absolute left-5 top-5">

            <span
              className="
                inline-flex items-center gap-1.5
                rounded-full
                bg-white/95
                px-3 py-2
                text-[10px]
                font-black
                text-blue-600
                shadow-lg
                backdrop-blur
              "
            >

              <BadgeCheck size={14} />

              Verified Hospital

            </span>

          </div>

          {/* Emergency */}

          {hospital.emergency && (

            <div className="absolute right-5 top-5">

              <span
                className="
                  inline-flex items-center gap-1.5
                  rounded-full
                  bg-red-500
                  px-3 py-2
                  text-[10px]
                  font-black
                  text-white
                  shadow-lg
                "
              >

                <Siren size={13} />

                24/7 Emergency

              </span>

            </div>

          )}

          {/* Image bottom */}

          <div className="absolute bottom-5 left-5 right-5">

            <div className="flex items-center gap-2">

              <span
                className="
                  inline-flex items-center gap-1.5
                  rounded-lg
                  bg-white
                  px-2.5 py-1.5
                  text-xs font-black
                  text-slate-800
                  shadow-lg
                "
              >

                <Star
                  size={13}
                  className="fill-amber-400 text-amber-400"
                />

                {hospital.rating}

              </span>

              <span className="text-xs font-semibold text-white">
                {hospital.reviews.toLocaleString()} reviews
              </span>

            </div>

          </div>

        </div>

        {/* ==================================================
            CONTENT
        ================================================== */}

        <div className="p-5 sm:p-7 lg:p-8">

          {/* Hospital name */}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

            <div>

              <span
                className="
                  inline-flex
                  rounded-lg
                  bg-blue-50
                  px-2.5 py-1
                  text-[10px]
                  font-black
                  uppercase
                  tracking-wider
                  text-blue-600
                "
              >
                {hospital.type}
              </span>

              <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900">
                {hospital.name}
              </h2>

              <div className="mt-3 flex gap-2">

                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-blue-600"
                />

                <div>

                  <p className="text-sm font-bold text-slate-700">
                    {hospital.location}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    {hospital.address}
                  </p>

                </div>

              </div>

            </div>

            {/* Hotline */}

            <a
              href={`tel:${hospital.phone}`}
              className="
                inline-flex shrink-0
                items-center gap-2
                rounded-xl
                bg-emerald-50
                px-4 py-3
                text-xs font-black
                text-emerald-700
                transition
                hover:bg-emerald-100
              "
            >

              <Phone size={15} />

              {hospital.phone}

            </a>

          </div>

          {/* ==================================================
              MAIN STATS
          ================================================== */}

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">

            <HospitalStat
              icon={<BedDouble size={17} />}
              value={`${hospital.beds}+`}
              label="Beds"
            />

            <HospitalStat
              icon={<Users size={17} />}
              value={`${hospital.doctors}+`}
              label="Doctors"
            />

            <HospitalStat
              icon={<Stethoscope size={17} />}
              value={`${hospital.departments}`}
              label="Departments"
            />

            <HospitalStat
              icon={<HeartPulse size={17} />}
              value={`${hospital.icu}`}
              label="ICU Beds"
            />

          </div>

          {/* ==================================================
              HOSPITAL FEATURES
          ================================================== */}

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">

            <FeatureRow
              icon={<Clock3 size={16} />}
              title="Hospital Hours"
              value={hospital.status}
            />

            <FeatureRow
              icon={<Siren size={16} />}
              title="Emergency"
              value={
                hospital.emergency
                  ? "Available 24/7"
                  : "Check availability"
              }
              active={hospital.emergency}
            />

            <FeatureRow
              icon={<Ambulance size={16} />}
              title="Ambulance"
              value={
                hospital.ambulance
                  ? "Available"
                  : "Not listed"
              }
              active={hospital.ambulance}
            />

            <FeatureRow
              icon={<ShieldCheck size={16} />}
              title="Verified Facility"
              value="Information verified"
              active
            />

          </div>

          {/* ==================================================
              SERVICES
          ================================================== */}

          <div className="mt-6">

            <div className="mb-3 flex items-center gap-2">

              <HeartPulse
                size={16}
                className="text-blue-600"
              />

              <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                Departments & Services
              </span>

            </div>

            <div className="flex flex-wrap gap-2">

              {hospital.services.map((service) => (

                <span
                  key={service}
                  className="
                    rounded-lg
                    border border-slate-200
                    bg-slate-50
                    px-3 py-1.5
                    text-[11px]
                    font-bold
                    text-slate-600
                  "
                >
                  {service}
                </span>

              ))}

            </div>

          </div>

          {/* ==================================================
              ACTIONS
          ================================================== */}

          <div className="mt-7 flex flex-col gap-2 border-t border-slate-100 pt-6 sm:flex-row">

            <button
              type="button"
              className="
                flex flex-1
                items-center justify-center
                gap-2
                rounded-xl
                bg-slate-950
                px-5 py-3.5
                text-sm font-bold
                text-white
                transition
                hover:bg-blue-600
              "
            >

              View Hospital Details

              <ArrowRight size={16} />

            </button>

            <button
              type="button"
              className="
                flex items-center
                justify-center
                gap-2
                rounded-xl
                border border-slate-200
                px-5 py-3.5
                text-sm font-bold
                text-slate-600
                transition
                hover:border-blue-200
                hover:bg-blue-50
                hover:text-blue-600
              "
            >

              <MapPin size={16} />

              Direction

            </button>

            <a
              href={`tel:${hospital.phone}`}
              className="
                flex items-center
                justify-center
                gap-2
                rounded-xl
                border border-slate-200
                px-5 py-3.5
                text-sm font-bold
                text-slate-600
                transition
                hover:border-emerald-200
                hover:bg-emerald-50
                hover:text-emerald-600
              "
            >

              <Phone size={16} />

              Call

            </a>

          </div>

        </div>

      </div>

    </article>
  );
}

// ============================================================
// 📊 HOSPITAL STAT
// ============================================================

function HospitalStat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div
      className="
        rounded-2xl
        border border-slate-100
        bg-slate-50
        p-3.5
      "
    >

      <div className="flex items-center gap-2">

        <div className="text-blue-600">
          {icon}
        </div>

        <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
          {label}
        </span>

      </div>

      <p className="mt-2 text-lg font-black text-slate-900">
        {value}
      </p>

    </div>
  );
}

// ============================================================
// ✨ FEATURE ROW
// ============================================================

function FeatureRow({
  icon,
  title,
  value,
  active = false,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  active?: boolean;
}) {
  return (
    <div
      className={`
        flex items-center gap-3
        rounded-2xl
        border p-3
        ${
          active
            ? "border-emerald-100 bg-emerald-50/50"
            : "border-slate-100 bg-slate-50"
        }
      `}
    >

      <div
        className={`
          flex h-9 w-9
          shrink-0 items-center
          justify-center
          rounded-xl
          ${
            active
              ? "bg-white text-emerald-600"
              : "bg-white text-slate-500"
          }
        `}
      >
        {icon}
      </div>

      <div className="min-w-0">

        <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
          {title}
        </p>

        <p
          className={`
            mt-0.5 truncate
            text-xs font-bold
            ${
              active
                ? "text-emerald-700"
                : "text-slate-700"
            }
          `}
        >
          {value}
        </p>

      </div>

      {active && (
        <CheckCircle2
          size={15}
          className="ml-auto shrink-0 text-emerald-500"
        />
      )}

    </div>
  );
}