import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Location & Contact - Scotty's on the Strand",
  description: "Visit Scotty's on the Strand at 1100 The Strand, Hermosa Beach. Get directions, parking info, and contact details for our oceanfront restaurant.",
};

export default function LocationPage() {
  return (
    <div className="min-h-screen relative pt-[60px]">
      {/* Google Maps Background */}
      <div className="fixed inset-0 top-[60px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.6806442891817!2d-118.39995092398745!3d33.863389973213384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b3e2e5e5e5e5%3A0x1234567890abcdef!2s1100%20The%20Strand%2C%20Hermosa%20Beach%2C%20CA%2090254!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
          title="Scotty's on the Strand Location Map"
        ></iframe>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl text-center">
              <h1 className="text-5xl md:text-7xl font-black text-stone-900 mb-4">
                Find Us
              </h1>
              <p className="text-2xl md:text-3xl text-stone-700 mb-8">
                1100 The Strand, Hermosa Beach, CA 90254
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=1100+The+Strand,Hermosa+Beach,CA+90254"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-terracotta hover:bg-terracotta-dark text-white px-12 py-5 text-xl font-bold transition-all rounded-lg shadow-lg"
              >
                GET DIRECTIONS
              </a>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Phone */}
              <div className="bg-white/95 backdrop-blur-sm p-8 text-center rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-stone-900 mb-3">PHONE</h3>
                <a
                  href="tel:3103187152"
                  className="text-xl text-terracotta hover:text-terracotta-dark font-bold transition-colors"
                >
                  (310) 318-7152
                </a>
              </div>

              {/* Email */}
              <div className="bg-white/95 backdrop-blur-sm p-8 text-center rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-stone-900 mb-3">EMAIL</h3>
                <a
                  href="mailto:info@scottysonthestrand.com"
                  className="text-lg text-terracotta hover:text-terracotta-dark font-bold transition-colors break-all"
                >
                  info@scottysonthestrand.com
                </a>
              </div>

              {/* Hours */}
              <div className="bg-white/95 backdrop-blur-sm p-8 text-center rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-stone-900 mb-3">HOURS</h3>
                <p className="text-xl text-stone-700 font-bold">
                  6:30 AM - 10:00 PM
                </p>
                <p className="text-lg text-stone-600 mt-2">Every Day</p>
              </div>
            </div>
          </div>
        </section>

        {/* Parking Information Section */}
        <section className="py-8 px-4 pb-16">
          <div className="container mx-auto max-w-5xl">
            <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-8 text-center">
                Parking
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-sand-100 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-stone-900 mb-4">FREE PARKING</h3>
                  <p className="text-lg text-stone-700">
                    Complimentary parking available at the restaurant for all guests.
                  </p>
                </div>

                <div className="bg-sand-100 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-stone-900 mb-4">STREET PARKING</h3>
                  <p className="text-lg text-stone-700">
                    Additional street parking nearby. Get here early during peak beach hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
