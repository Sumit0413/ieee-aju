import SectionHeading from "./SectionHeading";

export default function WelcomeMessage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Welcome Message from the Organizing Leadership" />

        <div className="max-w-4xl mx-auto">
          {/* Chairs */}
          {/* <div className="flex flex-wrap justify-center gap-8 mb-10">
            {[
              {
                name: "Prof. (Dr.) Easwaran S. Iyer",
                title: "Chief Patron, JHICON-2027",
                affiliation: "Vice-Chancellor, ARKA Jain University",
              },
              {
                name: "Dr. Aditya Prasad Padhy, SMIEEE",
                title: "Organizing Chair, JHICON-2027",
                affiliation: "IEEE-AJU Student Branch Chair",
              },
            ].map((chair) => (
              <div key={chair.name} className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <span className="text-primary font-bold text-2xl">
                    {chair.name.split(" ").pop()?.[0]}
                  </span>
                </div>
                <h3 className="font-bold text-foreground">{chair.name}</h3>
                <p className="text-sm text-accent font-medium">{chair.title}</p>
                <p className="text-xs text-gray-600">{chair.affiliation}</p>
              </div>
            ))}
          </div> */}

          {/* Message */}
          <div className="prose prose-sm sm:prose-base max-w-none text-gray-600 space-y-4 leading-relaxed">
            <p>
              It is our great pleasure to welcome you to the <strong>1st Jharkhand International Conference on
              Electrical Engineering, Signal Processing, and Advanced Computing Technologies for
              Sustainable Development (JHICON-2027)</strong>, scheduled to be held on{" "}
              <strong>February 2–3, 2027</strong> at the{" "}
              <strong>Arka Jain University, Gamharia, Jharkhand, India</strong>.
              This inaugural edition of JHICON marks a significant step toward advancing
              Electrical Engineering, Signal Processing, and Computing Technologies for
              sustainable societal and industrial transformation.
            </p>
            <p>
              JHICON-2027 has been envisioned as a dynamic global platform for{" "}
              <strong>researchers, academicians, industry professionals, and innovators</strong>{" "}
              to present original contributions and explore the latest in electrical engineering,
              signal processing, and advanced computing, with a strong emphasis on
              international collaboration and sustainable development.
            </p>
            <p>
              JHICON-2027 features keynote sessions, technical paper presentations, tutorials,
              industry sessions, and panel discussions across various domains — including
              power systems, signal processing, VLSI, IoT, renewable energy, advanced computing,
              and smart systems. All registered and presented papers will be submitted
              to <strong>IEEE Xplore Digital Library</strong> for possible publication subject
              to fulfilling the IEEE eligibility criteria.
            </p>
            <p>
              We look forward to your active participation and wish you a rewarding and
              memorable experience at JHICON-2027.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
