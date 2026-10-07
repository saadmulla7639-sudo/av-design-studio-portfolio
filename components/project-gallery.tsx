'use client';

import { useEffect, useState } from 'react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { defaultProjects, type Project } from '@/data/projects';

const STORAGE_KEY = 'av-design-studio-projects';

const initialForm = {
  title: '',
  category: 'Interior',
  location: '',
  year: new Date().getFullYear().toString(),
  image: '',
  description: '',
};

export default function AdminPage() {
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Project[];
        if (parsed.length > 0) setProjects(parsed);
      } catch {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProjects));
      }
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProjects));
    }
  }, []);

  const handleChange = (field: string, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.title || !form.location || !form.image || !form.description) {
      setMessage('Please complete all fields before submitting.');
      return;
    }

    const newProject: Project = {
      id: Date.now(),
      title: form.title,
      category: form.category,
      location: form.location,
      year: form.year,
      image: form.image,
      description: form.description,
      likes: 0,
      shares: 0,
      comments: 0,
    };

    const nextProjects = [newProject, ...projects];
    setProjects(nextProjects);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextProjects));
    setForm(initialForm);
    setMessage('Project uploaded successfully and added to the gallery.');
  };

  return (
    <main className="bg-stone-950 text-stone-100">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="mb-8">
          <div className="text-sm uppercase tracking-[0.2em] text-luxury-300">Creator dashboard</div>
          <h1 className="mt-4 text-4xl font-semibold text-white">Upload architectural and interior design concepts</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-stone-800 bg-stone-900 p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm text-stone-300">Project title</label>
                <input
                  value={form.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                  className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-white outline-none focus:border-luxury-400"
                  placeholder="The Horizon Residence"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-stone-300">Category</label>
                <select
                  value={form.category}
                  onChange={(e) => handleChange('category', e.target.value)}
                  className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-white outline-none focus:border-luxury-400"
                >
                  <option>Interior</option>
                  <option>Exterior</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Hospitality</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-stone-300">Year</label>
                <input
                  value={form.year}
                  onChange={(e) => handleChange('year', e.target.value)}
                  className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-white outline-none focus:border-luxury-400"
                  placeholder="2026"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm text-stone-300">Location</label>
                <input
                  value={form.location}
                  onChange={(e) => handleChange('location', e.target.value)}
                  className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-white outline-none focus:border-luxury-400"
                  placeholder="Dubai, UAE"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm text-stone-300">Image URL</label>
                <input
                  value={form.image}
                  onChange={(e) => handleChange('image', e.target.value)}
                  className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-white outline-none focus:border-luxury-400"
                  placeholder="https://images.unsplash.com/..."
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm text-stone-300">Project description</label>
                <textarea
                  value={form.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                  className="min-h-32 w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-white outline-none focus:border-luxury-400"
                  placeholder="Describe the design concept, style, materials, and project intent."
                />
              </div>
            </div>

            <button type="submit" className="mt-6 inline-flex rounded-full bg-luxury-400 px-6 py-3 font-medium text-stone-950 transition hover:bg-luxury-300">
              Publish Project
            </button>

            {message ? <div className="mt-5 text-sm text-luxury-200">{message}</div> : null}
          </form>

          <div className="rounded-[2rem] border border-stone-800 bg-stone-900 p-8">
            <h2 className="text-2xl font-medium text-white">Recent uploads</h2>
            <div className="mt-6 space-y-4">
              {projects.slice(0, 4).map((project) => (
                <div key={project.id} className="flex gap-4 rounded-2xl border border-stone-800 bg-stone-950 p-3">
                  <img src={project.image} alt={project.title} className="h-20 w-20 rounded-xl object-cover" />
                  <div>
                    <div className="font-medium text-white">{project.title}</div>
                    <div className="mt-1 text-sm text-stone-400">{project.category} • {project.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
















































