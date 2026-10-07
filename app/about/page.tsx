import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { SectionHeading } from '@/components/section-heading';

export default function AboutPage() {
  return (
    <main className="bg-stone-950 text-stone-100">
      <SiteHeader />

      <section className="mx-auto max-w-5xl px-6 pb-20 pt-20 lg:px-10">
        <SectionHeading
          eyebrow="About us"
          title="We create spaces with culture, comfort, and lasting presence."
          description="AV Design Studio is a multidisciplinary architecture and interiors practice crafting soulful spaces for living, working, and gathering."
        />

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
              alt="Studio team in design meeting"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-6 text-stone-300">
            <p>
              Our studio blends architecture, interior styling, material planning, and brand-driven spatial storytelling to produce refined environments that feel considered and distinctive.
            </p>
            <p>
              We work closely with homeowners, developers, boutique hotels, businesses, and lifestyle brands to shape spaces that support daily rituals while making a memorable impression.
            </p>
            <p>
              Every project begins with listening—understanding how a place should feel, how people should move through it, and what details give it identity. The outcome is a space that is both expressive and practical.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-stone-800 bg-stone-900/70 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              ['12+', 'Years in practice'],
              ['40+', 'Design consultants'],
              ['120+', 'Projects completed'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-3xl border border-stone-800 bg-stone-950 p-8 text-center">
                <div className="text-4xl font-semibold text-white">{value}</div>
                <div className="mt-2 text-stone-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
