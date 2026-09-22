import Link from "next/link";
import {
  Stethoscope,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Globe,
  MessageCircle,
  Share2,
  HeartPulse,
  Clock,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* ================= BRAND ================= */}
          <div>
            <Link
              href="/"
              className="mb-5 inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                <Stethoscope size={25} strokeWidth={2.2} />
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  Doc<span className="text-blue-500">Find</span>
                </h2>

                <p className="text-xs text-slate-500">
                  Healthcare made easier
                </p>
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-7 text-slate-400">
              Find trusted doctors, diagnostic centers, ambulance services,
              and useful healthcare information in one convenient place.
            </p>

            {/* Find Doctor Button */}
            <Link
              href="/doctors"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
            >
              Find a Doctor
              <ArrowRight size={17} />
            </Link>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="space-y-3.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-blue-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/doctors"
                  className="transition-colors hover:text-blue-400"
                >
                  Find Doctors
                </Link>
              </li>

              <li>
                <Link
                  href="/diagnostic-centers"
                  className="transition-colors hover:text-blue-400"
                >
                  Diagnostic Centers
                </Link>
              </li>

              <li>
                <Link
                  href="/ambulance"
                  className="transition-colors hover:text-blue-400"
                >
                  Ambulance
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-blue-400"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= FOR DOCTORS ================= */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              For Doctors
            </h3>

            <ul className="space-y-3.5 text-sm">
              <li>
                <Link
                  href="/join-doctor"
                  className="transition-colors hover:text-blue-400"
                >
                  Join as a Doctor
                </Link>
              </li>

              <li>
                <Link
                  href="/doctor-login"
                  className="transition-colors hover:text-blue-400"
                >
                  Doctor Login
                </Link>
              </li>

              <li>
                <Link
                  href="/doctor-dashboard"
                  className="transition-colors hover:text-blue-400"
                >
                  Doctor Dashboard
                </Link>
              </li>

              <li>
                <Link
                  href="/doctor-profile"
                  className="transition-colors hover:text-blue-400"
                >
                  Create Profile
                </Link>
              </li>

              <li>
                <Link
                  href="/doctor-support"
                  className="transition-colors hover:text-blue-400"
                >
                  Doctor Support
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>

            <ul className="space-y-4 text-sm">

              {/* Location */}
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-blue-500"
                />

                <span className="leading-6">
                  Dhaka, Bangladesh
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="shrink-0 text-blue-500"
                />

                <span>
                  +880 1XXX-XXXXXX
                </span>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="shrink-0 text-blue-500"
                />

                <span>
                  support@docfind.com
                </span>
              </li>

              {/* Working Hours */}
              <li className="flex items-start gap-3">
                <Clock
                  size={18}
                  className="mt-0.5 shrink-0 text-blue-500"
                />

                <span className="leading-6">
                  Sat – Thu
                  <br />
                  9:00 AM – 10:00 PM
                </span>
              </li>
            </ul>

            {/* ================= SOCIAL / CONNECT ================= */}
            <div className="mt-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Connect With Us
              </p>

              <div className="flex gap-3">

                <a
                  href="#"
                  aria-label="Website"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-slate-400 transition-all hover:bg-blue-600 hover:text-white"
                >
                  <Globe size={17} />
                </a>

                <a
                  href="#"
                  aria-label="Message"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-slate-400 transition-all hover:bg-blue-600 hover:text-white"
                >
                  <MessageCircle size={17} />
                </a>

                <a
                  href="#"
                  aria-label="Share"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-slate-400 transition-all hover:bg-blue-600 hover:text-white"
                >
                  <Share2 size={17} />
                </a>

                <a
                  href="#"
                  aria-label="Healthcare"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-slate-400 transition-all hover:bg-blue-600 hover:text-white"
                >
                  <HeartPulse size={17} />
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM SECTION ================= */}
        <div className="mt-14 border-t border-slate-800 pt-7">

          <div className="flex flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between">

            {/* Copyright */}
            <p className="text-slate-500">
              © {new Date().getFullYear()} DocFind. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link
                href="/privacy"
                className="text-slate-500 transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-slate-500 transition-colors hover:text-white"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/help"
                className="text-slate-500 transition-colors hover:text-white"
              >
                Help Center
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
