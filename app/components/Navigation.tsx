'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { NavigationProps, NavigationLink } from './types';

const navigationLinks: NavigationLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Breakfast', href: '/breakfast' },
  { label: 'Lunch', href: '/lunch' },
  { label: 'Sunset Specials', href: '/sunset-specials' },
  { label: 'Dinner', href: '/dinner' },
  { label: 'Special Events', href: '/special-events' },
  { label: 'Location', href: '/location' },
];

const Navigation = ({ className = '', currentPath }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();
  const activePath = currentPath || pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className={`bg-transparent border-b border-white/10 transition-all duration-300 ${className}`}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between py-3">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 mx-auto font-sans">
            {navigationLinks.map((link) => {
              const isActive = activePath === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative px-5 py-2.5 text-base font-bold rounded-sm
                    transition-all duration-200 group
                    ${
                      isActive
                        ? 'text-white bg-terracotta'
                        : 'text-white hover:bg-white/10'
                    }
                  `}
                  style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
                >
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-all duration-200 ml-auto group"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-7 h-7 text-white transition-colors duration-200" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }} />
            ) : (
              <Menu className="w-7 h-7 text-white transition-colors duration-200" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-stone-900/95 backdrop-blur-sm
            ${isOpen ? 'max-h-[36rem] pb-4 pt-4' : 'max-h-0'}
          `}
        >
          <div className="flex flex-col space-y-2 font-sans px-4">
            {navigationLinks.map((link) => {
              const isActive = activePath === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative px-5 py-3.5 text-base font-bold rounded-sm
                    transition-all duration-200 overflow-hidden
                    ${
                      isActive
                        ? 'text-white bg-terracotta'
                        : 'text-white bg-stone-800 hover:bg-stone-700'
                    }
                  `}
                >
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
