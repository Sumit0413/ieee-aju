import SectionHeading from "./SectionHeading";
import Image from "next/image";

const organizers = [
  {
    name: "Arka Jain University",
    role: "Host Institution",
    abbr: "AJU",
    description: "Gamharia, Jharkhand, India",
    url: "https://arkajainuniversity.ac.in",
    logo: "/Arkajain.webp",
  },
  {
    name: "IEEE",
    role: "",
    abbr: "IEEE",
    description: "Institute of Electrical and Electronics Engineers",
    url: "https://www.ieee.org/",
    logo: "/ieee.webp",
  },
  {
    name: "IEEE Kolkata Section",
    role: "Technical Co-Sponsor",
    abbr: "IEEE KS",
    description: "IEEE Kolkata Section Chapter",
    url: "https://ewh.ieee.org/r10/calcutta/",
    logo: "/kolkata.webp",
  },
];

export default function OrganizersSection() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Organizers"
          subtitle="JHICON-2027 is jointly organized by the following institutions"
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {organizers.map((org) => (
            <a
              key={org.name}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl border border-white p-6 text-center shadow-none hover:shadow-md transition-shadow hover:cursor-pointer"
            >
              <div className="relative w-36 aspect-square mx-auto rounded-lg bg-white border border-gray-100 flex items-center justify-center mb-4 overflow-hidden">
                <Image
                  src={org.logo}
                  alt={org.name}
                  fill
                  sizes="144px"
                  className="object-contain p-3"
                />
              </div>
              <h3 className="font-bold text-foreground text-base">{org.name}</h3>
              <p className="text-sm text-accent font-medium mt-1">{org.role}</p>
              <p className="text-xs text-gray-600 mt-2">{org.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
