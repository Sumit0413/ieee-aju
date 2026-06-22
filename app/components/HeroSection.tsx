import Image from "next/image";
import Link from "next/link";
import CountdownTimer from "./CountdownTimer";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const CONFERENCE_DATE = new Date("2027-02-02T09:00:00+05:30");

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Background image */}
      <Image
        src="/image.png"
        alt="JHICON-2027 Conference"
        fill
        priority
        className="object-cover"
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-primary-dark/75" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="text-center">
          {/* IEEE Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm mb-6">
            <span className="font-semibold text-accent">JHICON </span>
            <span className="text-white/70">2027</span>
          </div>

          <div className="max-w-5xl mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight text-center">
              <span className="block text-white">1st Jharkhand International Conference</span>
              <span className="block text-white">on</span>
              <span className="block text-accent">Electrical Engineering, Signal Processing, and Advanced Computing Technologies for Sustainable Development</span>
            </h1>

            <p className="mt-3 text-sm sm:text-base text-white/80 text-center font-semibold"></p>
          </div>

          {/* <p className="mt-4 text-lg sm:text-xl text-white/80 font-medium">
            JHICON-2027
          </p> */}

          {/* Date & Venue */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-base sm:text-lg text-white/85 font-medium">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-accent" />
              <span>February 2–3, 2027</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-accent" />
              <span>Arka Jain University, Jharkhand, India</span>
            </div>
          </div>

          {/* Countdown */}
          <div className="mt-10">
            <p className="text-sm text-white/60 uppercase tracking-widest mb-4">
              Conference Starts In
            </p>
            <div className="flex justify-center">
              <CountdownTimer targetDate={CONFERENCE_DATE} />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/register"
              className="px-8 py-3 rounded-lg bg-accent text-primary-dark font-bold text-sm sm:text-base hover:bg-accent-light transition-colors shadow-lg shadow-accent/25"
            >
              Register Now
            </Link>
            <Link
              href="/call-for-papers"
              className="px-8 py-3 rounded-lg border border-white/30 text-white font-semibold text-sm sm:text-base hover:bg-white/10 transition-colors"
            >
              Submit Paper
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
