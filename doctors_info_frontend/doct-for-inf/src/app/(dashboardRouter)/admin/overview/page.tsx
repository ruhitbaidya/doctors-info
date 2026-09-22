"use client";

import {
  ArrowUpRight,
  Building2,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Clock3,
  FileText,
  MoreHorizontal,
  Plus,
  Stethoscope,
  TrendingUp,
  Users,
} from "lucide-react";

// ============================================================
// 📊 DASHBOARD DATA
// পরে এগুলো API / MongoDB থেকে আসবে
// ============================================================

const stats = [
  {
    title: "Total Doctors",
    value: "248",
    change: "+12.5%",
    icon: Stethoscope,
  },
  {
    title: "Diagnostic Centers",
    value: "86",
    change: "+8.2%",
    icon: Building2,
  },
  {
    title: "Total Patients",
    value: "12,540",
    change: "+18.4%",
    icon: Users,
  },
  {
    title: "Appointments",
    value: "1,284",
    change: "+14.6%",
    icon: CalendarDays,
  },
];

// ============================================================
// 📅 APPOINTMENT DATA
// ============================================================

const appointments = [
  {
    id: "#APT-1024",
    patient: "Rahim Ahmed",
    doctor: "Dr. Sarah Ahmed",
    specialty: "Cardiology",
    date: "22 Sep, 2026",
    time: "10:30 AM",
    status: "Confirmed",
  },
  {
    id: "#APT-1023",
    patient: "Nusrat Jahan",
    doctor: "Dr. James Wilson",
    specialty: "Neurology",
    date: "22 Sep, 2026",
    time: "11:00 AM",
    status: "Pending",
  },
  {
    id: "#APT-1022",
    patient: "Tanvir Hasan",
    doctor: "Dr. Emily Carter",
    specialty: "Orthopedic",
    date: "21 Sep, 2026",
    time: "04:30 PM",
    status: "Completed",
  },
  {
    id: "#APT-1021",
    patient: "Mim Akter",
    doctor: "Dr. Michael Brown",
    specialty: "Dermatology",
    date: "21 Sep, 2026",
    time: "06:00 PM",
    status: "Cancelled",
  },
];

// ============================================================
// 👨‍⚕️ RECENT DOCTORS
// ============================================================

const recentDoctors = [
  {
    name: "Dr. Sarah Ahmed",
    specialty: "Cardiologist",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Dr. James Wilson",
    specialty: "Neurologist",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Dr. Emily Carter",
    specialty: "Orthopedic",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Dr. Michael Brown",
    specialty: "Dermatologist",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=200&q=80",
  },
];

// ============================================================
// DASHBOARD OVERVIEW
// ============================================================

