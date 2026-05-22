"use client";

import SectionHeading from "../components/SectionHeading";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="bg-linear-to-r from-primary to-primary-dark py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Contact Us</h1>
          <p className="mt-3 text-white/80 text-lg">
            Have questions? We&apos;d love to hear from you
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionHeading title="Send us a Message" />
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
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder="What is this about?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-accent text-primary-dark font-bold text-sm hover:bg-accent-light transition-colors"
                  >
                    <FaPaperPlane /> Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <SectionHeading title="Get in Touch" />
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt className="text-primary text-lg" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Address</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Arka Jain University<br />
                      NH-33, Gamharia<br />
                      Seraikela-Kharsawan, Jharkhand 832108<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-primary text-lg" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Email</h3>
                    <a
                      href="mailto:jhicon.ieee@arkajainuniversity.ac.in,dr.ashwini@arkajainuniversity.ac.in,dr.aditya@arkajainuniversity.ac.in"
                      className="text-sm text-gray-600 hover:text-accent transition-colors mt-1 block"
                    >
                      jhicon.ieee@arkajainuniversity.ac.in<br />
                      dr.ashwini@arkajainuniversity.ac.in<br />
                      dr.aditya@arkajainuniversity.ac.in
                    </a>
                  </div>
                </div>

              </div>

              {/* Map */}
              <div className="mt-8 rounded-xl overflow-hidden border border-gray-200 shadow-sm min-h-[400px]">
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
        </div>
      </section>
    </>
  );
}
