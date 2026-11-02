"use client";

import { useState } from "react";
import { Check, Send, Sparkles } from "lucide-react";

interface ContactFormProps {
  initialModel?: string;
}

export default function ContactForm({ initialModel = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    model: initialModel || "The Luna Sauna",
    heater: "HUUM WiFi Electric",
    location: "Garden / Private Home",
    timeline: "Ready to start within 1-3 months",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-[#6e7c52] rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-[#6e7c52]/10 border border-[#6e7c52] flex items-center justify-center mx-auto text-[#6e7c52]">
          <Check className="w-7 h-7" />
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl text-[#1b1713] font-medium">
          Thank you, {formData.name || "friend"}!
        </h3>
        <p className="text-[#666055] text-sm sm:text-base max-w-md mx-auto leading-relaxed font-light">
          Your inquiry for <span className="text-[#6e7c52] font-medium">{formData.model}</span> has been received. Cam will personally review your specifications and get in touch within 24 hours.
        </p>
        <div className="pt-2">
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-black/15 text-[#1b1713] hover:bg-black hover:text-white transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-[#786e5a]/15 rounded-3xl p-6 sm:p-10 space-y-5 shadow-sm text-[#1b1713]"
    >
      <div className="space-y-1">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-[#6e7c52] block">
          Bespoke Build Inquiry
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl text-[#1b1713] font-medium">
          Start Your Custom Sauna Spec
        </h3>
        <p className="text-xs sm:text-sm text-[#666055] font-light">
          No automated call centers. One direct conversation with Cam to bring your vision to life.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-medium uppercase tracking-wider text-[#666055]">
            Your Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. James Tremayne"
            className="w-full bg-[#f7f5f0] border border-[#786e5a]/15 rounded-xl px-4 py-3 text-sm text-[#1b1713] placeholder-[#9a9386] focus:outline-none focus:border-[#6e7c52] transition-colors"
          />
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-medium uppercase tracking-wider text-[#666055]">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. james@example.com"
            className="w-full bg-[#f7f5f0] border border-[#786e5a]/15 rounded-xl px-4 py-3 text-sm text-[#1b1713] placeholder-[#9a9386] focus:outline-none focus:border-[#6e7c52] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-medium uppercase tracking-wider text-[#666055]">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+44 7000 000000"
            className="w-full bg-[#f7f5f0] border border-[#786e5a]/15 rounded-xl px-4 py-3 text-sm text-[#1b1713] placeholder-[#9a9386] focus:outline-none focus:border-[#6e7c52] transition-colors"
          />
        </div>

        {/* Sauna Model */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-medium uppercase tracking-wider text-[#666055]">
            Preferred Sauna Model
          </label>
          <select
            value={formData.model}
            onChange={(e) => setFormData({ ...formData, model: e.target.value })}
            className="w-full bg-[#f7f5f0] border border-[#786e5a]/15 rounded-xl px-4 py-3 text-sm text-[#1b1713] focus:outline-none focus:border-[#6e7c52] transition-colors"
          >
            <option value="The Luna Sauna">The Luna (From £18,000)</option>
            <option value="The Nest Sauna">The Nest (From £15,000)</option>
            <option value="Commercial Mobile">Commercial Mobile (From £28,000)</option>
            <option value="The Cove">The Cove (From £10,000)</option>
            <option value="The Haven">The Haven (From £16,000)</option>
            <option value="The Solace">The Solace (From £21,000)</option>
            <option value="The Sanctuary">The Sanctuary (From £28,000)</option>
            <option value="Fully Custom / Bespoke">Fully Custom Architectural Build</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label className="text-[11px] font-medium uppercase tracking-wider text-[#666055]">
          Tell Us About Your Space &amp; Requirements
        </label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="e.g. Dimensions of available garden space, preferred wood finish, timeline..."
          className="w-full bg-[#f7f5f0] border border-[#786e5a]/15 rounded-xl px-4 py-3 text-sm text-[#1b1713] placeholder-[#9a9386] focus:outline-none focus:border-[#6e7c52] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-black hover:bg-[#6e7c52] text-white flex items-center justify-center gap-2 transition-all duration-300 shadow-md disabled:opacity-50"
      >
        <Send className="w-4 h-4" />
        <span>{loading ? "Sending..." : "Send Sauna Inquiry to Cam"}</span>
      </button>
    </form>
  );
}