const OverView = () => {
  return (
    <div className="w-full min-w-0">

      {/* ==================================================
          STAT CARDS
      ================================================== */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((stat) => {

          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="
                rounded-2xl
                border border-slate-200
                bg-white p-5
              "
            >

              <div className="flex items-start justify-between">

                <div
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-xl
                    bg-blue-50
                    text-blue-600
                  "
                >
                  <Icon size={21} />
                </div>

                <button
                  className="
                    text-slate-300
                    transition
                    hover:text-slate-600
                  "
                >
                  <MoreHorizontal size={19} />
                </button>

              </div>

              <div className="mt-5">

                <p className="text-sm font-medium text-slate-500">
                  {stat.title}
                </p>

                <div className="mt-1 flex items-end gap-2">

                  <h3 className="text-2xl font-bold tracking-tight">
                    {stat.value}
                  </h3>

                  <span
                    className="
                      mb-1 flex items-center
                      text-xs font-semibold
                      text-emerald-600
                    "
                  >
                    <TrendingUp size={12} />
                    {stat.change}
                  </span>

                </div>

              </div>

            </div>
          );
        })}

      </div>

      {/* ==================================================
          CHART + RECENT DOCTORS
      ================================================== */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-[1.7fr_1fr]">

        {/* ==================================================
            APPOINTMENT CHART
        ================================================== */}

        <div
          className="
            min-w-0
            rounded-2xl
            border border-slate-200
            bg-white p-5 sm:p-6
          "
        >

          <div className="flex items-start justify-between gap-3">

            <div>

              <h3 className="font-bold text-slate-900">
                Appointment Overview
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                Appointment activity over the last 7 days
              </p>

            </div>

            <button
              className="
                flex shrink-0 items-center
                gap-1 rounded-lg
                border border-slate-200
                px-3 py-1.5
                text-xs font-medium
                text-slate-500
              "
            >
              This Week
              <ChevronDown size={13} />
            </button>

          </div>

          {/* ==================================================
              SIMPLE CSS CHART
          ================================================== */}

          <div className="mt-8 flex h-[230px] items-end gap-3 sm:gap-5">

            {[42, 68, 55, 82, 64, 91, 74].map(
              (height, index) => (

                <div
                  key={index}
                  className="
                    flex h-full flex-1
                    flex-col justify-end
                  "
                >

                  <div className="relative">

                    <div
                      style={{
                        height: `${height * 2}px`,
                      }}
                      className="
                        w-full rounded-t-lg
                        bg-blue-100
                        transition
                        hover:bg-blue-200
                      "
                    />

                    <div
                      style={{
                        height: `${height * 1.45}px`,
                      }}
                      className="
                        absolute bottom-0
                        left-1/2
                        w-[45%]
                        -translate-x-1/2
                        rounded-t-md
                        bg-blue-600
                      "
                    />

                  </div>

                  <span
                    className="
                      mt-3 text-center
                      text-[10px] text-slate-400
                      sm:text-xs
                    "
                  >
                    {
                      [
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu",
                        "Fri",
                        "Sat",
                        "Sun",
                      ][index]
                    }
                  </span>

                </div>
              )
            )}

          </div>

        </div>

        {/* ==================================================
            RECENT DOCTORS
        ================================================== */}

        <div
          className="
            min-w-0
            rounded-2xl
            border border-slate-200
            bg-white p-5 sm:p-6
          "
        >

          <div className="flex items-center justify-between gap-3">

            <div>

              <h3 className="font-bold">
                Recent Doctors
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                Recently added specialists
              </p>

            </div>

            <button
              className="
                text-xs font-semibold
                text-blue-600
                hover:underline
              "
            >
              View all
            </button>

          </div>

          <div className="mt-5 space-y-4">

            {recentDoctors.map((doctor) => (

              <div
                key={doctor.name}
                className="flex items-center gap-3"
              >

                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="
                    h-11 w-11
                    shrink-0
                    rounded-xl
                    object-cover
                    object-top
                  "
                />

                <div className="min-w-0 flex-1">

                  <p className="truncate text-sm font-semibold">
                    {doctor.name}
                  </p>

                  <p className="mt-0.5 text-xs text-slate-400">
                    {doctor.specialty}
                  </p>

                </div>

                <button
                  className="
                    shrink-0
                    text-slate-300
                    hover:text-blue-600
                  "
                >
                  <ArrowUpRight size={17} />
                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* ==================================================
          QUICK ACTIONS
      ================================================== */}

      <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">

        <QuickAction
          icon={<Plus size={19} />}
          title="Add Doctor"
          description="Create specialist profile"
          color="blue"
        />

        <QuickAction
          icon={<Building2 size={19} />}
          title="Add Center"
          description="Add diagnostic center"
          color="emerald"
        />

        <QuickAction
          icon={<ClipboardList size={19} />}
          title="Appointments"
          description="Manage appointments"
          color="violet"
        />

        <QuickAction
          icon={<FileText size={19} />}
          title="Manage Content"
          description="Homepage & banners"
          color="orange"
        />

      </div>

      {/* ==================================================
          RECENT APPOINTMENTS
      ================================================== */}

      <div
        className="
          mt-5 overflow-hidden
          rounded-2xl
          border border-slate-200
          bg-white
        "
      >

        {/* Header */}

        <div
          className="
            flex items-center
            justify-between
            border-b border-slate-100
            p-5 sm:p-6
          "
        >

          <div>

            <h3 className="font-bold">
              Recent Appointments
            </h3>

            <p className="mt-1 text-xs text-slate-400">
              Latest patient appointments
            </p>

          </div>

          <button
            className="
              flex items-center gap-1
              text-xs font-semibold
              text-blue-600
            "
          >
            View All
            <ChevronRight size={14} />
          </button>

        </div>

        {/* ==================================================
            DESKTOP TABLE
        ================================================== */}

        <div className="hidden overflow-x-auto md:block">

          <table className="w-full">

            <thead>

              <tr
                className="
                  border-b border-slate-100
                  bg-slate-50/70
                  text-left
                "
              >

                <TableHead>ID</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>

                <th className="px-6 py-3" />

              </tr>

            </thead>

            <tbody>

              {appointments.map((appointment) => (

                <tr
                  key={appointment.id}
                  className="
                    border-b border-slate-100
                    last:border-0
                    hover:bg-slate-50/50
                  "
                >

                  <td className="px-6 py-4 text-xs font-semibold text-blue-600">
                    {appointment.id}
                  </td>

                  <td className="px-6 py-4">

                    <p className="text-sm font-semibold">
                      {appointment.patient}
                    </p>

                  </td>

                  <td className="px-6 py-4">

                    <p className="text-sm font-medium">
                      {appointment.doctor}
                    </p>

                    <p className="mt-0.5 text-xs text-slate-400">
                      {appointment.specialty}
                    </p>

                  </td>

                  <td className="px-6 py-4">

                    <p className="text-xs font-medium">
                      {appointment.date}
                    </p>

                    <p
                      className="
                        mt-0.5 flex items-center
                        gap-1 text-[11px]
                        text-slate-400
                      "
                    >
                      <Clock3 size={11} />
                      {appointment.time}
                    </p>

                  </td>

                  <td className="px-6 py-4">

                    <StatusBadge
                      status={appointment.status}
                    />

                  </td>

                  <td className="px-6 py-4 text-right">

                    <button
                      className="
                        text-slate-400
                        hover:text-slate-700
                      "
                    >
                      <MoreHorizontal size={18} />
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* ==================================================
            MOBILE APPOINTMENTS
        ================================================== */}

        <div className="divide-y divide-slate-100 md:hidden">

          {appointments.map((appointment) => (

            <div
              key={appointment.id}
              className="p-4"
            >

              <div className="flex items-start justify-between gap-3">

                <div>

                  <p className="text-xs font-bold text-blue-600">
                    {appointment.id}
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    {appointment.patient}
                  </p>

                </div>

                <StatusBadge
                  status={appointment.status}
                />

              </div>

              <div className="mt-3">

                <p className="text-xs font-medium">
                  {appointment.doctor}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {appointment.date} • {appointment.time}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

// ============================================================
// QUICK ACTION COMPONENT
// ============================================================

function QuickAction({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: "blue" | "emerald" | "violet" | "orange";
}) {

  const colorClasses = {
    blue: "bg-blue-50 text-blue-600",
    emerald: "bg-emerald-50 text-emerald-600",
    violet: "bg-violet-50 text-violet-600",
    orange: "bg-orange-50 text-orange-600",
  };

  return (
    <button
      className="
        group rounded-2xl
        border border-slate-200
        bg-white p-4 text-left
        transition
        hover:border-blue-200
        hover:shadow-sm
      "
    >

      <div
        className={`
          flex h-10 w-10
          items-center justify-center
          rounded-xl
          ${colorClasses[color]}
        `}
      >
        {icon}
      </div>

      <p className="mt-3 text-sm font-semibold">
        {title}
      </p>

      <p className="mt-1 text-xs text-slate-400">
        {description}
      </p>

    </button>
  );
}

// ============================================================
// TABLE HEAD
// ============================================================

function TableHead({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <th
      className="
        px-6 py-3
        text-left
        text-[11px]
        font-bold
        uppercase
        tracking-wider
        text-slate-400
      "
    >
      {children}
    </th>
  );
}

// ============================================================
// STATUS BADGE
// ============================================================

function StatusBadge({
  status,
}: {
  status: string;
}) {

  const styles: Record<string, string> = {
    Confirmed:
      "bg-emerald-50 text-emerald-600",

    Pending:
      "bg-amber-50 text-amber-600",

    Completed:
      "bg-blue-50 text-blue-600",

    Cancelled:
      "bg-red-50 text-red-500",
  };

  return (
    <span
      className={`
        inline-flex
        rounded-full
        px-2.5 py-1
        text-[10px]
        font-bold
        ${styles[status] || "bg-slate-100 text-slate-500"}
      `}
    >
      {status}
    </span>
  );
}

export default OverView;