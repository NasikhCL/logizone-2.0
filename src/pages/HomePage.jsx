import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, Globe2, MessageCircle, Sparkles } from 'lucide-react';
import Seo from '../components/Seo';
import { companyInfo, heroSlides, servicesData, faqData } from '../data/companyData';

const regions = companyInfo.globalRegions || [];
const stats = companyInfo.stats || [];
const hero = heroSlides[0];
const iconMap = {
  PlaneTakeoff: 'PlaneTakeoff',
  FileCheck: 'FileCheck',
  Utensils: 'Utensils',
  Warehouse: 'Warehouse',
  ShieldCheck: 'ShieldCheck',
  Landmark: 'Landmark',
  Ship: 'Ship',
  Globe2: 'Globe2',
  AlertTriangle: 'AlertTriangle',
  Truck: 'Truck',
};

const serviceIcons = {
  PlaneTakeoff: (props) => <svg viewBox="0 0 24 24" {...props}><path d="M2 16l20-8-8 20-2.4-8.8L2 16Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M13.2 10.8L22 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  FileCheck: (props) => <svg viewBox="0 0 24 24" {...props}><path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Z" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M14 2v5h5" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="m9 14 2 2 4-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Utensils: (props) => <svg viewBox="0 0 24 24" {...props}><path d="M8 3v7M5 3v7M11 3v7M8 10v11M5 10v11M18 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Warehouse: (props) => <svg viewBox="0 0 24 24" {...props}><path d="M3 9.5 12 4l9 5.5v9.5H3v-9.5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M9 13.5h6M9 17h6M3 9.5h18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  ShieldCheck: (props) => <svg viewBox="0 0 24 24" {...props}><path d="M12 3 5 6v6c0 4.5 2.8 8.2 7 10 4.2-1.8 7-5.5 7-10V6l-7-3Z" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="m9 12 2 2 4-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Landmark: (props) => <svg viewBox="0 0 24 24" {...props}><path d="M3 20h18M6 20V7l6-4 6 4v13M9 20v-6h6v6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>,
  Ship: (props) => <svg viewBox="0 0 24 24" {...props}><path d="M3 15h13l3 4H3v-4Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M16 15V7l4 4v4h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M7 11h6M7 15h3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  Globe2: (props) => <svg viewBox="0 0 24 24" {...props}><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" fill="none" stroke="currentColor" strokeWidth="1.8"/></svg>,
  AlertTriangle: (props) => <svg viewBox="0 0 24 24" {...props}><path d="M12 4 3.6 18.2A2 2 0 0 0 5.4 21h13.2a2 2 0 0 0 1.8-2.8L12 4Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M12 9v4M12 17h.01" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  Truck: (props) => <svg viewBox="0 0 24 24" {...props}><path d="M3 7h11v8H3V7Zm11 3h3l3 3v2H14v-5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><circle cx="7.5" cy="17.5" r="1.8" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="17.5" cy="17.5" r="1.8" fill="none" stroke="currentColor" strokeWidth="1.8"/></svg>,
};

