
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04rem"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Original Guarantee</h3>
                <p className="text-slate-500">
                  All our Itel phones and accessories are 100% genuine and
                  sourced directly from the manufacturer.
                </p>
              </div>

              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-600 group-hover:text-white transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Expert Support</h3>
                <p className="text-slate-500">
                  Our team is trained to help you troubleshoot and get the most
                  out of your new mobile device.
                </p>
              </div>

              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Quick After-Sales</h3>
                <p className="text-slate-500">
                  We provide seamless after-sales assistance for any issues or
                  warranty claims you might have.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Products />

        {/* Video / Promo Section */}
        <section className="py-24 bg-slate-900 overflow-hidden relative" id="about">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-3xl rounded-full"></div>
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="bg-slate-800 rounded-[3rem] p-10 md:p-20 flex flex-col lg:flex-row items-center gap-12 border border-white/5 shadow-2xl">
              <div className="lg:w-1/2">
                <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block">
                  Store Experience
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                  See It, Feel It, Own It.
                </h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Visit Riyanka Enterprise today to experience the premium build
                  quality of the newest Itel smartphones. Our live demo units
                  allow you to test the camera, display, and performance before
                  you buy.
                </p>
                <div className="flex gap-6 items-center">
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-2xl">100+</span>
                    <span className="text-slate-500 text-sm">
                      Models Available
                    </span>
                  </div>
                  <div className="w-px h-10 bg-white/10"></div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-2xl">5.0</span>
                    <span className="text-slate-500 text-sm">
                      Customer Rating
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl">
                {/* <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" 
                  alt="Shop Experience"
                  className="w-full h-auto"
                /> */}
                <video
                  src="./assets/itel-vdeo.mp4"
                  // controls
                  muted
                  autoPlay="true"
                  controlsList="nodownload"
                  loop
                ></video>
                {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-all group border border-white/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-white fill-white group-hover:scale-110 transition-transform"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
