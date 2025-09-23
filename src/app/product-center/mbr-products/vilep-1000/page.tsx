"use client";
import Image from "next/image";
import Link from "next/link";

export default function Vilep1000Page() {
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
          <span className="text-white">ViLEP-1000</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-2xl p-6 shadow-xl">
          <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
            <Image src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/d7b7767c-100b-498c-a1c7-782e378d2730.png_560xaf.png" alt="ViLEP-1000" fill unoptimized className="object-contain" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">ViLEP-1000</h1>
            <div className="inline-flex items-center rounded bg-black text-white text-xs font-medium px-4 py-1.5">Applicable Scenarios</div>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-2">
              <li>Landfill leachate treatment and difficult industrial wastewater</li>
              <li>Standardized module; easy maintenance</li>
              <li>Stable operation with low energy consumption</li>
            </ul>
            <div className="mt-4 inline-flex items-center rounded bg-black text-white text-xs font-medium px-4 py-1.5">Design flux</div>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-2">
              <li>Operating flux 5–15 LMH</li>
              <li>Sludge concentration 15–30 g/L</li>
            </ul>
          </div>
        </div>

        <section className="mt-6 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-4 py-2 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">Product Introduction</h2>
          </div>
          <div className="p-4 space-y-6">
            {[
              { img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/d5109449-57e1-45c7-ac59-3d8c67d085d9.webp', title: 'ViLEP-1000 reciprocating membrane product', desc: 'The ViLEP-1000 reciprocating membrane is a fouling-resistant membrane that utilizes mechanical reciprocating motion. It is primarily used in MBRs and MCRs for municipal and industrial wastewater treatment. It is suitable for design fluxes of 15-30 LMH and sludge concentrations of 10-15 g/L. The membrane system integrates a suspension structure, drive sliding module, and membrane module into a highly integrated product, significantly reducing the number of components, simplifying on-site installation, accelerating project delivery, and lowering overall investment costs.' },
              { img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/fdbba52c-943c-4e42-b0c5-7d2b43320081.png', title: 'ViLEP-1000 aeration membrane products', desc: 'The ViLEP-1000 aerated membrane is a fouling-resistant membrane that operates using an aerated scrubbing motion. It is primarily used in MBRs and MCRs for municipal and industrial wastewater treatment. It is suitable for design fluxes of 15-30 LMH and sludge concentrations of 10-15 g/L. The membrane system integrates the membrane module and aeration module into a highly integrated product, achieving standardized installation procedures and processes, shortening lead times and reducing labor costs.' }
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

        <section className="mt-6 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-4 py-2 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">Membrane Module</h2>
          </div>
          <div className="p-4 space-y-6">
            {[
              { img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/a32d6bdf-308e-427c-b3cf-7fe5473e900c.webp', title: 'ViLEP-1000 Series R/H', desc: 'ViLEP-1000-25 => L*W*H1*H2=2220mm*1740mm*1900mm*3000mm' },
              { img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/235af540-654c-4f12-b87b-df2f29b8c610.webp', title: 'ViLEP-1000 Series A/F', desc: 'ViLEP-1000-25 => L*W*H1*H2=2220mm*1740mm*2600mm*3700mm'}
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
      </div>
    </div>
  );
}


