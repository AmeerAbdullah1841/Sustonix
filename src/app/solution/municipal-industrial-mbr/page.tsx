"use client";
import Image from "next/image";
import Link from "next/link";

export default function MunicipalIndustrialMBRPage() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0">
        <Image src="/case-3.jpg" alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-sm text-white/80 mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/solution" className="hover:underline">Solution</Link>
          <span className="mx-2">›</span>
          <span className="text-white">Municipal & industrial MBR</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-2xl p-6 shadow-xl">
          <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
            <Image src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/6ee7a5cb-15ab-4c87-a960-fbb641c4a066.png" alt="Municipal & industrial MBR" fill unoptimized className="object-contain" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">Municipal & Industrial Wastewater Low Carbon MBR Technology Package</h1>
          </div>
        </div>
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900"> 
            Municipal & Industrial Wastewater Low Carbon MBR Technology Package</h2>
          </div>
          <div className="p-6 space-y-4">
            {[
              {t:"",
                d:"Currently, MBR technology is widely used in the water treatment industry, but it still has pain points such as short service life, high operating energy consumption, difficult cleaning and maintenance, and unstable denitrification and phosphorus removal. These problems not only trouble customers but also hinder the low-carbon development of the membrane industry. In response, Suke Environmental Protection has developed a low-carbon MBR technology package for municipal and industrial wastewater, creating a product with high operating flux, long service life, low operating energy consumption, long cleaning cycles, low user barriers, good user experience, high denitrification efficiency, and a wide range of adaptability scenarios, allowing customers to truly save money, worry, and effort."}
            ].map((item, i) => (
              <div key={i} className="flex items-stretch border border-gray-200 rounded-lg overflow-hidden">
                <div className="min-w-[160px] bg-black text-white text-sm font-semibold px-4 py-3 flex items-center justify-center text-center whitespace-pre-line">
                  {item.t}
                </div>
                <div className="flex-1 bg-white px-4 py-3 text-sm text-gray-700">
                  {item.d}
                </div>
              </div>
            ))}
          </div>
        </section>

       

        {/* Common processes and pain points */}
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">Common processes and pain points</h2>
          </div>
          <div className="p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
            {[
              {title:"Pain point 1: Short membrance service life",
                desc:"The main factors affecting the service life of MBR membrane products include: severe membrane pollution and flux attenuation, aging of membrane material and loss of hydrophilicity, membrane filament breakage or peeling damage; the use environment, operation and maintenance level, design parameters, etc. will also affect the service life of membrane products; in municipal sewage, the service life of MBR membrane has been greatly improved, but the service life cannot meet the use requirements, which is a key factor determining the development of MBR technology."
              },
              {title:"Pain point 2: High energy consumption",
                desc:"The power consumption of the MBR process mainly includes membrane aeration and purge, biochemical pool aeration, membrane suction water production, sewage lifting pump, stirring and reflux, among which membrane aeration and purge accounts for about 40% of the MBR process. Generally, the power consumption of traditional membrane aeration and purge per ton of water is about 0.15-0.25kWh. If the electricity price is calculated at 0.8 yuan/kWh, the power consumption of membrane aeration and purge reaches 0.12-0.2 yuan/ton, which is undoubtedly the culprit of the high energy consumption of the MBR process."
              },
              {title:"Pain point 3: Difficulty in cleaning and maintenance",
                desc:'Disassembly is difficult ; membrane box lifting is difficult ; fiber hair is difficult to clean ; dispensing and cleaning are complicated'
              },
              {title:"  Pain point 4: affecting denitrification efficiency",
                desc:'In the A2O+MBR process, the membrane tank is over-aerated, and the nitrified liquid flows back to the anoxic tank, causing the dissolved oxygen to become too high. This consumes the carbon source required for denitrification, resulting in a reduced TN removal rate. Furthermore, the multi-stage reflux design complicates the operation mode and equipment, increasing costs.'
              }
            ].map((c)=> (
              <div key={c.title} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-black text-white text-sm font-semibold px-4 py-2">{c.title}</div>
                <div className="px-4 py-3 text-sm text-gray-700">{c.desc}</div>
              </div>
            ))}
          </div>
        </section>
        {/* Adaptive product series */}
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">Adaptive product series</h2>
          </div>
          <div className="p-6 space-y-10">
            {/* Row 1: Aerated membrane bioreactor */}
            <div>
              <div className="inline-flex items-center rounded bg-black text-white text-xs font-medium px-6 py-3">Aerated membrane bioreactor</div>
              <p className="mt-3 text-sm text-gray-700 max-w-3xl">Traditional aerated membrane bioreactor. Use continuous or pulsed aeration. Municipal and industrial scenarios.</p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {[
                  'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/6af3dd8c-9a65-4f7e-8ee4-8acd5d3c6226.gif_560xaf.gif',
                  'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/2f83f086-3898-4cc1-af24-4a329e4e01db.jpg_290xaf.jpg'
                ].map((src, i) => (
                  <div key={i} className="relative w-full max-w-xl mx-auto" style={{aspectRatio:'4/ 1'}}>
                    <Image src={src} alt={`aerated-membrane-${i+1}`} fill unoptimized className="object-contain" />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 1: ViLEP technology */}
            <div>
              <div className="inline-flex items-center rounded bg-black text-white text-xs font-medium px-6 py-3">ViLEP technology</div>
              <p className="mt-3 text-sm text-gray-700 max-w-3xl">Hydrophilic PTFE resin material vs traditional fluorine resin material: lifespan extended; vibration scrubbing anti‑pollution vs traditional aeration scrubbing anti‑pollution.</p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {[
                  'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/42150a51-bfc8-42ac-956b-8b8f99a4e3d5.gif_560xaf.gif',
                     'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/7cbe6a9f-d9cf-4e51-b05a-1baa694f6b58.jpg_290xaf.jpg'
                ].map((src, i) => (
                  <div key={i} className="relative w-full max-w-xl mx-auto" style={{aspectRatio:'4/ 1'}}>
                    <Image src={src} alt={`vilep-tech-${i+1}`} fill unoptimized className="object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Advantages images row */}
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">Sumitomo Electric Poreflon membrane material</h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
            {[
              {img:'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/a869811e-8df6-4e8c-986f-3f34ed346a27.gif_366xaf.gif', title:'2 times longer service life +', desc:'High stability and corrosion resistance.'},
              {img:'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/bc94cc42-ffca-49b5-ab80-e768a1c146a2.gif_366xaf.gif', title:'High durability', desc:'Excellent properties such as stability and durability.'},
              {img:'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/b37bb65f-975b-464e-8d8c-57745b7356af.gif_366xaf.gif', title:'High chemical resistance', desc:'Operate stably in strong acid/alkali environments.'},
              {img:'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/e729b635-7bf3-4c85-b136-6b46df428eda.gif_366xaf.gif', title:'High stain resistance', desc:'Excellent hydrophilicity resists pollutants.'},
            ].map((card,i)=> (
              <div key={i}>
                <div className="relative w-full max-w-md mx-auto" style={{aspectRatio:'16 / 9'}}>
                  <Image src={card.img} alt={card.title} fill unoptimized className="object-contain" />
                </div>
                <div className="mt-2 inline-flex items-center rounded bg-black text-white text-xs font-medium px-4 py-2">{card.title}</div>
                <p className="text-sm text-gray-700 mt-2">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* VILEP membrane fouling control technology images row */}
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">VILEP membrane fouling control technology</h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {[
              {img:'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/09af16c0-9a4a-4036-884f-a59d3f730e6f.gif_560xaf.gif', title:'Denitrification efficiency is greatly improved', desc:'Two‑stage reflux → two‑stage return system.'},
              {img:'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/b643edae-0025-4ac9-8615-cba0f795a21a.gif_560xaf.gif', title:'Save space and peripheral equipment', desc:'Split modular design; fewer pumps.'},
              {img:'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/548a44be-9817-411f-ac04-161d3e02248c.gif_560xaf.gif', title:'Wide range of adaptation scenarios', desc:'Stable performance under variable loads.'},
            ].map((card,i)=> (
              <div key={i}>
                <div className="relative w-full max-w-md mx-auto" style={{aspectRatio:'16 / 9'}}>
                  <Image src={card.img} alt={card.title} fill unoptimized className="object-contain" />
                </div>
                <div className="mt-2 inline-flex items-center rounded bg-black text-white text-xs font-medium px-4 py-2">{card.title}</div>
                <p className="text-sm text-gray-700 mt-2">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>
         {/* Gallery: one large image + two small */}
         <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">
        Energy consumption reduced by 85%+
</h2>
          </div>
          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* Left: big image */}
            <div className="relative w-full lg:row-span-2" style={{aspectRatio:'16 / 9'}}>
              <Image
              src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/09f8a08b-d05e-4f12-bacc-003c5d2d9a65.png_1180xaf.png"
                alt="Big project image"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
            {/* Right: two small stacked images */}
            <div className="grid grid-rows-2 gap-6">
              <div className="relative w-full" style={{aspectRatio:'3/ 1'}}>
                <Image
                src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/1ecff957-3d09-4ce8-bd7f-280a3cdcb64a.png_560xaf.png"
                  alt="Small project image 1"
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
              <div className="relative w-full" style={{aspectRatio:'3 / 1'}}>
                <Image
                src='https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/5f7b620c-198a-44a8-9091-56d328600c80.png_560xaf.png'
                  alt="Small project image 2"
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">Technological advantages</h2>
          </div>
          <div className="p-6 space-y-4">
             {[
               {t:"High throughput",
                d:"Stable operation at a flux of 0.6m/d (average flux); stable water production performance and operating parameters; good load impact resistance, adaptable to seasonal water quality changes and sudden high-concentration pollutant inflow."},
               {t:"Long lifespan", 
                 d:"It uses the world's top Sumitomo Electric Poreflon fluororesin film material; it can withstand 178 million bending tests and has a service life of more than 10 years, which is 2 to 3 times the life of PVDF film material under full load operating conditions."},
                {t:"Low energy \nconsumption", 
                  d:"The wastewater treatment plant uses ViLEP ultrafiltration membrane technology, which reduces power consumption from 0.15kWh/m³ to 0.01kWh/m³ compared to traditional aeration and scrubbing. Meanwhile, power consumption for return flow is reduced from 0.04kWh/m³ to 0.03kWh/m³. For example, a municipal water plant with a capacity of 100,000 tons saves over 4 million yuan in electricity costs annually."},
               {t:"Low threshold", d:"Cleaning cycle is longer. Typical restorative cleaning cycle ~90 days, twice as long as traditional tubular membranes, reducing O&M effort."},
               {t:"Good experience",
                d:"Modular design, easy installation, plug and play, reducing the difficulty of on-site construction; easy replacement, just 'take it out and put it in' to complete the replacement."}           
              ].map((item, i) => (
              <div key={i} className="flex items-stretch border border-gray-200 rounded-lg overflow-hidden">
                <div className="min-w-[160px] bg-black text-white text-sm font-semibold px-4 py-3 flex items-center justify-center text-center whitespace-pre-line">
                  {item.t}
                </div>
                <div className="flex-1 bg-white px-4 py-3 text-sm text-gray-700">
                  {item.d}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}


