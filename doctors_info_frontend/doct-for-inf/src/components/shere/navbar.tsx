import Link from "next/link";
import { Search, Menu, Stethoscope } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
            <Stethoscope size={24} />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              Doc<span className="text-blue-600">Find</span>
            </h1>
            <p className="hidden text-xs text-slate-500 sm:block">
              Find the right doctor
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-7 lg:flex">
          <Link href="/" className="text-sm font-medium text-blue-600">
            Home
          </Link>

          <Link href="/doctors" className="text-sm font-medium text-slate-600 transition hover:text-blue-600">
            Find Doctors
          </Link>

          <Link href="/diagnostic-centers" className="text-sm font-medium text-slate-600 transition hover:text-blue-600">
            Diagnostic Centers
          </Link>

          <Link href="/ambulance" className="text-sm font-medium text-slate-600 transition hover:text-blue-600">
            Ambulance
          </Link>

          <Link href="/about" className="text-sm font-medium text-slate-600 transition hover:text-blue-600">
            About Us
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm font-semibold text-slate-700 transition hover:text-blue-600 sm:block"
          >
            Login
          </Link>

          <Link
            href="/join-doctor"
            className="hidden items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:flex"
          >
            <Stethoscope size={17} />
            Join as Doctor
          </Link>

          <button
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;