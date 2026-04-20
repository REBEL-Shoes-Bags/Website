import React from 'react';
import InfoPageLayout from '../components/layout/InfoPageLayout';
import { LuPlus } from 'react-icons/lu';

const faqs = [
  {
    q: "What products do you sell?",
    a: "We sell branded bags for ladies and branded shoes for gents, curated for style and authenticity."
  },
  {
    q: "How can I place an order?",
    a: "Orders can be placed through our official social media pages or by contacting our concierge team directly via WhatsApp or phone."
  },
  {
    q: "Do you provide delivery?",
    a: "Yes, we provide premium islandwide delivery across Sri Lanka."
  },
  {
    q: "How long does delivery take?",
    a: "Our standard delivery timeline is within 14 business days from the moment of order confirmation."
  },
  {
    q: "Can I return a product?",
    a: "Yes, customers can return products according to our specific refund and return policy conditions."
  },
  {
    q: "How will I receive my refund?",
    a: "Refunds are processed securely within 30 days after we receive and inspect the returned item at our atelier."
  }
];

const FAQ: React.FC = () => {
  return (
    <InfoPageLayout 
      title="FAQ" 
      subtitle="Your essential guide to the REBEL experience. Find answers to our most frequent inquiries below."
    >
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="group border border-cream/10 rounded-2xl p-8 hover:border-sage-green/30 transition-all duration-300"
          >
            <div className="flex justify-between items-center gap-4">
              <h3 className="font-headline text-lg font-bold text-cream uppercase tracking-wider">
                {faq.q}
              </h3>
              <LuPlus className="text-sage-green group-hover:rotate-90 transition-transform duration-300" />
            </div>
            <p className="mt-4 text-cream/60 leading-relaxed text-sm">
              {faq.a}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 p-10 bg-sage-green/5 border border-sage-green/10 rounded-3xl text-center">
        <h4 className="font-headline text-xl font-bold text-sage-green uppercase mb-4 tracking-widest">Still have questions?</h4>
        <p className="text-cream/50 text-sm mb-8">Our concierge team is available to assist you personally.</p>
        <a 
          href="tel:0777033331" 
          className="inline-flex py-4 px-10 border border-sage-green text-sage-green font-headline font-black text-xs tracking-[0.3em] uppercase hover:bg-sage-green hover:text-primary-dark transition-all duration-300"
        >
          Contact Support
        </a>
      </div>
    </InfoPageLayout>
  );
};

export default FAQ;
