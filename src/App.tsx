/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ExternalLink, 
  Layers, 
  Database, 
  Rocket, 
  ShieldCheck, 
  ChevronRight, 
  Info,
  Code2,
  Lock,
  Globe,
  Grid3X3,
  Filter,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { APP_MAKERS, AppMaker } from './data/appMakers';

const CategoryBadge = ({ category }: { category: AppMaker['category'] }) => {
  const styles = {
    'Open Source': 'bg-black text-white',
    'SaaS': 'bg-blue-100 text-blue-700',
    'Educational': 'bg-green-100 text-green-700',
    'Enterprise-Grade': 'bg-purple-100 text-purple-700'
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide uppercase ${styles[category]}`}>
      {category}
    </span>
  );
};

interface CardProps {
  maker: AppMaker;
  onClick: () => void;
}

const Card = ({ maker, onClick }: CardProps) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 card-hover cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <CategoryBadge category={maker.category} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-1">
        {maker.name}
      </h3>
      <p className="text-sm text-gray-500 font-medium mb-3 italic tracking-tight">{maker.tagline}</p>
      <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
        {maker.description}
      </p>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2 text-xs text-blue-700 font-semibold bg-blue-50 py-2 px-3 rounded-lg border border-blue-100">
          <Rocket size={14} />
          <span>{maker.unlimitedAspect}</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{maker.pricingModel}</span>
        <div className="p-2 rounded-full bg-gray-50 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
          <ChevronRight size={18} />
        </div>
      </div>
    </motion.div>
  );
};

const Modal = ({ maker, onClose }: { maker: AppMaker; onClose: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="h-2 bg-primary-600 w-full" />
        <div className="p-8 overflow-y-auto">
          <header className="flex justify-between items-start mb-8">
            <div>
              <CategoryBadge category={maker.category} />
              <h2 className="text-4xl font-black text-gray-900 mt-4 mb-2">{maker.name}</h2>
              <p className="text-lg text-gray-500 font-medium">{maker.tagline}</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400 hover:text-gray-900"
            >
              <Grid3X3 size={24} />
            </button>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h4 className="flex items-center gap-2 text-sm font-bold text-gray-900 uppercase tracking-widest">
                <Info size={16} className="text-primary-500" />
                About
              </h4>
              <p className="text-gray-600 leading-relaxed">{maker.longDescription}</p>
              
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Best For</h4>
                <p className="text-sm text-gray-900 font-medium">{maker.bestFor}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="flex items-center gap-2 text-sm font-bold text-gray-900 uppercase tracking-widest mb-3">
                  <CheckCircle2 size={16} className="text-green-500" />
                  Pros
                </h4>
                <ul className="space-y-2">
                  {maker.pros.map(pro => (
                    <li key={pro} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-sm font-bold text-gray-900 uppercase tracking-widest mb-3">
                  <AlertCircle size={16} className="text-amber-500" />
                  Cons
                </h4>
                <ul className="space-y-2">
                  {maker.cons.map(con => (
                    <li key={con} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <footer className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
               <div>
                 <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Pricing Plan</p>
                 <p className="text-sm font-bold text-gray-900">{maker.pricingModel}</p>
               </div>
            </div>
            <a 
              href={maker.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3 bg-gray-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-600 transition-all hover:shadow-lg hover:shadow-primary-200"
            >
              Visit Website
              <ExternalLink size={18} />
            </a>
          </footer>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedMaker, setSelectedMaker] = useState<AppMaker | null>(null);

  const categories = ['All', 'Open Source', 'SaaS', 'Educational'];

  const filteredMakers = useMemo(() => {
    return APP_MAKERS.filter(maker => {
      const matchesSearch = maker.name.toLowerCase().includes(search.toLowerCase()) || 
                           maker.tagline.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'All' || maker.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary-100/50 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8"
          >
            <Rocket size={16} className="text-primary-500" />
            <span className="text-sm font-bold text-gray-700 tracking-tight">2026 Edition: Best App Makers</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight"
          >
            Build Apps <span className="text-primary-600">Without Limits.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Our curated directory of free and unlimited no-code platforms. 
            From open-source internal tools to native mobile builders.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-xl mx-auto flex items-center bg-white p-2 rounded-2xl shadow-xl border border-gray-100"
          >
            <div className="pl-4 pr-3 text-gray-400">
              <Search size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Search for platform name or features..."
              className="flex-1 py-3 text-lg outline-none text-gray-900 placeholder:text-gray-400 font-medium"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 max-w-6xl">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <div className="flex items-center gap-2 mr-4 text-gray-400 font-bold text-xs uppercase tracking-widest hidden md:flex">
            <Filter size={14} />
            Filter By:
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeCategory === cat 
                  ? 'bg-gray-900 text-white shadow-lg' 
                  : 'bg-white text-gray-500 hover:bg-gray-100 border border-transparent hover:border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="flex items-center gap-4 mb-8">
           <div className="h-[1px] flex-1 bg-gray-200" />
           <span className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">
            Found {filteredMakers.length} Platforms
           </span>
           <div className="h-[1px] flex-1 bg-gray-200" />
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredMakers.map((maker) => (
              <Card 
                key={maker.id} 
                maker={maker} 
                onClick={() => setSelectedMaker(maker)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredMakers.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
              <AlertCircle size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">No platforms found</h3>
            <p className="text-gray-500">Try adjusting your search or category filters.</p>
          </div>
        )}
      </main>

      {/* Footer Info */}
      <footer className="mt-40 bg-gray-900 text-white py-20 rounded-t-[4rem]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Why High-Quality No-Code Matters?</h2>
          <p className="text-gray-400 text-lg mb-12">
            The future of software isn't just about code—it's about empowering everyone to solve problems. 
            These platforms offer unlimited potential for the bold innovator.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 rounded-3xl bg-gray-800/50">
              <Globe className="text-primary-400 mb-4" />
              <h4 className="font-bold mb-2">Open Source</h4>
              <p className="text-sm text-gray-400">Self-hostable options give you total control over data and privacy.</p>
            </div>
            <div className="p-6 rounded-3xl bg-gray-800/50">
              <Lock className="text-primary-400 mb-4" />
              <h4 className="font-bold mb-2">Secure</h4>
              <p className="text-sm text-gray-400">Built-in authentication and enterprise-grade security protocols.</p>
            </div>
            <div className="p-6 rounded-3xl bg-gray-800/50">
              <Code2 className="text-primary-400 mb-4" />
              <h4 className="font-bold mb-2">Extensible</h4>
              <p className="text-sm text-gray-400">Write custom JavaScript or export code when you're ready to scale.</p>
            </div>
          </div>
          <p className="mt-20 text-gray-500 text-sm">
            © 2026 AppCraft Hub. All platforms mentioned have their own terms of service.
          </p>
        </div>
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {selectedMaker && (
          <Modal 
            maker={selectedMaker} 
            onClose={() => setSelectedMaker(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
