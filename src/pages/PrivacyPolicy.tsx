import React from 'react';
import InfoPageLayout from '../components/layout/InfoPageLayout';
import { LuShieldCheck, LuEye, LuLock } from 'react-icons/lu';

const PrivacyPolicy: React.FC = () => {
  return (
    <InfoPageLayout 
      title="Privacy Policy" 
      subtitle="At REBEL, your trust is our most valuable asset. We are committed to protecting your personal data with institutional-grade integrity."
    >
      <div className="space-y-16">
        
        <section className="space-y-6">
          <div className="flex items-center gap-4 text-sage-green">
            <LuLock size={24} />
            <h3 className="font-headline text-2xl font-bold uppercase tracking-wider">Commitment to Data Safety</h3>
          </div>
          <p>
            We respect your privacy and are committed to protecting your personal information. This policy outlines how we handle the data you share with us during your interaction with the REBEL brand.
          </p>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-4 text-sage-green">
            <LuEye size={24} />
            <h3 className="font-headline text-2xl font-bold uppercase tracking-wider">Information Collection</h3>
          </div>
          <p>
            When you place an order, we may collect personal details such as your name, phone number, and address. This information is used exclusively for order processing, secure delivery, and personalized customer service.
          </p>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-4 text-sage-green">
            <LuShieldCheck size={24} />
            <h3 className="font-headline text-2xl font-bold uppercase tracking-wider">Third-Party Disclosure</h3>
          </div>
          <p>
            We do not sell, trade, or share your personal information with third parties except when strictly necessary for shipping logistics or payment verification. Your data remains within our secure ecosystem.
          </p>
        </section>

        <div className="p-8 border border-sage-green/20 bg-sage-green/5 rounded-3xl">
          <p className="text-xs text-cream/40 leading-relaxed italic">
            By using our services, you agree to our privacy practices as outlined in this document. We reserve the right to update these policies to maintain the highest standards of data protection.
          </p>
        </div>

      </div>
    </InfoPageLayout>
  );
};

export default PrivacyPolicy;
