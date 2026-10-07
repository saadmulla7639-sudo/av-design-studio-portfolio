import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { SectionHeading } from '@/components/section-heading';
import { ProjectGallery } from '@/components/project-gallery';

export default function PortfolioPage() {
  return (
    <main className="bg-stone-950 text-stone-100">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-10">
        <SectionHeading
          eyebrow="Portfolio"
          title="Interior and exterior projects shaped by thoughtful design."
          description="From contemporary residences to immersive hospitality spaces, our portfolio showcases craftsmanship, atmosphere, and practical luxury."
        />

        <ProjectGallery />
      </section>

      <SiteFooter />
    </main>
  );
}














































































