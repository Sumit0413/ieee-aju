import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/committee", label: "Committee" },
  { href: "/call-for-papers", label: "Call for Papers" },
  { href: "/key-dates", label: "Key Dates" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-accent mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-accent" />
                <span>
                  Arka Jain University,<br />
                  Gamharia, Seraikela-Kharsawan,<br />
                  Jharkhand 832108, India
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaEnvelope className="shrink-0 text-accent mt-1" />
                <div className="flex flex-col">
                  <a href="mailto:jhicon.ieee@arkajainuniversity.ac.in" className="hover:text-accent transition-colors">
                    jhicon.ieee@arkajainuniversity.ac.in
                  </a>
                  <a href="mailto:dr.ashwini@arkajainuniversity.ac.in" className="hover:text-accent transition-colors mt-1">
                    dr.ashwini@arkajainuniversity.ac.in
                  </a>
                  <a href="mailto:dr.aditya@arkajainuniversity.ac.in" className="hover:text-accent transition-colors mt-1">
                    dr.aditya@arkajainuniversity.ac.in
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-accent mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About / Branding */}
          <div>
            <h3 className="text-lg font-bold text-accent mb-4">JHICON-2027</h3>
            <p className="text-sm text-white/80 leading-relaxed mb-4">
              1st Jharkhand International Conference on Electrical Engineering, Signal Processing
              and Advance Computing Technologies for Sustainable Development, organized
              by Arka Jain University in collaboration with IEEE.
            </p>
            <div className="flex items-center gap-4">
              <img src="/jhicon-logo.webp" alt="JHICON logo" className="w-12 h-12 object-contain rounded bg-white/5 p-1" />
              <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center text-accent font-bold text-xs">
                AJU
              </div>
              <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center text-accent font-bold text-xs">
                IEEE
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-xs text-white/60">
            © 2027 JHICON Conference. All rights reserved. | Jharkhand International Conference on Electrical Engineering, Signal Processing & Advance Computing
          </p>
        </div>
      </div>
    </footer>
  );
}
