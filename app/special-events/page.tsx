import Image from 'next/image';

const basePath = process.env.NODE_ENV === 'production' ? '/scottys-on-the-strand' : '';

export default function SpecialEvents() {
  return (
    <div className="min-h-screen bg-gradient-beach pt-[60px]">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={`${basePath}/images/general/specialEvents_1.jpg`}
            alt="Exclusive Private Dining Experience"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/70 via-ocean-800/60 to-ocean-900/80" />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <div className="inline-block h-px w-24 bg-gradient-to-r from-transparent via-gold-400 to-transparent mb-8" />
            </div>
            <h1 className="font-serif text-display-md md:text-display-lg text-sand-50 mb-6">
              Private Events & Celebrations
            </h1>
            <p className="text-heading-md md:text-heading-lg text-gold-300 font-light mb-8 tracking-wide">
              An Exclusive Oceanfront Venue for Memorable Occasions
            </p>
            <p className="text-body-lg text-sand-200 mb-12 max-w-2xl mx-auto leading-relaxed-luxury">
              Panoramic Pacific views, refined coastal cuisine, and impeccable service create the perfect backdrop for your most important celebrations
            </p>
            <a
              href="tel:3103187152"
              className="btn-accent inline-flex items-center gap-3"
            >
              <span>Inquire About Your Event</span>
              <span className="text-sm tracking-wide">(310) 318-7152</span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-sand-50 to-transparent" />
      </section>

      {/* Event Types Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="divider-gold mb-8" />
            <h2 className="font-serif text-display-sm md:text-display-md text-ocean-800 mb-6">
              Occasions We Celebrate
            </h2>
            <p className="text-body-lg text-ocean-600 max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, our exclusive venue adapts to your vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="card-luxury group text-center">
              <h3 className="font-serif text-heading-md text-ocean-700 mb-3">Rehearsal Dinners</h3>
              <div className="h-1 w-12 bg-gradient-to-r from-gold-400 to-gold-500 mx-auto" />
            </div>

            <div className="card-luxury group text-center">
              <h3 className="font-serif text-heading-md text-ocean-700 mb-3">Bridal Celebrations</h3>
              <div className="h-1 w-12 bg-gradient-to-r from-gold-400 to-gold-500 mx-auto" />
            </div>

            <div className="card-luxury group text-center">
              <h3 className="font-serif text-heading-md text-ocean-700 mb-3">Baby Showers</h3>
              <div className="h-1 w-12 bg-gradient-to-r from-gold-400 to-gold-500 mx-auto" />
            </div>

            <div className="card-luxury group text-center">
              <h3 className="font-serif text-heading-md text-ocean-700 mb-3">Milestone Birthdays</h3>
              <div className="h-1 w-12 bg-gradient-to-r from-gold-400 to-gold-500 mx-auto" />
            </div>

            <div className="card-luxury group text-center">
              <h3 className="font-serif text-heading-md text-ocean-700 mb-3">Anniversaries</h3>
              <div className="h-1 w-12 bg-gradient-to-r from-gold-400 to-gold-500 mx-auto" />
            </div>

            <div className="card-luxury group text-center">
              <h3 className="font-serif text-heading-md text-ocean-700 mb-3">Receptions</h3>
              <div className="h-1 w-12 bg-gradient-to-r from-gold-400 to-gold-500 mx-auto" />
            </div>

            <div className="card-luxury group text-center">
              <h3 className="font-serif text-heading-md text-ocean-700 mb-3">Corporate Events</h3>
              <div className="h-1 w-12 bg-gradient-to-r from-gold-400 to-gold-500 mx-auto" />
            </div>

            <div className="card-luxury group text-center border-2 border-gold-400/30">
              <h3 className="font-serif text-heading-md text-gold-600 mb-3">Bespoke Affairs</h3>
              <div className="h-1 w-12 bg-gradient-to-r from-coral-400 to-gold-500 mx-auto" />
            </div>
          </div>

          <div className="glass-luxury rounded-luxury-lg p-8 text-center">
            <p className="text-body-lg text-ocean-700 font-light italic">
              Each event is tailored to your unique vision and preferences
            </p>
          </div>
        </div>
      </section>

      {/* Venue Features Section */}
      <section className="py-24 px-6 bg-gradient-ocean-depth relative overflow-hidden">
        <div className="absolute inset-0 bg-wave-pattern opacity-20" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-display-sm md:text-display-md text-sand-50 mb-6">
              Our Distinguished Venue
            </h2>
            <p className="text-body-lg text-seafoam-200 max-w-2xl mx-auto">
              An elevated private dining space designed for unforgettable moments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-ocean rounded-luxury-lg p-10 text-center group hover:bg-white/40 transition-all duration-500">
              <h3 className="font-serif text-heading-lg text-gold-300 mb-4">Capacity</h3>
              <div className="my-6">
                <p className="text-6xl font-serif font-bold text-sand-50 mb-2">70</p>
                <p className="text-body-md text-seafoam-100">guests maximum</p>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent my-4" />
              <p className="text-body-sm text-sand-200">Minimum 20 guests required</p>
            </div>

            <div className="glass-ocean rounded-luxury-lg p-10 text-center group hover:bg-white/40 transition-all duration-500">
              <h3 className="font-serif text-heading-lg text-gold-300 mb-4">Curated Menus</h3>
              <p className="text-body-lg text-sand-100 mt-6 leading-relaxed-luxury">
                Each celebration features a bespoke menu crafted to complement your occasion and delight your guests
              </p>
            </div>

            <div className="glass-ocean rounded-luxury-lg p-10 text-center group hover:bg-white/40 transition-all duration-500">
              <h3 className="font-serif text-heading-lg text-gold-300 mb-4">Ocean Panorama</h3>
              <p className="text-body-lg text-sand-100 mt-6 leading-relaxed-luxury">
                Sweeping views of the Pacific Ocean provide a stunning natural backdrop for your event
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-6 bg-sand-100">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="divider-gold mb-8" />
            <h2 className="font-serif text-display-sm md:text-display-md text-ocean-800 mb-6">
              Previous Celebrations
            </h2>
            <p className="text-body-lg text-ocean-600 max-w-2xl mx-auto">
              A glimpse into the memorable events we've had the privilege to host
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative h-80 rounded-luxury-lg overflow-hidden shadow-luxury hover:shadow-luxury-xl transition-all duration-500">
              <Image
                src={`${basePath}/images/general/imagesbanquet1.jpg`}
                alt="Elegant Banquet Setup"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="group relative h-80 rounded-luxury-lg overflow-hidden shadow-luxury hover:shadow-luxury-xl transition-all duration-500">
              <Image
                src={`${basePath}/images/general/imagesGreek National Valeyball Team 007.jpg`}
                alt="Celebration Gathering"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="group relative h-80 rounded-luxury-lg overflow-hidden shadow-luxury hover:shadow-luxury-xl transition-all duration-500">
              <Image
                src={`${basePath}/images/general/imagesGreek National Valeyball Team 011.jpg`}
                alt="Private Dining Experience"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Policy Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-display-sm md:text-display-md text-ocean-800 mb-6">
              Event Guidelines
            </h2>
            <p className="text-body-lg text-ocean-600 max-w-2xl mx-auto">
              Important details to ensure a seamless celebration
            </p>
          </div>

          <div className="card-luxury">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="border-l-2 border-gold-400 pl-6">
                  <h3 className="font-serif text-heading-md text-ocean-700 mb-3">Venue Capacity</h3>
                  <p className="text-body-md text-ocean-600 leading-relaxed">Maximum of 70 guests with a minimum of 20 guests required</p>
                </div>

                <div className="border-l-2 border-gold-400 pl-6">
                  <h3 className="font-serif text-heading-md text-ocean-700 mb-3">Investment Terms</h3>
                  <ul className="text-body-md text-ocean-600 space-y-2 leading-relaxed">
                    <li>Room deposit required to secure your date</li>
                    <li>18% service charge and sales tax applied</li>
                    <li>Payment in full upon event completion</li>
                    <li>Personal checks not accepted</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div className="border-l-2 border-gold-400 pl-6">
                  <h3 className="font-serif text-heading-md text-ocean-700 mb-3">Guest Confirmation</h3>
                  <p className="text-body-md text-ocean-600 leading-relaxed">Guaranteed guest count required one week prior to your event</p>
                </div>

                <div className="border-l-2 border-gold-400 pl-6">
                  <h3 className="font-serif text-heading-md text-ocean-700 mb-3">Venue Care</h3>
                  <p className="text-body-md text-ocean-600 leading-relaxed">Guests are responsible for any property damage incurred during the event</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 px-6 bg-gradient-ocean-depth relative overflow-hidden">
        <div className="absolute inset-0 bg-wave-pattern opacity-10" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center">
            <h2 className="font-serif text-display-sm md:text-display-md text-sand-50 mb-6">
              Begin Planning Your Event
            </h2>
            <p className="text-body-lg text-seafoam-200 mb-12 max-w-2xl mx-auto leading-relaxed-luxury">
              Our event planning team is ready to bring your vision to life
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
              <a
                href="tel:3103187152"
                className="glass-luxury hover:bg-white/60 rounded-luxury-lg px-8 py-6 transition-all duration-500 group"
              >
                <p className="text-body-sm text-ocean-600 mb-2 tracking-wide uppercase">Call Us</p>
                <p className="font-serif text-heading-md text-ocean-800 group-hover:text-gold-600 transition-colors">
                  (310) 318-7152
                </p>
              </a>

              <a
                href="mailto:info@scottysonthestrand.com"
                className="glass-luxury hover:bg-white/60 rounded-luxury-lg px-8 py-6 transition-all duration-500 group"
              >
                <p className="text-body-sm text-ocean-600 mb-2 tracking-wide uppercase">Email Us</p>
                <p className="font-serif text-heading-md text-ocean-800 group-hover:text-gold-600 transition-colors break-all">
                  info@scottysonthestrand.com
                </p>
              </a>
            </div>

            <div className="divider-gold my-12" />

            <p className="text-body-md text-sand-200 italic leading-relaxed-luxury max-w-3xl mx-auto">
              Experience the perfect blend of stunning oceanfront ambiance, exceptional cuisine, and dedicated service that will make your celebration truly unforgettable
            </p>
          </div>
        </div>
      </section>

      {/* Footer Location Info */}
      <section className="py-16 px-6 bg-sand-50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="glass-luxury rounded-luxury-lg p-8">
            <p className="font-serif text-heading-md text-ocean-700 mb-3">
              Oceanfront at Hermosa Beach
            </p>
            <p className="text-body-lg text-ocean-600">
              1 Pier Ave, Hermosa Beach, CA 90254
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
