"use client";
import Image from "next/image";
import Link from "next/link";

export default function Vilep1500Page() {
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
          <span className="text-white">ViLEP-1500</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-black rounded-2xl p-6 shadow-xl">
          <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
            <Image src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/4b967a18-d7ae-466f-bb69-63c36e011ec3.png_560xaf.png" alt="ViLEP-1500" fill unoptimized className="object-contain" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-4">ViLEP-1500</h1>
            <div className="inline-flex items-center rounded bg-white text-black text-xs font-medium px-4 py-2">Applicable Scenarios</div>
            <ul className="mt-2 list-disc pl-5 text-sm text-white space-y-2">
              <li>Ultrafiltration membrane with high fouling resistance</li>
              <li>Integrated module and membrane for compact footprint</li>
            </ul>
            <div className="mt-4 inline-flex items-center rounded bg-white text-black text-xs font-medium px-4 py-2">Design flux</div>
            <ul className="mt-2 list-disc pl-5 text-sm text-white space-y-2">
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
              { img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/2570f218-f32e-4dd4-b739-08ba40ce9bfc.webp', title: 'ViLEP-1500 reciprocating membrane product', desc: 'The ViLEP-1500 reciprocating membrane product is a submerged ultrafiltration (SMF) membrane that utilizes mechanical reciprocating motion. It is primarily used for surface water, secondary sedimentation tank effluent, and reverse osmosis pretreatment. Its design flux ranges from 30 to 50 LMH and can handle high turbidity water up to 300 ppm. The membrane system integrates a suspension structure, drive sliding module, and membrane module into a highly integrated product, significantly reducing the number of components, simplifying on-site installation, accelerating project delivery, and lowering overall investment costs.' },
              { img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/26187f2c-a0d3-47b4-b5bd-aa1856559645.png', title: 'ViLEP-1500 aeration membrane products', desc: 'The ViLEP-1500 aerated membrane product is a submerged ultrafiltration (SMF) membrane that operates using an aerated scrubbing motion. It is primarily used for surface water, secondary sedimentation tank effluent, and reverse osmosis pretreatment. Its design flux ranges from 30 to 50 LMH and can handle high turbidity water levels up to 300 ppm. The membrane system integrates the membrane module and aeration module into a highly integrated product, achieving standardized installation procedures and processes, shortening lead times and reducing labor costs.' }
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
              { img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/5e28c541-d376-4e64-aba4-ae4605cf2339.webp', title: 'ViLEP-1500 Series R/H', desc: 'ViLEP-1500-57 => L*W*H1*H2=2220mm*1740mm*3620mm*4720mm' },
              { img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/fb44686b-af75-449b-9f7a-88942cb9181b.webp', title: 'ViLEP-1500 Series A/F', desc: 'ViLEP-1500-57 => L*W*H1=2220mm*1740mm*3855mm' }
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


