import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/">Eng Basics</Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            <Link to="/meche">MechE</Link>
            <Link to="/home" className="transition hover:text-blue-600">
              Home
            </Link>

            <Link to="/about" className="transition hover:text-blue-600">
              About
            </Link>

            {/* Desktop Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 transition hover:text-blue-600">
                Streams
                <svg
                  className={`h-4 w-4 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute left-0 top-full w-56 rounded-xl border bg-white py-2 shadow-lg">
                  <Link
                    to="/meche"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Mechanical Engineering
                  </Link>

                  <Link
                    to="/cive"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Civil Engineering
                  </Link>
                  <Link
                    to="/chem"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Chemical Engineering
                  </Link>

                  <Link to="/ele" className="block px-4 py-2 hover:bg-gray-100">
                    Electrical Engineering
                  </Link>
                </div>
              )}
            </div>

            <Link to="/tools" className="transition hover:text-blue-600">
              Tools
            </Link>

            <button className="rounded-lg bg-black px-4 py-2 text-white transition hover:bg-zinc-800">
              Get Started
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            mobileOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 pt-2">
            <a href="/home" className="rounded-lg px-3 py-2 hover:bg-gray-100">
              Home
            </a>

            <a href="/about" className="rounded-lg px-3 py-2 hover:bg-gray-100">
              About
            </a>

            {/* Mobile Services */}
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-2 hover:bg-gray-100">
                Streams
                <svg
                  className="h-4 w-4 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <div className="ml-4 mt-2 flex flex-col">
                <a
                  href="/meche"
                  className="rounded-lg px-3 py-2 hover:bg-gray-100"
                >
                  Mechanical Engineering
                </a>

                <a
                  href="/cive"
                  className="rounded-lg px-3 py-2 hover:bg-gray-100"
                >
                  Civil Engineering
                </a>

                <a
                  href="/chem"
                  className="rounded-lg px-3 py-2 hover:bg-gray-100"
                >
                  Chemical Engineering
                </a>

                <a
                  href="/ele"
                  className="rounded-lg px-3 py-2 hover:bg-gray-100"
                >
                  Electrical Engineering
                </a>
              </div>
            </details>

            <a
              href="/contact"
              className="rounded-lg px-3 py-2 hover:bg-gray-100"
            >
              Tools
            </a>

            <button className="mt-2 rounded-lg bg-black px-4 py-3 text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
