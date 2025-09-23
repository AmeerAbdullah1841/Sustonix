"use client";
import Image from "next/image";
import Link from "next/link";

export default function Vilep2000Page() {
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
          <Link href="/product-center/ultrafiltration-products" className="hover:underline">Ultrafiltration products</Link>
          <span className="mx-2">›</span>
          <span className="text-white">ViLEP-2000</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-2xl p-6 shadow-xl">
          <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
            <Image src='https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/98240e63-c705-4174-a437-c26fec47cb25.png_1180xaf.png' alt="ViLEP-2000" fill unoptimized className="object-contain" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">ViLEP-2000</h1>
            <div className="inline-flex items-center rounded bg-black text-white text-xs font-medium px-4 py-2">Applicable Scenarios</div>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-2">
              <li>Ultrafiltration membrane with high fouling resistance</li>
              <li>Integrated module and membrane for compact footprint</li>
            </ul>
            <div className="mt-4 inline-flex items-center rounded bg-black text-white text-xs font-medium px-4 py-2">Design flux</div>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-2">
              <li>Operating flux 5–15 LMH</li>
              <li>Sludge concentration 15–30 g/L</li>
            </ul>
          </div>
        </div>

        {/* Product Introduction */}
        <section className="mt-6 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-4 py-2 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">Product Introduction</h2>
          </div>
          <div className="p-4 space-y-6">
            {[
              { img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/462f4286-0779-479b-98e5-efb7ac910db0.webp', title: 'ViLEP-2000 reciprocating membrane product', desc: 'Submerged ultrafiltration membrane using mechanical reciprocating motion; suitable for surface water, secondary sedimentation tank effluent, and RO pretreatment. Design flux 30–50 LMH; handles high turbidity up to 300 ppm. Highly integrated product reduces components and accelerates delivery.' },

            ].map((block, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                <div className="relative w-full max-w-sm mx-auto" style={{ aspectRatio: "4 / 3" }}>
                  <Image src={block.img} alt={block.title} fill unoptimized className="object-contain" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">{block.title}</h2>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">{block.desc}</p>
                </div>
              </div>
            ))}

            {/* Product parameters table */}
            <div className="overflow-auto">
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
                    { model: 'OPMW-2289-H', material: 'PTFE hydrophilic polytetrafluoroethylene material', dim: 'Φ244.5*1970', area: '59' },
                    { model: 'OPMW-2280-H', material: 'PTFE hydrophilic polytetrafluoroethylene material', dim: 'Φ244.5*2370', area: '80' },
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

      </div>
      
    </div>
  );
}


