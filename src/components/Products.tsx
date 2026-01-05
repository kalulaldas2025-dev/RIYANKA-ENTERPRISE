import React, { useState } from 'react';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Phone' | 'Accessory'>('All');

  const filteredProducts = PRODUCTS.filter(p => activeTab === 'All' || p.category === activeTab);

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">Our Premium Collections</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Browsing through our extensive range of Itel smartphones and high-quality accessories designed to empower your digital life.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-slate-100 p-1.5 rounded-2xl">
            {(['All', 'Phone', 'Accessory'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === tab 
                  ? 'bg-white text-blue-600 shadow-md scale-105' 
                  : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {tab}s
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 flex flex-col">
              <div className="relative overflow-hidden h-72">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 "
                />
                {product.tag && (
                  <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    {product.tag}
                  </span>
                )}
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-heading font-bold text-slate-900">{product.name}</h3>
                  <span className="text-blue-600 font-bold">{product.price}</span>
                </div>
                <p className="text-slate-500 mb-8 flex-grow">{product.description}</p>
                <button className="w-full py-3.5 bg-slate-900 text-white font-bold rounded-xl group-hover:bg-blue-600 transition-colors shadow-lg hover:shadow-blue-500/20">
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
