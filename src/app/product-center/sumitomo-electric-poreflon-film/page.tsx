"use client";

import Image from "next/image";
import Link from "next/link";

export default function SumitomoElectricPoreflonFilmPage() {
  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/about.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
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
          <span className="text-white">Sumitomo Electric POREFLON film</span>
        </div>

        {/* Hero Section (matches the attached reference layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
          <div className="bg-black rounded-lg overflow-hidden shadow">
            <div className="relative w-full" style={{aspectRatio: '4 / 3'}}>
              <Image
              src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/2c6d4aed-ed65-4404-8cea-3ef06ac77a4c.png_1180xaf.png"
                alt="Sumitomo Electric POREFLON film"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              Sumitomo Electric POREFLON film
            </h1>
            <p className="text-gray-700 leading-relaxed">
              As early as 1962, Sumitomo Electric Industries, Ltd. obtained the patent for the extension of PTFE polytetrafluoroethylene product technology. As a strategic partner of Sumitomo Electric Industries, Ltd.&apos;s environmental business, Suko Environmental Protection has innovatively applied Sumitomo Electric&apos;s POREFLON membrane to the Chinese water treatment market. At the same time, in combination with the needs of different application scenarios, Suko cooperates with domestic and foreign universities and research institutions to develop technical solutions for application scenarios in sub-sectors such as leachate, municipal engineering, steel, coal chemical industry, electronic electroplating, oil fields, water supply, and seawater desalination.
            </p>
            <div className="mt-6">
              <Link href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-700 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Material Section */}
        <section className="mt-12 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">Material</h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'High water flux and stable water quality', img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/5f70ae32-e7be-4e62-8c53-7dc88b17ced9.gif_366xaf.gif', desc: 'High porosity PTFE material with three-dimensional mesh structure.' },
              { title: 'High stain resistance', img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/6ebaced0-c7a1-4b81-b13b-30b40be3b388.gif_366xaf.gif', desc: 'Excellent hydrophilicity and unique 3D structure reduce fouling.' },
              { title: 'High durability', img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/7df397e7-9c37-461b-8b25-3faf382e0a91.gif_366xaf.gif', desc: 'Long service life verified by strength and vibration tests.' },
              { title: 'High chemical resistance', img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/5cf61813-f00f-455d-a910-4edfae5cd4de.gif_366xaf.gif', desc: 'Alkali and salt resistance enable broad application scenarios.' }
            ].map((card, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="relative w-full" style={{aspectRatio: '16 / 9'}}>
                  <Image src={card.img} alt={card.title} fill unoptimized className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="inline-flex items-center rounded bg-black text-white text-xs font-medium px-3 py-1 mb-2">{card.title}</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Product Section */}
        <section className="mt-12 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">Product</h2>
          </div>
          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full max-w-sm mx-auto" style={{aspectRatio: '16 / 9'}}>
              <Image
              src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/531358f2-f593-4ed0-b7cf-ce8973343b8b.webp_640xaf.webp"
                alt="POREFLON column membrane module"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
            <div className="overflow-auto">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                Sumitomo Electric POREFLON column membrane module
              </h3>
              <table className="min-w-full text-sm border border-gray-400">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="px-3 py-2 text-left font-medium border border-gray-400">Model</th>
                    <th className="px-3 py-2 text-left font-medium border border-gray-400">Material</th>
                    <th className="px-3 py-2 text-left font-medium border border-gray-400">Dimensions (mm)</th>
                    <th className="px-3 py-2 text-left font-medium border border-gray-400">Effective membrane area (m²)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { model: 'SPMW-1282L', material: 'PTFE hydrophilic polytetrafluoroethylene material', dim: '164*154*2410', area: '25' },
                    { model: 'SPMW-1283B', material: 'PTFE hydrophilic polytetrafluoroethylene material', dim: '840*50.8*2200', area: '38' },
                    { model: 'SPMW-1383B', material: 'PTFE hydrophilic polytetrafluoroethylene material', dim: '840*50.8*2200', area: '38' },
                
                  ].map((row, i) => (
                    <tr key={i} className="odd:bg-gray-50">
                      <td className="px-3 py-2 text-gray-800 border border-gray-400">{row.model}</td>
                      <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.material}</td>
                      <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.dim}</td>
                      <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.area}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="mt-12 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">Product</h2>
          </div>
          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="overflow-auto order-2 lg:order-1">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                Sumitomo Electric POREFLON external pressure membrane module
              </h3>
              <table className="min-w-full text-sm border border-gray-400">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="px-3 py-2 text-left font-medium border border-gray-400">Product Model</th>
                    <th className="px-3 py-2 text-left font-medium border border-gray-400">Material</th>
                    <th className="px-3 py-2 text-left font-medium border border-gray-400">Dimensions (mm)</th>
                    <th className="px-3 py-2 text-left font-medium border border-gray-400">Effective membrane area (m²)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { model: 'QPMW-2289-H', material: 'PTFE hydrophilic polytetrafluoroethylene material', dim: 'Φ244.5*1970', area: '59' },
                    { model: 'QPMW-2280-H', material: 'PTFE hydrophilic polytetrafluoroethylene material', dim: 'Φ244.5*2370', area: '80' }
                  ].map((row, i) => (
                    <tr key={i} className="odd:bg-gray-50">
                      <td className="px-3 py-2 text-gray-800 border border-gray-400">{row.model}</td>
                      <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.material}</td>
                      <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.dim}</td>
                      <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.area}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="relative w-full max-w-sm mx-auto order-1 lg:order-2" style={{aspectRatio: '16 / 9'}}>
              <Image
              src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/c2583c7e-285b-4597-a750-13b1538111fd.webp_640xaf.webp"
                alt="External pressure membrane module"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
          </div>
        </section>
        
      {/* Footer is globally rendered via layout.tsx */}
      </div>
    </div>
  );
}


