import SectionHeading from "../components/SectionHeading";
import KeyDatesCard from "../components/KeyDatesCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | JHICON-2027",
  description: "Learn about the 1st Jharkhand International Conference on Electrical Engineering, Signal Processing, and Advanced Computing Technologies for Sustainable Development (JHICON-2027) and Arka Jain University.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-linear-to-r from-primary to-primary-dark py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold">About</h1>
          <p className="mt-3 text-white/80 text-lg">JHICON-2027 & Arka Jain University</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About JHICON-2027 */}
              <div>
                <SectionHeading title="About JHICON-2027" />
                <div className="prose prose-sm sm:prose-base max-w-none text-gray-600 space-y-4 leading-relaxed">
                  <p>
                    The <strong>1st Jharkhand International Conference on Electrical Engineering, Signal Processing, and Advanced Computing Technologies for Sustainable Development (JHICON-2027)</strong>{" "}
                    is scheduled to be held on <strong>February 2–3, 2027</strong> at{" "}
                    <strong>Arka Jain University, Gamharia, Jharkhand, India</strong>. This
                    inaugural edition of JHICON marks a significant step toward advancing Electrical
                    Engineering, Signal Processing, and Computing Technologies for sustainable societal
                    and industrial transformation.
                  </p>
                  <p>
                    JHICON-2027 has been envisioned as a dynamic global platform for researchers,
                    academicians, industry professionals, and innovators to present original
                    contributions and explore the latest in electrical engineering, signal processing,
                    and advanced computing, with a strong emphasis on international collaboration
                    and sustainable development.
                  </p>
                  <p>
                    The conference features keynote sessions, technical paper presentations,
                    tutorials, industry sessions, and panel discussions across various
                    domains — including power systems, signal processing, VLSI, IoT, renewable
                    energy, advanced computing, and smart systems.
                  </p>
                  <p>
                    All registered and presented papers will be submitted to{" "}
                    <strong>IEEE Xplore Digital Library</strong> for possible publication subject
                    to fulfilling the IEEE eligibility criteria. Extended versions of all (100%)
                    presented papers will be eligible for further review and possible publication
                    in <strong>IEEE Security & Privacy Magazine</strong>.
                  </p>
                </div>
              </div>

              {/* About Arka Jain University */}
              <div>
                <SectionHeading title="About Arka Jain University" />
                <div className="prose prose-sm sm:prose-base max-w-none text-gray-600 space-y-4 leading-relaxed">
                  <p>
                    <strong>Arka Jain University (AJU)</strong> is a premier institution of higher
                    education located in Gamharia, Seraikela-Kharsawan, Jharkhand, India.
                    Established with a vision to provide world-class education, AJU is committed
                    to high-quality teaching, advanced research, innovation, and industry-oriented
                    training.
                  </p>
                  <p>
                    The university comprises multiple academic departments offering B.Tech, M.Tech,
                    M.Sc, MCA, and Ph.D. programs, with a strong emphasis on academic excellence,
                    good governance, and leadership in engineering education and research.
                  </p>
                  <p>
                    AJU aims to emerge as a front-runner in addressing the evolving needs of the
                    technology sector, industries, and public services. With a commitment to high
                    human values and societal impact, it strives to impart quality education,
                    develop advanced skills, and establish state-of-the-art research facilities.
                  </p>
                </div>
              </div>

              {/* Department Info */}
              <div>
                <SectionHeading title="Department of Electrical and Electronics Engineering" />
                <div className="prose prose-sm sm:prose-base max-w-none text-gray-600 space-y-4 leading-relaxed">
                  <p>
                    The Department of Electrical and Electronics Engineering at ARKA Jain University has been consistently 
                    producing highly skilled and industry-ready engineers since its inception. 
                    Along with strong academic foundations, the department is actively involved in research and development 
                    across emerging areas of Electrical, Electronics, and artificial intelligence, including projects 
                    focused on renewable energy systems, smart grid technology, and machine learning applications in automation.                  </p>
                  <p>
                    The department offers undergraduate (B.Tech) and postgraduate programs in Electrical, 
                    Electronics, Artificial Intelligence, and Machine Learning, 
                    along with a Ph.D. program covering multiple specialized domains.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <KeyDatesCard />

              {/* Conference Venue Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-bold text-primary text-lg mb-3">Conference Venue</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Arka Jain University<br />
                  NH-33, Gamharia<br />
                  Seraikela-Kharsawan<br />
                  Jharkhand 832108, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
