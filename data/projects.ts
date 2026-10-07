'use client';

import { useState } from 'react';

export type Project = {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
  likes: number;
  shares: number;
  comments: number;
};

export function ProjectCard({ project }: { project: Project }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(project.likes);
  const [commentOpen, setCommentOpen] = useState(false);

  const handleLike = () => {
    setLiked((value) => {
      const next = !value;
      setLikeCount((count) => count + (next ? 1 : -1));
      return next;
    });
  };

  return (
    <article className="overflow-hidden rounded-[2rem] border border-stone-800 bg-stone-900">
      <div className="relative">
        <img src={project.image} alt={project.title} className="h-80 w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
        <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-stone-950/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-stone-200 backdrop-blur-sm">
          {project.category}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h3 className="text-2xl font-medium text-white">{project.title}</h3>
            <div className="mt-2 text-sm text-stone-400">{project.location} • {project.year}</div>
          </div>
          <span className="rounded-full border border-stone-700 px-3 py-1 text-xs uppercase tracking-[0.2em] text-stone-300">
            Featured
          </span>
        </div>

        <p className="mt-4 text-stone-300">{project.description}</p>

        <div className="mt-6 flex items-center justify-between border-t border-stone-800 pt-5 text-sm text-stone-300">
          <div className="flex items-center gap-5">
            <button onClick={handleLike} className={`transition ${liked ? 'text-luxury-300' : 'hover:text-white'}`}>
              {likeCount} likes
            </button>
            <button onClick={() => setCommentOpen((value) => !value)} className="hover:text-white">
              {project.comments} comments
            </button>
            <span>{project.shares} shares</span>
          </div>
          <a href="/contact" className="text-luxury-300 hover:text-luxury-200">
            Enquire
          </a>
        </div>

        {commentOpen ? (
          <div className="mt-5 rounded-2xl border border-stone-800 bg-stone-950 p-4">
            <div className="mb-3 text-sm uppercase tracking-[0.2em] text-stone-400">Recent comments</div>
            <div className="space-y-3 text-stone-300">
              <div>“The atmosphere is incredibly refined and calming.”</div>
              <div>“Beautiful use of natural tones and statement lighting.”</div>
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}
