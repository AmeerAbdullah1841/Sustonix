"use client";

import Image from "next/image";
import Link from "next/link";

export default function VilepTechnologyPage() {
  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/about.jpg" alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-white/80 mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/product-center" className="hover:underline">Product Center</Link>
          <span className="mx-2">›</span>
          <Link href="/product-center/product-development" className="hover:underline">Product development</Link>
          <span className="mx-2">›</span>
          <span className="text-white">ViLEP technology</span>
        </div>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
          <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
            <Image
            src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/b248fa3b-ab67-41df-99a7-04b15cf8beff.png_1180xaf.png"
              alt="ViLEP technology"
              fill
              unoptimized
              className="object-contain"
            />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">ViLEP technology</h1>
            <p className="text-gray-700 leading-relaxed">
              ViLEP&apos;s vibrating PTFE membrane technology leverages hydrophilic PTFE materials and
              mechanical reciprocating motion to reduce energy consumption and fouling while
              improving lifespan. The first section mirrors the reference layout with an image and
              description.
            </p>
            <div className="mt-6">
              <Link href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-700 transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>

        {/* Development of membrane */}
        <section className="mt-12 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">Development of membrane</h2>
          </div>
          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="relative w-full max-w-xl mx-auto" style={{ aspectRatio: "16 / 9" }}>
              <Image
              src='https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/af0bb62e-cebc-4e62-b5c2-2870d6b2867c.webp'
                alt="Development of membrane"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
            
          </div>
        </section>

        {/* ViLEP membrane fouling control */}
        <section className="mt-12 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">ViLEP membrane fouling control</h2>
          </div>
          {/* Aerated membrane bioreactor (top) */}
          <div className="p-6">
            <div className="inline-flex items-center rounded bg-gray-900 text-white text-xs font-medium px-3 py-1 mb-4">Aerated membrane bioreactor</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="text-gray-700 leading-relaxed order-2 lg:order-1">
                Traditional aerated membrane bioreactors use continuous or pulsed aeration for
                municipal and industrial applications. Energy is consumed to deliver air through the
                tank, and concentration polarization at the membrane surface can still occur,
                requiring higher operating energy and more frequent cleaning cycles.
              </div>
              <div className="order-1 lg:order-2 w-full max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
                  <Image
                    src='https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/2a02db7e-8442-412a-b405-83d7b9cde3e4.gif'
                    alt='Aerated membrane bioreactor (animation)'
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
                  <Image
                  src='https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/7584d142-2a12-46e9-aee2-5d6a69c45b88.png'
                    alt='Aerated membrane bioreactor (illustration)'
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ViLEP technology (bottom) */}
          <div className="px-6 pb-6 pt-0">
            <div className="inline-flex items-center rounded bg-black text-white text-xs font-medium px-3 py-1 mb-4">ViLEP technology</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="text-gray-700 leading-relaxed order-2 lg:order-1">
                ViLEP replaces blower aeration with mechanical reciprocating motion. Relative motion
                between membrane filaments and mixed liquor gently scrubs the surface and limits
                polarization, effectively controlling fouling while cutting energy consumption and
                improving denitrification performance.
              </div>
              <div className="order-1 lg:order-2 w-full max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
                  <Image
                    src='https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/55d55873-119e-4169-9c14-e2043d59d55d.gif'
                    alt='ViLEP membrane fouling control (animation)'
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
                  <Image
                  src='https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/87d8d3ad-e664-400d-92c4-e881f52b2953.png'
                    alt='ViLEP membrane fouling control (diagram)'
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="mt-12 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">ViLEP technology advantages</h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Denitrification efficiency is greatly improved",
                img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/c4e6314e-03b4-4dd8-b21c-a793db03cd90.gif',
                desc: 'Two-stage process reduces dissolved oxygen carryover, enhancing anoxic denitrification and carbon source utilization.'
              },
              {
                title: "Save space and peripheral equipment",
                img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/435cf448-b2d8-43f3-a3ca-c0856dc303b9.gif',
                desc: 'Mechanical reciprocation eliminates large blowers and reduces return pumps, enabling compact layouts.'
              },
              {
                title: "Wide range of adaptation scenarios",
                img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/c84e5e8f-0942-4ca3-92a4-88387dbf874e.gif',
                desc: 'Stable membrane performance applies to municipal, industrial, and high-load shock conditions.'
              },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="inline-flex items-center rounded bg-black text-white text-xs font-medium px-3 py-1 mb-2">{card.title}</div>
                  <p className="text-sm text-gray-600">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Extra images only under advantages */}
          <div className="px-6 pb-8">
            <div className="inline-flex items-center rounded bg-black text-white text-xs font-medium px-3 py-1 mb-4">Energy consumption reduced by 85%+</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/54a7abff-6bab-4074-9d8c-45497a18dfc2.png',
                 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/0a72d50b-d358-4be4-be77-fd91bf16010e.png',
                  'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/3178e1d9-5996-43a9-b512-77a03f597e7b.png'
                ].map((src, i) => (
                <div key={i} className="relative w-full " style={{ aspectRatio: '16 / 9' }}>
                  <Image src={src} alt={`advantage ${i + 1}`} fill unoptimized className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


