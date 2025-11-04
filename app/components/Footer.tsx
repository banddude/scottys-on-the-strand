'use client';

import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { FooterProps } from './types';

const basePath = '/scottys-on-the-strand';

const Footer = ({ className = '' }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`relative bg-[#2c3e50] text-white overflow-hidden mt-auto ${className}`}>
      {/* Modern wave pattern overlay */}
      <div className="absolute inset-0 bg-wave-pattern opacity-10"></div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>

      <div className="relative container mx-auto px-6 md:px-12 py-12 md:py-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col items-start">
            <Image
              src={`${basePath}/images/logo-top.jpg`}
              alt="Scotty's on the Strand"
              width={400}
              height={160}
              className="w-full max-w-sm h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Contact Information */}
          <div className="space-y-5">
            <h3 className="font-sans text-xl font-bold text-white mb-6">
              Come Visit
            </h3>

            <div className="space-y-4 font-sans">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div className="text-slate-200 text-base leading-relaxed">
                  <p>1100 The Strand</p>
                  <p>Hermosa Beach, CA 90254</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-orange-400" />
                </div>
                <a
                  href="tel:+13103187152"
                  className="text-slate-200 hover:text-orange-400 transition-colors duration-200 text-base"
                >
                  (310) 318-7152
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <a
                  href="mailto:info@scottysonthestrand.com"
                  className="text-slate-200 hover:text-blue-400 transition-colors duration-200 text-base"
                >
                  info@scottysonthestrand.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours of Operation */}
          <div className="space-y-5">
            <h3 className="font-sans text-xl font-bold text-white mb-6">
              Hours
            </h3>
            <div className="space-y-4 font-sans">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-blue-400" />
                </div>
                <div className="text-slate-200">
                  <p className="text-base font-medium">Daily</p>
                </div>
              </div>
              <p className="text-slate-200 text-lg font-medium">
                6:30 AM – 10:00 PM
              </p>
              <p className="text-slate-300 text-sm leading-relaxed pt-2">
                Breakfast, Lunch & Dinner served daily
              </p>
              <p className="font-sans text-slate-300 text-base leading-relaxed pt-4">
                Your go-to spot for great food, cold drinks, and good times right on the beach. Come hang out with us!
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-10">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-500/30 to-transparent"></div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Media Icons */}
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/ScottysOnTheStrand/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-orange-500/30 flex items-center justify-center transition-all duration-200 group border border-white/20 hover:border-orange-400/50 shadow-modern"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-white group-hover:text-orange-400 transition-colors duration-200" />
            </a>
            <a
              href="https://www.instagram.com/scottysonthestrand/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-orange-500/30 flex items-center justify-center transition-all duration-200 group border border-white/20 hover:border-orange-400/50 shadow-modern"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-white group-hover:text-orange-400 transition-colors duration-200" />
            </a>
            <a
              href="https://www.yelp.com/biz/scottys-on-the-strand-hermosa-beach"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-orange-500/30 flex items-center justify-center transition-all duration-200 group border border-white/20 hover:border-orange-400/50 shadow-modern"
              aria-label="Yelp"
            >
              <Image
                src={`${basePath}/images/yelp.svg`}
                alt="Yelp"
                width={20}
                height={20}
                className="w-5 h-5 brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-200"
              />
            </a>
          </div>

          {/* Copyright */}
          <div className="font-sans text-sm text-slate-300 text-center md:text-right">
            <p>&copy; {currentYear} Scotty's on the Strand. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
