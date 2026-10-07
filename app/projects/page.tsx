import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/project-card';
import { SectionHeading } from '@/components/section-heading';

export default function PortfolioPage() {
  return (
    <main className="bg-stone-950 text-stone-100">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-10">
        <SectionHeading
          eyebrow="Portfolio"
          title="Interior and exterior projects shaped by thoughtful design."
          description="From contemporary residences to experiential hospitality spaces, our portfolio celebrates craftsmanship, atmosphere, and purpose."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
