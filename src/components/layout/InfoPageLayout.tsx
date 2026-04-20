import React from 'react';
import { Link } from 'react-router-dom';
import { LuChevronRight, LuArrowLeft } from 'react-icons/lu';

interface InfoPageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const InfoPageLayout: React.FC<InfoPageLayoutProps> = ({ title, subtitle, children }) => {
  return (
    <div className="bg-primary-dark min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-cream/40 mb-12">
          <Link to="/" className="hover:text-sage-green transition-colors">Home</Link>
          <LuChevronRight size={10} />
          <span className="text-sage-green font-bold">{title}</span>
        </nav>

        {/* Page Header */}
        <div className="space-y-6 mb-20">
          <div className="flex flex-col gap-2">
            <span className="font-label text-[10px] uppercase tracking-[0.3em] text-sage-green font-bold">REBEL Information</span>
            <div className="w-12 h-[1px] bg-sage-green"></div>
          </div>
          <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter leading-tight text-cream uppercase">
            {title}
          </h1>
          {subtitle && (
            <p className="font-sans text-cream/60 text-lg leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>

        {/* Main Content Area */}
        <div className="prose prose-invert prose-cream max-w-none">
          <div className="space-y-12 font-sans text-cream/80 leading-relaxed text-sm">
            {children}
          </div>
        </div>

        {/* Action Footer */}
        <div className="mt-24 pt-12 border-t border-cream/5 flex justify-between items-center">
            <Link 
              to="/" 
              className="inline-flex items-center gap-3 text-[10px] uppercase tracking-widest text-cream/40 hover:text-sage-green transition-colors font-bold"
            >
              <LuArrowLeft size={14} /> Back to Atelier
            </Link>
            <span className="text-[10px] uppercase tracking-widest text-cream/20 font-label">Est. 2024 • Verified Genuine</span>
        </div>

      </div>
    </div>
  );
};

export default InfoPageLayout;
