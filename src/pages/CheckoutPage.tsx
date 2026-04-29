import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CreditCard, 
  Truck, 
  User, 
  CheckCircle2, 
  ArrowLeft,
  ShieldCheck,
  Lock
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import type { CheckoutStep, CheckoutFormData } from '../types';

const CheckoutPage: React.FC = () => {
  const { items, subtotal, clearCart } = useCart();
  const [step, setStep] = useState<CheckoutStep>(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const [formData, setFormData] = useState<CheckoutFormData>({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    province: '',
    postalCode: '',
    country: 'Sri Lanka',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
    saveInfo: false
  });

  const formatPrice = (price: number) => `LKR ${price.toLocaleString('en-LK')}`;
  const shipping = subtotal >= 25000 ? 0 : 500;
  const total = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep((prev) => (prev + 1) as CheckoutStep);
    else handlePlaceOrder();
  };

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
      clearCart();
    }, 2000);
  };

  if (items.length === 0 && !isCompleted) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-[#121A1B] flex items-center justify-center px-4">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-[#EAE6D2]/5 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 size={40} className="text-[#EAE6D2]/20" />
          </div>
          <h2 className="font-headline font-black text-2xl uppercase tracking-widest text-[#EAE6D2]">Your cart is empty</h2>
          <Link to="/" className="inline-block bg-[#A7AA63] text-[#121A1B] px-8 py-4 rounded-xl font-headline font-black text-xs uppercase tracking-widest hover:bg-[#EAE6D2] transition-all">
            Return to shop
          </Link>
        </div>
      </div>
    );
  }

  if (isCompleted) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-[#121A1B] flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-[#EAE6D2]/[0.02] border border-[#EAE6D2]/10 p-10 rounded-3xl text-center space-y-8">
          <div className="w-24 h-24 bg-[#A7AA63] rounded-full flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(167,170,99,0.3)] animate-bounce">
            <CheckCircle2 size={48} className="text-[#121A1B]" />
          </div>
          <div className="space-y-2">
            <h2 className="font-headline font-black text-3xl uppercase tracking-tight text-[#EAE6D2]">Order Confirmed!</h2>
            <p className="text-[#EAE6D2]/50 text-sm">Thank you for your purchase. We've sent a confirmation email to <span className="text-[#A7AA63]">{formData.email}</span>.</p>
          </div>
          <div className="p-6 bg-[#121A1B] rounded-2xl border border-[#EAE6D2]/5 text-left">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#EAE6D2]/40 mb-1">Order Number</p>
            <p className="text-[#EAE6D2] font-headline font-bold">#REBEL-{Math.floor(Math.random() * 900000) + 100000}</p>
          </div>
          <Link to="/" className="block w-full bg-[#A7AA63] text-[#121A1B] py-5 rounded-xl font-headline font-black text-xs uppercase tracking-[0.2em] transition-all hover:bg-[#EAE6D2]">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#121A1B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Checkout Form */}
          <div className="lg:col-span-7 space-y-12">
            {/* Step Indicators */}
            <div className="flex items-center gap-4">
              {[
                { id: 1, label: 'Contact', icon: User },
                { id: 2, label: 'Shipping', icon: Truck },
                { id: 3, label: 'Payment', icon: CreditCard }
              ].map((s, idx) => (
                <React.Fragment key={s.id}>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${step >= s.id ? 'bg-[#A7AA63] border-[#A7AA63] text-[#121A1B]' : 'border-[#EAE6D2]/10 text-[#EAE6D2]/20'}`}>
                      {step > s.id ? <CheckCircle2 size={20} /> : <s.icon size={18} />}
                    </div>
                    <span className={`hidden sm:block text-[10px] font-bold uppercase tracking-widest ${step >= s.id ? 'text-[#EAE6D2]' : 'text-[#EAE6D2]/20'}`}>
                      {s.label}
                    </span>
                  </div>
                  {idx < 2 && <div className={`flex-1 h-px max-w-[40px] ${step > s.id ? 'bg-[#A7AA63]' : 'bg-[#EAE6D2]/10'}`} />}
                </React.Fragment>
              ))}
            </div>

            <form onSubmit={handleNextStep} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {/* Step 1: Contact Information */}
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="font-headline font-black text-2xl uppercase tracking-tight text-[#EAE6D2]">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[#EAE6D2]/40 px-1">Email Address</label>
                      <input 
                        required
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-[#EAE6D2]/5 border border-[#EAE6D2]/10 rounded-xl py-4 px-6 text-[#EAE6D2] focus:outline-none focus:border-[#A7AA63] transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[#EAE6D2]/40 px-1">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-[#EAE6D2]/5 border border-[#EAE6D2]/10 rounded-xl py-4 px-6 text-[#EAE6D2] focus:outline-none focus:border-[#A7AA63] transition-all"
                        placeholder="+94 7X XXX XXXX"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Shipping Address */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-headline font-black text-2xl uppercase tracking-tight text-[#EAE6D2]">Shipping Address</h3>
                    <button type="button" onClick={() => setStep(1)} className="text-[10px] font-bold uppercase text-[#A7AA63] hover:underline flex items-center gap-1">
                      <ArrowLeft size={12} /> Edit Contact
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[#EAE6D2]/40 px-1">First Name</label>
                      <input 
                        required
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full bg-[#EAE6D2]/5 border border-[#EAE6D2]/10 rounded-xl py-4 px-6 text-[#EAE6D2] focus:outline-none focus:border-[#A7AA63] transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[#EAE6D2]/40 px-1">Last Name</label>
                      <input 
                        required
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full bg-[#EAE6D2]/5 border border-[#EAE6D2]/10 rounded-xl py-4 px-6 text-[#EAE6D2] focus:outline-none focus:border-[#A7AA63] transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#EAE6D2]/40 px-1">Address</label>
                    <input 
                      required
                      type="text" 
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full bg-[#EAE6D2]/5 border border-[#EAE6D2]/10 rounded-xl py-4 px-6 text-[#EAE6D2] focus:outline-none focus:border-[#A7AA63] transition-all"
                      placeholder="Street name and house number"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#EAE6D2]/40 px-1">Apartment, suite, etc. (optional)</label>
                    <input 
                      type="text" 
                      name="apartment"
                      value={formData.apartment}
                      onChange={handleInputChange}
                      className="w-full bg-[#EAE6D2]/5 border border-[#EAE6D2]/10 rounded-xl py-4 px-6 text-[#EAE6D2] focus:outline-none focus:border-[#A7AA63] transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[#EAE6D2]/40 px-1">City</label>
                      <input 
                        required
                        type="text" 
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full bg-[#EAE6D2]/5 border border-[#EAE6D2]/10 rounded-xl py-4 px-6 text-[#EAE6D2] focus:outline-none focus:border-[#A7AA63] transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[#EAE6D2]/40 px-1">Province</label>
                      <select 
                        required
                        name="province"
                        value={formData.province}
                        onChange={handleInputChange}
                        className="w-full bg-[#121A1B] border border-[#EAE6D2]/10 rounded-xl py-4 px-6 text-[#EAE6D2] focus:outline-none focus:border-[#A7AA63] transition-all appearance-none"
                      >
                        <option value="">Select Province</option>
                        <option value="Western">Western</option>
                        <option value="Central">Central</option>
                        <option value="Southern">Southern</option>
                        {/* More provinces... */}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[#EAE6D2]/40 px-1">Postal Code</label>
                      <input 
                        required
                        type="text" 
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className="w-full bg-[#EAE6D2]/5 border border-[#EAE6D2]/10 rounded-xl py-4 px-6 text-[#EAE6D2] focus:outline-none focus:border-[#A7AA63] transition-all"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Payment Section */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-headline font-black text-2xl uppercase tracking-tight text-[#EAE6D2]">Payment Information</h3>
                    <button type="button" onClick={() => setStep(2)} className="text-[10px] font-bold uppercase text-[#A7AA63] hover:underline flex items-center gap-1">
                      <ArrowLeft size={12} /> Edit Shipping
                    </button>
                  </div>
                  
                  <div className="bg-[#A7AA63]/5 border border-[#A7AA63]/20 rounded-2xl p-6 mb-8 flex items-start gap-4">
                    <div className="p-3 bg-[#A7AA63]/20 rounded-xl text-[#A7AA63]">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <p className="text-[#EAE6D2] font-bold text-sm">Secure Checkout</p>
                      <p className="text-[#EAE6D2]/40 text-xs mt-1">All transactions are secure and encrypted. We never store your card details.</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[#EAE6D2]/40 px-1">Card Number</label>
                      <div className="relative">
                        <input 
                          required
                          type="text" 
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          className="w-full bg-[#EAE6D2]/5 border border-[#EAE6D2]/10 rounded-xl py-4 px-6 pl-12 text-[#EAE6D2] focus:outline-none focus:border-[#A7AA63] transition-all"
                          placeholder="0000 0000 0000 0000"
                        />
                        <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#EAE6D2]/20" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[#EAE6D2]/40 px-1">Name on Card</label>
                      <input 
                        required
                        type="text" 
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        className="w-full bg-[#EAE6D2]/5 border border-[#EAE6D2]/10 rounded-xl py-4 px-6 text-[#EAE6D2] focus:outline-none focus:border-[#A7AA63] transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-[#EAE6D2]/40 px-1">Expiry Date</label>
                        <input 
                          required
                          type="text" 
                          name="expiry"
                          value={formData.expiry}
                          onChange={handleInputChange}
                          className="w-full bg-[#EAE6D2]/5 border border-[#EAE6D2]/10 rounded-xl py-4 px-6 text-[#EAE6D2] focus:outline-none focus:border-[#A7AA63] transition-all"
                          placeholder="MM / YY"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-[#EAE6D2]/40 px-1">CVV</label>
                        <input 
                          required
                          type="password" 
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          className="w-full bg-[#EAE6D2]/5 border border-[#EAE6D2]/10 rounded-xl py-4 px-6 text-[#EAE6D2] focus:outline-none focus:border-[#A7AA63] transition-all"
                          placeholder="***"
                          maxLength={3}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <button 
                type="submit"
                disabled={isProcessing}
                className="w-full bg-[#A7AA63] text-[#121A1B] py-5 rounded-2xl font-headline font-black text-xs uppercase tracking-[0.3em] transition-all duration-300 hover:bg-[#EAE6D2] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3 mt-4"
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#121A1B]/30 border-t-[#121A1B] rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  step === 3 ? 'Pay Now' : 'Continue to ' + (step === 1 ? 'Shipping' : 'Payment')
                )}
              </button>
            </form>
          </div>

          {/* RIGHT: Order Summary */}
          <div className="lg:col-span-5 sticky top-32">
            <div className="bg-[#EAE6D2]/[0.02] border border-[#EAE6D2]/10 rounded-3xl p-8 space-y-8">
              <h3 className="font-headline font-black text-xl uppercase tracking-tight text-[#EAE6D2]">Order Summary</h3>
              
              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.selectedSize}`} className="flex gap-4">
                    <div className="w-16 h-20 bg-white rounded-lg overflow-hidden flex-shrink-0">
                      <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[#EAE6D2] text-sm font-bold truncate">{item.product.name}</h4>
                      <p className="text-[10px] text-[#EAE6D2]/40 uppercase tracking-widest mt-1">Size: {item.selectedSize} | Qty: {item.quantity}</p>
                      <p className="text-[#EAE6D2] font-bold text-sm mt-2">{formatPrice(item.product.price * item.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-[#EAE6D2]/10 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[#EAE6D2]/40">Subtotal</span>
                  <span className="text-[#EAE6D2] font-bold">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#EAE6D2]/40">Shipping</span>
                  <span className="text-[#A7AA63] font-bold">{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
                </div>
                <div className="pt-4 border-t border-[#EAE6D2]/10 flex justify-between">
                  <span className="text-[#EAE6D2] font-black uppercase tracking-widest">Total</span>
                  <span className="text-[#EAE6D2] font-black text-2xl">{formatPrice(total)}</span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Promo Code"
                  className="flex-1 bg-[#121A1B] border border-[#EAE6D2]/10 rounded-xl py-3 px-4 text-xs text-[#EAE6D2] focus:outline-none focus:border-[#A7AA63]"
                />
                <button className="bg-[#EAE6D2]/10 text-[#EAE6D2] px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#EAE6D2]/20 transition-all">
                  Apply
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
