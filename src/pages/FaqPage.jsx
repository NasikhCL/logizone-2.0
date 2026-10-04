import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Seo from '../components/Seo';
import { faqData } from '../data/companyData';

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <Seo
        title="Freight & Logistics FAQs | Logizone Freight"
        description="Find answers about freight forwarding, customs clearance, shipment tracking, FCL/LCL services, and logistics support from Logizone Freight LLC in Dubai."
        keywords="freight FAQ, shipping company Dubai, customs clearance FAQ, cargo logistics UAE, air sea freight questions"
        path="/faq"
      />
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">FAQ</p>
        <h1 className="mt-4 text-4xl font-black text-slate-900 sm:text-5xl">Frequently asked questions</h1>
      </div>

      <div className="space-y-4">
        {faqData.map((item, index) => {
          const isOpen = index === openIndex;
          return (
            <div key={item.q} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span className="text-base font-semibold text-slate-900">{item.q}</span>
                <ChevronDown className={`h-5 w-5 text-slate-500 transition ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              {isOpen && <div className="border-t border-slate-200 px-5 py-4 text-sm leading-7 text-slate-600">{item.a}</div>}
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}
