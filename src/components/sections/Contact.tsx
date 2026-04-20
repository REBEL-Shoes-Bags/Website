import React from 'react';
import { LuArrowRight } from 'react-icons/lu';

// const testimonials = [
//   {
//     name: "Alexander V.",
//     initials: "AV",
//     review: "The architectural precision of these shoes is unmatched. Truly a rebel's choice.",
//     rating: 5,
//     tag: "Verified Collector"
//   },
//   {
//     name: "Seraphina L.",
//     initials: "SL",
//     review: "Exceptional quality and a design that makes a statement without saying a word.",
//     rating: 5,
//     tag: "Fashion Editor"
//   },
//   {
//     name: "Marcus K.",
//     initials: "MK",
//     review: "Finally a brand that understands the intersection of high fashion and street grit.",
//     rating: 5,
//     tag: "Streetwear Enthusiast"
//   },
//   {
//     name: "Elena G.",
//     initials: "EG",
//     review: "The bag collection is a work of art. Minimalist yet holds a powerful presence.",
//     rating: 5,
//     tag: "Luxury Curator"
//   },
//   {
//     name: "Dominic T.",
//     initials: "DT",
//     review: "REBEL isn't just a name; it's the lifestyle these pieces represent. Flawless.",
//     rating: 5,
//     tag: "Premium Member"
//   }
// ];

const Contact: React.FC = () => {
    return (
        <section id="contact" className="bg-primary-dark py-24 px-8 overflow-hidden">
            <div className="max-w-[1920px] mx-auto">

                {/* Editorial Split Section */}
                <div className="flex flex-col md:flex-row items-center gap-20 mb-32">

                    {/* Left Side: Editorial Image (Matches AboutUs) */}
                    <div className="w-full md:w-1/2 relative group">
                        <div className="absolute -top-4 -left-4 w-full h-full border-[0.5px] border-cream/20 translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                        <img
                            className="relative w-full aspect-[4/5] object-cover grayscale transition-transform duration-700 group-hover:scale-[1.02] shadow-2xl"
                            alt="Editorial high fashion contact photography"
                            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop"
                        />
                        {/* Overlay Info */}
                        <div className="absolute bottom-8 left-8 space-y-4 p-8 bg-primary-dark/40 backdrop-blur-md border border-cream/5 rounded-sm">
                            <div className="flex flex-col gap-1">
                                <span className="font-label text-[8px] uppercase tracking-[0.3em] text-sage-green font-bold">Contact Us</span>
                                <p className="font-headline text-cream text-lg"> 0777033331</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="font-label text-[8px] uppercase tracking-[0.3em] text-sage-green font-bold">Visit Us</span>
                                <p className="font-headline text-cream text-sm leading-tight">No: 24/5, Mayfield Lane,<br />Colombo 04, Sri Lanka</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Minimalist Contact Form */}
                    <div className="w-full md:w-1/2 space-y-12">
                        <div className="space-y-4">
                            <div className="flex flex-col gap-2">
                                <span className="font-label text-[10px] uppercase tracking-[0.3em] text-sage-green font-bold">Digital Concierge</span>
                                <div className="w-12 h-[1px] bg-sage-green"></div>
                            </div>
                            <h2 className="font-headline text-5xl md:text-6xl font-black tracking-tighter leading-tight text-cream">
                                JOIN THE <br />REBELLION
                            </h2>
                            <p className="font-sans text-cream/70 leading-relaxed max-w-lg text-lg">
                                For custom commissions, sizing consultation, or artisan collaborations. We respond within 24 hours of receiving your transmission.
                            </p>
                        </div>

                        <form className="space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="relative group">
                                    <input
                                        type="text"
                                        placeholder=" "
                                        className="block w-full py-2 bg-transparent border-b border-cream/10 text-cream focus:outline-none focus:border-sage-green transition-colors peer"
                                    />
                                    <label className="absolute top-2 left-0 font-label text-[10px] uppercase tracking-widest text-cream/40 transition-all duration-300 peer-placeholder-shown:text-xs peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-[8px] peer-focus:text-sage-green">Full Name</label>
                                </div>
                                <div className="relative group">
                                    <input
                                        type="email"
                                        placeholder=" "
                                        className="block w-full py-2 bg-transparent border-b border-cream/10 text-cream focus:outline-none focus:border-sage-green transition-colors peer"
                                    />
                                    <label className="absolute top-2 left-0 font-label text-[10px] uppercase tracking-widest text-cream/40 transition-all duration-300 peer-placeholder-shown:text-xs peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-[8px] peer-focus:text-sage-green">Email Address</label>
                                </div>
                            </div>

                            <div className="relative group">
                                <textarea
                                    rows={2}
                                    placeholder=" "
                                    className="block w-full py-2 bg-transparent border-b border-cream/10 text-cream focus:outline-none focus:border-sage-green transition-colors peer resize-none"
                                />
                                <label className="absolute top-2 left-0 font-label text-[10px] uppercase tracking-widest text-cream/40 transition-all duration-300 peer-placeholder-shown:text-xs peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-[8px] peer-focus:text-sage-green">Your Transmission</label>
                            </div>

                            <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
                                <button
                                    type="submit"
                                    className="relative group overflow-hidden border-b border-sage-green py-2 font-headline font-bold text-xs tracking-[0.4em] text-cream hover:text-sage-green transition-colors inline-flex items-center gap-4 uppercase"
                                >
                                    Send Message
                                    <LuArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
                                </button>

                                {/* <div className="flex items-center gap-8">
                                    <a href="#" className="text-cream/30 hover:text-sage-green transition-all duration-300 hover:scale-125"><LuFacebook size={18} /></a>
                                    <a href="#" className="text-cream/30 hover:text-sage-green transition-all duration-300 hover:scale-125"><LuInstagram size={18} /></a>
                                    <a href="#" className="text-cream/30 hover:text-sage-green transition-all duration-300 hover:scale-125"><LuTwitter size={18} /></a>
                                    <a href="#" className="text-cream/30 hover:text-sage-green transition-all duration-300 hover:scale-125"><LuLinkedin size={18} /></a>
                                </div> */}
                            </div>
                        </form>
                    </div>
                </div>

                {/* Subtle Marquee Footer */}
                {/* <div className="pt-24 border-t border-cream/5 flex flex-col items-center">
                    <div className="text-center mb-12">
                        <span className="font-label text-[8px] uppercase tracking-[0.4em] text-sage-green font-bold">The Community Verdict</span>
                    </div>

                    <div className="relative overflow-hidden w-full py-4">
                        <div className="animate-marquee flex gap-16 whitespace-nowrap">
                            {[...testimonials, ...testimonials].map((review, idx) => (
                                <div key={idx} className="flex items-center gap-4 group">
                                    <div className="flex gap-0.5">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <LuStar key={i} size={8} className="fill-sage-green text-sage-green opacity-50" />
                                        ))}
                                    </div>
                                    <p className="font-sans text-[10px] text-cream/40 uppercase tracking-widest">"{review.review}"</p>
                                    <span className="font-headline text-[10px] font-black text-cream tracking-tighter">— {review.name}</span>
                                    <div className="w-12 h-[1px] bg-cream/10 ml-8"></div>
                                </div>
                            ))}
                        </div>
                        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-primary-dark to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-primary-dark to-transparent z-10 pointer-events-none"></div>
                    </div>
                </div> */}

            </div>
        </section>
    );
};

export default Contact;
