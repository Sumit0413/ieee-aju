import SectionHeading from "../components/SectionHeading";
import KeyDatesCard from "../components/KeyDatesCard";
import Link from "next/link";
import { FaCheckCircle, FaFileAlt, FaPaperPlane } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Call for Papers | JHICON-2027",
  description: "Submit your research paper to JHICON-2027. Conference tracks, submission guidelines, and paper format.",
};

const tracks = [
  {
    title: "Electrical Engineering & Power Systems",
    topics: [
      "Power System Analysis & Protection",
      "High Voltage Engineering",
      "Electrical Machines & Drives",
      "Power Electronics & Converters",
      "Smart Grid Technologies",
      "Energy Storage Systems",
    ],
  },
  {
    title: "Signal Processing & Communications",
    topics: [
      "Digital Signal Processing",
      "Image & Video Processing",
      "Speech & Audio Processing",
      "Wireless Communication Systems",
      "5G/6G Networks",
      "Radar & Sonar Systems",
    ],
  },
  {
    title: "VLSI & Embedded Systems",
    topics: [
      "VLSI Design & Testing",
      "System-on-Chip (SoC) Design",
      "FPGA-based Systems",
      "Embedded System Design",
      "Low-Power Circuit Design",
      "Hardware Security",
    ],
  },
  {
    title: "Advanced Computing & AI",
    topics: [
      "Machine Learning & Deep Learning",
      "Cloud & Edge Computing",
      "High Performance Computing",
      "Natural Language Processing",
      "Computer Vision",
      "Blockchain Technologies",
    ],
  },
  {
    title: "Renewable Energy & Sustainable Development",
    topics: [
      "Solar & Wind Energy Systems",
      "Micro-grid & Distributed Generation",
      "Electric Vehicles & Charging Infrastructure",
      "Energy Efficiency & Management",
      "Green Computing",
      "Sustainable IoT Solutions",
    ],
  },
  {
    title: "IoT, Robotics & Automation",
    topics: [
      "Internet of Things (IoT) Applications",
      "Industrial Automation & Control",
      "Robotics & Mechatronics",
      "Sensor Networks",
      "Cyber-Physical Systems",
      "Smart Manufacturing",
    ],
  },
];

export default function CallForPapersPage() {
  return (
    <>
      <section className="bg-linear-to-r from-primary to-primary-dark py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Call for Papers</h1>
          <p className="mt-3 text-white/80 text-lg">
            Submit your original research to JHICON-2027
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-gray-600 leading-relaxed">
                  JHICON-2027 invites original, unpublished research papers on all aspects
                  of Electrical Engineering, Signal Processing, and Advanced Computing
                  Technologies for Sustainable Development. Authors are encouraged to submit
                  high-quality papers describing original and previously unpublished results
                  of theoretical, empirical, or experimental work in the areas listed below
                  (but not limited to).
                </p>
                <div className="mt-6 bg-accent/10 rounded-lg p-4 border border-accent/20">
                  <p className="text-sm text-foreground font-medium flex items-start gap-2">
                    <FaFileAlt className="text-accent mt-0.5 shrink-0" />
                    All registered and presented papers will be submitted to{" "}
                    <strong>IEEE Xplore Digital Library</strong> for possible publication,
                    subject to fulfilling IEEE eligibility criteria.
                  </p>
                </div>
              </div>

              {/* Conference Tracks */}
              <SectionHeading title="Conference Tracks" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {tracks.map((track) => (
                  <div
                    key={track.title}
                    className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-bold text-primary text-base mb-3 border-b border-gray-100 pb-2">
                      {track.title}
                    </h3>
                    <ul className="space-y-1.5">
                      {track.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <FaCheckCircle className="text-accent mt-0.5 shrink-0 text-xs" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Submission Guidelines */}
              <SectionHeading title="Submission Guidelines" />
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-3">
                  <h4 className="font-bold text-foreground text-base">Paper Format</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-accent mt-0.5 shrink-0 text-xs" />
                      Papers must be written in English and formatted according to the{" "}
                      <strong>IEEE conference template</strong>.
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-accent mt-0.5 shrink-0 text-xs" />
                      Maximum paper length: <strong>6 pages</strong> (including references).
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-accent mt-0.5 shrink-0 text-xs" />
                      All papers must be submitted in <strong>PDF format</strong>.
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-accent mt-0.5 shrink-0 text-xs" />
                      Papers must be original and not simultaneously submitted to another
                      conference or journal.
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-accent mt-0.5 shrink-0 text-xs" />
                      All submissions will undergo a <strong>double-blind peer review</strong>{" "}
                      process.
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="w-full mt-4 bg-accent/10 rounded-lg p-4 border border-accent/20 text-sm text-gray-700">
                    <strong className="block text-foreground mb-1">CMT ACKNOWLEDGMENT:</strong>
                    The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
                  </div>

                  <Link
                    href="/register"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-primary-dark font-bold text-sm hover:bg-accent-light transition-colors"
                  >
                    <FaPaperPlane /> Submit Your Paper
                  </Link>
                  <Link
                    href="/key-dates"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-colors"
                  >
                    View Key Dates
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <KeyDatesCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
