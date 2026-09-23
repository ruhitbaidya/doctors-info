"use client";

import { useMemo, useState } from "react";

import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  FileText,
  Flame,
  Home,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Star,
  TestTube2,
  Users,
} from "lucide-react";

// ============================================================
// 🧪 DIAGNOSTIC CENTER DATA
// পরে MongoDB / API থেকে আসবে
// ============================================================

const diagnosticCenters = [
  {
    id: 1,
    name: "Popular Diagnostic Centre",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=90",
    location: "Dhanmondi, Dhaka",
    address: "House 16, Road 2, Dhanmondi, Dhaka",
    phone: "+880 2-966 1234",
    rating: 4.8,
    reviews: 1240,
    openTime: "Open 24 Hours",
    status: "Open Now",
    tests: 850,
    doctors: 120,
    services: [
      "Pathology",
      "Imaging",
      "Cardiology",
      "Health Checkup",
    ],
    homeCollection: true,
    digitalReport: true,
    emergency: true,
  },

  {
    id: 2,
    name: "Ibn Sina Diagnostic & Consultation",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=90",
    location: "Dhanmondi, Dhaka",
    address: "House 48, Road 9/A, Dhanmondi",
    phone: "+880 2-912 6625",
    rating: 4.7,
    reviews: 980,
    openTime: "7:00 AM - 11:00 PM",
    status: "Open Now",
    tests: 720,
    doctors: 95,
    services: [
      "Pathology",
      "MRI",
      "CT Scan",
      "Ultrasonography",
    ],
    homeCollection: true,
    digitalReport: true,
    emergency: false,
  },

  {
    id: 3,
    name: "Labaid Diagnostic Centre",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=90",
    location: "Dhanmondi, Dhaka",
    address: "House 1, Road 4, Dhanmondi",
    phone: "+880 2-586 10793",
    rating: 4.9,
    reviews: 1560,
    openTime: "Open 24 Hours",
    status: "Open Now",
    tests: 920,
    doctors: 145,
    services: [
      "Pathology",
      "Radiology",
      "MRI",
      "Cancer Screening",
    ],
    homeCollection: true,
    digitalReport: true,
    emergency: true,
  },

  {
    id: 4,
    name: "Square Diagnostic Centre",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=90",
    location: "Panthapath, Dhaka",
    address: "18/F, Bir Uttam Qazi Nuruzzaman Road",
    phone: "+880 2-814 4466",
    rating: 4.8,
    reviews: 1120,
    openTime: "6:30 AM - 10:00 PM",
    status: "Open Now",
    tests: 780,
    doctors: 110,
    services: [
      "Laboratory",
      "CT Scan",
      "MRI",
      "Mammography",
    ],
    homeCollection: true,
    digitalReport: true,
    emergency: false,
  },

  {
    id: 5,
    name: "United Diagnostic Center",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=90",
    location: "Gulshan, Dhaka",
    address: "Road 71, Gulshan Avenue, Dhaka",
    phone: "+880 2-883 6444",
    rating: 4.6,
    reviews: 740,
    openTime: "7:00 AM - 10:00 PM",
    status: "Open Now",
    tests: 640,
    doctors: 82,
    services: [
      "Pathology",
      "ECG",
      "Ultrasound",
      "Health Package",
    ],
    homeCollection: true,
    digitalReport: false,
    emergency: false,
  },

  {
    id: 6,
    name: "Medinova Medical Services",
    image:
      "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=1000&q=90",
    location: "Malibagh, Dhaka",
    address: "House 71, New Circular Road, Malibagh",
    phone: "+880 2-933 0892",
    rating: 4.7,
    reviews: 890,
    openTime: "8:00 AM - 11:00 PM",
    status: "Open Now",
    tests: 690,
    doctors: 88,
    services: [
      "Pathology",
      "Radiology",
      "Dental",
      "Cardiology",
    ],
    homeCollection: true,
    digitalReport: true,
    emergency: false,
  },
];

// ============================================================
// ⚙️ SETTINGS
// ============================================================

const centersPerPage = 4;

// ============================================================
// 🧪 DIAGNOSTIC PAGE
// ============================================================

