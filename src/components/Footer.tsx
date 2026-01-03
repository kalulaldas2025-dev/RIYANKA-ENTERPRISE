import React from 'react';
import { BUSINESS_NAME, BRAND_NAME, CONTACT_NUMBERS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold">R</div>
              <span className="font-heading font-bold text-xl">{BUSINESS_NAME}</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Your trusted partner for all things {BRAND_NAME}. Providing the latest mobile technology with exceptional service.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#home" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-blue-500 transition-colors">Latest Phones</a></li>
              <li><a href="#products" className="hover:text-blue-500 transition-colors">Accessories</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {CONTACT_NUMBERS[0]}
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {CONTACT_NUMBERS[1]}
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Main Road, Authorized Itel Store
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Join Our Newsletter</h4>
            <p className="text-slate-400 mb-4 text-sm">Get the latest offers and product launches directly.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 flex-grow outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">Go</button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {BUSINESS_NAME}. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-500 transition-all">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500 transition-all">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
