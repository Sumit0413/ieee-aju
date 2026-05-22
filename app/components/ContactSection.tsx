"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Contact Us"
          subtitle="Have questions about JHICON-2027? Reach out to us"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Form + Contact Info */}
          <div className="space-y-8">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <FaPaperPlane className="text-green-600 text-xl" />
                </div>
                <h3 className="font-bold text-green-800 text-lg">Message Sent!</h3>
                <p className="text-sm text-green-700 mt-2">
                  Thank you for reaching out. We&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm text-primary font-medium hover:text-accent transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="home-name" className="block text-sm font-medium text-foreground mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="home-name"
                      name="name"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="home-email" className="block text-sm font-medium text-foreground mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="home-email"
                      name="email"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="home-subject" className="block text-sm font-medium text-foreground mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="home-subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="What is this about?"
                  />
                </div>
                <div>
                  <label htmlFor="home-message" className="block text-sm font-medium text-foreground mb-1">
                    Message
                  </label>
                  <textarea
                    id="home-message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-accent text-primary-dark font-bold text-sm hover:bg-accent-light transition-colors"
                >
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            )}

            {/* Contact details row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <FaMapMarkerAlt className="text-primary mt-0.5 shrink-0" />
                <div className="text-sm text-gray-600">
                  <p className="font-semibold text-foreground">Address</p>
                  Arka Jain University, Gamharia, Jharkhand 832108
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg overflow-hidden">
                <FaEnvelope className="text-primary mt-0.5 shrink-0" />
                <div className="text-sm text-gray-600 min-w-0">
                  <p className="font-semibold text-foreground">Email</p>
                  <div className="flex flex-col gap-1 mt-1">
                    <a href="mailto:jhicon.ieee@arkajainuniversity.ac.in" className="hover:text-accent transition-colors break-all">
                      jhicon.ieee@arkajainuniversity.ac.in
                    </a>
                    <a href="mailto:dr.ashwini@arkajainuniversity.ac.in" className="hover:text-accent transition-colors break-all">
                      dr.ashwini@arkajainuniversity.ac.in
                    </a>
                    <a href="mailto:dr.aditya@arkajainuniversity.ac.in" className="hover:text-accent transition-colors break-all">
                      dr.aditya@arkajainuniversity.ac.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm min-h-[400px]">
            <iframe
              title="Arka Jain University Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9814.013552989769!2d86.09872055973601!3d22.839245776231312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e5f1b496777f%3A0x1d506033b3ed835d!2sARKA%20JAIN%20UNIVERSITY%20CAMPUS!5e0!3m2!1sen!2sin!4v1772993512424!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