export default function DiagnosticPage() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // ==========================================================
  // 🔎 SEARCH
  // ==========================================================

  const filteredCenters = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return diagnosticCenters;

    return diagnosticCenters.filter((center) => {
      return (
        center.name.toLowerCase().includes(query) ||
        center.location.toLowerCase().includes(query) ||
        center.address.toLowerCase().includes(query) ||
        center.services.some((service) =>
          service.toLowerCase().includes(query)
        )
      );
    });
  }, [search]);

  // ==========================================================
  // 📄 PAGINATION
  // ==========================================================

  const totalPages = Math.ceil(
    filteredCenters.length / centersPerPage
  );

  const startIndex =
    (currentPage - 1) * centersPerPage;

  const currentCenters = filteredCenters.slice(
    startIndex,
    startIndex + centersPerPage
  );

  // ==========================================================
  // 🔎 SEARCH HANDLER
  // ==========================================================

  const handleSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  // ==========================================================
  // 📄 PAGE HANDLER
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
          TOP SEARCH AREA
      ====================================================== */}

      <section className="border-b border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-4xl">

            {/* Search box */}

            <div
              className="
                rounded-[24px]
                border border-slate-200
                bg-white
                p-2
                shadow-[0_15px_50px_-25px_rgba(15,23,42,0.35)]
              "
            >

              <div className="flex flex-col gap-2 sm:flex-row">

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
                    placeholder="Search diagnostic center, location or service..."
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
          PAGE CONTENT
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-9 sm:px-6 lg:px-8">

        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <div className="flex items-center gap-2">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">

                <TestTube2 size={19} />

              </div>

              <h1 className="text-2xl font-black tracking-tight text-slate-900">
                Diagnostic Centers
              </h1>

            </div>

            <p className="mt-2 text-sm text-slate-500">
              Find trusted diagnostic centers, laboratories and
              medical services near you.
            </p>

          </div>

          <div className="text-xs font-medium text-slate-400">

            {filteredCenters.length} centers found

          </div>

        </div>

        {/* ==================================================
            CARDS
        ================================================== */}

        {currentCenters.length > 0 ? (

          <div className="space-y-5">

            {currentCenters.map((center) => (

              <DiagnosticCard
                key={center.id}
                center={center}
              />

            ))}

          </div>

        ) : (

          <div className="rounded-[28px] border border-slate-200 bg-white py-24 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">

              <Search size={25} />

            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-800">
              No diagnostic center found
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Try searching with another name, location or service.
            </p>

          </div>

        )}

        {/* ==================================================
            PAGINATION
        ================================================== */}

        {totalPages > 1 && (

          <div className="mt-10 flex justify-center">

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
                    rounded-xl
                    px-2
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
// 🧪 DIAGNOSTIC CENTER CARD
// ============================================================

function DiagnosticCard({
  center,
}: {
  center: (typeof diagnosticCenters)[number];
}) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-[28px]
        border border-slate-200
        bg-white
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:border-blue-200
        hover:shadow-[0_25px_70px_-30px_rgba(37,99,235,0.35)]
      "
    >

      <div className="grid lg:grid-cols-[360px_1fr]">

        {/* ==================================================
            IMAGE
        ================================================== */}

        <div className="relative h-[270px] overflow-hidden lg:h-full lg:min-h-[370px]">

          <img
            src={center.image}
            alt={center.name}
            loading="lazy"
            className="
              h-full w-full
              object-cover
              transition duration-700
              group-hover:scale-105
            "
          />

          {/* Image overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />

          {/* Verified */}

          <div className="absolute left-4 top-4">

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

              Verified Center

            </span>

          </div>

          {/* Open */}

          <div className="absolute right-4 top-4">

            <span
              className="
                inline-flex items-center gap-1.5
                rounded-full
                bg-emerald-500
                px-3 py-2
                text-[10px]
                font-black
                text-white
                shadow-lg
              "
            >

              <span className="h-1.5 w-1.5 rounded-full bg-white" />

              {center.status}

            </span>

          </div>

          {/* Bottom image info */}

          <div className="absolute bottom-5 left-5 right-5">

            <div className="flex items-center gap-2">

              <div className="flex items-center gap-1.5 rounded-lg bg-white/95 px-2.5 py-1.5 text-xs font-black text-slate-800 shadow-lg">

                <Star
                  size={13}
                  className="fill-amber-400 text-amber-400"
                />

                {center.rating}

              </div>

              <span className="text-xs font-medium text-white/90">
                {center.reviews.toLocaleString()} reviews
              </span>

            </div>

          </div>

        </div>

        {/* ==================================================
            CONTENT
        ================================================== */}

        <div className="p-5 sm:p-7">

          {/* Name */}

          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

            <div>

              <h2
                className="
                  text-xl font-black
                  tracking-tight
                  text-slate-900
                  sm:text-2xl
                "
              >
                {center.name}
              </h2>

              <div className="mt-2 flex items-start gap-2">

                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-blue-600"
                />

                <div>

                  <p className="text-sm font-semibold text-slate-700">
                    {center.location}
                  </p>

                  <p className="mt-0.5 text-xs text-slate-400">
                    {center.address}
                  </p>

                </div>

              </div>

            </div>

            {/* Phone */}

            <a
              href={`tel:${center.phone}`}
              className="
                inline-flex shrink-0
                items-center gap-2
                rounded-xl
                border border-slate-200
                px-3.5 py-2.5
                text-xs font-bold
                text-slate-600
                transition
                hover:border-blue-200
                hover:bg-blue-50
                hover:text-blue-600
              "
            >

              <Phone size={14} />

              Hotline

            </a>

          </div>

          {/* ==================================================
              QUICK INFORMATION
          ================================================== */}

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">

            <InfoBox
              icon={<Clock3 size={16} />}
              label="Opening"
              value={center.openTime}
            />

            <InfoBox
              icon={<TestTube2 size={16} />}
              label="Tests"
              value={`${center.tests}+`}
            />

            <InfoBox
              icon={<Users size={16} />}
              label="Doctors"
              value={`${center.doctors}+`}
            />

            <InfoBox
              icon={<Star size={16} />}
              label="Rating"
              value={`${center.rating}/5`}
            />

          </div>

          {/* ==================================================
              SERVICES
          ================================================== */}

          <div className="mt-6">

            <div className="mb-3 flex items-center gap-2">

              <ShieldCheck
                size={16}
                className="text-blue-600"
              />

              <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                Available Services
              </span>

            </div>

            <div className="flex flex-wrap gap-2">

              {center.services.map((service) => (

                <span
                  key={service}
                  className="
                    rounded-lg
                    border border-slate-200
                    bg-slate-50
                    px-3 py-1.5
                    text-[11px]
                    font-semibold
                    text-slate-600
                  "
                >
                  {service}
                </span>

              ))}

            </div>

          </div>

          {/* ==================================================
              FEATURES
          ================================================== */}

          <div className="mt-5 flex flex-wrap gap-2">

            {center.homeCollection && (
              <Feature
                icon={<Home size={14} />}
                text="Home Collection"
              />
            )}

            {center.digitalReport && (
              <Feature
                icon={<FileText size={14} />}
                text="Digital Report"
              />
            )}

            {center.emergency && (
              <Feature
                icon={<Flame size={14} />}
                text="Emergency Service"
              />
            )}

          </div>

          {/* ==================================================
              BOTTOM ACTIONS
          ================================================== */}

          <div className="mt-6 flex flex-col gap-2 border-t border-slate-100 pt-5 sm:flex-row">

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

              View Center Details

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
              href={`tel:${center.phone}`}
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
// ℹ️ INFO BOX
// ============================================================

function InfoBox({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
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

      <div className="flex items-center gap-2 text-blue-600">

        {icon}

        <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
          {label}
        </span>

      </div>

      <p className="mt-2 text-xs font-black text-slate-800">
        {value}
      </p>

    </div>
  );
}

// ============================================================
// ✨ FEATURE
// ============================================================

function Feature({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <span
      className="
        inline-flex
        items-center gap-1.5
        rounded-lg
        bg-emerald-50
        px-3 py-1.5
        text-[10px]
        font-bold
        text-emerald-700
      "
    >

      {icon}

      {text}

    </span>
  );
}