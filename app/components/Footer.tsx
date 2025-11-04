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
              <svg
                className="w-5 h-5 text-white group-hover:text-orange-400 transition-colors duration-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21.111 18.226c-.141.969-2.119 3.483-3.029 3.847-.311.124-.611.094-.85-.09-.154-.12-.314-.365-.469-.657-.077-.146-.153-.292-.227-.433l-.565-1.052c-.181-.358-.484-.938-.797-1.492-.159-.281-.32-.556-.472-.792-.306-.474-.58-.827-.78-.916-.042-.019-.082-.025-.123-.025-.214 0-.438.153-.65.298-.181.124-.358.246-.508.299-.212.075-.507.14-.806.14-.247 0-.5-.043-.724-.156-.506-.256-.945-.879-1.35-1.466-.485-.703-.93-1.395-1.335-1.943-.744-1.006-1.356-1.816-1.825-2.042-.102-.049-.197-.072-.283-.072-.224 0-.402.137-.573.268-.19.146-.372.282-.588.282-.085 0-.17-.016-.256-.052-.417-.174-1.212-1.561-1.588-2.694-.146-.44-.458-1.561-.234-2.202.094-.269.309-.449.588-.492.572-.088 1.269.488 2.012 1.105.685.568 1.411 1.169 2.098 1.408.117.041.232.06.341.06.319 0 .585-.155.792-.461.233-.344.413-.93.525-1.334.121-.437.201-.731.359-.93.168-.212.422-.315.713-.315.124 0 .257.022.394.066 1.181.379 2.482 2.585 3.177 4.031.315.655.552 1.147.784 1.636.224.471.448.943.736 1.521.186.373.441.887.693 1.392.22.441.438.878.594 1.213.275.589.474.982.474 1.223 0 .115-.035.211-.113.312-.15.194-.43.288-.738.288-.38 0-.823-.133-1.207-.254-.318-.1-.606-.191-.816-.191-.099 0-.185.021-.263.068-.407.244-.688 1.363-.883 2.217-.09.394-.176.767-.284 1.028-.134.323-.324.487-.598.516-.046.005-.091.007-.135.007-.406 0-.888-.285-1.42-.613-.515-.318-1.046-.646-1.604-.799-.211-.058-.414-.087-.604-.087-.723 0-1.252.386-1.661 1.215-.243.493-.396 1.098-.547 1.688-.147.577-.299 1.173-.54 1.718-.257.581-.634.975-1.121 1.171-.164.066-.337.099-.515.099-.375 0-.765-.137-1.123-.394-.82-.589-1.201-1.816-1.566-2.982-.177-.563-.36-1.146-.594-1.62-.243-.494-.562-.765-.949-.805-.066-.007-.133-.011-.199-.011-.44 0-.916.165-1.415.491-.44.287-.898.658-1.298.993-.448.375-.858.717-1.186.888-.237.123-.479.186-.721.186-.473 0-.91-.269-1.196-.737-.486-.795-.201-2.216.064-3.543.128-.642.247-1.238.247-1.668 0-.236-.042-.427-.132-.601-.195-.378-.646-.667-1.104-.956-.44-.278-.895-.565-1.202-.959-.324-.416-.476-.923-.425-1.429.097-.966 1.003-1.695 2.698-2.168 1.216-.339 2.659-.518 4.066-.518.776 0 1.522.061 2.157.176.635.115 1.157.289 1.509.502.236.143.362.309.362.48 0 .14-.066.277-.207.433-.243.268-.677.457-1.121.646-.428.182-.869.37-1.176.664-.162.155-.244.321-.244.493 0 .268.199.557.392.838.18.263.356.519.356.795 0 .163-.064.335-.196.527-.243.353-.656.604-1.082.854-.408.239-.83.487-1.101.84-.145.189-.219.394-.219.609 0 .4.273.839.534 1.261.241.39.475.767.475 1.13 0 .214-.079.432-.242.666-.299.428-.803.735-1.318 1.042-.494.294-.999.596-1.319 1.01-.173.224-.261.467-.261.723 0 .5.342 1.051.673 1.586.306.495.605.978.605 1.454 0 .28-.098.566-.3.876-.371.569-.997.973-1.641 1.381-.619.392-1.257.796-1.628 1.379-.201.315-.303.657-.303 1.016 0 .7.435 1.458.858 2.196.391.682.773 1.346.773 1.996 0 .381-.134.77-.41 1.19-.506.77-1.365 1.318-2.255 1.871-.856.532-1.738 1.079-2.244 1.849-.274.417-.413.867-.413 1.337 0 .907.538 1.887 1.062 2.843.485.885.957 1.747.957 2.594 0 .497-.175 1.006-.536 1.557-.662 1.01-1.784 1.726-2.937 2.453-.111.07-.224.14-.336.211" />
              </svg>
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
