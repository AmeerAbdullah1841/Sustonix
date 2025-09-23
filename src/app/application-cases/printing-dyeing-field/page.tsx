"use client";
import Image from "next/image";
import Link from "next/link";

export default function PrintingDyeingFieldPage() {
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
          <span className="text-white">Printing and dyeing field</span>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Application Cases</h1>
        </div>

        {/* Application Categories Tabs */}
        <div className="bg-black rounded-2xl shadow-xl p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            <Link href="/application-cases/leachate-field" className="px-4 py-2 text-sm text-white hover:bg-white hover:text-black rounded-lg transition-colors">
              Leachate field
            </Link>
            <Link href="/application-cases/municipal-sector" className="px-4 py-2 text-sm text-white hover:bg-white hover:text-black rounded-lg transition-colors">
              Municipal sector
            </Link>
            <Link href="/application-cases/printing-dyeing-field" className="px-4 py-2 text-sm text-black bg-white rounded-lg font-semibold">
              Printing and dyeing field
            </Link>
            <Link href="/application-cases/coal-chemical-petrochemical" className="px-4 py-2 text-sm text-white hover:bg-white hover:text-black rounded-lg transition-colors">
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

        {/* Printing and Dyeing Field Content */}
        <section className="bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
            <h2 className="text-2xl font-bold text-white">Printing and dyeing field</h2>
          </div>
          
          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white">Textile dyeing wastewater treatment in Jiangsu</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white">Printing industry wastewater treatment in Zhejiang</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white">Fabric dyeing wastewater treatment in Guangdong</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white">Garment industry wastewater treatment in Fujian</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white">Textile printing wastewater treatment in Shandong</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white">Dyeing wastewater treatment and reuse in Hunan</p>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative">
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                <Image
src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/09e3bde0-739d-446d-8c0b-1c8e69d7ac46.webp_560xaf.webp"                  alt="Printing Dyeing Project 1"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                <Image
src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/840a1570-0661-424f-99bc-8435f7b9ca32.webp_560xaf.webp"                  alt="Printing Dyeing Project 2"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                <Image
src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/1e8e6190-5ae6-4946-8ead-705329a0834b.webp_560xaf.webp"                  alt="Printing Dyeing Project 3"
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
