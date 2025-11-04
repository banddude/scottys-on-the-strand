'use client';

import { Instagram } from 'lucide-react';
import { useEffect } from 'react';

const InstagramFeed = () => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-sand-50 to-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-terracotta" />
            <h2 className="text-5xl md:text-6xl font-black text-stone-900">
              Follow Our Story
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-stone-700 mb-6">
            See what's happening at Scotty's on the Strand
          </p>
          <a
            href="https://www.instagram.com/scottysonthestrand/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-8 py-4 text-lg font-bold transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Instagram className="w-5 h-5" />
            Follow @scottysonthestrand
          </a>
        </div>

        {/* Instagram Feed using official embed */}
        <div className="max-w-5xl mx-auto">
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/scottysonthestrand/"
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: 0,
              borderRadius: '8px',
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: '1px auto',
              maxWidth: '540px',
              minWidth: '326px',
              padding: 0,
              width: 'calc(100% - 2px)'
            }}
          >
            <div style={{ padding: '16px' }}>
              <a
                href="https://www.instagram.com/scottysonthestrand/"
                style={{
                  background: '#FFFFFF',
                  lineHeight: 0,
                  padding: '0',
                  textAlign: 'center',
                  textDecoration: 'none',
                  width: '100%'
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                View this profile on Instagram
              </a>
            </div>
          </blockquote>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-black text-terracotta mb-2">1,800+</div>
              <div className="text-stone-600 font-medium">Followers</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-black text-terracotta mb-2">228</div>
              <div className="text-stone-600 font-medium">Posts</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-black text-terracotta mb-2">Daily</div>
              <div className="text-stone-600 font-medium">Updates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
