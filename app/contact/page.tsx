import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { SectionHeading } from '@/components/section-heading';

const services = [
  {
    title: 'Architectural Design',
    description: 'Concept planning, elevation studies, façade design, and holistic spatial direction for residential and commercial developments.',
  },
  {
    title: 'Interior Styling',
    description: 'Room-by-room design planning, finishes, custom detailing, lighting design, and tailored material palettes.',
  },
  {
    title: 'Exterior Enhancement',
    description: 'Landscape coordination, façade updates, outdoor living concepts, and curb-appeal transformations for modern properties.',
  },
  {
    title: 'Turnkey Consultation',
    description: 'End-to-end guidance for design selection, execution support, and final styling review to keep the project cohesive and polished.',
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-stone-950 text-stone-100">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-10">
        <SectionHeading
          eyebrow="Services"
          title="Thoughtful architectural and interior services tailored to your vision."
          description="We help clients refine their ideas into beautiful spaces that feel premium, purposeful, and enduring."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="rounded-3xl border border-stone-800 bg-stone-900 p-7">
              <h3 className="text-2xl font-medium text-white">{service.title}</h3>
              <p className="mt-4 text-stone-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}


































