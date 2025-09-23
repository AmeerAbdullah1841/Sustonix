"use client";
import Image from "next/image";
import Link from "next/link";

export default function SeawaterDesalinationPage() {
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
          <span className="opacity-80">Solution</span>
          <span className="mx-2">›</span>
          <span className="text-white">Seawater desalination</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-2xl p-2 shadow-xl">
          <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
            <Image src="/water.jpg" alt="Seawater desalination" fill unoptimized className="object-contain" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">Seawater Desalination</h1>
            <p className="text-gray-700 leading-relaxed"></p>
          </div>
        </div>
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900"> 
            Seawater Desalination Technology</h2>
          </div>
          <div className="p-6 space-y-4">
            {[
              {t:"",
                d:'Desalination refers to the process of producing fresh water by desalinating seawater. This open-source, incremental technology for water resource utilization can increase the total amount of freshwater, regardless of time, space, or climate. With high water quality and increasingly reasonable prices, it can ensure a stable supply of drinking water for coastal residents and for industrial boiler replenishment. In the future, desalination technology will place greater emphasis on high efficiency, energy conservation, and environmental protection. Innovation in membrane technology, optimized energy utilization, integrated systems, and intelligent management will be key areas of technological innovation.'}
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
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-blue-600 rounded" />
            <h2 className="text-lg font-semibold text-gray-900">Common processes and pain points</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">        Pain point: Offshore platform desalination technology</h2>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-700">
                    • Pretreatment equipment must effectively remove excess sediment and suspended solids from seawater (especially in coastal areas of my country, where sediment content is high) to prevent fouling of membrane systems (ultrafiltration systems and reverse osmosis systems).                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700">
                    • Due to the special scenario (offshore platform), the system requires: seawater desalination membrane separation technology with small footprint, light weight, stable operation, easy maintenance, and long cleaning cycle. </p>
                  </div>
                </div>
              </div>
              <div className="relative w-full" style={{ aspectRatio: "4 / 2" }}>
                <Image 
                src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/fe6f4f78-e9f8-42c3-b3b7-4037ab693787.webp"
                  alt="Industrial Process Diagram" 
                  fill 
                  unoptimized 
                  className="object-contain" 
                />
              </div>
            </div>
          </div>
        </section>
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="p-2 flex justify-center">
            <div className="relative w-full max-w-4xl" style={{ aspectRatio: "3/ 1" }}>
              <Image
              src='https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/72c9b226-2358-413c-ba8c-d31fecdcfed6.png'
                alt="Process overview"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
            
          </div>
          <p className="ml-10 text-sm text-gray-700">
          The ultrafiltration system uses Poreflon organic membrane, a special membrane with high resistance to fouling and clogging. It has very high resistance to fouling and clogging of turbidity, SS, colloidal suspended solids, etc. Various pollutants are not easy to adhere to the membrane surface. Compared with inorganic membranes, Poreflon organic membrane has better applicability in seawater desalination. High turbidity resistance, small footprint, light weight, stable operation, and long cleaning cycle are all issues of concern for offshore platform seawater desalination.                    </p>
        </section>
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">Technological advantages</h2>
          </div>
          <div className="p-6 space-y-4">
             {[
               {t:"High turbidity \nresistance",
                d:"The ultrafiltration system uses Poreflon organic membrane, a special membrane with high resistance to fouling and clogging, which can effectively handle high turbidity seawater."},
               {t:"Small footprint", 
                 d:"The Poreflon organic membrane ultrafiltration equipment has a smaller footprint compared to inorganic membrane solutions, making it ideal for space-constrained offshore platforms."},
                {t:"Lightweight", 
                  d:"The equipment is 70% lighter than inorganic membrane solutions, which is particularly important for platforms at sea where weight considerations are critical."},
               {t:"Stable and \nlower carbon", 
                 d:"Poreflon membranes consume only 0.17-0.35KW per ton of water compared to inorganic membranes which consume 3KW per ton, significantly reducing energy consumption and carbon footprint."},
               {t:"Easier maintenance", 
                 d:"VILEP ultrafiltration membrane technology features a long cleaning cycle of up to 12 months and automatic cleaning capabilities, reducing maintenance requirements and operational costs."}           
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


