"use client";
import Image from "next/image";
import Link from "next/link";

export default function SofteningHeavyMetalPage() {
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
          <span className="text-white">Softening & heavy metal removal</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-2xl p-6 shadow-xl">
          <div className="relative w-full max-w-xl mx-auto" style={{ aspectRatio: "16 / 9" }}>
            <Image src="/soft.jpg" alt="Softening & heavy metal" fill unoptimized className="object-contain" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">Softening & Heavy Metal Removal</h1>
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
          <div className="relative mx-auto max-w-5xl" style={{ aspectRatio: "5 / 1" }}>
            <Image 
            src='https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/a5f93a96-bb98-43ac-97a8-b3f03ecd665e.png'
             alt="Municipal & industrial MBR" fill unoptimized className="object-contain" />
          </div>
          <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Pain point 1: Unable to run automatically",
                desc:
                  "Since high‑density sedimentation tanks are prone to back‑mixing, some unprecipitated calcium–magnesium mud enters subsequent process sections, causing the filter to compact and block; membrane flux drops sharply, making automatic operation impossible."
              },
              {
                title: "Pain point 2: Large floor space",
                desc:
                  "After adding the softening agent in the process, water needs to pass through a high‑density sedimentation tank, an air‑type filter, and a multi‑media filter in ultrafiltration membranes; the infrastructure occupies a large area."
              },
              {
                title: "Pain point 3: High drug consumption",
                desc:
                  "A large amount of coagulant PAC and coagulant aid PAM needs to be added; to prevent secondary scaling, acid needs to be dosed at the outlet and the pH adjusted, resulting in high reagent consumption."
              }
            ].map((c)=> (
              <div key={c.title} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-black text-white text-sm font-semibold px-4 py-2">{c.title}</div>
                <div className="px-4 py-3 text-sm text-gray-700">{c.desc}</div>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">Solution</h2>
            
          </div>
          <div className="px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative mx-auto w-full max-w-sm" style={{ aspectRatio: "4 / 1" }}>
                <Image 
                  src='https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/b25084d8-5545-4848-9b44-f8d811582212.png_1180xaf.png'
                  alt="Municipal & industrial MBR - diagram 1" fill unoptimized className="object-contain" />
              </div>
              <div className="relative mx-auto w-full max-w-5xl" style={{ aspectRatio: "4/ 1" }}>
                <Image 
                src='https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/95f116c4-43e9-46ba-9db0-fb64db852570.png_1180xaf.png'
                  alt="Municipal & industrial MBR - diagram 2" fill unoptimized className="object-contain" />
              </div>
            </div>
          </div>
          <div className="p-6 space-y-4">
             {[
               {t:"Water production",
                d:'The raw water contacts the softening agent in the reaction tank 1 to generate precipitation. After flowing through the reaction tank 2 and the temporary storage tank, it overflows into the membrane pool. The precipitation is blocked in the membrane pool. The clean water is driven by the suction negative pressure to pass through the membrane wall and enter the inner cavity of the membrane fiber. Each water production cycle is 35-60 minutes.'},
                       {t:"Backwash", 
                        d:'Periodic backwashing can remove solid impurities trapped on the membrane surface. The water in the water tank is pumped along the water production pipeline to the inner cavity of the membrane fiber and flows into the membrane pool. The backwashing time does not exceed 1 minute.'},
                {t:"Mud discharge \n(continuous)", 
                  d:'The mud discharge outlet is a temporary storage tank and a membrane tank, and the mud is sucked out by a pump, and the mud discharge volume is 1-5%.'},
               {t:"In-situ cleaning", 
                d:'The in-situ cleaning method is to use the water in the membrane pool to wash the membrane surface. The cleaning time is 10-15 minutes.'},
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
         {/* Technological advantages - bullet points */}
         <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">Technological advantages</h2>
          </div>
          <div className="p-6">
            <ul className="space-y-3 text-sm text-gray-700 list-disc pl-5">
              <li>The membrane has wide requirements for influent SS; no stringent pretreatment needed.</li>
              <li>Complicated sedimentation pretreatment is reduced; process flow is short with a small footprint.</li>
              <li>No need to add PAC or PAM, reducing the amount of acid/alkali added and overall reagent costs.</li>
              <li>Adopts negative pressure suction with low energy consumption; using hollow fiber PTFE membrane increases filling area.</li>
              <li>Process control is simple and can achieve fully automatic control with convenient operation and low investment.</li>
            </ul>
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


