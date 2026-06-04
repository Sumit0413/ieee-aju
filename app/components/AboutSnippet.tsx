import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { FaArrowRight } from "react-icons/fa";

export default function AboutSnippet() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About JHICON-2027"
          subtitle="Advancing Sustainable Development through Technology"
        />
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed">
            The 1st Jharkhand International Conference on Electrical Engineering, Signal Processing, and Advanced Computing Technologies for Sustainable Development (JHICON-2027) is
            a premier global platform that brings together researchers, academicians,
            industry professionals, and innovators to present cutting-edge research in
            electrical engineering, signal processing, and advanced computing. Organized
            by Arka Jain University in collaboration with IEEE, JHICON-2027 aims to foster
            international collaboration and drive innovation for sustainable development.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:text-accent transition-colors"
          >
            Learn More <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
}
