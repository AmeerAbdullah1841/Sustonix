"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Slide = { src: string; title: string; description: string };

const slides: Slide[] = [
  {
    src: "/back.jpg",
    title: "Sustonix",
    description: "Sustainable solutions, engineered for impact.",
  },
  {
    src: "/about.jpg",
    title: " Committed to becoming a global leading filtration and separation technology solutions company",
    description: "Guided by the ultimate customer experience and driven by customer value creation,we provide highly competitive 'water resources and carbon management' technology solutions for niche application scenarios.",
  },
  {
    src: "/water.jpg",
    title: " Redefine membrane separation & redefine water resources",
    description: ""
  },
  {
    src: "/global.jpg",
    title: "Global Strategic Layout",
    description: "We serve nearly 3,000 projects worldwide and maintain stable operations. We have received numerous honors, including the Global Technology Innovation Award, product technology inclusion in the National Key R&D Program, and industry technology advancement awards.We prioritize the ultimate customer experience and drive customer value creation,providing highly competitive water resource and carbon management technology solutions to users in specific sectors. ",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const formatName = (name: string) => {
    const words = name.split(" ").filter(Boolean);
    const first = words.slice(0, 3).join(" ");
    const rest = words.slice(3).join(" ");
    return (
      <>
        {first}
        {rest ? (
          <>
            <br />
            {rest}
          </>
        ) : null}
      </>
    );
  };
  const products = [
    {
      key: "vilep-100",
      name: "ViLEP-100",
      href:"/product-center/mbr-products/vilep-10",
      blurb:
        "Compact UF module for small systems and pilot validation, featuring stable flux and easy O&M.",
      image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/a3f990b3-3413-4e40-9c00-37f9fac72470.png",
      stats: [
        { label: "Nominal area (m²)", value: "100" },
        { label: "Pore size", value: "0.1 μm" },
        { label: "Energy", value: "Low footprint" },
      ],
    },
    {
      key: "vilep-1000",
      name: "ViLEP-1000",
      href:"/product-center/mbr-products/vilep-1000",
      blurb:
        "High-throughput UF module designed for municipal and industrial pretreatment lines.",
      image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/a037fb76-4e67-49e5-9a8e-55ce316861e6.png",
      stats: [
        { label: "Nominal area (m²)", value: "1000" },
        { label: "Pore size", value: "0.1 μm" },
        { label: "Energy", value: "Optimized" },
      ],
    },
    {
      key: "vilep-1500",
      name: "ViLEP-1500",
      href:"/product-center/ultrafiltration-products/vilep-1500",
      blurb:
        "Submerged ultrafiltration membrane SMF, used in surface water, secondary sedimentation tank effluent, and RO pretreatment.",
      image:
        "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/48a62f05-755c-45c8-aa1d-f99cf9c3931a.png",
      stats: [
        { label: "Nominal area (m²)", value: "1500" },
        { label: "Pore size", value: "0.1 μm" },
        { label: "Energy", value: "Low footprint" },
      ],
    },
    {
      key: "vilep-2000",
      name: "ViLEP-2000",
      href:"/product-center/ultrafiltration-products/vilep-2000",
      blurb:
        "Pressure ultrafiltration membrane for surface water, secondary sedimentation tank effluent, and RO pretreatment.",
      image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/98240e63-c705-4174-a437-c26fec47cb25.png",
      stats: [
        { label: "Nominal area (m²)", value: "2000" },
        { label: "Pore size", value: "0.1 μm" },
        { label: "Energy", value: "High efficiency" },
      ],
    },
    {
      key: "toyobo-ro",
      name: "Toyobo reverse osmosis membrane",
      href:"/product-center/reverse-osmosis-products/toyobo-reverse-osmosis-membrane",
      blurb:
        "High-rejection RO elements delivering stable permeate quality for desalination and high-purity water systems.",
      image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/afef06a4-e83d-4346-af44-c6384e4cefad.png",
      stats: [
        { label: "Rejection", value: ">99%" },
        { label: "Design", value: "Spiral-wound" },
        { label: "Applications", value: "RO / BWRO" },
      ],
    },
    {
      key: "free-aeration",
      name: "Free Aeration low resistance microporous aerator",
      href:"/product-center/application-products/free-aeration-low-resistance-microporous-aerator",
      blurb:
        "Microporous aerator with low headloss, fine bubble distribution, and improved oxygen transfer efficiency.",
      image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/422a1add-d9d9-45d6-bf2f-baa42fae5a8e.png",
      stats: [
        { label: "OTR", value: "High" },
        { label: "Headloss", value: "Low" },
        { label: "Material", value: "Microporous" },
      ],
    },
  ];
  const [activeProductIdx, setActiveProductIdx] = useState(2);
  // Limit thumbnail options to these products and preserve order
  const productOptionKeys = ["vilep-100", "vilep-1000", "vilep-1500", "vilep-2000", "toyobo-ro", "free-aeration"] as const;
  const productOptionIdxs = productOptionKeys
    .map((k) => products.findIndex((p) => p.key === k))
    .filter((i) => i >= 0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative flex flex-col">
      {/* HERO (full viewport) slider */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center px-6">
        {/* Slider background confined to hero only */}
        <div className="absolute inset-0">
        {slides.map((s, i) => (
          <Image
            key={s.src + i}
            src={s.src}
            alt="Hero slide"
            fill
            priority={i === 0}
            className="object-cover transition-transform duration-700"
            style={{ transform: `translateX(${(i - index) * 100}%)` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/30" />
        </div>

        <main className="relative z-10 text-center max-w-3xl text-white">
        <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">{slides[index].title}</h5>
        <p className="mt-4 text-lg sm:text-xl opacity-90">{slides[index].description}</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full ${index === i ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      </main>
      </section>

      {/* Stats section ,  decades of industry development*/}
      <section className="relative z-10 w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/industry.jpg" alt="Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-blue-900/40" />
        </div>
        <div className="relative mx-auto max-w-6xl h-full px-6 py-8 text-white flex flex-col justify-center transform -translate-y-12 sm:-translate-y-16 md:-translate-y-20 lg:-translate-y-24">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">International cooperation, decades of industry development</h3>
          <p className="mt-4 max-w-3xl text-sm sm:text-base opacity-90">
            SUSTONIX collaborates with universities and research institutions to develop technical solutions for diverse applications, including leachate, municipal services, steel, coal chemical, electronic plating, oilfield services, water supply, and desalination.
          </p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <div className="text-4xl font-bold">3000<span className="align-super text-sm">+</span></div>
              <div className="mt-1 text-xs sm:text-sm opacity-90">Application Cases</div>
            </div>
            <div>
              <div className="text-4xl font-bold">100<span className="align-super text-sm">+</span></div>
              <div className="mt-1 text-xs sm:text-sm opacity-90">R&D patents</div>
            </div>
            <div>
              <div className="text-4xl font-bold">10<span className="align-super text-sm">+</span></div>
              <div className="mt-1 text-xs sm:text-sm opacity-90">Deepening water governance</div>
            </div>
            <div>
              <div className="text-4xl font-bold">60<span className="align-super text-sm">yrs</span></div>
              <div className="mt-1 text-xs sm:text-sm opacity-90">Membrane expertise</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product highlight section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background image layer */}
        <div className="absolute inset-0">
          <Image src="/grey-2.jpg" alt="Section background" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl h-full px-6 py-8 grid gap-8 md:grid-cols-2 items-center text-white">
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">{products[activeProductIdx].name}</h3>
            <p className="mt-4 opacity-90">{products[activeProductIdx].blurb}</p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              {products[activeProductIdx].stats.map((s) => (
                <div key={s.label} className="rounded-lg border border-white/20 bg-white/10 backdrop-blur p-4">
                  <div className="text-xl font-bold">{s.value}</div>
                  <div className="opacity-80">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-4">
              <Link href={products[activeProductIdx].href as string} className="inline-flex items-center rounded-full bg-white px-5 py-2 text-black text-sm font-medium hover:bg-gray-200">Learn more</Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full max-h-[420px] h-[420px]">
              <Image src={products[activeProductIdx].image} alt={products[activeProductIdx].name} fill unoptimized className="rounded-xl shadow-lg object-cover" />
            </div>
          </div>
        </div>

        <div className="absolute z-10 inset-x-0 bottom-20 px-6">
          <div className="mx-auto max-w-6xl flex items-center gap-6 overflow-x-auto text-white">
            {productOptionIdxs.map((idx) => {
              const p = products[idx];
              const isActive = idx === activeProductIdx;
              return (
                <div key={p.key} className="flex flex-col items-center gap-2 shrink-0">
                  <button
                    onMouseEnter={() => setActiveProductIdx(idx)}
                    onFocus={() => setActiveProductIdx(idx)}
                    className={`group relative h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden border ${
                      isActive ? "border-white" : "border-white/40"
                    }`}
                    aria-label={`View ${p.name}`}
                  >
                    <Image src={p.image} alt={p.name} fill unoptimized className="object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                  <div className="text-[10px] sm:text-xs text-white text-center leading-tight">{formatName(p.name)}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fields grid section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image src="/grey.jpg" alt="Fields background" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl h-full px-6 py-10 text-white flex flex-col">
          {/* <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">Application fields</h3> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-auto mb-auto">
            {[
              { name: "Leachate field", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/e660a252-e2ac-4d08-a0af-84fb9753118a.png", href: "/application-cases/leachate-field" },
              { name: "Municipal sector", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/6ee7a5cb-15ab-4c87-a960-fbb641c4a066.png" ,href: "/application-cases/municipal-sector"},
              { name: "Printing and dyeing field", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/18155a6f-5bac-4196-b0c2-2c2f312157e5.png_366xaf.png" ,href: "/application-cases/printing-dyeing-field"},
              { name: "High-quality drinking water field", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/88e35543-64c8-46dd-b8f0-16f4b18dbbbd.png_366xaf.png" ,href: "/application-cases/drinking-water-field"},
              { name: "More other areas", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/4eecc184-9ec7-4631-a12c-ead0c9bde1e4.png_366xaf.png" ,href: "/application-cases/more-areas"},
              { name: "Coal Chemical & Petrochemical", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/e1be20e3-953e-4a97-b85a-25847de3fd1a.png" ,href: "/application-cases/coal-chemical-petrochemical"},
              { name: "Electronic electroplating field", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/fc08062e-4b72-4811-807d-4686a7622c3b.png" ,href: "/application-cases/electronic-electroplating-field"},
              { name: "Steel and nonferrous metals", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/f512574b-4223-43d7-9019-6d6ba4b35d30.png" ,href: "/application-cases/steel-nonferrous-metals"},
            ].map((f) => (
              <div key={f.name} className="group relative rounded-xl overflow-hidden shadow-md ring-1 ring-white/10 transition-transform duration-300 hover:shadow-xl hover:ring-white/40 transform hover:-translate-y-1">
                <div className="relative h-40 sm:h-48 md:h-56 w-full">
                  <Image src={f.image} alt={f.name} fill unoptimized className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="text-lg sm:text-xl font-semibold">{f.name}</div>
                  <Link href={f.href} className="mt-3 inline-flex items-center rounded-full bg-white/90 text-black text-xs sm:text-sm px-3 py-1.5 hover:bg-white transition-colors">learn more</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image src="/grey-3.jpg" alt="News background" fill className="object-cover" />
          <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl h-full px-6 py-10 text-slate-900 flex flex-col">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-white">News Center</h3>
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6 flex-1">
            {/* Left: Featured slider placeholder */}
            <div className="relative rounded-xl overflow-hidden shadow ring-1 ring-black/10 bg-white/80">
              <Image src="/news-2.jpg" alt="Featured" fill className="object-cover opacity-90" />
              <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent text-white">
                <div className="text-sm uppercase tracking-wide">Featured</div>
                <div className="mt-2 text-lg sm:text-xl font-semibold">Oil-resistant and anti-pollution, the correct way to treat steel wastewater</div>
              </div>
            </div>

            {/* Right: List */}
            <div className="flex flex-col gap-4">
              {[
                { date: "2025-04-25", title: "Sustonix participated in the compilation of the new...", excerpt: "On April 23rd, the drafting group for the 'Technical Specification for Wastewater Treatment with Vibrating Membrane Bioreactors' was successfully established and i..." },
                { date: "2025-03-14", title: "MBR technology upgrades! ViLEP-1000 offers low entry barriers, low ener...", excerpt: "On the evening of March 13th at 7:00 PM, the Suzhou Science and Technology University Forum arrived as scheduled. Wang Guoqiang, head of Suzhou Science an..." },
                { date: "2025-03-07", title: "Say goodbye to high energy consumption! See how the ViLEP-100 separatio...", excerpt: "On March 6, Yang Dongli, head of the leachate industry group of Sustonix, shared the 'Leachate & Special Wastewater Separation Low-Consumption'..." },
                { date: "2025-02-01", title: "Jinji Lake City Walk + Cruise Party! Sustonix 2024-202...", excerpt: "On January 20, the 'Adhere to Duties, Bravely Innovate' Sustonix 2024-2025 Annual Meeting and Commendation Conference was held. CITY WALK,..." },
              ].map((n) => (
                <Link key={n.title} href="#" className="group relative grid grid-cols-[auto_1fr] gap-4 items-start rounded-xl bg-black/90 ring-1 ring-black/10 p-4 hover:bg-white transition-colors">
                  <div className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white text-black text-xs group-hover:text-white group-hover:bg-black leading-tight">
                    <div>{n.date.split("-")[1]}</div>
                    <div className="text-[10px]">{n.date.split("-")[0]}</div>
                  </div>
                  <div>
                    <div className="font-medium text-white group-hover:text-black">{n.title}</div>
                    <div className="mt-1 text-sm text-white group-hover:text-black line-clamp-2">{n.excerpt}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

    {/* Footer */}
    
  </div>
  );
}
