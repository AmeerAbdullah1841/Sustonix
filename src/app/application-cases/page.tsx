"use client";
import Image from "next/image";
import Link from "next/link";

export default function ApplicationCasesPage() {
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
          <span className="text-white">Application Cases</span>
        </div>
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Application Cases</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Explore our successful projects across various industries and applications
          </p>
        </div>

        {/* Application Categories */}
        <div className="bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            <Link href="/application-cases/leachate-field" className="p-4 text-center hover:bg-white hover:text-black text-white rounded-lg transition-colors">
              <div className="text-sm font-medium font-semibold">Leachate field</div>
            </Link>
            <Link href="/application-cases/municipal-sector" className="p-4 text-center hover:bg-white hover:text-black text-white rounded-lg transition-colors">
              <div className="text-sm font-medium font-semibold">Municipal sector</div>
            </Link>
            <Link href="/application-cases/printing-dyeing-field" className="p-4 text-center hover:bg-white hover:text-black text-white rounded-lg transition-colors">
              <div className="text-sm font-medium font-semibold">Printing and dyeing field</div>
            </Link>
            <Link href="/application-cases/coal-chemical-petrochemical" className="p-4 text-center hover:bg-white hover:text-black text-white rounded-lg transition-colors">
              <div className="text-sm font-medium font-semibold">Coal Chemical & Petrochemical</div>
            </Link>
            <Link href="/application-cases/steel-nonferrous-metals" className="p-4 text-center hover:bg-white hover:text-black text-white rounded-lg transition-colors">
              <div className="text-sm font-medium font-semibold">Steel and nonferrous metals sector</div>
            </Link>
            <Link href="/application-cases/seawater-desalination-field" className="p-4 text-center hover:bg-white hover:text-black text-white rounded-lg transition-colors">
              <div className="text-sm font-medium font-semibold">Seawater desalination field</div>
            </Link>
            <Link href="/application-cases/electronic-electroplating-field" className="p-4 text-center hover:bg-white hover:text-black text-white rounded-lg transition-colors">
              <div className="text-sm font-medium font-semibold">Electronic electroplating field</div>
            </Link>
            <Link href="/application-cases/drinking-water-field" className="p-4 text-center hover:bg-white hover:text-black text-white rounded-lg transition-colors">
              <div className="text-sm font-medium font-semibold">High-quality drinking water field</div>
            </Link>
            <Link href="/application-cases/more-areas" className="p-4 text-center hover:bg-white hover:text-black text-white rounded-lg transition-colors">
              <div className="text-sm font-medium font-semibold">More other areas</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
