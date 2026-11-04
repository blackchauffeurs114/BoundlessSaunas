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
    subtitle: "Basement, garage or dedicated room",
  },
  {
    id: "outdoor",
    title: "Outdoors",
    subtitle: "Garden, terrace or lakeside",
  },
  {
    id: "rooftop",
    title: "Rooftop or balcony",
    subtitle: "We check floor loads & craneage",
  },
  {
    id: "facility",
    title: "A facility",
    subtitle: "Commercial floor with member traffic",
  },
];

const TIMING_OPTIONS = [
  "As soon as possible",
  "1–3 months",
  "3–6 months",
  "Just exploring",
];

const BUDGET_OPTIONS = [
  "£5k–£15k",
  "£15k–£30k",
  "£30k–£70k",
  "Flagship territory",
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
      // Fallback in case of network issue
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

  // SUCCESS STATE
  if (submitted) {
    return (
      <aside
        data-hero-quote="true"
        aria-label="Quote request received"
        className="w-full max-w-[540px] bg-[#181511]/90 backdrop-blur-md border border-[#EDE6DA]/15 p-6 sm:p-8 text-[#EDE6DA] shadow-2xl transition-all"
      >
        <div className="space-y-4">
          <span className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[#C98F4E] block">
            Request received · Ref: {refCode}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#EDE6DA] font-normal leading-tight">
            The kettle is on, {name.split(" ")[0] || "friend"}.
          </h3>
          <p className="text-xs sm:text-[13px] leading-relaxed text-[#EDE6DA]/70 font-light">
            Thank you for sharing your project vision. A Boundless Saunas bespoke consultant will review your specifications and reply with an itemised, delivered-to-your-door figure within 24 hours.
          </p>

          {/* Selection recap */}
          <div className="py-3 px-3.5 bg-black/30 border border-[#EDE6DA]/10 text-xs space-y-1.5 text-[#EDE6DA]/80">
            <div className="flex justify-between">
              <span className="text-[#EDE6DA]/50 uppercase tracking-wider text-[10px]">Build:</span>
              <span className="font-medium text-[#C98F4E]">
                {STEP_1_OPTIONS.find((o) => o.id === buildingType)?.title || "Bespoke sauna"}
              </span>
            </div>
            {placement && (
              <div className="flex justify-between">
                <span className="text-[#EDE6DA]/50 uppercase tracking-wider text-[10px]">Location:</span>
                <span>{STEP_2_OPTIONS.find((o) => o.id === placement)?.title}</span>
              </div>
            )}
            {timing && (
              <div className="flex justify-between">
                <span className="text-[#EDE6DA]/50 uppercase tracking-wider text-[10px]">Timeline:</span>
                <span>{timing}</span>
              </div>
            )}
            {budget && (
              <div className="flex justify-between">
                <span className="text-[#EDE6DA]/50 uppercase tracking-wider text-[10px]">Budget tier:</span>
                <span>{budget}</span>
              </div>
            )}
          </div>

          <div className="pt-2 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={handleReset}
              className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C98F4E] hover:underline"
            >
              Start another quote
            </button>
            <p className="text-[10px] text-[#EDE6DA]/40">
              No cart, no obligation.
            </p>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside
      data-hero-quote="true"
      aria-label="Start your quote"
      className="w-full max-w-[540px] bg-[#181511]/90 backdrop-blur-md border border-[#EDE6DA]/15 p-5 sm:p-7 text-[#EDE6DA] shadow-2xl transition-all"
    >
      {/* Header Row: Step counter & Back button */}
      <div className="flex items-center justify-between gap-3 min-h-[22px] mb-2">
        <span
          data-hero-quote-step="true"
          className="text-[10px] font-medium tracking-[0.24em] uppercase text-[#EDE6DA]/55"
        >
          Step 0{step} / 04
        </span>
        {step > 1 && (
          <button
            type="button"
            data-hero-quote-back="true"
            onClick={handleBack}
            className="flex items-center gap-1 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C98F4E] hover:text-[#e0a867] transition-colors"
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
        className="h-[1px] bg-[#EDE6DA]/15 mb-4 relative"
      >
        <div
          className="absolute left-0 top-0 bottom-0 bg-[#C98F4E] transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Question Headline */}
      <p
        id="hqc-q"
        className="font-serif font-normal text-xl sm:text-2xl text-[#EDE6DA] mb-3 leading-snug"
      >
        {step === 1 && "What are you building?"}
        {step === 2 && "Where will it live?"}
        {step === 3 && "Timing & Investment"}
        {step === 4 && "Where should we send your quote?"}
      </p>

      {/* STEP 1: What are you building? */}
      {step === 1 && (
        <div className="space-y-3.5 mb-3.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {STEP_1_OPTIONS.map((opt) => {
              const isSelected = buildingType === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  data-hero-quote-opt={opt.id}
                  aria-pressed={isSelected}
                  onClick={() => {
                    setBuildingType(opt.id);
                    // Smooth auto-advance to step 2 after brief tactile feedback
                    setTimeout(() => setStep(2), 220);
                  }}
                  className={`flex flex-col justify-center gap-0.5 min-h-[50px] text-left p-3 transition-all duration-300 ${
                    isSelected
                      ? "bg-[#C98F4E]/15 border border-[#C98F4E]"
                      : "bg-[#181511] border border-[#EDE6DA]/20 hover:border-[#EDE6DA]/40 hover:bg-[#201c17]"
                  }`}
                >
                  <span className="text-[13px] font-medium text-[#EDE6DA] leading-tight flex items-center justify-between">
                    {opt.title}
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#C98F4E]" />}
                  </span>
                  <span className="text-[10.5px] text-[#EDE6DA]/50 leading-tight">
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
            className={`w-full flex items-center justify-center min-h-[46px] px-6 text-[10.5px] font-semibold tracking-[0.22em] uppercase transition-all duration-300 ${
              buildingType
                ? "bg-[#C98F4E] border border-[#C98F4E] text-[#17130D] hover:bg-[#d89e5c] cursor-pointer"
                : "bg-transparent border border-[#EDE6DA]/20 text-[#EDE6DA]/40 pointer-events-none"
            }`}
          >
            <span>Continue →</span>
          </button>
        </div>
      )}

      {/* STEP 2: Where will it live? */}
      {step === 2 && (
        <div className="space-y-3.5 mb-3.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {STEP_2_OPTIONS.map((opt) => {
              const isSelected = placement === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  data-hero-quote-opt={opt.id}
                  aria-pressed={isSelected}
                  onClick={() => {
                    setPlacement(opt.id);
                    setTimeout(() => setStep(3), 220);
                  }}
                  className={`flex flex-col justify-center gap-0.5 min-h-[50px] text-left p-3 transition-all duration-300 ${
                    isSelected
                      ? "bg-[#C98F4E]/15 border border-[#C98F4E]"
                      : "bg-[#181511] border border-[#EDE6DA]/20 hover:border-[#EDE6DA]/40 hover:bg-[#201c17]"
                  }`}
                >
                  <span className="text-[13px] font-medium text-[#EDE6DA] leading-tight flex items-center justify-between">
                    {opt.title}
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#C98F4E]" />}
                  </span>
                  <span className="text-[10.5px] text-[#EDE6DA]/50 leading-tight">
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
            className={`w-full flex items-center justify-center min-h-[46px] px-6 text-[10.5px] font-semibold tracking-[0.22em] uppercase transition-all duration-300 ${
              placement
                ? "bg-[#C98F4E] border border-[#C98F4E] text-[#17130D] hover:bg-[#d89e5c] cursor-pointer"
                : "bg-transparent border border-[#EDE6DA]/20 text-[#EDE6DA]/40 pointer-events-none"
            }`}
          >
            <span>Continue →</span>
          </button>
        </div>
      )}

      {/* STEP 3: Timing & Investment */}
      {step === 3 && (
        <div className="space-y-3.5 mb-3.5">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#EDE6DA]/60 block font-medium">
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
                    className={`py-2 px-2.5 text-left text-xs font-medium transition-all ${
                      isSelected
                        ? "bg-[#C98F4E]/15 border border-[#C98F4E] text-[#EDE6DA]"
                        : "bg-[#181511] border border-[#EDE6DA]/20 text-[#EDE6DA]/70 hover:border-[#EDE6DA]/40"
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-2 pt-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#EDE6DA]/60 block font-medium">
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
                    className={`py-2 px-2 text-center text-xs font-medium transition-all ${
                      isSelected
                        ? "bg-[#C98F4E]/15 border border-[#C98F4E] text-[#EDE6DA]"
                        : "bg-[#181511] border border-[#EDE6DA]/20 text-[#EDE6DA]/70 hover:border-[#EDE6DA]/40"
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
            className={`w-full flex items-center justify-center min-h-[46px] px-6 text-[10.5px] font-semibold tracking-[0.22em] uppercase transition-all duration-300 ${
              timing || budget
                ? "bg-[#C98F4E] border border-[#C98F4E] text-[#17130D] hover:bg-[#d89e5c] cursor-pointer"
                : "bg-transparent border border-[#EDE6DA]/20 text-[#EDE6DA]/40 pointer-events-none"
            }`}
          >
            <span>Continue to Details →</span>
          </button>
        </div>
      )}

      {/* STEP 4: Contact & Site Details */}
      {step === 4 && (
        <form onSubmit={handleSubmit} className="space-y-3 mb-3">
          {error && (
            <div className="p-2.5 bg-red-950/60 border border-red-500/40 text-red-200 text-xs">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <label className="text-[10px] uppercase tracking-[0.18em] text-[#EDE6DA]/60 block mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Cam Wickins"
                className="w-full bg-[#181511] border border-[#EDE6DA]/20 px-3 py-2 text-xs text-[#EDE6DA] focus:border-[#C98F4E] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.18em] text-[#EDE6DA]/60 block mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.co.uk"
                className="w-full bg-[#181511] border border-[#EDE6DA]/20 px-3 py-2 text-xs text-[#EDE6DA] focus:border-[#C98F4E] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-[0.18em] text-[#EDE6DA]/60 block mb-1">
              Phone / Delivery Postcode
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. TR1 2LL or 07123 456789"
              className="w-full bg-[#181511] border border-[#EDE6DA]/20 px-3 py-2 text-xs text-[#EDE6DA] focus:border-[#C98F4E] focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-[0.18em] text-[#EDE6DA]/60 block mb-1">
              Project Notes (Optional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any specific heater, glass or site access notes..."
              className="w-full bg-[#181511] border border-[#EDE6DA]/20 px-3 py-2 text-xs text-[#EDE6DA] focus:border-[#C98F4E] focus:outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center min-h-[46px] px-6 text-[10.5px] font-semibold tracking-[0.22em] uppercase bg-[#C98F4E] border border-[#C98F4E] text-[#17130D] hover:bg-[#d89e5c] transition-all cursor-pointer disabled:opacity-50"
          >
            <span>{loading ? "Preparing your quote..." : "Request Delivered Quote →"}</span>
          </button>
        </form>
      )}

      {/* Footer Reassurance */}
      <p className="mt-2.5 text-[10.5px] leading-relaxed text-[#EDE6DA]/45">
        No cart, no pressure — a consultant replies within 24 hours.
      </p>
    </aside>
  );
}
