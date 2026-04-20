import React from 'react';
import InfoPageLayout from '../components/layout/InfoPageLayout';
import { LuTruck, LuPackage, LuMapPin, LuCalendar } from 'react-icons/lu';

const ShippingReturns: React.FC = () => {
  return (
    <InfoPageLayout 
      title="Shipping & Returns" 
      subtitle="From our atelier to your doorstep. We manage the logistics of rebellion with precision and care."
    >
      <div className="space-y-16">
        
        {/* Shipping Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
                <div className="flex items-center gap-4 text-sage-green border-b border-cream/5 pb-4">
                    <LuMapPin size={24} />
                    <h3 className="font-headline text-2xl font-bold uppercase tracking-wider">Islandwide Delivery</h3>
                </div>
                <p className="text-sm leading-relaxed text-cream/70">
                    We provide premium islandwide shipping across Sri Lanka. Our logistics partners are selected for their reliability and care in handling authentic fashion pieces.
                </p>
            </div>

            <div className="space-y-6">
                <div className="flex items-center gap-4 text-sage-green border-b border-cream/5 pb-4">
                    <LuCalendar size={24} />
                    <h3 className="font-headline text-2xl font-bold uppercase tracking-wider">Delivery Timeline</h3>
                </div>
                <p className="text-sm leading-relaxed text-cream/70">
                    Delivery will be completed within 14 business days from the point of order confirmation. We work diligently to ensure your transmission arrives as swiftly as possible.
                </p>
            </div>
        </div>

        {/* Returns Section */}
        <div className="bg-white/5 border border-cream/5 p-12 rounded-[40px] space-y-10">
            <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-sage-green/10 p-4 rounded-full text-sage-green mb-2">
                    <LuPackage size={32} />
                </div>
                <h3 className="font-headline text-32xl md:text-4xl font-black uppercase tracking-tighter text-cream">Standardized Returns</h3>
                <div className="w-16 h-[1px] bg-sage-green"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                    <span className="text-sage-green font-headline font-black text-4xl">01</span>
                    <h4 className="font-headline text-sm font-bold uppercase text-cream tracking-widest">Notification</h4>
                    <p className="text-[10px] text-cream/50 leading-relaxed uppercase tracking-wider">If you wish to return an item, you must notify us immediately upon receipt.</p>
                </div>
                <div className="text-center space-y-4">
                    <span className="text-sage-green font-headline font-black text-4xl">02</span>
                    <h4 className="font-headline text-sm font-bold uppercase text-cream tracking-widest">Integrity</h4>
                    <p className="text-[10px] text-cream/50 leading-relaxed uppercase tracking-wider">The product must be sent back in its original condition, unused and with all original packaging.</p>
                </div>
                <div className="text-center space-y-4">
                    <span className="text-sage-green font-headline font-black text-4xl">03</span>
                    <h4 className="font-headline text-sm font-bold uppercase text-cream tracking-widest">Resolution</h4>
                    <p className="text-[10px] text-cream/50 leading-relaxed uppercase tracking-wider">Once we receive and verify the item, your refund will be processed as per our policy.</p>
                </div>
            </div>
        </div>

        {/* Global Track Bar */}
        <div className="flex items-center justify-center gap-10 py-8 opacity-40 grayscale pointer-events-none">
            <LuTruck size={24} />
            <div className="h-[1px] w-24 bg-cream/20"></div>
            <LuPackage size={24} />
            <div className="h-[1px] w-24 bg-cream/20"></div>
            <LuMapPin size={24} />
        </div>

      </div>
    </InfoPageLayout>
  );
};

export default ShippingReturns;
