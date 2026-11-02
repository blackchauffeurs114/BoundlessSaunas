"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, ArrowRight, Trash2, ShieldCheck, Truck, Sparkles, Check } from "lucide-react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: "deposit-luna",
      title: "The Luna Sauna — Production Deposit",
      specs: "2.5m × 2.0m | 10.5kW HUUM WiFi | Thermo Alder",
      price: 2500,
      image: "/content/v1/6993920ac427d10258b41fb2/bc7a1ac4-e162-441c-abd7-60b3340c32af/IMG_0838.JPG",
    },
  ]);

  const [checkedOut, setCheckedOut] = useState(false);

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((i) => i.id !== id));
  };

  const subtotal = cartItems.reduce((acc, curr) => acc + curr.price, 0);
  const vat = subtotal * 0.2;
  const total = subtotal + vat;

  return (
    <div className="bg-[#f7f5f0] text-[#1b1713] pt-28 sm:pt-36 min-h-[85vh]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-10">
        <div className="space-y-2">
          <span className="section-tag-light">Your Reservation</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#1b1713] font-normal">
            Build Cart &amp; Deposits
          </h1>
        </div>

        {checkedOut ? (
          <div className="bg-white border border-[#6e7c52] rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#6e7c52]/10 border border-[#6e7c52] flex items-center justify-center mx-auto text-[#6e7c52]">
              <Check className="w-7 h-7" />
            </div>
            <h2 className="font-serif text-3xl text-[#1b1713] font-medium">Deposit Inquiry Confirmed</h2>
            <p className="text-[#666055] text-sm sm:text-base max-w-md mx-auto leading-relaxed font-light">
              Cam Wickins will contact you directly within 24 hours to confirm your build slot, finalize site access, and send your formal invoice.
            </p>
            <div className="pt-2">
              <Link
                href="/saunas"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-black text-white hover:bg-[#6e7c52] transition-all shadow-sm"
              >
                <span>Return to Saunas</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : cartItems.length === 0 ? (
          <div className="bg-white border border-[#786e5a]/15 rounded-3xl p-12 text-center space-y-5 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#f7f5f0] flex items-center justify-center mx-auto text-[#9a9386]">
              <ShoppingBag className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h2 className="font-serif text-2xl text-[#1b1713] font-medium">Your cart is currently empty</h2>
              <p className="text-[#666055] text-sm max-w-md mx-auto font-light">
                Ready to explore our handcrafted Cornish saunas? Choose a model to configure or enquire about bespoke availability.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/saunas"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-black text-white hover:bg-[#6e7c52] transition-all"
              >
                <span>Explore The Range</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Items */}
            <div className="lg:col-span-7 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-[#786e5a]/15 rounded-2xl p-5 flex gap-4 sm:gap-6 items-center shadow-sm"
                >
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-neutral-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-grow space-y-1">
                    <h3 className="font-serif text-lg text-[#1b1713] font-medium">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#8c857b] font-light">{item.specs}</p>
                    <div className="font-serif text-lg text-[#6e7c52] pt-1 font-medium">
                      £{item.price.toLocaleString()} <span className="text-[10px] text-[#8c857b] font-sans">+ VAT</span>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-[#9a9386] hover:text-red-500 rounded-lg transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}

              <div className="pt-2 flex justify-between items-center text-xs text-[#8c857b]">
                <span>Production slots currently booking 6–8 weeks in advance</span>
                <button
                  onClick={() => setCartItems([])}
                  className="hover:text-black underline"
                >
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-5 bg-white border border-[#786e5a]/15 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="font-serif text-2xl text-[#1b1713] font-medium">
                Summary
              </h3>

              <div className="space-y-3 text-sm border-b border-black/5 pb-5">
                <div className="flex justify-between text-[#666055]">
                  <span>Build Reservation Subtotal</span>
                  <span className="text-[#1b1713] font-medium">£{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#666055]">
                  <span>VAT (20%)</span>
                  <span className="text-[#1b1713] font-medium">£{vat.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#666055]">
                  <span>Cornwall &amp; UK Delivery</span>
                  <span className="text-[#6e7c52]">Calculated on survey</span>
                </div>
              </div>

              <div className="flex justify-between items-baseline font-serif text-2xl text-[#1b1713]">
                <span>Total Deposit Due</span>
                <span className="text-[#6e7c52] font-medium">£{total.toLocaleString()}</span>
              </div>

              <button
                onClick={() => setCheckedOut(true)}
                className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-black hover:bg-[#6e7c52] text-white flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>Proceed to Reserve Slot</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="space-y-2 pt-2 border-t border-black/5 text-xs text-[#8c857b]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#6e7c52]" />
                  <span>5-Year Structural Integrity Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#6e7c52]" />
                  <span>Handcrafted &amp; Delivered from Cornwall</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
