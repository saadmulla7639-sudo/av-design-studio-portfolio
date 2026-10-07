'use client';

import { useEffect, useState } from 'react';
import { defaultProjects, type Project } from '@/data/projects';
import { ProjectCard } from '@/components/project-card';

const STORAGE_KEY = 'av-design-studio-projects';

export function ProjectGallery() {
  const [projects, setProjects] = useState<Project[]>(defaultProjects);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Project[];
        if (parsed.length > 0) setProjects(parsed);
      } catch {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProjects));
      }
    }
  }, []);

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}




















































