"use client";

import { useState } from "react";

const PHONE = "(559) 824-7953";
const PHONE_HREF = "tel:5598247953";
const MAPS_URL = "https://maps.google.com/maps?q=461+N+Seventh+St,+Fresno,+CA+93701";

const services = [
  {
    title: "Full Yard Transformations",
    desc: "From bare dirt to a beautiful finished landscape. Jose handles every phase: soil prep, design, installation, and cleanup.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 20h18M7 20V12M7 12c0-4 2-6 5-6s5 2 5 6M12 12V4" />
      </svg>
    ),
  },
  {
    title: "Tree & Plant Installation",
    desc: "Right plant, right place. Jose selects trees and plants suited to your yard and installs them for long-term health.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M8 7c0 0-4 1.5-4 5.5s4 4.5 4 4.5M16 7c0 0 4 1.5 4 5.5s-4 4.5-4 4.5M9.5 5.5c0 0-1.5 1-1.5 2.5s1.5 2.5 1.5 2.5M14.5 5.5c0 0 1.5 1 1.5 2.5s-1.5 2.5-1.5 2.5" />
      </svg>
    ),
  },
  {
    title: "Drip Irrigation Systems",
    desc: "Custom drip systems that water your plants efficiently. Installed to the right specs for each plant type.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C7 8 4 12 4 15.5a8 8 0 0016 0C20 12 17 8 12 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17c0 1.66 1.34 3 3 3" />
      </svg>
    ),
  },
  {
    title: "Landscape Lighting",
    desc: "Add beauty and security with thoughtfully placed landscape lights. Jose designs systems that enhance your yard after dark.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a7 7 0 017 7c0 3.5-2.5 6-4 7H9c-1.5-1-4-3.5-4-7a7 7 0 017-7z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 21h6M9.5 18h5" />
      </svg>
    ),
  },
  {
    title: "Backyard Design",
    desc: "A beautiful yard starts with a plan. Jose works with you to design a space that fits your lifestyle and your lot.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true" className="w-7 h-7">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9h18M9 3v18" />
      </svg>
    ),
  },
  {
    title: "Soil Preparation",
    desc: "Good landscaping starts underground. Jose prepares soil correctly so every plant has the best chance to thrive.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 18h16M8 18V9l4-5 4 5v9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 18v-4h4v4" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote:
      "Jose transformed my yard from scratch — planted trees, plants, installed a full drip system, and added beautiful landscape lighting. Incredible job. He comes highly recommended from me.",
    name: "Fresno Homeowner",
    context: "Full yard transformation",
    stars: 5,
  },
  {
    quote:
      "Jose did wonderful work on my backyard. I run a local business and I needed someone I could trust to do the job right. He delivered exactly that — professional, high quality, no hassle.",
    name: "Local Business Owner",
    context: "Commercial backyard",
    stars: 5,
  },
];

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-4 h-4">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true" className="w-3.5 h-3.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-[100dvh] flex flex-col" style={{ background: "oklch(0.97 0.015 80)" }}>
      {/* Nav */}
      <header className="sticky top-0 z-50" style={{ background: "oklch(0.28 0.07 130)", borderBottom: "1px solid oklch(0.35 0.07 130)" }}>
        <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Ikiers Landscaping home">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded" style={{ background: "oklch(0.55 0.12 42)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="oklch(0.97 0.015 80)" strokeWidth={2} aria-hidden="true" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v16M8 9c0-2 2-4 4-4s4 2 4 4M6 15c0 0-2 1.5-2 4h16c0-2.5-2-4-2-4" />
              </svg>
            </span>
            <span className="text-base font-semibold tracking-tight" style={{ color: "oklch(0.97 0.015 80)", fontFamily: "var(--font-vollkorn, serif)" }}>
              Ikiers Landscaping
            </span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {["Services", "About", "Reviews", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium transition-opacity hover:opacity-80" style={{ color: "oklch(0.82 0.04 130)" }}>
                {item}
              </a>
            ))}
            <a
              href={PHONE_HREF}
              className="flex items-center gap-1.5 px-4 py-2 rounded text-sm font-semibold transition-transform active:scale-[0.97]"
              style={{ background: "oklch(0.55 0.12 42)", color: "oklch(0.97 0.015 80)" }}
            >
              <PhoneIcon className="w-4 h-4" />
              {PHONE}
            </a>
          </div>

          <button className="md:hidden p-2" style={{ color: "oklch(0.97 0.015 80)" }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu" aria-expanded={mobileMenuOpen}>
            {mobileMenuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden px-5 pb-5 flex flex-col gap-4" style={{ borderTop: "1px solid oklch(0.35 0.07 130)" }}>
            {["Services", "About", "Reviews", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium pt-3" style={{ color: "oklch(0.82 0.04 130)" }} onClick={() => setMobileMenuOpen(false)}>{item}</a>
            ))}
            <a href={PHONE_HREF} className="flex items-center justify-center gap-1.5 px-4 py-3 rounded text-sm font-semibold mt-1 transition-transform active:scale-[0.97]" style={{ background: "oklch(0.55 0.12 42)", color: "oklch(0.97 0.015 80)" }}>
              <PhoneIcon className="w-4 h-4" />
              Call {PHONE}
            </a>
          </div>
        )}
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8" style={{ background: "oklch(0.97 0.015 80)" }}>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Left — 3 columns */}
            <div className="lg:col-span-3 space-y-6">
              <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-widest"
                style={{ background: "oklch(0.90 0.04 130)", color: "oklch(0.28 0.07 130)" }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "oklch(0.28 0.07 130)" }} />
                Fresno, CA
              </div>

              <h1
                className="reveal reveal-1 text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight"
                style={{ fontFamily: "var(--font-vollkorn, serif)", color: "oklch(0.22 0.05 95)" }}
              >
                Your Yard,
                <br />
                <em style={{ color: "oklch(0.55 0.12 42)" }}>Transformed.</em>
              </h1>

              <p className="reveal reveal-2 text-base sm:text-lg leading-relaxed max-w-lg" style={{ color: "oklch(0.42 0.03 90)" }}>
                Ikiers Landscaping is Jose&rsquo;s one-person operation in Fresno. Trees, plants, drip irrigation, landscape lighting — he handles the full scope from design to the last planted bloom.
              </p>

              <div className="reveal reveal-3 flex flex-col sm:flex-row gap-3">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded font-semibold text-sm transition-transform active:scale-[0.97]"
                  style={{ background: "oklch(0.28 0.07 130)", color: "oklch(0.97 0.015 80)" }}
                >
                  <PhoneIcon className="w-4 h-4" />
                  Free Estimate — {PHONE}
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded font-semibold text-sm transition-opacity hover:opacity-75"
                  style={{ border: "1px solid oklch(0.78 0.03 90)", color: "oklch(0.38 0.05 95)" }}
                >
                  View Services
                </a>
              </div>

              {/* Trust strip */}
              <div className="reveal reveal-4 grid grid-cols-2 sm:grid-cols-4 gap-5 pt-6 border-t" style={{ borderColor: "oklch(0.88 0.025 80)" }}>
                {[
                  { val: "5.0★", label: "Google Rating" },
                  { val: "Full Scope", label: "All Services" },
                  { val: "Personal", label: "Jose Handles It" },
                  { val: "Fresno", label: "Based & Trusted" },
                ].map(({ val, label }) => (
                  <div key={label}>
                    <div className="text-xl font-semibold" style={{ fontFamily: "var(--font-vollkorn, serif)", color: "oklch(0.55 0.12 42)" }}>
                      {val}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: "oklch(0.52 0.03 90)" }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — 2 columns, decorative design element */}
            <div className="lg:col-span-2 relative">
              {/* Large olive block with quote */}
              <div className="rounded p-8" style={{ background: "oklch(0.28 0.07 130)" }}>
                <div className="text-5xl mb-4" style={{ color: "oklch(0.55 0.12 42)", fontFamily: "var(--font-vollkorn, serif)", lineHeight: 1 }}>
                  &ldquo;
                </div>
                <p className="text-base leading-relaxed italic mb-6" style={{ color: "oklch(0.85 0.03 130)", fontFamily: "var(--font-vollkorn, serif)" }}>
                  Jose transformed my yard from scratch — trees, plants, drip system, and lighting. Incredible job.
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5" style={{ color: "oklch(0.55 0.12 42)" }}>
                    {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
                  </div>
                  <span className="text-xs font-medium" style={{ color: "oklch(0.72 0.04 130)" }}>Fresno Homeowner</span>
                </div>
              </div>

              {/* Stats below */}
              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="p-4 rounded text-center" style={{ background: "oklch(0.55 0.12 42)" }}>
                  <div className="text-2xl font-semibold" style={{ fontFamily: "var(--font-vollkorn, serif)", color: "oklch(0.97 0.015 80)" }}>
                    5.0★
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "oklch(0.88 0.04 42)" }}>
                    Google Rating
                  </div>
                </div>
                <div className="p-4 rounded text-center" style={{ background: "oklch(0.90 0.04 130)", border: "1px solid oklch(0.78 0.04 130)" }}>
                  <div className="text-2xl font-semibold" style={{ fontFamily: "var(--font-vollkorn, serif)", color: "oklch(0.28 0.07 130)" }}>
                    6 Services
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "oklch(0.42 0.05 130)" }}>
                    Full scope
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: "oklch(0.99 0.008 80)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "oklch(0.55 0.12 42)" }}>
                What Jose Does
              </p>
              <h2 className="text-3xl sm:text-4xl leading-tight" style={{ fontFamily: "var(--font-vollkorn, serif)", color: "oklch(0.22 0.05 95)" }}>
                Complete Landscaping,
                <br />
                Start to Finish
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service, i) => (
                <div key={service.title} className={`p-6 rounded reveal reveal-${Math.min(i + 1, 4)}`} style={{ background: "oklch(0.97 0.015 80)", border: "1px solid oklch(0.88 0.025 80)" }}>
                  <div className="mb-4 inline-flex p-2.5 rounded" style={{ background: "oklch(0.90 0.04 130)", color: "oklch(0.28 0.07 130)" }}>
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-base mb-2" style={{ fontFamily: "var(--font-vollkorn, serif)", color: "oklch(0.22 0.05 95)" }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.03 90)" }}>
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 p-8 rounded" style={{ background: "oklch(0.28 0.07 130)" }}>
              <p className="text-lg font-semibold mb-2" style={{ fontFamily: "var(--font-vollkorn, serif)", color: "oklch(0.97 0.015 80)" }}>
                Want to talk through your yard project?
              </p>
              <p className="text-sm mb-5" style={{ color: "oklch(0.75 0.04 130)" }}>
                Jose gives free estimates and answers questions directly. No run-around.
              </p>
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded font-semibold text-sm transition-transform active:scale-[0.97]" style={{ background: "oklch(0.55 0.12 42)", color: "oklch(0.97 0.015 80)" }}>
                <PhoneIcon className="w-4 h-4" />
                Call Jose — {PHONE}
              </a>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="py-20 sm:py-28 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "oklch(0.55 0.12 42)" }}>
                What Clients Say
              </p>
              <h2 className="text-3xl sm:text-4xl leading-tight" style={{ fontFamily: "var(--font-vollkorn, serif)", color: "oklch(0.22 0.05 95)" }}>
                Every Review, 5 Stars.<br />Every Client, Praised Jose by Name.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {testimonials.map((t, i) => (
                <div key={i} className={`p-7 rounded reveal reveal-${i + 1}`} style={{ background: "oklch(0.28 0.07 130)" }}>
                  <div className="flex gap-0.5 mb-1" style={{ color: "oklch(0.55 0.12 42)" }}>
                    {Array.from({ length: t.stars }).map((_, j) => <StarIcon key={j} />)}
                  </div>
                  <div className="text-xs font-medium mb-4" style={{ color: "oklch(0.65 0.05 42)" }}>
                    {t.context}
                  </div>
                  <p className="text-sm leading-relaxed mb-5 italic" style={{ fontFamily: "var(--font-vollkorn, serif)", color: "oklch(0.88 0.03 130)", fontSize: "1rem" }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="font-semibold text-sm" style={{ color: "oklch(0.97 0.015 80)" }}>{t.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Jose */}
        <section id="about" className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: "oklch(0.99 0.008 80)" }}>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "oklch(0.55 0.12 42)" }}>
                About Jose
              </p>
              <h2 className="text-3xl sm:text-4xl leading-tight mb-6" style={{ fontFamily: "var(--font-vollkorn, serif)", color: "oklch(0.22 0.05 95)" }}>
                One Person.<br />Every Part of the Job.
              </h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed" style={{ color: "oklch(0.38 0.03 90)" }}>
                <p>
                  Ikiers Landscaping is Jose — not a crew that shows up and rushes through. When you hire Jose, you get Jose. He plans the project, does the work, and sees it through to the end.
                </p>
                <p>
                  Jose specializes in full yard transformations — not just a mow-and-blow. He installs trees, plants, drip irrigation systems, and landscape lighting. If your yard needs to go from nothing to something beautiful, Jose handles all of it.
                </p>
                <p>
                  Both of his Google reviewers praised him by name. That kind of recognition doesn&rsquo;t happen by accident.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { title: "Personal Service", desc: "Jose does the work himself. Your yard gets his full attention, not a rotating crew." },
                { title: "Complete Projects", desc: "From soil prep to lighting — Jose handles the whole job, not just one part of it." },
                { title: "Named in Every Review", desc: "Customers praised Jose by name in both reviews. That's a direct signal of personal craftsmanship." },
                { title: "Free Estimates", desc: "Call Jose, describe your yard, get a straight answer on what it needs and what it'll cost." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 rounded" style={{ background: "oklch(0.97 0.015 80)", border: "1px solid oklch(0.88 0.025 80)" }}>
                  <span className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "oklch(0.55 0.12 42)", color: "oklch(0.97 0.015 80)" }}>
                    <CheckIcon />
                  </span>
                  <div>
                    <div className="font-semibold text-sm mb-1" style={{ fontFamily: "var(--font-vollkorn, serif)", color: "oklch(0.22 0.05 95)" }}>{item.title}</div>
                    <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.03 90)" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: "oklch(0.28 0.07 130)" }}>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "oklch(0.55 0.12 42)" }}>
                Get in Touch
              </p>
              <h2 className="text-3xl sm:text-4xl leading-tight mb-6" style={{ fontFamily: "var(--font-vollkorn, serif)", color: "oklch(0.97 0.015 80)" }}>
                Let&rsquo;s Talk About<br />Your Yard
              </h2>
              <p className="text-sm sm:text-base leading-relaxed mb-8" style={{ color: "oklch(0.75 0.04 130)" }}>
                Tell Jose what you&rsquo;re thinking — whether it&rsquo;s a full transformation or just one piece of it. He&rsquo;ll give you a free estimate and honest advice.
              </p>

              <div className="space-y-5">
                <a href={PHONE_HREF} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded flex items-center justify-center flex-shrink-0" style={{ background: "oklch(0.55 0.12 42)", color: "oklch(0.97 0.015 80)" }}>
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: "oklch(0.55 0.12 42)" }}>Call or Text</div>
                    <div className="font-semibold" style={{ color: "oklch(0.97 0.015 80)" }}>{PHONE}</div>
                  </div>
                </a>

                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded flex items-center justify-center flex-shrink-0" style={{ background: "oklch(0.38 0.07 130)", color: "oklch(0.85 0.04 130)" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: "oklch(0.55 0.12 42)" }}>Location</div>
                    <div className="font-semibold" style={{ color: "oklch(0.97 0.015 80)" }}>Fresno, CA</div>
                    <div className="text-xs mt-0.5 font-medium underline" style={{ color: "oklch(0.72 0.04 130)" }}>461 N Seventh St, 93701</div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded flex items-center justify-center flex-shrink-0" style={{ background: "oklch(0.38 0.07 130)", color: "oklch(0.85 0.04 130)" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: "oklch(0.55 0.12 42)" }}>Hours</div>
                    <div className="text-sm space-y-0.5" style={{ color: "oklch(0.84 0.03 130)" }}>
                      <div>Mon–Wed, Fri–Sat: 7am – 9pm</div>
                      <div>Thursday: Open 24 Hours</div>
                      <div>Sunday: 9am – 5pm</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded flex flex-col justify-between" style={{ background: "oklch(0.38 0.07 130)" }}>
              <div>
                <h3 className="text-2xl sm:text-3xl leading-tight mb-4" style={{ fontFamily: "var(--font-vollkorn, serif)", color: "oklch(0.97 0.015 80)" }}>
                  Free Estimate.<br />No Obligation.
                </h3>
                <ul className="space-y-3 mb-8">
                  {["Full yard transformations", "Tree & plant installation", "Drip irrigation systems", "Landscape lighting", "Backyard design", "Soil preparation"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "oklch(0.84 0.04 130)" }}>
                      <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "oklch(0.55 0.12 42)", color: "oklch(0.97 0.015 80)" }}>
                        <CheckIcon />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 w-full py-4 rounded font-semibold text-base transition-transform active:scale-[0.97]"
                style={{ background: "oklch(0.55 0.12 42)", color: "oklch(0.97 0.015 80)" }}
              >
                <PhoneIcon className="w-5 h-5" />
                Call {PHONE}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 px-5 sm:px-8" style={{ background: "oklch(0.22 0.06 130)", borderTop: "1px solid oklch(0.30 0.07 130)" }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs" style={{ color: "oklch(0.52 0.04 130)" }}>
            &copy; {new Date().getFullYear()} Ikiers Landscaping — Fresno, CA
          </div>
          <a href={PHONE_HREF} className="text-xs font-medium transition-opacity hover:opacity-75" style={{ color: "oklch(0.62 0.04 130)" }}>
            {PHONE}
          </a>
        </div>
      </footer>
    </div>
  );
}
