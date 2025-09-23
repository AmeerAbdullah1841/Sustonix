"use client";
import Image from "next/image";
import Link from "next/link";

export default function DifficultRejectionPage() {
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
          <span className="text-white">  
    Oilfield reinjection water treatment technology
        </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-2xl p-6 shadow-xl">
          <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
            <Image src="/oil-water.jpg" alt="Difficult rejection" fill unoptimized className="object-contain" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
    Oilfield reinjection water treatment technology
        </h1>
            <p className="text-gray-700 leading-relaxed">Content placeholder.</p>
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
   {/* Problems with membrane filtration technology section */}
             <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-blue-600 rounded" />
            <h2 className="text-lg font-semibold text-gray-900">Common processes and pain points</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 mb-6">
                  Although membrane filtration technology can solve the problems of the above processes,
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">The oil resistance of the membrane material</h3>
                    <p className="text-sm text-gray-700">
                      Oil accumulation causes flux to drop quickly, leading to short cleaning cycles (7-10 days) and troublesome maintenance for ceramic and PVDF membranes.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">The acid and alkali resistance of the membrane material</h3>
                    <p className="text-sm text-gray-700">
                      Cleaning chemicals, especially for oil, cause deterioration, requiring strong alkali resistance, and shortening the lifespan to 1-3 years.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-full" style={{ aspectRatio: "4 / 2" }}>
                <Image 
                  src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/ee49a8b9-4aa7-4012-a8ac-c7b848e24448.webp" 
                  alt="Industrial Process Diagram" 
                  fill 
                  unoptimized 
                  className="object-contain" 
                />
              </div>
            </div>
          </div>
        </section>
        {/* Problems with membrane filtration technology section */}
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-blue-600 rounded" />
            <h2 className="text-lg font-semibold text-gray-900">Problems with membrane filtration technology</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative w-full" style={{ aspectRatio: "4 / 2" }}>
                <Image 
                  src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/e7f6a2c8-ac68-4262-999d-3af11774c049.webp" 
                  alt="Industrial Process Diagram" 
                  fill 
                  unoptimized 
                  className="object-contain" 
                />
              </div>
              <div>
                <p className="text-gray-700 mb-6">
                  Although membrane filtration technology can solve the problems of the above processes,
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">The oil resistance of the membrane material</h3>
                    <p className="text-sm text-gray-700">
                      Oil accumulation causes flux to drop quickly, leading to short cleaning cycles (7-10 days) and troublesome maintenance for ceramic and PVDF membranes.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">The acid and alkali resistance of the membrane material</h3>
                    <p className="text-sm text-gray-700">
                      Cleaning chemicals, especially for oil, cause deterioration, requiring strong alkali resistance, and shortening the lifespan to 1-3 years.
                    </p>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </section>
           <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-blue-600 rounded" />
            <h2 className="text-lg font-semibold text-gray-900">
        ViLEP membrane filtration technology</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
             
              <div>
                <p className="text-gray-700 mb-6">
                  Although membrane filtration technology can solve the problems of the above processes,
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">The oil resistance of the membrane material</h3>
                    <p className="text-sm text-gray-700">
                      Oil accumulation causes flux to drop quickly, leading to short cleaning cycles (7-10 days) and troublesome maintenance for ceramic and PVDF membranes.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">The acid and alkali resistance of the membrane material</h3>
                    <p className="text-sm text-gray-700">
                      Cleaning chemicals, especially for oil, cause deterioration, requiring strong alkali resistance, and shortening the lifespan to 1-3 years.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-full" style={{ aspectRatio: "4 / 2" }}>
                <Image 
                src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/112927ef-5258-4626-afd3-b22c3433792a.webp"
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
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-blue-600 rounded" />
            <h2 className="text-lg font-semibold text-gray-900">Features of ViLEP membrane filtration technology</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative w-full" style={{ aspectRatio: "4 / 2" }}>
                <Image 
                src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/95aa0868-1c3b-4cbc-b26f-dc753fffb65a.webp"
                  alt="Industrial Process Diagram" 
                  fill 
                  unoptimized 
                  className="object-contain" 
                />
              </div>
              <div>
                <p className="text-gray-700 mb-6">
                  Although membrane filtration technology can solve the problems of the above processes,
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">The oil resistance of the membrane material</h3>
                    <p className="text-sm text-gray-700">
                      Oil accumulation causes flux to drop quickly, leading to short cleaning cycles (7-10 days) and troublesome maintenance for ceramic and PVDF membranes.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">The acid and alkali resistance of the membrane material</h3>
                    <p className="text-sm text-gray-700">
                      Cleaning chemicals, especially for oil, cause deterioration, requiring strong alkali resistance, and shortening the lifespan to 1-3 years.
                    </p>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </section>

        {/* Final image section */}
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="p-6 flex justify-center">
            <div className="relative w-full max-w-4xl" style={{ aspectRatio: "3/ 1" }}>
              <Image
              src='https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/d23c99a6-307d-4984-b61c-903c657189c3.png'
                alt="Process overview"
                fill
                unoptimized
                className="object-contain"
              />
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
               {t:"Oil resistant and \npollution resistant",
                d:"The use of Japan's Sumitomo Electric Poreflon hydrophilic fluororesin membrane material can effectively resist oil pollution in the re-injection water of oil fields with high oil content."},
               {t:"Long service life", 
                 d:"Willup's energy-saving and anti-pollution ultrafiltration membrane has a longer service life of 5 to 10 years."},
                {t:"Stable and \nlower carbon", 
                  d:"Compared with traditional ceramic membranes, which generally consume 2.0-3.0kWh of electricity per ton of water, the energy-saving and anti-pollution ultrafiltration membrane of Willup only consumes 0.8-1.0kWh of electricity per ton of water, saving an average of more than 50% of energy."},
               {t:"Easier maintenance", 
                 d:"It can also operate stably in high-concentration oily wastewater, further eliminating the need for coagulation/flocculation/flotation equipment, making the process more convenient and the cleaning cycle 15 to 30 days per time."}           
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


