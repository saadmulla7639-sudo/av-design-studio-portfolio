import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { SectionHeading } from '@/components/section-heading';
import { defaultProjects, type Project } from '@/data/projects';
import { ProjectCard } from '@/components/project-card';

const featured = defaultProjects.slice(0, 3);

export default function Home() {
  return (
    <main className="bg-stone-950 text-stone-100">
      <SiteHeader />

      <section className="relative isolate overflow-hidden bg-stone-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(180,122,71,0.24),_transparent_35%)]" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-40 lg:block" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-28">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex rounded-full border border-stone-700 bg-stone-900/70 px-3 py-1 text-xs uppercase tracking-[0.24em] text-stone-300">
              AV Design Studio
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              Designing architectural experiences that feel premium, warm, and unforgettable.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-stone-300">
              We create interior and exterior design concepts for residential, hospitality, and commercial projects—balancing beauty, functionality, and timeless value.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#portfolio" className="rounded-full bg-luxury-400 px-6 py-3 font-medium text-stone-950 transition hover:bg-luxury-300">
                Explore Portfolio
              </a>
              <a href="/contact" className="rounded-full border border-stone-600 bg-stone-900/60 px-6 py-3 font-medium text-white transition hover:border-luxury-300 hover:text-luxury-200">
                Book a Consultation
              </a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-stone-800 pt-6">
              <div>
                <div className="text-3xl font-semibold text-white">120+</div>
                <div className="mt-2 text-sm text-stone-400">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-white">18</div>
                <div className="mt-2 text-sm text-stone-400">Awards</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-white">9yrs</div>
                <div className="mt-2 text-sm text-stone-400">Experience</div>
              </div>
            </div>
          </div>

          <div className="relative hidden min-h-[500px] items-end justify-center lg:flex">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-stone-800 via-stone-900 to-stone-950 shadow-glow" />
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80"
              alt="Luxury architectural design interior"
              className="relative h-[560px] w-[82%] rounded-[2rem] object-cover shadow-glow"
            />
            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-stone-900/80 p-4 backdrop-blur-sm">
              <div className="text-xs uppercase tracking-[0.2em] text-stone-400">Featured concept</div>
              <div className="mt-2 text-2xl font-medium text-white">The Seabreeze Villa</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <SectionHeading
          eyebrow="Our approach"
          title="Designing spaces with clarity, creativity, and commercial insight."
          description="From concept to finishing detail, we build architecture and interiors that balance beauty, practicality, and high-value living."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Residential Design',
              text: 'Luxury homes, smart layouts, warm materials, and welcoming architectural storytelling tailored to how you live.',
            },
            {
              title: 'Commercial Spaces',
              text: 'Workplaces, hospitality venues, and retail spaces with stronger identity, flow, and user experience.',
            },
            {
              title: 'Architectural Styling',
              text: 'Façade improvements, landscape integration, and external statements that elevate the character of the property.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-stone-800 bg-stone-900 p-7">
              <div className="mb-5 h-12 w-12 rounded-2xl bg-gradient-to-br from-luxury-300 to-luxury-500" />
              <h3 className="text-2xl font-medium text-white">{item.title}</h3>
              <p className="mt-4 text-stone-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="bg-stone-900/70 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Selected work"
            title="Interior and exterior projects that feel timeless and memorable."
            description="A curated collection of architecture and design stories created for modern living, business, and hospitality spaces."
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {featured.map((project: Project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <SectionHeading
          eyebrow="How we work"
          title="A collaborative process from concept to completion."
          description="We guide each phase with careful planning, material expertise, and an eye for how a space should feel daily."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            ['01', 'Discovery', 'We review the site, goals, audience, and design ambition.'],
            ['02', 'Concept', 'We craft moodboards, layouts, and visual direction.'],
            ['03', 'Development', 'We refine materiality, lighting, and technical detailing.'],
            ['04', 'Delivery', 'We finalize styling and support the project through execution.'],
          ].map(([step, title, text]) => (
            <div key={step} className="rounded-3xl border border-stone-800 bg-stone-900 p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-luxury-300">{step}</div>
              <h3 className="mt-5 text-xl font-medium text-white">{title}</h3>
              <p className="mt-3 text-stone-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-stone-800 bg-stone-950 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Testimonials"
            title="Clients trust us to transform ideas into spaces they genuinely love."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              '“AV Design Studio translated our vision into a home that feels elegant, practical, and deeply personal.”',
              '“Their design approach elevated our commercial space and made it more memorable for clients and staff alike.”',
              '“From concept to final styling, the process felt premium, clear, and thoughtfully guided.”',
            ].map((quote, index) => (
              <div key={index} className="rounded-3xl border border-stone-800 bg-stone-900 p-7">
                <p className="text-lg text-stone-200">{quote}</p>
                <div className="mt-6 text-sm uppercase tracking-[0.2em] text-stone-400">Client Review</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="rounded-[2rem] border border-stone-800 bg-gradient-to-br from-stone-900 to-stone-950 p-8 shadow-glow md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-luxury-300">Let’s build something exceptional</div>
              <h3 className="mt-3 text-3xl font-medium text-white">Start your next architectural story with us.</h3>
            </div>
            <a href="/contact" className="inline-flex rounded-full bg-luxury-400 px-6 py-3 text-center font-medium text-stone-950 transition hover:bg-luxury-300">
              Contact Studio
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
















































































