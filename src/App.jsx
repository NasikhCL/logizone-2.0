import { NavLink, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, MessageCircle, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import { companyInfo } from './data/companyData';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-slate-50/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <NavLink to="/" className="flex items-center gap-3" aria-label="Logizone Freight home">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-lg shadow-sky-500/10">
              <img src="/assets/logizone-icon.svg" alt="Logizone Freight logo" className="h-full w-full object-contain p-1.5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">Logizone</p>
              <p className="text-sm font-semibold text-slate-900">Freight LLC</p>
            </div>
          </NavLink>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${isActive ? 'text-sky-700' : 'text-slate-600 hover:text-sky-700'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href={companyInfo.whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/25 transition hover:bg-[#1ebe5b]">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M20.52 3.48A11.76 11.76 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.15 1.6 5.95L.06 24l6.35-1.66A11.9 11.9 0 0 0 12.06 24c6.56 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.44-8.62ZM12.06 21.8c-1.9 0-3.77-.5-5.4-1.45l-.39-.23-3.76.98 1.01-3.66-.25-.38A9.9 9.9 0 0 1 2.2 11.9c0-5.47 4.4-9.9 9.86-9.9 2.63 0 5.1 1.02 6.96 2.88a9.82 9.82 0 0 1 2.88 6.96c0 5.46-4.43 9.9-9.9 9.9Zm5.44-7.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.79-1.68-2.09-.17-.3-.02-.47.13-.62.14-.15.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.59-.5-.5-.67-.5h-.57c-.2 0-.52.07-.8.38-.28.3-1.07 1.05-1.07 2.56 0 1.5 1.1 2.97 1.25 3.18.15.2 2.15 3.28 5.2 4.6.73.31 1.29.5 1.73.64.73.23 1.39.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35Z"/>
              </svg>
              WhatsApp
            </a>
            <NavLink to="/contact" className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-600/25 transition hover:bg-sky-700">
              Enquire Now
              <ArrowRight className="h-4 w-4" />
            </NavLink>
          </div>

          <button
            className="inline-flex items-center rounded-full border border-slate-200 p-2 text-slate-700 md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-sky-700' : 'text-slate-700'}`}
                >
                  {item.label}
                </NavLink>
              ))}
              <NavLink to="/contact" onClick={() => setMobileOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white">
                Enquire Now
              </NavLink>
            </div>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-slate-950 text-slate-300">
        <div className="mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 lg:px-8">
          <div className="mb-10 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 shadow-[0_30px_70px_rgba(15,23,42,0.35)] sm:p-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sky-300">Trusted logistics partner</p>
                <h3 className="mt-3 text-2xl font-black text-white">Ready to move your cargo with confidence?</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={companyInfo.whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/25 transition hover:bg-[#1ebe5b]">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                    <path d="M20.52 3.48A11.76 11.76 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.15 1.6 5.95L.06 24l6.35-1.66A11.9 11.9 0 0 0 12.06 24c6.56 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.44-8.62ZM12.06 21.8c-1.9 0-3.77-.5-5.4-1.45l-.39-.23-3.76.98 1.01-3.66-.25-.38A9.9 9.9 0 0 1 2.2 11.9c0-5.47 4.4-9.9 9.86-9.9 2.63 0 5.1 1.02 6.96 2.88a9.82 9.82 0 0 1 2.88 6.96c0 5.46-4.43 9.9-9.9 9.9Zm5.44-7.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.79-1.68-2.09-.17-.3-.02-.47.13-.62.14-.15.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.59-.5-.5-.67-.5h-.57c-.2 0-.52.07-.8.38-.28.3-1.07 1.05-1.07 2.56 0 1.5 1.1 2.97 1.25 3.18.15.2 2.15 3.28 5.2 4.6.73.31 1.29.5 1.73.64.73.23 1.39.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35Z"/>
                  </svg>
                  WhatsApp
                </a>
                <NavLink to="/contact" className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-500">
                  Get a Quote
                  <ArrowRight className="h-4 w-4" />
                </NavLink>
              </div>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-lg shadow-sky-500/10">
                  <img src="/assets/logizone-icon.svg" alt="Logizone Freight logo" className="h-full w-full object-contain p-1.5" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-sky-300">Logizone</p>
                  <p className="text-sm font-semibold text-white">Freight LLC</p>
                </div>
              </div>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">{companyInfo.tagline}</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">We help businesses move goods across China, the Middle East, Europe, Africa, and the USA with reliable freight forwarding and supply chain support.</p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Quick links</p>
              <ul className="mt-5 space-y-3 text-sm">
                <li><NavLink to="/about" className="text-slate-300 transition hover:text-white">About</NavLink></li>
                <li><NavLink to="/services" className="text-slate-300 transition hover:text-white">Services</NavLink></li>
                <li><NavLink to="/faq" className="text-slate-300 transition hover:text-white">FAQ</NavLink></li>
                <li><NavLink to="/contact" className="text-slate-300 transition hover:text-white">Contact</NavLink></li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Services</p>
              <ul className="mt-5 space-y-3 text-sm">
                <li className="text-slate-300">Sea Freight</li>
                <li className="text-slate-300">Air Freight</li>
                <li className="text-slate-300">Customs Clearance</li>
                <li className="text-slate-300">Warehousing</li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Office</p>
              <ul className="mt-5 space-y-4 text-sm text-slate-300">
                <li>{companyInfo.address}</li>
                <li>{companyInfo.phone}</li>
                <li>{companyInfo.email}</li>
                <li>{companyInfo.headquarters}</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              {/* <a href={companyInfo.socials.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white">LinkedIn</a> */}
              <a href={companyInfo.socials.instagram} target="_blank" rel="noreferrer" className="transition hover:text-white">Instagram</a>
              <a href={companyInfo.socials.facebook} target="_blank" rel="noreferrer" className="transition hover:text-white">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
