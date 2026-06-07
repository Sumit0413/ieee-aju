import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | JHICON-2027",
  description: "Register for the 1st Jharkhand International Conference on Electrical Engineering, Signal Processing, and Advanced Computing Technologies for Sustainable Development (JHICON-2027).",
};

// TODO: Replace with actual Google Form URL before going live
const GOOGLE_FORM_URL = "#";

const feeRows = [
  {
    category: "Students",
    india: ["INR 6000", "INR 5000", "INR 7000", "INR 6500"],
    abroad: ["USD 150", "USD 100", "USD 200", "USD 150"],
  },
  {
    category: "Academia",
    india: ["INR 7000", "INR 6000", "INR 8000", "INR 7500"],
    abroad: ["USD 250", "USD 200", "USD 300", "USD 250"],
  },
  {
    category: "Industry",
    india: ["INR 8000", "INR 7500", "INR 9000", "INR 10000"],
    abroad: ["USD 300", "USD 250", "USD 350", "USD 300"],
  },
  {
    category: "Attendee (Student/Academia/Industry)",
    india: ["INR 2000", "INR 1000", "INR 2500", "INR 1500"],
    abroad: ["USD 100", "USD 50", "USD 125", "USD 70"],
  },
] as const;

const indiaColumns = [
  "IEEE (Physical Mode)",
  "IEEE (Virtual Mode)",
  "Non-IEEE (Physical Mode)",
  "Non-IEEE (Virtual Mode)",
];

const abroadColumns = [
  "IEEE (Physical)",
  "IEEE (Virtual Mode)",
  "Non-IEEE (Physical Mode)",
  "Non-IEEE (Virtual Mode)",
];

export default function RegisterPage() {

  return (
    <>
      <section className="bg-linear-to-r from-primary to-primary-dark py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Registration</h1>
          <p className="mt-3 text-white/80 text-lg">
            Register for JHICON-2027
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-12 text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-6">
              <FaExternalLinkAlt className="text-accent text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Registration Portal
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
              Registration for JHICON-2027 will be handled through Google Forms.
              Click the button below to proceed to the registration form.
              At least one author per accepted paper must register for the conference.
            </p>

            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-accent text-primary-dark font-bold hover:bg-accent-light transition-colors shadow-lg shadow-accent/25"
            >
              <FaExternalLinkAlt /> Open Registration Form
            </a>

            <p className="mt-6 text-xs text-gray-400">
              You will be redirected to Google Forms in a new tab.
            </p>

            {/* Registration Fee Table */}
            <div className="mt-12 text-left">
              <h3 className="text-lg font-bold text-primary mb-4 text-center">Registration Fees Details</h3>
              <div className="overflow-x-auto rounded-2xl border border-gray-200">
                <table className="w-full min-w-275 border-collapse text-sm">
                  <thead>
                    <tr className="bg-primary/5">
                      <th className="border border-gray-300 px-4 py-3 text-center text-base font-bold text-foreground" rowSpan={2}>
                        Category
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-center text-base font-bold text-foreground" colSpan={4}>
                        Participants from India
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-center text-base font-bold text-foreground" colSpan={4}>
                        Participants from Abroad
                      </th>
                    </tr>
                    <tr className="bg-white">
                      {indiaColumns.map((column) => (
                        <th key={column} className="border border-gray-300 px-4 py-3 text-center font-medium text-foreground whitespace-pre-line">
                          {column}
                        </th>
                      ))}
                      {abroadColumns.map((column) => (
                        <th key={column} className="border border-gray-300 px-4 py-3 text-center font-medium text-foreground whitespace-pre-line">
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {feeRows.map((row) => (
                      <tr key={row.category} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-4 text-center text-foreground font-medium whitespace-pre-line">
                          {row.category}
                        </td>
                        {row.india.map((value, index) => (
                          <td key={`${row.category}-india-${index}`} className="border border-gray-300 px-4 py-4 text-center text-foreground whitespace-pre-line">
                            {value}
                          </td>
                        ))}
                        {row.abroad.map((value, index) => (
                          <td key={`${row.category}-abroad-${index}`} className="border border-gray-300 px-4 py-4 text-center text-foreground whitespace-pre-line">
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-center text-sm font-semibold text-foreground">
                * With additional 18% GST on all Registration charges
              </p>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-8 text-center">
            <Link
              href="/"
              className="text-sm text-primary font-medium hover:text-accent transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
