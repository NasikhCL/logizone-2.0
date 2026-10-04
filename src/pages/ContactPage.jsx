import { Clock3, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import Seo from '../components/Seo';
import { companyInfo } from '../data/companyData';

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Logizone Freight | Dubai Cargo & Freight Experts"
        description="Contact Logizone Freight LLC for air freight, sea freight, customs clearance, warehousing, and shipping solutions in Dubai and international trade lanes."
        keywords="contact freight forwarder Dubai, logistics company contact, shipping support Dubai, customs clearance contact UAE"
        path="/contact"
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Contact us</p>
        <h1 className="mt-4 text-4xl font-black text-slate-900 sm:text-5xl">Let’s build a smarter supply chain for your business.</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5 rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Location</p>
              <p className="mt-2 text-base leading-7 text-slate-700">{companyInfo.address}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Phone</p>
              <a href={`tel:${companyInfo.phoneRaw}`} className="mt-2 inline-block text-base text-slate-700 hover:text-sky-700">{companyInfo.phone}</a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Email</p>
              <a href={`mailto:${companyInfo.email}`} className="mt-2 inline-block text-base text-slate-700 hover:text-sky-700">{companyInfo.email}</a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
              <Clock3 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Office Hours</p>
              <p className="mt-2 text-base text-slate-700">Monday to Saturday</p>
              <p className="text-base text-slate-700">9:00 AM – 7:00 PM</p>
            </div>
          </div>

          <div className="pt-2">
            <a href={companyInfo.whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400">
              <MessageCircle className="h-4 w-4" />
              WhatsApp us
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100">
          <iframe
            title="Logizone Freight location"
            src={companyInfo.googleMapsEmbed}
            className="h-full min-h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
    </>
  );
}
