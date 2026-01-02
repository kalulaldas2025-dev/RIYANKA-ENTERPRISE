
import React from 'react';
import { BRAND_NAME } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-3/5 text-center md:text-left">
            <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-400 font-semibold text-sm rounded-full mb-6 border border-blue-600/20">
              Official {BRAND_NAME} Authorized Dealer
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white leading-tight mb-6">
              Experience the Latest <span className="gradient-text">{BRAND_NAME}</span> Innovations
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Discover the perfect blend of style, performance, and affordability. From the powerful P-series to the stunning S-series, we bring you the future of mobile technology today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a href="#products" className="w-full sm:w-auto px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/40 text-center">
                Explore Products
              </a>
              <a href="#contact" className="w-full sm:w-auto px-10 py-4 bg-white/10 text-white border border-white/20 font-bold rounded-xl hover:bg-white/20 transition-all text-center">
                Locate Our Store
              </a>
            </div>
            
            <div className="pb-3 mt-12 flex items-center justify-center md:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/guarantee.png" alt="Warranty" className="h-8" title="Original Warranty" />
              <img src="https://img.icons8.com/ios-glyphs/50/ffffff/verified-account.png" alt="Authorized" className="h-8" title="Authorized Dealer" />
              <img src="https://img.icons8.com/ios-filled/50/ffffff/online-support.png" alt="Support" className="h-8" title="Full Support" />
            </div>
          </div>
          
          <div className="md:w-2/5 relative animate-float">
            <div className="relative z-10 drop-shadow-[0_35px_35px_rgba(59,130,246,0.3)]">
              <img 
                // src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbea?w=800&q=80" 
                src="../assets/riyanka_enterprise_no_bg_ultra_smooth-strk-rm.png" 
                alt="Latest Itel Phone" 
                className="w-full h-auto rounded-3xl"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-600 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
