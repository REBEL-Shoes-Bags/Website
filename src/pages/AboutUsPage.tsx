import React from 'react';
import InfoPageLayout from '../components/layout/InfoPageLayout';

const AboutUsPage: React.FC = () => {
  return (
    <InfoPageLayout 
      title="Our Story" 
      subtitle="Redefining the intersection of architectural precision and street-ready rebellion."
    >
      <div className="space-y-8">
        <section className="space-y-4">
          <p>
            REBEL is a fashion store dedicated to providing high-quality branded bags for ladies and branded shoes for gents. Our goal is to bring stylish, durable, and authentic fashion products to our customers at the best value.
          </p>
        </section>

        <section className="space-y-4">
          <p>
            We carefully select our products to ensure quality, comfort, and modern designs that match today’s fashion trends. Customer satisfaction is our priority, and we are committed to delivering a smooth and reliable shopping experience.
          </p>
        </section>

        <section className="space-y-4">
          <p>
            Whether you are looking for a stylish handbag or a comfortable pair of branded shoes, we aim to provide products that combine style, quality, and confidence.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          <div className="p-8 bg-white/5 border border-cream/5 rounded-2xl">
            <h3 className="font-headline text-xl font-bold text-sage-green uppercase mb-4 tracking-wider">Our Vision</h3>
            <p className="text-sm text-cream/70 leading-relaxed">To become the premier destination for individuals who value authenticity over convention, providing pieces that empower their unique narrative.</p>
          </div>
          <div className="p-8 bg-white/5 border border-cream/5 rounded-2xl">
            <h3 className="font-headline text-xl font-bold text-sage-green uppercase mb-4 tracking-wider">Our Ethics</h3>
            <p className="text-sm text-cream/70 leading-relaxed">Every piece is verified for authenticity and sourced from creators who share our commitment to architectural integrity and durability.</p>
          </div>
        </div>
      </div>
    </InfoPageLayout>
  );
};

export default AboutUsPage;
