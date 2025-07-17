import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-700 text-white">
      <div className="container-custom">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="mb-4 text-2xl font-bold">DD&B Construction, Inc.</h3>
              <p className="mb-4 text-brand-100 text-sm italic">
                Commercial Building Construction & Renovation
              </p>
              <p className="mb-6 text-brand-100">
                Full service general contracting firm built on hard work, honest business practices, and a desire to achieve. 
                Building Quality Since 1981.
              </p>
              <div className="space-y-4 text-brand-100 text-sm">
                <div>
                  <p className="font-semibold text-white mb-1">Corporate Headquarters</p>
                  <p>17B Firstfield Road, Suite #203</p>
                  <p>Gaithersburg, Maryland 20878</p>
                  <p>Phone: (301) 869-8415</p>
                  <p>Fax: (301) 869-8416</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">West Regional Office</p>
                  <p>7300 Blanco Road, Suite 708</p>
                  <p>San Antonio, Texas 78216</p>
                  <p>Phone: (210) 298-4499</p>
                  <p>Fax: (210) 298-4399</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
              <nav className="space-y-2">
                <Link
                  href="/about"
                  className="block text-brand-100 transition-colors duration-200 hover:text-white"
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="block text-brand-100 transition-colors duration-200 hover:text-white"
                >
                  Services
                </Link>
                <Link
                  href="/projects"
                  className="block text-brand-100 transition-colors duration-200 hover:text-white"
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  className="block text-brand-100 transition-colors duration-200 hover:text-white"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Expertise */}
            <div>
              <h4 className="mb-4 text-lg font-semibold">Our Expertise</h4>
              <nav className="space-y-2">
                <Link
                  href="/expertise/hotels"
                  className="block text-brand-100 transition-colors duration-200 hover:text-white"
                >
                  Hotel Construction
                </Link>
                <Link
                  href="/expertise/multi-family"
                  className="block text-brand-100 transition-colors duration-200 hover:text-white"
                >
                  Multi-Family Construction
                </Link>
                <Link
                  href="/expertise/high-rise"
                  className="block text-brand-100 transition-colors duration-200 hover:text-white"
                >
                  High Rise Construction
                </Link>
                <Link
                  href="/expertise/modular"
                  className="block text-brand-100 transition-colors duration-200 hover:text-white"
                >
                  Modular Construction
                </Link>
              </nav>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 flex flex-col items-center justify-between border-t border-brand-600 pt-8 md:flex-row">
            <p className="text-sm text-brand-100">
              © 2024 DD&B Construction, Inc. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-6 md:mt-0">
              <Link
                href="/privacy"
                className="text-sm text-brand-100 transition-colors duration-200 hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-brand-100 transition-colors duration-200 hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
