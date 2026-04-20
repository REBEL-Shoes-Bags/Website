import React from 'react';
import InfoPageLayout from '../components/layout/InfoPageLayout';
import { LuRotateCcw, LuCheck, LuTimer } from 'react-icons/lu';

const RefundPolicy: React.FC = () => {
  return (
    <InfoPageLayout 
      title="Refund Policy" 
      subtitle="Our commitment to your satisfaction extends beyond the purchase. We ensure a transparent and fair return process for all our rebels."
    >
      <div className="space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white/5 border border-cream/5 rounded-3xl space-y-4">
                <LuRotateCcw size={32} className="text-sage-green" />
                <h3 className="font-headline text-xl font-bold uppercase tracking-wider text-cream">Satisfaction Guaranteed</h3>
                <p className="text-sm text-cream/60">Customers can request a return if they are not entirely satisfied with the aesthetic or architectural quality of the product.</p>
            </div>
            <div className="p-8 bg-white/5 border border-cream/5 rounded-3xl space-y-4">
                <LuTimer size={32} className="text-sage-green" />
                <h3 className="font-headline text-xl font-bold uppercase tracking-wider text-cream">Rapid Processing</h3>
                <p className="text-sm text-cream/60">Refunds are processed within 30 days after the returned product has been received and verified by our team.</p>
            </div>
        </div>

        <section className="space-y-6 pt-8">
          <h3 className="font-headline text-2xl font-bold uppercase tracking-wider text-sage-green">Return Conditions</h3>
          <ul className="space-y-4">
            {[
              "Delivery is available within 14 days islandwide across Sri Lanka.",
              "If a customer wishes to return an item, it must be reported immediately.",
              "The product must be returned in its original, pristine condition with all tags attached.",
              "Once the returned item is received and inspected, the refund will be initiated.",
              "Customers will receive their full refund within 30 days post-verification."
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-4">
                <LuCheck size={18} className="text-sage-green mt-1 flex-shrink-0" />
                <span className="text-cream/70 text-sm leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="p-10 border border-sage-green/20 bg-sage-green/5 rounded-3xl">
          <h4 className="font-headline text-lg font-bold text-cream uppercase mb-4 tracking-widest text-center">Need a Return?</h4>
          <p className="text-sm text-cream/50 text-center max-w-lg mx-auto mb-8">Please contact our concierge team with your order details to initiate the specialized return logistics.</p>
          <div className="flex justify-center">
            <a href="tel:0777033331" className="font-headline font-black text-xs tracking-[0.3em] uppercase text-sage-green border-b border-sage-green pb-2 hover:text-cream transition-colors">
              Initiate Transmission
            </a>
          </div>
        </div>

      </div>
    </InfoPageLayout>
  );
};

export default RefundPolicy;
