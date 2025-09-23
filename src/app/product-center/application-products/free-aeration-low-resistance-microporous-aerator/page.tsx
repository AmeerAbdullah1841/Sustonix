"use client";
import Image from "next/image";
import Link from "next/link";

export default function MicroporousAeratorPage() {
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
          <Link href="/product-center/application-products" className="hover:underline">Application products</Link>
          <span className="mx-2">›</span>
        <span className="text-white">Free Aeration low resistance microporous aerator</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
          <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
            <Image src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/422a1add-d9d9-45d6-bf2f-baa42fae5a8e.png_1180xaf.png" alt="Microporous Aerator" fill unoptimized className="object-contain" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">Free Aeration low resistance microporous aerator</h1>
            <p className="text-gray-700 leading-relaxed">
            Various sewage aeration application scenarios</p>
          </div>
        </div>

        {/* Product features */}
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">Product</h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Excellent materials', desc: 'Special fiber uniquely developed in Japan; one‑way stretchable fiber suitable for aeration systems.' },
              { title: 'Low pressure loss and energy saving', desc: 'Compared with general aeration tubes, effectively reduces energy consumption of running the fan.' },
              { title: 'High oxygen transfer efficiency', desc: 'Large number of microbubbles open simultaneously to achieve high dissolved oxygen transfer.' },
              { title: 'Prevent aeration channels from hardening', desc: 'Fiber channels close after aeration stops, preventing sludge from invading the channels.' },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-4">
                <div className="inline-flex items-center rounded bg-black text-white text-xs font-medium px-4 py-2 mb-2">{f.title}</div>
                <p className="text-sm text-gray-700 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Product gallery */}
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">Product</h2>
          </div>
          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <p className=" text-black">The support pipe is made of polyvinyl chloride (PVC), using a special stretchable fiber fabric (microporous aeration material) as the base material to create a densely pore-filled aeration fabric. This aeration device transports air flowing in from the joint to the space between the support and the aeration pipe fabric, where tiny bubbles are generated within the fabric pores. The use of a special fiber with circumferential stretchability provides aeration with low pressure loss and a high dissolved oxygen transfer rate during operation. When foaming stops, the fabric pores narrow, making it difficult for sludge to flow into the fabric, thus preventing clogging and suppressing the increase in pressure loss over a long period of time.</p>
            {[
              'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/6ddda248-7b01-4fbb-ae9c-56d67c40882c.gif',
              'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/3fd45c44-bc2b-45f2-87c2-063ea81165e9.gif'
            ].map((src, i) => (
              <div key={i} className="relative w-full max-w-xl mx-auto" style={{ aspectRatio: '3 / 1' }}>
                <Image src={src} alt={`aerator product ${i+1}`} fill unoptimized className="object-contain" />
              </div>
            ))}
          </div>
        </section>


        {/* Product parameters table */}
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">Product Parameters</h2>
          </div>
          <div className="p-6 overflow-auto">
            <table className="min-w-full text-sm border border-gray-400">
              <thead>
                <tr className="bg-black text-white">
                  <th className="px-3 py-2 text-left font-medium border border-gray-400">model</th>
                  <th className="px-3 py-2 text-left font-medium border border-gray-400">FA‑500L</th>
                  <th className="px-3 py-2 text-left font-medium border border-gray-400">FA‑750L</th>
                  <th className="px-3 py-2 text-left font-medium border border-gray-400">FA‑1000L</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { k: 'Outer diameter (mm) × effective aeration length (mm)', v1: 'Φ63×500', v2: 'Φ63×750', v3: 'Φ63×1000' },
                  { k: 'Standard ventilation volume (m³/h)', v1: '≈2', v2: '≈3', v3: '≈4' },
                  { k: 'Oxygen transfer efficiency (%), 6m water depth', v1: '35–43', v2: '35–43', v3: '35–43' },
                  { k: 'Bubble diameter (mm)', v1: '0.3–1.0', v2: '0.3–1.0', v3: '0.3–1.0' },
                  { k: 'Resistance loss (kPa)', v1: '≤2', v2: '≤2', v3: '≤2' },
                  { k: 'Oxygenation capacity (kgO₂/h)', v1: '1.2', v2: '1.2', v3: '1.2' },
                  { k: 'Interface specifications', v1: 'DN25 (Rc1")', v2: 'DN25 (Rc1")', v3: 'DN25 (Rc1")' },
                ].map((row, i) => (
                  <tr key={i} className="odd:bg-gray-50">
                    <td className="px-3 py-2 text-gray-800 border border-gray-400">{row.k}</td>
                    <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.v1}</td>
                    <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.v2}</td>
                    <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.v3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Post-table gallery with captions */}
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">Performance</h2>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              { title: 'The data summary of long-term operation shows that the pressure loss is constant, the fabric aerator has strong antioxidant ability, and there is no performance change such as aging that increases pressure loss.', img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/0f179a14-21fd-4c7d-b92f-aab94df4706d.webp' },
              { title: 'Low pressure loss, effective energy conservation and emission reduction. During operation, as the air volume continues to increase, the fabric aeration product always reduces the pressure loss by half compared to conventional rubber aeration products.', img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/b7603ae6-6b82-4b3a-844e-c9a0231aa505.webp' },
              { title: 'Under different water depth conditions, the dissolved oxygen conversion efficiency of fabric aerators is higher than that of traditional aerators. It achieves high dissolved oxygen transfer efficiency and effectively saves energy and reduces consumption.', img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/546649b6-4b13-4270-ba51-88e255d968d2.png' },
              { title: '', img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/7865173a-4750-4e77-9d96-e36324bf7975.png' },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-3">
                <div className="text-xs font-medium text-gray-900 mb-2">{card.title}</div>
                <div className="relative w-full" style={{ aspectRatio: '3 / 1' }}>
                  <Image src={card.img} alt={card.title} fill unoptimized className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}


