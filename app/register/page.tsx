import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | JHICON-2027",
  description: "Register for the 1st Jharkhand International Conference on Electrical Engineering, Signal Processing, and Advanced Computing Technologies for Sustainable Development (JHICON-2027).",
};

// TODO: Replace with actual Google Form URL before going live
const GOOGLE_FORM_URL = "#";

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
              <h3 className="text-lg font-bold text-primary mb-4 text-center">Registration Fees</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary/5 border-b border-gray-200">
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Category</th>
                      <th className="px-4 py-3 text-center font-semibold text-foreground">Indian (INR)</th>
                      <th className="px-4 py-3 text-center font-semibold text-foreground">International (USD)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-foreground">IEEE Student Member</td>
                      <td className="px-4 py-3 text-center text-gray-600">₹5,000</td>
                      <td className="px-4 py-3 text-center text-gray-600">$150</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-foreground">IEEE Member</td>
                      <td className="px-4 py-3 text-center text-gray-600">₹7,000</td>
                      <td className="px-4 py-3 text-center text-gray-600">$200</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-foreground">Non-IEEE Student</td>
                      <td className="px-4 py-3 text-center text-gray-600">₹6,000</td>
                      <td className="px-4 py-3 text-center text-gray-600">$175</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-foreground">Non-IEEE Member</td>
                      <td className="px-4 py-3 text-center text-gray-600">₹8,000</td>
                      <td className="px-4 py-3 text-center text-gray-600">$250</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-foreground">Industry Professional</td>
                      <td className="px-4 py-3 text-center text-gray-600">₹10,000</td>
                      <td className="px-4 py-3 text-center text-gray-600">$300</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-foreground">Attendee (No Paper)</td>
                      <td className="px-4 py-3 text-center text-gray-600">₹2,000</td>
                      <td className="px-4 py-3 text-center text-gray-600">$75</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-3 text-center">
                * Fees are indicative and subject to change. Check the registration form for final amounts.
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
