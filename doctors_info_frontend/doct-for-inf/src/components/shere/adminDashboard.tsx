"use client";

import { ReactNode, useState } from "react";

import {
  Activity,
  Bell,
  Building2,
  ChevronDown,
  CircleUserRound,
  LayoutDashboard,
  Menu,
  Plus,
  Search,
  Settings,
  Stethoscope,
  X,
} from "lucide-react";

import Link from "next/link";

// ============================================================
// SIDEBAR MENU
// ============================================================

const menuItems = [
  {
    label: "Overview",
    icon: LayoutDashboard,
    route: "/admin/overview",
  },
  {
    label: "Doctors",
    icon: Stethoscope,
    route: "/admin/doctor",
  },
  {
    label: "Diagnostic Centers",
    icon: Building2,
    route: "/admin/diagnostic",
  },
  {
    label: "Notifications",
    icon: Bell,
    route: "/admin/notification",
  },
  {
    label: "Settings",
    icon: Settings,
    route: "/admin/setting",
  },
];

// ============================================================
// ADMIN DASHBOARD LAYOUT
// ============================================================

export default function AdminDashboard({
  children,
}: {
  children: ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">

      {/* ======================================================
          MOBILE OVERLAY
      ====================================================== */}

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
        />
      )}

      {/* ======================================================
          SIDEBAR
      ====================================================== */}

      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen w-[260px]
          flex-col border-r border-slate-200 bg-white
          transition-transform duration-300
          lg:translate-x-0
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        {/* ==================================================
            LOGO
        ================================================== */}

        <div className="flex h-[76px] items-center justify-between border-b border-slate-100 px-6">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
              <Activity size={21} />
            </div>

            <div>
              <h1 className="text-base font-bold tracking-tight">
                MediCare
              </h1>

              <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                Admin Panel
              </p>
            </div>

          </div>

          {/* Mobile Close */}

          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-1 hover:bg-slate-100 lg:hidden"
          >
            <X size={20} />
          </button>

        </div>

        {/* ==================================================
            NAVIGATION
        ================================================== */}

        <div className="flex-1 overflow-y-auto px-4 py-6">

          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
            Main Menu
          </p>

          <nav className="space-y-1">

            {menuItems.map((item) => {

              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.route}
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    group flex w-full items-center gap-3
                    rounded-xl px-3.5 py-3 text-sm font-medium
                    transition
                    ${
                      item.label === "Overview"
                        ? "bg-blue-600 text-white shadow-sm shadow-blue-200"
                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                    }
                  `}
                >

                  <Icon
                    size={18}
                    className={
                      item.label === "Overview"
                        ? "text-white"
                        : "text-slate-400 group-hover:text-slate-700"
                    }
                  />

                  <span>{item.label}</span>

                  {item.label === "Notifications" && (
                    <span className="ml-auto rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-bold text-red-500">
                      3
                    </span>
                  )}

                </Link>
              );
            })}

          </nav>

          {/* ==================================================
              QUICK ACTION
          ================================================== */}

          <div className="mt-8">

            <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
              Quick Actions
            </p>

            <button
              className="
                flex w-full items-center gap-3
                rounded-xl border border-dashed
                border-slate-300 px-3.5 py-3
                text-sm font-medium text-slate-500
                transition
                hover:border-blue-400
                hover:bg-blue-50
                hover:text-blue-600
              "
            >

              <Plus size={18} />

              Add New Doctor

            </button>

          </div>

        </div>

        {/* ==================================================
            ADMIN PROFILE
        ================================================== */}

        <div className="border-t border-slate-100 p-4">

          <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <CircleUserRound size={20} />
            </div>

            <div className="min-w-0 flex-1">

              <p className="truncate text-sm font-semibold">
                Admin
              </p>

              <p className="truncate text-xs text-slate-400">
                admin@medicare.com
              </p>

            </div>

            <ChevronDown
              size={16}
              className="text-slate-400"
            />

          </div>

        </div>

      </aside>

      {/* ======================================================
          MAIN CONTENT
      ====================================================== */}

      <main className="min-w-0 lg:ml-[260px]">

        {/* ====================================================
            TOP HEADER
        ==================================================== */}

        <header
          className="
            sticky top-0 z-30
            flex h-[76px]
            items-center justify-between
            border-b border-slate-200
            bg-white/90
            px-4 backdrop-blur
            sm:px-6 lg:px-8
          "
        >

          {/* Left */}

          <div className="flex items-center gap-3">

            {/* Mobile Menu */}

            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 hover:bg-slate-100 lg:hidden"
            >
              <Menu size={22} />
            </button>

            {/* Search */}

            <div className="hidden md:block">

              <div className="relative">

                <Search
                  size={17}
                  className="
                    absolute left-3 top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />

                <input
                  type="text"
                  placeholder="Search anything..."
                  className="
                    h-10 w-[280px]
                    rounded-xl
                    border border-slate-200
                    bg-slate-50
                    pl-10 pr-4
                    text-sm
                    outline-none
                    transition
                    focus:border-blue-400
                    focus:bg-white
                  "
                />

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="flex items-center gap-3">

            {/* Notification */}

            <button
              className="
                relative flex h-10 w-10
                items-center justify-center
                rounded-xl border
                border-slate-200
                bg-white text-slate-500
                hover:bg-slate-50
              "
            >

              <Bell size={18} />

              <span
                className="
                  absolute right-2 top-2
                  h-2 w-2 rounded-full
                  bg-red-500
                  ring-2 ring-white
                "
              />

            </button>

            {/* Divider */}

            <div className="hidden h-9 w-px bg-slate-200 sm:block" />

            {/* Admin */}

            <div className="hidden items-center gap-2 sm:flex">

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <CircleUserRound size={20} />
              </div>

              <div>

                <p className="text-xs font-semibold">
                  Administrator
                </p>

                <p className="text-[10px] text-slate-400">
                  Super Admin
                </p>

              </div>

              <ChevronDown
                size={15}
                className="text-slate-400"
              />

            </div>

          </div>

        </header>

        {/* ====================================================
            PAGE CONTENT
        ==================================================== */}

        <div className="w-full p-4 sm:p-6 lg:p-8">

          {/* Page Date */}

          <div className="mb-6">

            <p className="text-sm text-slate-400">
              Tuesday, September 22, 2026
            </p>

          </div>

          {/* ==================================================
              CHILD PAGE
              
              এখানে Overview / Doctor / Diagnostic
              component render হবে
          ================================================== */}

          <div className="w-full min-w-0">
            {children}
          </div>

        </div>

      </main>

    </div>
  );
}