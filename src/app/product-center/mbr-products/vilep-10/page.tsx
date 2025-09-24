"use client";

import Image from "next/image";
import Link from "next/link";

export default function Vilep10Page() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0">
        <Image src="/about.jpg" alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-sm text-white/80 mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/product-center" className="hover:underline">Product Center</Link>
          <span className="mx-2">›</span>
          <span className="opacity-80">MBR products</span>
          <span className="mx-2">›</span>
          <span className="text-white">ViLEP-100</span>
        </div>
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-black rounded-2xl p-6 shadow-xl">
          <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
            <Image src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/a3f990b3-3413-4e40-9c00-37f9fac72470.png_1180xaf.png" alt="ViLEP-10" fill unoptimized className="object-contain" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-4">ViLEP-100</h1>
            {/* Applicable Scenarios */}
            <div className="inline-flex items-center rounded bg-white text-black text-sm md:text-base font-medium px-4 py-1.5">Applicable Scenarios</div>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-200 space-y-2">
              <li>Landfill leachate MBR; high‑concentration and difficult‑to‑treat wastewater</li>
              <li>Separation and recovery of emulsified oils, cutting fluids, titanium dioxide</li>
              <li>Stable production and compliance; oil resistance and pollution resistance</li>
              <li>Easy cleaning and maintenance; versatile application scenarios</li>
            </ul>
            {/* Design flux */}
            <div className="mt-4 inline-flex items-center rounded bg-white text-black text-sm md:text-base font-medium px-4 py-1.5">Design flux</div>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-200 space-y-2">
              <li>Operating flux 5–15 LMH</li>
              <li>Sludge concentration 15–30 g/L</li>
            </ul>
            <div className="mt-4">
              <Link href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm hover:bg-gray-700">Contact Us</Link>
            </div>
          </div>
        </div>

        {/* Product specs blocks */}
        <section className="mt-6 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-4 py-2 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">Product Introduction</h2>
          </div>
          <div className="p-4 space-y-6">
            {[
              { img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/c64d6969-2875-40ca-b646-a939aa727109.webp_640xaf.webp', title: 'ViLEP-100 reciprocating membrane product', desc: 'Standard sizes optional; L*W*H can be flexibly adapted per project.' },
              { img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/06e84f67-14fe-4be9-b201-74422c738722.png', title: 'ViLEP-100 aeration membrane products', desc: 'Integrated suspension structure and slide module; standardized installation.' }
            ].map((block, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                <div className="relative w-full max-w-sm mx-auto" style={{ aspectRatio: "4 / 3" }}>
                  <Image src={block.img} alt={block.title} fill unoptimized className="object-contain" />
                </div>
                <div>
                  <h2 className="vilep-10-title text-xl md:text-2xl font-semibold text-gray-900 mb-2">{block.title}</h2>
                  <p className="vilep-10-desc text-xs md:text-sm text-gray-700 leading-relaxed">{block.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Membrane section */}
        <section className="mt-6 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-4 py-2 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">Membrane Module</h2>
          </div>
          <div className="p-4 space-y-6">
            {[
              { img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/8ef7dcdf-2787-41ad-8e20-c6b3c166209c.webp', title: 'ViLEP-100 Series R/H', desc: 'Ultrafiltration membrane with exceptional fouling resistance; highly integrated module shortens on‑site installation and reduces labor cost.' },
              { img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/3c1fb05c-d1ca-4a7d-b598-9ab91f3400bc.webp', title: 'ViLEP-100 Series A/F', desc: 'Stable operation, long life, and low energy consumption for diverse scenarios.' }
            ].map((p, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                <div className="relative w-full max-w-sm mx-auto" style={{ aspectRatio: '16 / 9' }}>
                  <Image src={p.img} alt={p.title} fill unoptimized className="object-contain" />
                </div>
                <div>
                  <h2 className="vilep-10-title text-xl md:text-2xl font-semibold text-gray-900 mb-2">{p.title}</h2>
                  <p className="vilep-10-desc text-xs md:text-sm text-gray-700 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}


