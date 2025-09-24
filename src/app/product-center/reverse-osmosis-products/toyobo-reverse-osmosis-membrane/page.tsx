"use client";
import Image from "next/image";
import Link from "next/link";

export default function ReverseOsmosisPage() {
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
          <span className="opacity-80">Reverse osmosis products</span>
          <span className="mx-2">›</span>
          <span className="text-white">Toyobo reverse osmosis membrane</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-black backdrop-blur-sm rounded-2xl p-6 shadow-xl">
          <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
            <Image src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/afef06a4-e83d-4346-af44-c6384e4cefad.png_1180xaf.png" alt="Reverse Osmosis" fill unoptimized className="object-contain" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Toyobo reverse osmosis membrane</h1>
            <p className="text-gray-300 leading-relaxed">
            Common brackish water, reuse, desalination, water desalination</p>
          </div>
        </div>

        {/* Section 2: Four images */}
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-2 py-1 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">Structure and Components</h2>
          </div>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/06d7ef51-2839-4521-b51d-dc2e6930391b.jpg',
               'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/b4885e44-62b5-4482-895c-a9870d77ce9d.jpg',
            "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/63fe99db-2ee8-4115-bbc7-27707ada104e.webp",
             'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/55f15ec1-d802-4321-9f55-67bfc4ead212.webp'
            ].map((src, i) => (
              <div key={i} className="relative w-full max-w-sm mx-auto" style={{ aspectRatio: '2 / 1' }}>
                <Image src={src} alt={`structure ${i+1}`} fill unoptimized className="object-contain" />
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Two images & three tables */}
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">Product Specifications</h2>
          </div>
          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="relative w-full max-w-md mx-auto" style={{ aspectRatio: '2/ 1' }}>
              <Image src={'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/a3ca6fa3-0d9f-40c8-9ad7-fda9da5f94d0.jpg'} alt={`spec image 1`} fill unoptimized className="object-contain" />
            </div>
          </div>
          <div className="px-6 pb-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Table 1 */}
            <div className="overflow-auto">
              <table className="min-w-full text-sm border border-gray-400">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="px-3 py-2 text-left font-medium border border-gray-400">Membrane material</th>
                    <th className="px-3 py-2 text-left font-medium border border-gray-400">Membrane element outer diameter</th>
                    <th className="px-3 py-2 text-left font-medium border border-gray-400">Membrane element length</th>
                    <th className="px-3 py-2 text-left font-medium border border-gray-400">Membrane area (m²)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { material: 'Cellulose triacetate (CTA)', od: '280 mm', len: '1.4 m', area: '600' },
                  ].map((row, i) => (
                    <tr key={i} className="odd:bg-gray-50">
                      <td className="px-3 py-2 text-gray-800 border border-gray-400">{row.material}</td>
                      <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.od}</td>
                      <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.len}</td>
                      <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.area}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Table 2 */}
            <div className="overflow-auto">
              <table className="min-w-full text-sm border border-gray-400">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="px-3 py-2 text-left font-medium border border-gray-400">pH</th>
                    <th className="px-3 py-2 text-left font-medium border border-gray-400"> Temperature</th>
                    <th className="px-3 py-2 text-left font-medium border border-gray-400"> SDI</th>
                    <th className="px-3 py-2 text-left font-medium border border-gray-400"> Preprocessing</th>

                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { tds: '3-8', flux: '5-40℃' , sd: '≤4' , pre: 'The water quality should be guaranteed to be at the target concentration' },
                  ].map((row, i) => (
                    <tr key={i} className="odd:bg-gray-50">
                      <td className="px-3 py-2 text-gray-800 border border-gray-400">{row.tds}</td>
                      <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.flux}</td>
                      <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.sd}</td>
                      <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.pre}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Table 3 */}
            <div className="overflow-auto">
              <table className="min-w-full text-sm border border-gray-400">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="px-3 py-2 text-left font-medium border border-gray-400">Concentration under various conditions (mg/L) (supply → outlet)</th>
                    <th className="px-3 py-2 text-left font-medium border border-gray-400">Water permeability (L/㎡/hr)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { k: ' 70,000 →100,000', v: '0.7' },
                    { k: '100,000 →150,000', v: '0.3' },
                    { k: '150,000 →200,000', v: '0.2' },
                  ].map((row, i) => (
                    <tr key={i} className="odd:bg-gray-50">
                      <td className="px-3 py-2 text-gray-800 border border-gray-400">{row.k}</td>
                      <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Second image below the tables */}
          <div className="px-6 pb-8">
            <div className="relative w-full max-w-md mx-auto" style={{ aspectRatio: '2/ 1' }}>
              <Image src={'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/2e82c796-b220-4d2a-b7ca-9adbf66b364f.webp'} alt={`spec image 2`} fill unoptimized className="object-contain" />
            </div>
          </div>
        </section>

        {/* Section 4: Additional parameters table */}
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">Product Parameters</h2>
          </div>
          <div className="p-6 overflow-auto">
            <table className="min-w-full text-sm border border-gray-400">
              <thead>
                <tr className="bg-black text-white">
                  <th className="px-3 py-2 text-left font-medium border border-gray-400">Type </th>
                  <th className="px-3 py-2 text-left font-medium border border-gray-400">Model</th>
                  <th className="px-3 py-2 text-left font-medium border border-gray-400">Diameter (Inch)</th>
                  <th className="px-3 py-2 text-left font-medium border border-gray-400">Membrane surface area ft²(㎡) </th>
                  <th className="px-3 py-2 text-left font-medium border border-gray-400">Feed spacer thickness (Mil)</th>
                  <th className="px-3 py-2 text-left font-medium border border-gray-400">Permeate flow GPD(m³/d) </th>
                  <th className="px-3 py-2 text-left font-medium border border-gray-400">Salt rejection rate %</th>

                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { type: 'Standard', model: 'SB81S-1', inch: '8', area: '400 (37.2)', spacer: '28', flow: '10500 (39.7)', rej: '99.6' },
                  { type: 'High-throughput', model: 'SB81S-4', inch: '8', area: '400 (37.2)', spacer: '28', flow: '25000 (94.7)', rej: '99.5' },
                  { type: 'High-throughput', model: 'SB41SHF', inch: '4', area: '100 (9.3)', spacer: '28', flow: '3120 (11.8)', rej: '99.5' },
                  { type: 'High Throughput & Ultra-Low Pressure', model: 'SB8011HF', inch: '8', area: '1000 (93)', spacer: '28', flow: '13200 (49.3)', rej: '99.5' },
                  { type: 'High Throughput & Ultra-Low Pressure', model: 'SB401HF', inch: '4', area: '100 (9.3)', spacer: '28', flow: '3120 (11.8)', rej: '99.5' },
                  { type: 'Anti-pollution type', model: 'SL615', inch: '6', area: '365 (33.9)', spacer: '34', flow: '2300 (8.7)', rej: '99.7' },
                  { type: 'Anti-pollution type', model: 'SL815', inch: '8', area: '780 (72.3)', spacer: '34', flow: '3800 (14.4)', rej: '99.7' },
                  { type: 'High throughput & anti-fouling', model: 'SL41SHF-2', inch: '4', area: '850 (79)', spacer: '34', flow: '2500 (9.7)', rej: '99.6' },
                ].map((row, i) => (
                  <tr key={i} className="odd:bg-gray-50">
                    <td className="px-3 py-2 text-gray-800 border border-gray-400">{row.type}</td>
                    <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.model}</td>
                    <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.inch}</td>
                    <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.area}</td>
                    <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.spacer}</td>
                    <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.flow}</td>
                    <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.rej}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}


