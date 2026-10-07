import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { SectionHeading } from '@/components/section-heading';

export default function ContactPage() {
  return (
    <main className="bg-stone-950 text-stone-100">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 lg:px-10">
        <SectionHeading
          eyebrow="Contact"
          title="Tell us about your project and we’ll help guide the next step."
          description="Whether you’re planning a luxury home, a boutique commercial space, or a full exterior transformation, we’d love to hear from you."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-stone-800 bg-stone-900 p-8">
            <h3 className="text-2xl font-medium text-white">Studio details</h3>
            <div className="mt-6 space-y-5 text-stone-300">
              <p>Phone: +1 (415) 245-8700</p>
              <p>Email: hello@avdesignstudio.com</p>
              <p>Address: 540 Mercer Avenue, San Francisco, CA</p>
            </div>
          </div>

          <form className="rounded-[2rem] border border-stone-800 bg-stone-900 p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-stone-300">Full name</label>
                <input className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-white outline-none focus:border-luxury-400" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-stone-300">Email</label>
                <input className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-white outline-none focus:border-luxury-400" placeholder="you@example.com" />
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm text-stone-300">Project type</label>
                <input className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-white outline-none focus:border-luxury-400" placeholder="Interior, Exterior, Commercial..." />
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm text-stone-300">Project details</label>
                <textarea className="min-h-32 w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-white outline-none focus:border-luxury-400" placeholder="Tell us about your vision, timeline, and location." />
              </div>
            </div>

            <button type="submit" className="mt-6 inline-flex rounded-full bg-luxury-400 px-6 py-3 font-medium text-stone-950 transition hover:bg-luxury-300">
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
