function RevealSection({ children, className = '', delay = 0, as: Component = 'div' }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (!('IntersectionObserver' in window)) {
      node.classList.add('is-visible');
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      className={`reveal-section ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}

export default function HomePage() {
  const whyUsPoints = [
    {
      title: 'Fast, dependable execution',
      description: 'We move cargo with clear timelines, proactive updates, and hands-on coordination from booking to delivery.',
    },
    {
      title: 'Global trade coverage',
      description: 'From China and the Middle East to Europe, Africa, and the USA, we support major shipping lanes worldwide.',
    },
    {
      title: 'Customs and compliance support',
      description: 'Our team simplifies documentation, approvals, and regulatory coordination to reduce delays and risk.',
    },
    {
      title: 'Flexible logistics solutions',
      description: 'We tailor air, sea, project, warehousing, and cross-trade services to your cargo and business needs.',
    },
  ];

  return (
    <>
      <Seo
        title="LOGIZONE FREIGHT LLC | Freight Forwarding, Shipping & Logistics in Dubai"
        description="Logizone Freight is a Dubai-based logistics company offering freight forwarding, sea freight, air freight, customs clearance, warehousing, and global shipping solutions."
        keywords={companyInfo.seo.keywords}
        path="/"
      />
      <RevealSection as="section" className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.28),_transparent_30%),linear-gradient(135deg,_rgba(2,6,23,0.82),_rgba(15,23,42,0.72))]" />
          <img src={hero.image} alt={hero.title} className="h-full w-full object-cover opacity-35" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
          <div className="max-w-2xl text-white animate-fade-in">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-500/10 px-3 py-1.5 text-[10px] font-semibold tracking-[0.22em] text-sky-100 uppercase backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              {hero.badge}
            </div>
            <h1 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">{hero.title}</h1>
            <p className="mt-4 text-xl font-medium text-sky-100">{hero.subtitle}</p>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-200">{hero.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400">
                Enquire Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Explore Services
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-sm text-slate-200">
              {['Sea Freight', 'Air Freight', 'Customs Clearance', 'Warehousing'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm">{item}</span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-[0_30px_80px_rgba(14,116,144,0.35)] backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-slate-950/85 p-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-sky-200">Fast response</p>
                  <h2 className="mt-2 text-2xl font-bold">Need a shipment plan?</h2>
                </div>
                <div className="rounded-full bg-emerald-500/15 p-2 text-emerald-300">
                  <BadgeCheck className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Request</p>
                  <p className="mt-2 text-lg font-semibold">Freight consultation</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Coverage</p>
                  <p className="mt-2 text-lg font-semibold">China • Dubai • Middle East • Europe • Africa • USA • Worldwide</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Support</p>
                  <p className="mt-2 text-lg font-semibold">Customs, warehousing, and cross-trade expertise, and many more</p>
                </div>
              </div>

              <a href={companyInfo.whatsappUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400">
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection as="section" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats?.map((item) => (
            <div key={item.label} className="rounded-[1.8rem] border border-slate-200 bg-gradient-to-br from-white to-sky-50 p-6 shadow-[0_20px_40px_rgba(15,23,42,0.06)]">
              <p className="text-3xl font-black tracking-[-0.05em] text-sky-700">{item.value}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.subtext}</p>
            </div>
          ))}
        </div>
      </RevealSection>

      <RevealSection as="section" className="relative overflow-hidden bg-white py-20">
        <div className="absolute inset-0 opacity-90">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80" alt="Shipping container port" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.90),_rgba(241,245,249,0.88))]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">About us</p>
            <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">A dynamic freight partner built for global trade.</h2>
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6 rounded-[2rem] border border-white/60 bg-white/70 p-7 text-base leading-8 text-slate-600 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <p>{companyInfo.aboutIntro}</p>
              <p>{companyInfo.welcomeSummary}</p>
              <p>{companyInfo.whoWeAre}</p>
            </div>
            <div className="space-y-5">
              <div className="rounded-[2rem] border border-white/60 bg-white/75 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5"><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.2" /></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{companyInfo.mission}</p>
              </div>
              <div className="rounded-[2rem] border border-white/60 bg-white/75 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
                  <Globe2 className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{companyInfo.vision}</p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection as="section" className="relative overflow-hidden py-20">
        <div className="absolute inset-0 opacity-90">
          <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1600&q=80" alt="Cargo and logistics operations" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(15,23,42,0.80),_rgba(15,23,42,0.92))]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Services</p>
              <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Services we offer</h2>
            </div>
            <p className="max-w-xl text-slate-200">Tailored logistics, compliance, and cargo support for businesses moving goods across the world.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {servicesData.map((service) => {
            const IconComponent = serviceIcons[service.iconName] || serviceIcons.Globe2;
            return (
              <article key={service.id} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <img src={service.bgImage} alt={service.serviceTitle} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-slate-950/10" />
                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                    <span className="rounded-full border border-white/25 bg-white/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-100 backdrop-blur-sm">
                      {service.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900">{service.serviceTitle}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{service.serviceDescription}</p>
                  <ul className="mt-5 space-y-3">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                        <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                          <BadgeCheck className="h-3 w-3" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
          </div>
        </div>
      </RevealSection>

      <RevealSection as="section" className="relative overflow-hidden bg-[#f8fafc] py-20 text-slate-900">
        <div className="absolute inset-0 opacity-35">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80" alt="Why choose us background" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(248,250,252,0.92),_rgba(255,255,255,0.86))]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Why us</p>
            <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">Logistics expertise you can trust at every stage.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {whyUsPoints.map((item, index) => (
              <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <span className="text-lg font-bold">0{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection as="section" className="relative overflow-hidden bg-slate-900 py-20 text-white">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1600&q=80" alt="Global shipping network" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Global network</p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">Strategic reach across major trade lanes.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {regions.map((region) => (
              <div key={region.name} className="rounded-3xl border border-slate-700 bg-slate-800/70 p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-300">
                  <Globe2 className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold">{region.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{region.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection as="section" className="relative overflow-hidden bg-gradient-to-r from-sky-700 to-cyan-600 py-16 text-white">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80" alt="Freight logistics background" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-100">Ready to move your cargo?</p>
            <h2 className="mt-3 text-3xl font-black">Partner with a logistics team that keeps your supply chain moving.</h2>
          </div>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-sky-700 transition hover:bg-slate-100">
            Request a Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </RevealSection>

      <RevealSection as="section" className="relative mx-auto max-w-7xl overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 opacity-70">
          <img src="https://images.unsplash.com/photo-1616578492917-0f7a0b7c37d7?auto=format&fit=crop&w=1400&q=80" alt="Warehouse background" className="h-full w-full rounded-[2rem] object-cover" />
          <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(180deg,_rgba(255,255,255,0.78),_rgba(255,255,255,0.90))]" />
        </div>
        <div className="relative">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">FAQ</p>
            <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">Common questions about our logistics services</h2>
          </div>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={item.q} className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-sm">
                <h3 className="text-base font-semibold text-slate-900">{index + 1}. {item.q}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
    </>
  );
}
