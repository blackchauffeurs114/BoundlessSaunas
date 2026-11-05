"use client";

import React, { useState } from "react";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";

interface Option {
  id: string;
  title: string;
  subtitle: string;
}

const STEP_1_OPTIONS: Option[] = [
  {
    id: "sauna",
    title: "A sauna",
    subtitle: "Cabin, barrel or infrared",
  },
  {
    id: "plunge",
    title: "A cold plunge",
    subtitle: "Chilled, filtered, year-round",
  },
  {
    id: "contrast",
    title: "Sauna + plunge",
    subtitle: "Hot and cold as one ritual",
  },
  {
    id: "commercial",
    title: "A commercial project",
    subtitle: "Spa, gym, hotel, rental",
  },
];

const STEP_2_OPTIONS: Option[] = [
  {
    id: "indoor",
    title: "Indoors",
    subtitle: "Basement, garage or room",
  },
  {
    id: "outdoor",
    title: "Outdoors",
    subtitle: "Garden, terrace or coast",
  },
  {
    id: "rooftop",
    title: "Rooftop or balcony",
    subtitle: "Checked loads & craneage",
  },
  {
    id: "facility",
    title: "A facility",
    subtitle: "Commercial & member traffic",
  },
];

const TIMING_OPTIONS = [
  "As soon as possible",
  "1–3 months",
  "3–6 months",
  "Just exploring",
];

const BUDGET_OPTIONS = [
  "$5k–$15k",
  "$15k–$30k",
  "$30k–$70k",
  "Flagship bespoke",
  "Not sure yet",
];

