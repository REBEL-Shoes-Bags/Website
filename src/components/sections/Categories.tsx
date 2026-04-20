import React from 'react';

const categories = [
    {
        id: "all-shoes", // ID එකක් එකතු කළා
        title: "Shoes",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhJY-GJ5O_wb4XeFRmtbVRW2_uW0bxkWJqTiT9vkVpO-g39DQwQGyArBp1hc-F-zcSNvqccK8_yRsqhEws9hkmovPrB9rQT2lEDFcUj5LKHpMMn5PV1NwsipYCLCvUH9G18-Xsm8NylqgnFQvMptUMqX9oowyd4DSEXUK0xkqMzu36QhGNvUutuf462pnh40unzVl1FIvJ5s_DRLK6jnd3TFXZliZ4C7AfTnRRMWVlfWUQ9uC-9M1YupxBNaCJN3Z2L4AUu4X-lfxA",
        alt: "Premium Shoes Collection",
        exploreText: "EXPLORE ALL SHOES",
        large: true
    },
    {
        id: "all-bags", // ID එකක් එකතු කළා
        title: "Bags",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0WEzUkcXBZinDBRMj1ixzkZPRDCRIyqsF83gJ7epBINhMSMeIkJxZIEulKnNEN6QRHYtN95t0uOVaGc7gc5UECoV1gnWXisZ55SRO0a5RLklTIWYLNA-Ne7-IBOn7vaqX25u9Ulc_hvd2qoXgBJeo7NAFpfZcCQSVxZDky2Q4V7d_VhWjfRoLCCiQaEOh6fGzgkPG6oMY9IJXKV5zrSNOsPIULga-2mSVkuZ0hz-FHSk15nLIdVeRJWvGMoOMA4ndo4yl3a-X_bGe",
        alt: "Luxury Bags Collection",
        exploreText: "EXPLORE ALL BAGS",
        large: true
    }
];

const subCategories = [
    {
        id: "men-collection", // ID එකක් ලබා දුන්නා
        title: "Men's Collection",
        subtitle: "Shoes & Bags",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtdgj6Qir61splkVE9yKtWisM9ElwUCUvgOiThS87nexsT0OwLUlhQ6uH_nB_HwA6Aw6gklKqlZvPBCzyJ6CfRFcKjFxKbyG3xuO30HoGRikzAy87hsS-btpOPUIKoKfYOtTLWmR_Y-Vgef9ehkFDEovyiWSFLiUGBd9AIUUiSE65GP9Ew9wsbB3Siu3I-6cFEXxwBA9D1Exun-0ZImz7NheRpo64Itf6mUAZRAh51S8BUbl__xufNSpHXFOLf-tcNSAL-Og-UtVDQ",
        alt: "Men's Collection"
    },
    {
        id: "women-collection", // ID එකක් ලබා දුන්නා
        title: "Women's Collection",
        subtitle: "Shoes & Bags",
        image: "https://images.unsplash.com/photo-1590156191108-de74ec7df48c?q=80&w=1974&auto=format&fit=crop",
        alt: "Women's Collection"
    },
    {
        id: "sports-performance", // දැනටමත් ID එකක් තියෙනවා
        title: "Sports Wear", // PDF එකේ තියෙන දේට ගැලපෙන්න නම වෙනස් කරා
        subtitle: "Kits & Performance Shoes",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiCjKiY5qSB4kVAM-rPlZHO4b--Qp8xPKApTB0VJ4uNcjHRkY0opGylUEOgpC1BX-p4CTpVICKZ1OZS8zuJaiIG9TKfPvPh4dcoz3vA-WH69VjuEMfcXyX_GjshWCsMDVjZdQP4AlMWKZdGRXqX0lGReNGAAPc32UGhYfp9GpIwQ8Y7uclcqz2BpdGXvWg8bpDq-HZj8f-uA2_dtoSYdZGAwv0EJQcbEIbWg70IRe2-3VOx0fv5NkUH4bxbsUFm043X3zfv309hnt_",
        alt: "Sports Performance"
    },
    {
        id: "brand-showcase", // ID එකක් ලබා දුන්නා
        title: "Premium Brands",
        subtitle: "Nike, Zara, Adidas & More",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqbC9a9SYczqiLhXWwvZ4aH8OytSe-5g4C_VGouRGlr1hGexaq5sQGR_cT-6mfsPTOwBjZoHt_YmEbr4QB_KmW-YUInHUO_XNVrN255sLbHu_F6z41k_BwC8Ip6ZT8xGke9eDqr1Y0aFE0WJm2wyfvTGD75SkzB1GX6SNJ4bdOy81Uvo1CBpmDyXXsWIqxpuk_JtEuAICPKF3KF5zmU8ZwP980zzY24SBOEGyyndjNa6oAdLZmM52Y5jnFVKoIscC-VnyRPC_pkiDy",
        alt: "Featured Brands"
    }
];

const Categories: React.FC = () => {
    return (
        <section id="categories" className="py-24 bg-primary-dark px-8">
            <div className="max-w-[1920px] mx-auto">
                <h2 className="font-headline text-4xl font-black tracking-tighter mb-16 text-center uppercase text-cream">
                    Top Categories
                </h2>

                {/* Large Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {categories.map((cat, index) => (
                        <div key={index} className="relative group h-[500px] overflow-hidden cursor-pointer">
                            <img
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                src={cat.image}
                                alt={cat.alt}
                            />
                            <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-primary-dark/40 transition-all duration-500"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-cream">
                                <span className="font-headline text-6xl font-black tracking-tighter mb-4 uppercase">
                                    {cat.title}
                                </span>
                                <span className="font-label text-[10px] tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sage-green font-bold">
                                    {cat.exploreText}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Small Categories Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {subCategories.map((sub, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="bg-sage-green/5 aspect-square mb-6 overflow-hidden relative border border-cream/5">
                                <img
                                    className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                                    src={sub.image}
                                    alt={sub.alt}
                                />
                            </div>
                            <h3 className="font-headline font-bold text-sm tracking-tight uppercase text-cream group-hover:text-sage-green transition-colors">
                                {sub.title}
                            </h3>
                            <p className="text-[10px] text-sage-green font-label mt-1 uppercase tracking-wider">
                                {sub.subtitle}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
