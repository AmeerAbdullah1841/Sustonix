// https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/b248fa3b-ab67-41df-99a7-04b15cf8beff.png_104xaf.png
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type NavChild = { 
  label: string; 
  href: string;
  children?: Array<{ label: string; href: string }>;
};
type NavItem = {
  label: string;
  href?: string;
  description?: string;
  image?: string;
  children?: Array<NavChild>;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Product Center",
    href: "/product-center",
    description: "Sustonix is committed to becoming a global leader in filtration and separation technology solutions. Suko has established a strategic partnership with Sumitomo Electric Industries, Ltd. to form a joint venture, Sumitomo Environmental. Sumitomo Electric leverages over 60 years of membrane material development expertise to develop the superior performance of its POREFLON membranes. Suko also collaborates with universities and research institutions at home and abroad to develop technical solutions for specific application scenarios, tailored to the needs of diverse applications. Suko has nearly 3,000 projects in stable operation in China and select overseas locations.",
    image: "/about.jpg",
    children: [
      { 
        label: "Product development", 
        href: "/product-center/product-development",
        children: [
          { label: "1) Sumitomo Electric POREFLON film", href: "/product-center/sumitomo-electric-poreflon-film"  },
          { label: "2) VILEP technology", href: "/product-center/product-development/vilep-technology" },
        ]
      },
      { label: "MBR products", href: "/product-center/mbr-products",
        children: [
            { label: "1) ViLEP-100", href: "/product-center/mbr-products/vilep-10" },
            { label: "2) VILEP-1000", href: "/product-center/mbr-products/vilep-1000" },
          ]
       },
      { label: "Ultrafiltration products", href: "/product-center/ultrafiltration-products",
        children: [
          { label: "1) ViLEP-1500", href: "/product-center/ultrafiltration-products/vilep-1500" },
          { label: "2) ViLEP-2000", href: "/product-center/ultrafiltration-products/vilep-2000" },
        ]
       },
      { label: "Reverse osmosis products", href: "/product-center/reverse-osmosis-products",
        children: [
          { label: "Toyobo reverse osmosis membrane", href: "/product-center/reverse-osmosis-products/toyobo-reverse-osmosis-membrane" },
        ]
      },
      { label: "Application products", href: "/product-center/application-products" ,
        children: [
          { label: "Free Aeration low resistance microporous aerator", href: "/product-center/application-products/free-aeration-low-resistance-microporous-aerator" },
        ]
      },
    ],
  },
  {
    label: "Solutions",
    description: "End‑to‑end treatment solutions for municipal and industrial water.",
    href: '/solution/leachate',
    image: "/solution.jpg",
    children: [
      { label: "Leachate treatment", href: "/solution/leachate" },
      { label: "Municipal & industrial MBR", href: "/solution/municipal-industrial-mbr" },
      { label: "Softening & heavy metal removal", href: "/solution/softening-heavy-metal" },
      { label: "  Oilfield reinjection water treatment technology", href: "/solution/difficult-rejection" },
      { label: "Seawater desalination", href: "/solution/seawater-desalination" },
      { label: "High‑quality drinking water", href: "/solution/drinking-water" },
    ],
  },
  {
    label: "Application Cases",
    description: "Sustonix is committed to becoming a global leader in filtration and separation technology solutions. Suko has established a strategic partnership with Sumitomo Electric Industries, Ltd. to form a joint venture, Sumitomo Environmental. Sumitomo Electric leverages over 60 years of membrane material development expertise to develop the superior performance of its POREFLON membranes. Suko also collaborates with universities and research institutions at home and abroad to develop technical solutions for specific application scenarios, tailored to the needs of diverse applications. Suko has nearly 3,000 projects in stable operation in China and select overseas locations.",
    image: "/cases.jpg",
    href: "/application-cases",
    children: [
      { label: "Leachate field", href: "/application-cases/leachate-field" },
      { label: "Municipal sector", href: "/application-cases/municipal-sector" },
      { label: "Coal chemical & petrochemical", href: "/application-cases/coal-chemical-petrochemical" },
      { label: "Steel & nonferrous", href: "/application-cases/steel-nonferrous-metals" },
      { label: "Electronic electroplating", href: "/application-cases/electronic-electroplating-field" },
      { label: "Printing & dyeing", href: "/application-cases/printing-dyeing-field" },
      { label: "Seawater desalination field", href: "/application-cases/seawater-desalination-field" },
      { label: "High-quality drinking water field", href: "/application-cases/drinking-water-field" },
      { label: "More other areas", href: "/application-cases/more-areas" },
    ],
  },
  {
    label: "About Sustonix",
    description: "Learn about our mission, milestones, team, and culture.",
    image: "/company.jpg",
    children: [
      { label: "Company Profile", href: "/about/company-profile" },
      { label: "Development History", href: "/about/development-history" },
      { label: "Honorary Qualifications", href: "/about/honorary-qualifications" },
      { label: "Corporate Culture", href: "/about/corporate-culture" },
      { label: "News", href: "/about/news" },
    ],
  },
  {
    label: "Join Us",
    description: "Work with us to scale sustainable water solutions.",
    image: "/next.svg",
    children: [
      { label: "Talent Concept", href: "/join-us/talent-concept" },
      { label: "Talent Recruitment", href: "/join-us/talent-recruitment" },
      { label: "Contact Us", href: "/join-us/contact" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeChild, setActiveChild] = useState<NavChild | null>(null);
  const [activeSubChild, setActiveSubChild] = useState<{ label: string; href: string } | null>(null);

  const currentItem = navItems.find((i) => i.label === openDropdown);
  const panelVisible = Boolean(currentItem && currentItem.children && currentItem.children.length);

  return (
    <nav
      className="border-b border-gray-200 bg-white/50 hover:bg-white transition-colors backdrop-blur supports-[backdrop-filter]:bg-white/40 sticky top-0 z-50"
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/sustonix.jpeg"
              alt="Sustonix logo"
              width={320}
              height={320}
              className="h-12 w-auto sm:h-14 md:h-16 lg:h-18 object-contain"
            />
          </Link>
          <button
            aria-label="Toggle menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 sm:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <ul className="hidden sm:flex items-stretch gap-2">
            {navItems.map((item) => (
              <li key={item.label} className="relative group">
                {item.children ? (
                  <>
                    <div className="relative group">
                      <Link
                        href={item.href || "/"}
                        className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                        onMouseEnter={() => {
                          setOpenDropdown(item.label);
                          setActiveChild(item.children?.[0] || null);
                        }}
                      >
                        {item.label}
                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.188l3.71-3.957a.75.75 0 111.08 1.04l-4.24 4.52a.75.75 0 01-1.08 0l-4.24-4.52a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                    {/* Full-width panel rendered below the navbar; see below */}
                  </>
                ) : (
                  <Link
                    href={item.href || "/"}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop mega panel that visually extends the navbar */}
      <div
        className={`hidden sm:grid border-t border-gray-200 bg-white shadow-sm transition-[grid-template-rows,opacity,transform] duration-1000 ease-out ${
          panelVisible ? "opacity-100 translate-y-0 grid-rows-[1fr]" : "pointer-events-none opacity-0 -translate-y-2 grid-rows-[0fr]"
        }`}
        onMouseEnter={() => null}
      >
        <div className="overflow-hidden">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-[420px_256px_280px] gap-8 py-4">
              <div className="min-w-[300px] max-w-[640px] p-3 border-r border-gray-200">
                <h1 className="text-base font-semibold text-gray-900">{currentItem?.label}</h1>
                <div className="mt-2 text-sm leading-6 text-gray-700">
                  {currentItem?.description || ""}
                </div>
                {(activeSubChild?.href || activeChild?.href) && (
                  <div className="mt-3">
                    <Link
                      href={activeSubChild?.href || activeChild?.href || ""}
                      className="inline-flex items-center rounded-full bg-black text-white px-3 py-1.5 text-xs font-medium hover:bg-blue-700"
                    >
                      Open page
                    </Link>
                  </div>
                )}
              </div>
              <div className="w-64 p-10 flex flex-col justify-start">
                {(currentItem?.children || []).map((child) => (
                  <div key={child.label} className="relative">
                    <Link
                      href={child.href}
                      className={`w-full block rounded-md px-3 py-2 text-sm text-black hover:text-blue-600 hover:bg-transparent ${
                        activeChild?.label === child.label ? "bg-gray-50" : ""
                      }`}
                      onMouseEnter={() => {
                        setActiveChild(child);
                        setActiveSubChild(null);
                      }}
                      onFocus={() => {
                        setActiveChild(child);
                        setActiveSubChild(null);
                      }}
                      onClick={() => setOpenDropdown(null)}
                    >
                      {child.label}
                    </Link>
                     {/* Nested children */}
                     {activeChild?.label === child.label && child.children && child.children.length > 0 && (
                       <div className="ml-4 mt-1 space-y-1">
                        {child.children.map((subChild) => (
                          <Link
                            key={subChild.label}
                            href={subChild.href}
                            className={`w-full block rounded-md px-3 py-2 text-sm text-black hover:text-blue-600 hover:bg-transparent ${
                              activeSubChild?.label === subChild.label ? "bg-gray-50" : ""
                            }`}
                            onMouseEnter={() => setActiveSubChild(subChild)}
                            onFocus={() => setActiveSubChild(subChild)}
                            onClick={() => setOpenDropdown(null)}
                          >
                            {subChild.label}
                          </Link>
                        ))}
                       </div>
                     )}
                  </div>
                ))}
              </div>
              <div className="hidden sm:flex items-center justify-center">
                {currentItem?.image && (
                  <Image
                    src={currentItem.image}
                    alt={currentItem.label}
                    width={currentItem.label === "Product Center" || currentItem.label === "Solution" || currentItem.label ===  "Application Cases" ? 280 : 180}
                    height={currentItem.label === "Product Center" || currentItem.label === "Solution" || currentItem.label === "Application Cases" ? 180 : 120}
                    className="rounded object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="sm:hidden border-t border-gray-200">
          <ul className="px-2 py-2">
            {navItems.map((item) => (
              <li key={item.label} className="">
                {item.children ? (
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                      {item.label}
                      <span className="ml-2">▾</span>
                    </summary>
                    <div className="pl-2">
                      {item.children.map((child) => (
                        <div key={child.label} className="">
                          <Link
                            href={child.href}
                            className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={item.href || "/"}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}


