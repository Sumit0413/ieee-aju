import Image from "next/image";
import SectionHeading from "../components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsors | JHICON-2027",
  description: "Sponsors, technical co-sponsors, and knowledge partners of JHICON-2027.",
};

const tiers = [
  {
    name: "Technical Co-Sponsors",
    color: "bg-primary",
    sponsors: [
      { name: "IEEE", abbr: "IEEE", logo: "/ieee.webp" },
      { name: "IEEE Kolkata Section", abbr: "IEEE KS", logo: "/kolkata.webp" },
    ],
  },
];

export default function SponsorsPage() {
  return (
    <>
      <section className="bg-linear-to-r from-primary to-primary-dark py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Sponsors & Partners</h1>
          <p className="mt-3 text-white/80 text-lg">
            We extend our sincere gratitude to all our sponsors and partners
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Sponsor Tiers */}
          {tiers.map((tier) => (
            <div key={tier.name} className="mb-16">
              <SectionHeading title={tier.name} />
              <div className="flex flex-wrap justify-center gap-8">
                {tier.sponsors.map((s) => (
                  <div
                    key={s.name}
                    className="group flex flex-col items-center gap-3"
                  >
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl bg-white border-2 border-gray-200 shadow-sm flex items-center justify-center group-hover:border-accent group-hover:shadow-md transition-all">
                      <Image
                        src={s.logo}
                        alt={s.name}
                        width={160}
                        height={160}
                        className="h-24 w-24 sm:h-28 sm:w-28 object-contain p-2"
                      />
                    </div>
                    <span className="text-sm text-gray-600 font-medium">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Become a Sponsor CTA */}
          <div className="bg-linear-to-r from-primary to-primary-dark rounded-2xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Become a Sponsor</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              Partner with JHICON-2027 and showcase your organization to a global audience
              of researchers, engineers, and innovators in the field of electrical engineering and computing.
            </p>
            <a
              href="mailto:dr.ashwini@arkajainuniversity.ac.in,dr.aditya@arkajainuniversity.ac.in?subject=Sponsorship%20Inquiry%20-%20JHICON-2027"
              className="inline-block px-8 py-3 rounded-lg bg-accent text-primary-dark font-bold text-sm hover:bg-accent-light transition-colors"
            >
              Contact Us for Sponsorship
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
