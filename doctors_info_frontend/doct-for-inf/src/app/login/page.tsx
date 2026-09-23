"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  HeartPulse,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Stethoscope,
  UserRound,
} from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-[calc(100vh-80px)] overflow-hidden bg-[#f7faff]">

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-blue-200/30 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-4 py-10 sm:px-6 lg:px-8">

        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <div className="hidden lg:block">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50">
                <HeartPulse
                  size={14}
                  className="text-blue-600"
                />
              </div>

              <span className="text-xs font-bold text-slate-600">
                Welcome to Doc<span className="text-blue-600">Find</span>
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-7 max-w-xl text-5xl font-black leading-[1.08] tracking-tight text-slate-900 xl:text-6xl">
              Your healthcare
              <span className="block text-blue-600">
                journey starts here.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-500">
              Sign in to your DocFind account and easily explore doctors,
              hospitals, diagnostic centers and healthcare information.
            </p>

            {/* Feature cards */}
            <div className="mt-9 space-y-4">

              {/* Feature 1 */}
              <div className="flex max-w-md items-center gap-4 rounded-2xl border border-white bg-white/80 p-4 shadow-sm backdrop-blur">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Stethoscope size={21} />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-800">
                    Find healthcare providers
                  </p>

                  <p className="mt-0.5 text-xs text-slate-400">
                    Discover doctors and specialists
                  </p>
                </div>

              </div>

              {/* Feature 2 */}
              <div className="flex max-w-md items-center gap-4 rounded-2xl border border-white bg-white/80 p-4 shadow-sm backdrop-blur">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <ShieldCheck size={21} />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-800">
                    Organized information
                  </p>

                  <p className="mt-0.5 text-xs text-slate-400">
                    Healthcare information in one place
                  </p>
                </div>

              </div>

            </div>

            {/* Bottom quote */}
            <div className="mt-10 flex items-center gap-3">

              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full border-2 border-white bg-blue-100" />
                <div className="h-8 w-8 rounded-full border-2 border-white bg-cyan-100" />
                <div className="h-8 w-8 rounded-full border-2 border-white bg-emerald-100" />
              </div>

              <p className="text-xs font-medium text-slate-400">
                Simple healthcare discovery for everyone
              </p>

            </div>
          </div>

          {/* =================================================
              LOGIN CARD
          ================================================== */}

          <div className="mx-auto w-full max-w-md">

            {/* Mobile logo */}
            <div className="mb-7 flex justify-center lg:hidden">

              <Link
                href="/"
                className="flex items-center gap-2"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                  <Stethoscope size={22} />
                </div>

                <h2 className="text-xl font-bold text-slate-900">
                  Doc<span className="text-blue-600">Find</span>
                </h2>
              </Link>

            </div>

            {/* Card */}
            <div className="rounded-[30px] border border-white bg-white/95 p-6 shadow-[0_30px_90px_-30px_rgba(15,23,42,0.25)] ring-1 ring-slate-100 backdrop-blur-xl sm:p-8">

              {/* Header */}
              <div className="text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <LockKeyhole size={25} />
                </div>

                <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">
                  Welcome back
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Sign in to continue to your DocFind account
                </p>

              </div>

              {/* Form */}
              <form className="mt-8 space-y-5">

                {/* Email */}
                <div>

                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-bold text-slate-700"
                  >
                    Email address
                  </label>

                  <div className="group relative">

                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition group-focus-within:text-blue-600"
                    />

                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-11 pr-4 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                    />

                  </div>

                </div>

                {/* Password */}
                <div>

                  <div className="mb-2 flex items-center justify-between">

                    <label
                      htmlFor="password"
                      className="block text-xs font-bold text-slate-700"
                    >
                      Password
                    </label>

                    <Link
                      href="/forgot-password"
                      className="text-xs font-semibold text-blue-600 transition hover:text-blue-700"
                    >
                      Forgot password?
                    </Link>

                  </div>

                  <div className="group relative">

                    <LockKeyhole
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition group-focus-within:text-blue-600"
                    />

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-11 pr-12 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((prev) => !prev)
                      }
                      className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>

                  </div>

                </div>

                {/* Remember me */}
                <div className="flex items-center justify-between">

                  <label className="flex cursor-pointer items-center gap-2">

                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-300 text-blue-600 accent-blue-600 focus:ring-blue-500"
                    />

                    <span className="text-xs font-medium text-slate-500">
                      Remember me
                    </span>

                  </label>

                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
                    <ShieldCheck
                      size={14}
                      className="text-emerald-500"
                    />
                    Secure login
                  </div>

                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25 active:translate-y-0"
                >
                  Sign in

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

              </form>

              {/* Divider */}
              <div className="my-7 flex items-center gap-3">

                <div className="h-px flex-1 bg-slate-200" />

                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Or continue with
                </span>

                <div className="h-px flex-1 bg-slate-200" />

              </div>

              {/* Google */}
              <button
                type="button"
                className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                {/* Google icon */}
                <span className="flex h-6 w-6 items-center justify-center rounded-full text-sm font-bold">
                  G
                </span>

                Continue with Google
              </button>

              {/* Register */}
              <p className="mt-7 text-center text-sm text-slate-500">
                Don't have an account?{" "}

                <Link
                  href="/register"
                  className="font-bold text-blue-600 transition hover:text-blue-700"
                >
                  Create account
                </Link>
              </p>

            </div>

            {/* Bottom privacy */}
            <div className="mt-5 flex items-center justify-center gap-2 text-center">

              <ShieldCheck
                size={15}
                className="text-emerald-500"
              />

              <p className="text-[11px] text-slate-400">
                Your account information is protected
              </p>

            </div>

          </div>

        </div>
      </div>
    </main>
  );
}