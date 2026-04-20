import React from 'react';
import InfoPageLayout from '../components/layout/InfoPageLayout';

const TermsConditions: React.FC = () => {
  return (
    <InfoPageLayout 
      title="Terms & Conditions" 
      subtitle="By entering the REBEL ecosystem and placing an order, you agree to the following standards of operation and purchase terms."
    >
      <div className="space-y-12">
        <section className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {[
              "All products displayed are subject to availability and stock verification.",
              "Prices are curated based on current market value and may change without prior notice.",
              "Orders enter our high-priority processing queue only after explicit confirmation.",
              "Delivery time may vary depending on location and logistical availability across Sri Lanka.",
              "Customers must provide accurate delivery and contact details when placing a transmission.",
              "Returned products must be unused and in their original architectural condition.",
              "Refunds are only processed after the returned item has been received and verified by our atelier.",
              "We reserve the right to update or modify these terms at any time to preserve the REBEL experience."
            ].map((term, i) => (
              <div key={i} className="flex gap-6 p-6 border border-cream/5 bg-white/5 rounded-2xl group hover:border-sage-green/20 transition-colors duration-300">
                <span className="font-headline font-black text-2xl text-sage-green/30 group-hover:text-sage-green transition-colors">
                  {(i + 1).toString().padStart(2, '0')}
                </span>
                <p className="text-sm text-cream/70 leading-relaxed font-sans mt-0.5">
                  {term}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="p-10 bg-primary-dark border-2 border-dashed border-cream/10 rounded-[40px] text-center">
            <h4 className="font-headline text-lg font-bold text-cream uppercase mb-4 tracking-widest">Acceptance of Terms</h4>
            <p className="text-xs text-cream/40 leading-relaxed max-w-md mx-auto">
                Your purchase constitutes a digital signature of agreement to these terms. For inquiries regarding custom terms or artisan contracts, please reach out to our concierge team.
            </p>
        </div>
      </div>
    </InfoPageLayout>
  );
};

export default TermsConditions;
