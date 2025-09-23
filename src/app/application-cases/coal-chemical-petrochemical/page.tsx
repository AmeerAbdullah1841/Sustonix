"use client";
import Image from "next/image";
import Link from "next/link";

export default function CoalChemicalPetrochemicalPage() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0">
        <Image src="/case-1.jpg" alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/10" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-sm text-white/80 mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/application-cases" className="hover:underline">Application Cases</Link>
          <span className="mx-2">›</span>
          <span className="text-white">Coal Chemical & Petrochemical</span>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Application Cases</h1>
        </div>

        {/* Application Categories Tabs */}
        <div className="bg-black rounded-2xl shadow-xl p-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            <Link href="/application-cases/leachate-field" className="px-4 py-2 text-sm text-white hover:bg-white hover:text-black rounded-lg transition-colors">
              Leachate field
            </Link>
            <Link href="/application-cases/municipal-sector" className="px-4 py-2 text-sm text-white hover:bg-white hover:text-black rounded-lg transition-colors">
              Municipal sector
            </Link>
            <Link href="/application-cases/printing-dyeing-field" className="px-4 py-2 text-sm text-white hover:bg-white hover:text-black rounded-lg transition-colors">
              Printing and dyeing field
            </Link>
            <Link href="/application-cases/coal-chemical-petrochemical" className="px-4 py-2 text-sm text-black bg-white rounded-lg font-semibold">
              Coal Chemical & Petrochemical
            </Link>
            <Link href="/application-cases/steel-nonferrous-metals" className="px-4 py-2 text-sm text-white hover:bg-white hover:text-black rounded-lg transition-colors">
              Steel and nonferrous metals sector
            </Link>
            <Link href="/application-cases/seawater-desalination-field" className="px-4 py-2 text-sm text-white hover:bg-white hover:text-black rounded-lg transition-colors">
              Seawater desalination field
            </Link>
            <Link href="/application-cases/electronic-electroplating-field" className="px-4 py-2 text-sm text-white hover:bg-white hover:text-black rounded-lg transition-colors">
              Electronic electroplating field
            </Link>
            <Link href="/application-cases/drinking-water-field" className="px-4 py-2 text-sm text-white hover:bg-white hover:text-black rounded-lg transition-colors">
              High-quality drinking water field
            </Link>
            <Link href="/application-cases/more-areas" className="px-4 py-2 text-sm text-white hover:bg-white hover:text-black rounded-lg transition-colors">
              More other areas
            </Link>
          </div>
        </div>

        {/* Coal Chemical & Petrochemical Content */}
        <section className="bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
            <h2 className="text-2xl font-bold text-white">Coal Chemical & Petrochemical</h2>
          </div>
          
          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white">A sewage resource utilization project in Xinjiang</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white">A coal chemical wastewater project in Shaanxi</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white">A semi-coal wastewater project in Xinjiang</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white">A coal-to-liquid wastewater project in Shanxi</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white">A coal chemical wastewater project in Shaanxi</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white">A coal-to-methanol wastewater project in Yunnan</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white">A coal-to-methanol wastewater project in Ningxia</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white">A coal-to-olefins project in Inner Mongolia</p>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                <Image
src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/fa66f36f-d157-4ac3-b600-b948e8e4f6fa.webp_560xaf.webp"                  alt="Coal Chemical Project 1"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                <Image
src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/a7f3913c-9bba-4408-b13e-5a22adf97d3d.webp_560xaf.webp"    alt="Coal Chemical Project 2"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                <Image
src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/599167b7-9107-4303-8938-3120ebcacde5.webp_560xaf.webp"                  alt="Coal Chemical Project 3"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
