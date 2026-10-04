import { BadgeCheck, Globe2 } from 'lucide-react';
import Seo from '../components/Seo';
import { servicesData } from '../data/companyData';

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

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Logistics Services in Dubai | Freight Forwarding, Customs & Warehousing"
        description="Explore Logizone Freight services including air freight, sea freight, road freight, customs clearance, warehousing, product registration, and dangerous goods handling in Dubai."
        keywords="air freight Dubai, sea freight Dubai, road freight Dubai, customs clearance UAE, warehouse Dubai, dangerous goods shipping, FCL LCL shipment"
        path="/services"
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Our services</p>
        <h1 className="mt-4 text-4xl font-black text-slate-900 sm:text-5xl">End-to-end solutions for every cargo challenge.</h1>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {servicesData.map((service) => {
          const Icon = serviceIcons[service.iconName] || Globe2;
          return (
            <article key={service.id} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img src={service.bgImage} alt={service.serviceTitle} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-slate-950/10" />
                <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <span className="rounded-full border border-white/25 bg-white/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-100 backdrop-blur-sm">
                    {service.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-slate-900">{service.serviceTitle}</h2>
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
    </>
  );
}
