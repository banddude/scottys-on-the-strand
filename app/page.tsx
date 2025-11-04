import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, MapPin, Clock, Phone } from 'lucide-react';

const basePath = process.env.NODE_ENV === 'production' ? '/scottys-on-the-strand' : '';

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section with Video Background */}
      <section className="relative text-white overflow-hidden min-h-screen flex flex-col">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={`${basePath}/videos/hero-clip-slowmo.mp4`} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content Container */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 text-white" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.9)' }}>
              Scotty's<br />on the Strand
            </h1>

            <p className="text-2xl md:text-3xl text-white max-w-2xl mb-10 leading-relaxed font-medium" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}>
              Your beachfront spot for killer food, ice cold beer, and ocean views since 1969
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/breakfast" className="inline-flex items-center justify-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-10 py-5 text-lg font-bold shadow-2xl transition-all duration-200">
                SEE THE MENU
                <ChevronRight className="w-6 h-6" />
              </Link>
              <a href="tel:3103187152" className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 px-10 py-5 text-lg font-bold shadow-2xl hover:bg-sand-50 transition-all duration-200">
                <Phone className="w-6 h-6" />
                (310) 318-7152
              </a>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* About Section with Second Video */}
      <section className="relative py-32 md:py-48 px-4 overflow-hidden min-h-[80vh] flex items-center">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={`${basePath}/videos/clip-12-56.mp4`} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-white">
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-white" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.9)' }}>
              This is Scotty's
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-xl md:text-2xl font-medium">
              <div className="space-y-6">
                <p className="leading-relaxed text-white" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}>
                  <span className="text-sand-100 font-bold">Since 1969,</span> we've been serving up everything from breakfast burritos to burgers, fish tacos to steaks, right here on the Hermosa Beach Strand.
                </p>
                <p className="leading-relaxed text-white" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}>
                  <span className="text-sand-100 font-bold">No pretense.</span> Just damn good food, cold beer, strong drinks, and one hell of a view.
                </p>
              </div>
              <div className="space-y-6">
                <p className="leading-relaxed text-white" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}>
                  <span className="text-sand-100 font-bold">Open 6:30am to 10pm daily.</span> Breakfast, lunch, dinner, and everything in between.
                </p>
                <p className="leading-relaxed text-white" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}>
                  <span className="text-sand-100 font-bold">Free parking.</span> Beach access. Ocean breeze. What more do you need?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section with Third Video */}
      <section className="relative py-32 md:py-48 px-4 overflow-hidden min-h-[80vh] flex items-center">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={`${basePath}/videos/clip-28-08.mp4`} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-white text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-white" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.9)' }}>
              What We're Serving
            </h2>
            <p className="text-2xl md:text-3xl max-w-3xl mx-auto text-white" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}>
              Breakfast, lunch, dinner, drinks. All day, every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Breakfast Card */}
            <Link href="/breakfast" className="bg-white/95 hover:bg-white p-8 transition-all duration-300 group border-t-4 border-terracotta">
              <h3 className="text-3xl font-black text-stone-900 mb-2">
                BREAKFAST
              </h3>
              <p className="text-terracotta font-bold mb-3 text-sm uppercase tracking-wider">Until 3:00 PM</p>
              <p className="text-stone-700 text-lg">
                Omelets, pancakes, breakfast burritos, all the classics
              </p>
            </Link>

            {/* Lunch Card */}
            <Link href="/lunch" className="bg-white/95 hover:bg-white p-8 transition-all duration-300 group border-t-4 border-ocean">
              <h3 className="text-3xl font-black text-stone-900 mb-2">
                LUNCH
              </h3>
              <p className="text-ocean font-bold mb-3 text-sm uppercase tracking-wider">All Day</p>
              <p className="text-stone-700 text-lg">
                Burgers, sandwiches, tacos, fish & chips
              </p>
            </Link>

            {/* Sunset Specials Card */}
            <Link href="/sunset-specials" className="bg-terracotta/95 hover:bg-terracotta p-8 transition-all duration-300 group border-t-4 border-sand-50">
              <h3 className="text-3xl font-black text-white mb-2">
                SUNSET DEALS
              </h3>
              <p className="text-sand-50 font-bold mb-3 text-sm uppercase tracking-wider">4:30 - 9:30 PM</p>
              <p className="text-white text-lg">
                Starting at $9.95. Best deals on the beach.
              </p>
            </Link>

            {/* Dinner Card */}
            <Link href="/dinner" className="bg-white/95 hover:bg-white p-8 transition-all duration-300 group border-t-4 border-stone-800">
              <h3 className="text-3xl font-black text-stone-900 mb-2">
                DINNER & DRINKS
              </h3>
              <p className="text-stone-700 font-bold mb-3 text-sm uppercase tracking-wider">Evening</p>
              <p className="text-stone-700 text-lg">
                Steaks, seafood, full bar, cold beers on tap
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 md:py-32 px-4 bg-stone-800 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-white">
              Find Us on the Strand
            </h2>
            <p className="text-2xl md:text-3xl text-sand-100">
              1100 The Strand, Hermosa Beach
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-terracotta-light mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">LOCATION</h3>
              <p className="text-xl text-sand-200">
                Right on the beach<br />
                Free parking for guests
              </p>
            </div>

            <div className="text-center">
              <Phone className="w-12 h-12 text-terracotta-light mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">CALL US</h3>
              <a href="tel:3103187152" className="text-xl text-terracotta-light hover:text-terracotta font-bold">
                (310) 318-7152
              </a>
            </div>

            <div className="text-center">
              <Clock className="w-12 h-12 text-terracotta-light mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">HOURS</h3>
              <p className="text-xl text-sand-200">
                6:30 AM - 10:00 PM<br />
                Every day
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/location" className="inline-block bg-terracotta hover:bg-terracotta-dark text-white px-12 py-5 text-xl font-bold transition-all">
              GET DIRECTIONS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