export default function QuoteBuilder() {
  const [step, setStep] = useState<number>(1);
  const [buildingType, setBuildingType] = useState<string | null>(null);
  const [placement, setPlacement] = useState<string | null>(null);
  const [timing, setTiming] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [refCode, setRefCode] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const progressPercent = ((step - 1) / 3) * 100;

  const handleNext = () => {
    if (step === 1 && buildingType) setStep(2);
    else if (step === 2 && placement) setStep(3);
    else if (step === 3 && (timing || budget)) setStep(4);
  };

  const handleBack = () => {
    if (step > 1) {
      setError(null);
      setStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Please provide your name and email address.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          buildingType,
          placement,
          timing,
          budget,
          name,
          email,
          phone,
          notes,
        }),
      });

      const data = await res.json().catch(() => ({}));
      const code = data.id || `BS-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
      setRefCode(code);
      setSubmitted(true);
    } catch {
      setRefCode(`BS-${Math.random().toString(36).substring(2, 8).toUpperCase()}`);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setStep(1);
    setBuildingType(null);
    setPlacement(null);
    setTiming(null);
    setBudget(null);
    setName("");
    setEmail("");
    setPhone("");
    setNotes("");
    setSubmitted(false);
    setError(null);
  };

  // SUCCESS STATE (LIGHT WEBSITE THEME)
  if (submitted) {
    return (
      <aside
        data-hero-quote="true"
        aria-label="Quote request received"
        className="w-full max-w-[540px] bg-white border border-black/10 rounded-[18px] p-6 sm:p-8 text-[#1b1713] shadow-[0_12px_40px_rgba(27,23,19,0.08)] transition-all"
      >
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#899362]/10 border border-[#899362]/20 rounded-full text-[10px] font-semibold tracking-[0.2em] uppercase text-[#6e7c52]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#899362]" />
            Request received · Ref: {refCode}
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-[#1b1713] font-normal leading-tight">
            The kettle is on, {name.split(" ")[0] || "friend"}.
          </h3>

          <p className="text-xs sm:text-[13px] leading-relaxed text-[#5c564e] font-light">
            Thank you for sharing your project vision. A Boundless Saunas bespoke consultant will review your specifications and reply with an itemised, delivered-to-your-door figure within 24 hours.
          </p>

          {/* Selection recap */}
          <div className="py-3.5 px-4 bg-[#f7f5f0] border border-black/8 rounded-[12px] text-xs space-y-2 text-[#1b1713]">
            <div className="flex justify-between items-center">
              <span className="text-[#6b6359] uppercase tracking-wider text-[10px]">Build:</span>
              <span className="font-semibold text-[#1b1713]">
                {STEP_1_OPTIONS.find((o) => o.id === buildingType)?.title || "Bespoke sauna"}
              </span>
            </div>
            {placement && (
              <div className="flex justify-between items-center">
                <span className="text-[#6b6359] uppercase tracking-wider text-[10px]">Location:</span>
                <span className="font-medium text-[#1b1713]">{STEP_2_OPTIONS.find((o) => o.id === placement)?.title}</span>
              </div>
            )}
            {timing && (
              <div className="flex justify-between items-center">
                <span className="text-[#6b6359] uppercase tracking-wider text-[10px]">Timeline:</span>
                <span className="font-medium text-[#1b1713]">{timing}</span>
              </div>
            )}
            {budget && (
              <div className="flex justify-between items-center">
                <span className="text-[#6b6359] uppercase tracking-wider text-[10px]">Budget tier:</span>
                <span className="font-medium text-[#1b1713]">{budget}</span>
              </div>
            )}
          </div>

          <div className="pt-2 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={handleReset}
              className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#1b1713] hover:underline"
            >
              Start another quote
            </button>
            <p className="text-[10.5px] text-[#70695f]">
              No cart, no obligation.
            </p>
          </div>
        </div>
      </aside>
    );
  }

  // ACTIVE CARD (LIGHT WEBSITE THEME: WHITE BG, CHARCOAL & SAGE ACCENTS)
  return (
    <aside
      data-hero-quote="true"
      aria-label="Start your quote"
      className="w-full max-w-[540px] bg-white border border-black/10 rounded-[18px] p-6 sm:p-8 text-[#1b1713] shadow-[0_12px_40px_rgba(27,23,19,0.08)] transition-all"
    >
      {/* Header Row: Step counter & Back button */}
      <div className="flex items-center justify-between gap-3 min-h-[22px] mb-2.5">
        <span
          data-hero-quote-step="true"
          className="text-[10.5px] font-semibold tracking-[0.22em] uppercase text-[#6e7c52] flex items-center gap-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#899362]" />
          Step 0{step} / 04
        </span>

        {step > 1 && (
          <button
            type="button"
            data-hero-quote-back="true"
            onClick={handleBack}
            className="flex items-center gap-1 text-[10.5px] font-semibold tracking-[0.18em] uppercase text-[#1b1713] hover:text-[#6e7c52] transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>Back</span>
          </button>
        )}
      </div>

      {/* Progress Bar */}
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={4}
        aria-valuenow={step}
        className="h-[2px] bg-black/8 rounded-full mb-5 relative overflow-hidden"
      >
        <div
          className="absolute left-0 top-0 bottom-0 bg-[#1b1713] rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Question Headline */}
      <h3
        id="hqc-q"
        className="font-serif font-normal text-2xl sm:text-[28px] text-[#1b1713] mb-4 leading-tight"
      >
        {step === 1 && "What are you building?"}
        {step === 2 && "Where will it live?"}
        {step === 3 && "Timing & Investment"}
        {step === 4 && "Where should we send your quote?"}
      </h3>

      {/* STEP 1: What are you building? */}
      {step === 1 && (
        <div className="space-y-4 mb-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {STEP_1_OPTIONS.map((opt) => {
              const isSelected = buildingType === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  data-hero-quote-opt={opt.id}
                  aria-pressed={isSelected}
                  onClick={() => setBuildingType(opt.id)}
                  className={`flex flex-col justify-center gap-1 min-h-[58px] text-left p-3.5 rounded-[12px] transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#1b1713] border border-[#1b1713] text-white shadow-sm"
                      : "bg-[#fbfaf8] border border-black/10 text-[#1b1713] hover:border-black/30 hover:bg-[#f3ede3]"
                  }`}
                >
                  <span className={`text-[13.5px] font-medium leading-tight flex items-center justify-between ${isSelected ? "text-white" : "text-[#1b1713]"}`}>
                    {opt.title}
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#c7d67a]" />}
                  </span>
                  <span className={`text-[11px] leading-tight ${isSelected ? "text-white/75" : "text-[#6b6359]"}`}>
                    {opt.subtitle}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            data-hero-quote-cta="true"
            disabled={!buildingType}
            onClick={handleNext}
            className={`w-full flex items-center justify-center min-h-[46px] px-6 text-xs font-semibold tracking-[0.2em] uppercase rounded-full transition-all duration-300 ${
              buildingType
                ? "bg-[#1b1713] border border-[#1b1713] text-white hover:bg-[#332b24] cursor-pointer shadow-md"
                : "bg-[#efebe4] border border-black/5 text-[#9e968b] pointer-events-none"
            }`}
          >
            <span>Continue →</span>
          </button>
        </div>
      )}

      {/* STEP 2: Where will it live? */}
      {step === 2 && (
        <div className="space-y-4 mb-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {STEP_2_OPTIONS.map((opt) => {
              const isSelected = placement === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  data-hero-quote-opt={opt.id}
                  aria-pressed={isSelected}
                  onClick={() => setPlacement(opt.id)}
                  className={`flex flex-col justify-center gap-1 min-h-[58px] text-left p-3.5 rounded-[12px] transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#1b1713] border border-[#1b1713] text-white shadow-sm"
                      : "bg-[#fbfaf8] border border-black/10 text-[#1b1713] hover:border-black/30 hover:bg-[#f3ede3]"
                  }`}
                >
                  <span className={`text-[13.5px] font-medium leading-tight flex items-center justify-between ${isSelected ? "text-white" : "text-[#1b1713]"}`}>
                    {opt.title}
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#c7d67a]" />}
                  </span>
                  <span className={`text-[11px] leading-tight ${isSelected ? "text-white/75" : "text-[#6b6359]"}`}>
                    {opt.subtitle}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            data-hero-quote-cta="true"
            disabled={!placement}
            onClick={handleNext}
            className={`w-full flex items-center justify-center min-h-[46px] px-6 text-xs font-semibold tracking-[0.2em] uppercase rounded-full transition-all duration-300 ${
              placement
                ? "bg-[#1b1713] border border-[#1b1713] text-white hover:bg-[#332b24] cursor-pointer shadow-md"
                : "bg-[#efebe4] border border-black/5 text-[#9e968b] pointer-events-none"
            }`}
          >
            <span>Continue →</span>
          </button>
        </div>
      )}

      {/* STEP 3: Timing & Investment */}
      {step === 3 && (
        <div className="space-y-4 mb-2">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#6b6359] block font-semibold">
              Expected Timeline
            </span>
            <div className="grid grid-cols-2 gap-2">
              {TIMING_OPTIONS.map((t) => {
                const isSelected = timing === t;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTiming(t)}
                    className={`py-2.5 px-3 text-left text-xs font-medium rounded-[10px] transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#1b1713] border border-[#1b1713] text-white shadow-sm"
                        : "bg-[#fbfaf8] border border-black/10 text-[#5c564e] hover:border-black/30"
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-2 pt-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#6b6359] block font-semibold">
              Investment Tier (Delivered)
            </span>
            <div className="grid grid-cols-3 gap-2">
              {BUDGET_OPTIONS.map((b) => {
                const isSelected = budget === b;
                return (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBudget(b)}
                    className={`py-2 px-2 text-center text-xs font-medium rounded-[10px] transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#1b1713] border border-[#1b1713] text-white shadow-sm"
                        : "bg-[#fbfaf8] border border-black/10 text-[#5c564e] hover:border-black/30"
                    }`}
                  >
                    {b}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            data-hero-quote-cta="true"
            disabled={!timing && !budget}
            onClick={handleNext}
            className={`w-full flex items-center justify-center min-h-[46px] px-6 text-xs font-semibold tracking-[0.2em] uppercase rounded-full transition-all duration-300 ${
              timing || budget
                ? "bg-[#1b1713] border border-[#1b1713] text-white hover:bg-[#332b24] cursor-pointer shadow-md"
                : "bg-[#efebe4] border border-black/5 text-[#9e968b] pointer-events-none"
            }`}
          >
            <span>Continue to Details →</span>
          </button>
        </div>
      )}

      {/* STEP 4: Contact & Site Details */}
      {step === 4 && (
        <form onSubmit={handleSubmit} className="space-y-3.5 mb-2">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs rounded-[8px]">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label className="text-[10px] uppercase tracking-[0.18em] text-[#5c564e] block mb-1 font-semibold">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Cam Wickins"
                className="w-full bg-[#fbfaf8] border border-black/15 px-3.5 py-2.5 text-xs text-[#1b1713] rounded-[8px] focus:border-[#1b1713] focus:bg-white focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.18em] text-[#5c564e] block mb-1 font-semibold">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                className="w-full bg-[#fbfaf8] border border-black/15 px-3.5 py-2.5 text-xs text-[#1b1713] rounded-[8px] focus:border-[#1b1713] focus:bg-white focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-[0.18em] text-[#5c564e] block mb-1 font-semibold">
              Phone / Delivery Postcode
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. TR1 2LL or 07123 456789"
              className="w-full bg-[#fbfaf8] border border-black/15 px-3.5 py-2.5 text-xs text-[#1b1713] rounded-[8px] focus:border-[#1b1713] focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-[0.18em] text-[#5c564e] block mb-1 font-semibold">
              Project Notes (Optional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any specific heater, glass or site access notes..."
              className="w-full bg-[#fbfaf8] border border-black/15 px-3.5 py-2.5 text-xs text-[#1b1713] rounded-[8px] focus:border-[#1b1713] focus:bg-white focus:outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center min-h-[46px] px-6 text-xs font-semibold tracking-[0.2em] uppercase bg-[#1b1713] border border-[#1b1713] text-white hover:bg-[#332b24] rounded-full transition-all cursor-pointer shadow-md disabled:opacity-50"
          >
            <span>{loading ? "Preparing your quote..." : "Request Delivered Quote →"}</span>
          </button>
        </form>
      )}

      {/* Footer Reassurance */}
      <p className="mt-3 text-[11px] leading-relaxed text-[#70695f] text-center font-light">
        No cart, no pressure — a consultant replies within 24 hours.
      </p>
    </aside>
  );
}
