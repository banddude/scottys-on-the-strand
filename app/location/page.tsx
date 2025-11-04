import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

const basePath = '/scottys-on-the-strand';

export const metadata = {
  title: "Location & Contact - Scotty's on the Strand",
  description: "Visit Scotty's on the Strand at 1100 The Strand, Hermosa Beach. Get directions, parking info, and contact details for our oceanfront restaurant.",
};

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section with Map Background */}
      <section className="relative text-white overflow-hidden min-h-screen flex items-center pt-[60px]">
        {/* Map Background */}
        <div className="absolute inset-0 pointer-events-none">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.6806442891817!2d-118.39995092398745!3d33.863389973213384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b3e2e5e5e5e5%3A0x1234567890abcdef!2s1100%20The%20Strand%2C%20Hermosa%20Beach%2C%20CA%2090254!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus&maptype=roadmap"
            width="100%"
            height="100%"
            style={{ border: 0, pointerEvents: 'auto' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            title="Scotty's on the Strand Location Map"
          ></iframe>
        </div>

        <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <MapPin className="w-12 h-12 text-sand-100" />
            <h1 className="text-6xl md:text-8xl font-black text-white" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.9)' }}>
              Find Us
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-sand-100 font-medium max-w-3xl mx-auto mb-8" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}>
            1100 The Strand, Hermosa Beach, CA 90254
          </p>
          <a
            href="geo:33.8634,-118.3999?q=1100+The+Strand,Hermosa+Beach,CA+90254"
            className="inline-flex items-center justify-center bg-terracotta hover:bg-terracotta-dark text-white px-12 py-5 text-xl font-bold transition-all rounded-lg shadow-lg"
          >
            GET DIRECTIONS
          </a>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">

        {/* Contact Info Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Phone */}
            <div className="bg-white p-8 text-center rounded-2xl shadow-xl border-l-4 border-terracotta">
              <h3 className="text-2xl font-bold text-stone-900 mb-3">PHONE</h3>
              <a
                href="tel:3103187152"
                className="text-xl text-terracotta hover:text-terracotta-dark font-bold transition-colors"
              >
                (310) 318-7152
              </a>
            </div>

            {/* Email */}
            <div className="bg-white p-8 text-center rounded-2xl shadow-xl border-l-4 border-ocean">
              <h3 className="text-2xl font-bold text-stone-900 mb-3">EMAIL</h3>
              <a
                href="mailto:info@scottysonthestrand.com"
                className="text-lg text-terracotta hover:text-terracotta-dark font-bold transition-colors break-all"
              >
                info@scottysonthestrand.com
              </a>
            </div>

            {/* Hours */}
            <div className="bg-white p-8 text-center rounded-2xl shadow-xl border-l-4 border-terracotta">
              <h3 className="text-2xl font-bold text-stone-900 mb-3">HOURS</h3>
              <p className="text-xl text-stone-700 font-bold">
                6:30 AM - 10:00 PM
              </p>
              <p className="text-lg text-stone-600 mt-2">Every Day</p>
            </div>
          </div>
        </section>

        {/* Parking Information Section */}
        <section className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-8 text-center">
            Parking
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-terracotta">
              <h3 className="text-2xl font-bold text-stone-900 mb-4">FREE PARKING</h3>
              <p className="text-lg text-stone-700">
                Complimentary parking available at the restaurant for all guests.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-ocean">
              <h3 className="text-2xl font-bold text-stone-900 mb-4">STREET PARKING</h3>
              <p className="text-lg text-stone-700">
                Additional street parking nearby. Get here early during peak beach hours.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
