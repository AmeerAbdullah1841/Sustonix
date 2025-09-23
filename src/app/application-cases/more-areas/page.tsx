"use client";
import Image from "next/image";
import Link from "next/link";

export default function MoreAreasPage() {
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
          <span className="text-white">More other areas</span>
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
            <Link href="/application-cases/printing-dyeing-field" className="px-4 py-2 text-sm text-white hover:bg-white hover:text-black rounded-lg transition-colors">
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
            <Link href="/application-cases/more-areas" className="px-4 py-2 text-sm text-black bg-white rounded-lg font-semibold">
              More other areas
            </Link>
          </div>
        </div>

        {/* More Other Areas Content */}
        <section className="bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
            <h2 className="text-2xl font-bold text-white">More other areas</h2>
          </div>
          
          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white">Food processing wastewater treatment in Hebei</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white">Pharmaceutical wastewater treatment in Hubei</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white">Pulp and paper wastewater treatment in Guangxi</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white">Chemical industry wastewater treatment in Jilin</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white">Power plant wastewater treatment in Heilongjiang</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white">Mining wastewater treatment in Yunnan</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white">Agricultural wastewater treatment in Gansu</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white">Aquaculture wastewater treatment in Fujian</p>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative">
          
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                <Image
src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/588d571b-8706-4319-b785-ca4cd876ce56.webp_640xaf.webp"                  alt="Other Areas Project 1"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                <Image
src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/44f7b30a-b0f1-4d8e-89fc-74e9f08096fe.webp_640xaf.webp"                  alt="Other Areas Project 2"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                <Image
src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/e1aa34fa-39a0-4ad5-9011-cd4c55b08e5e.webp_640xaf.webp"                  alt="Other Areas Project 3"
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
