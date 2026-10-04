import { companyInfo } from '../data/companyData';
import { Globe2 } from 'lucide-react';
import Seo from '../components/Seo';

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Logizone Freight | Dubai Freight Forwarding Company"
        description="Learn about Logizone Freight LLC, a Dubai-based logistics and freight forwarding company focused on global shipping, customs clearance, and customer-focused supply chain support."
        keywords="about Logizone Freight, freight forwarding company Dubai, shipping company UAE, logistics company Dubai"
        path="/about"
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">About us</p>
        <h1 className="mt-4 text-4xl font-black text-slate-900 sm:text-5xl">Global logistics expertise with a local perspective.</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6 text-base leading-8 text-slate-600">
          <p>{companyInfo.aboutIntro}</p>
          <p>{companyInfo.welcomeSummary}</p>
          <p>{companyInfo.whoWeAre}</p>
        </div>

        <div className="space-y-5 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="rounded-3xl bg-sky-50 p-5">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
              <Globe2 className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{companyInfo.mission}</p>
          </div>
          <div className="rounded-3xl bg-indigo-50 p-5">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
              <Globe2 className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{companyInfo.vision}</p>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {companyInfo.stats.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-3xl font-black text-sky-700">{stat.value}</p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">{stat.subtext}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
