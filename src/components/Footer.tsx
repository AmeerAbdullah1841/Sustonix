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
         <h3 className="text-sm font-semibold mb-3"><a href="/product-center" className="hover:text-white">Product Center</a></h3>
         <h3 className="text-sm font-semibold mb-3"><a href="/solution/leachate" className="hover:text-white">Solutions</a></h3>
         <h3 className="text-sm font-semibold mb-3"><a href="/application-cases" className="hover:text-white">Application Cases</a></h3>

          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
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


