import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-sm font-semibold mb-3">Sustonix</h4>
            <p className="text-sm text-white/70 leading-relaxed">
              Advanced filtration and separation solutions for water treatment and
              industrial applications.
            </p>
          </div>
          <div>
         <h3 className="text-sm font-semibold mb-3"><Link href="/product-center" className="hover:text-white">Product Center</Link></h3>
         <h3 className="text-sm font-semibold mb-3"><Link href="/solution/leachate" className="hover:text-white">Solutions</Link></h3>
         <h3 className="text-sm font-semibold mb-3"><Link href="/application-cases" className="hover:text-white">Application Cases</Link></h3>

          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="#" className="hover:text-white">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Email: contact@sustonix.com</li>
              <li>Phone: +00 000 0000</li>
              <li>Address: 123 Industrial Park, City</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-xs text-white/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Sustonix. All rights reserved.</span>
          <span>Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}


