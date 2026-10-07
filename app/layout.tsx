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

export const defaultProjects: Project[] = [
  {
    id: 1,
    title: 'The Seabreeze Villa',
    category: 'Residential',
    location: 'Bali, Indonesia',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    description: 'A breezy tropical residence blending warm timber textures, sculptural lighting, and strong indoor-outdoor circulation.',
    likes: 204,
    shares: 32,
    comments: 18,
  },
  {
    id: 2,
    title: 'Harbor House',
    category: 'Exterior',
    location: 'Copenhagen, Denmark',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    description: 'A waterfront home designed around panoramic views, refined stone palettes, and a soft modernist silhouette.',
    likes: 168,
    shares: 20,
    comments: 13,
  },
  {
    id: 3,
    title: 'The Glass Courtyard',
    category: 'Commercial',
    location: 'Dubai, UAE',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
    description: 'A premium hospitality concept with dramatic glazing, layered textures, and an elegant social flow for guests.',
    likes: 211,
    shares: 45,
    comments: 27,
  },
  {
    id: 4,
    title: 'Terracotta Courtyard',
    category: 'Interior',
    location: 'Lisbon, Portugal',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
    description: 'A warm, inviting interior concept layered with natural stone, earthy tones, and tactile materials.',
    likes: 154,
    shares: 19,
    comments: 11,
  },
  {
    id: 5,
    title: 'Elevation 24',
    category: 'Exterior',
    location: 'Los Angeles, USA',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    description: 'A California residence focused on sculpted massing, durable finishes, and refined indoor-outdoor integration.',
    likes: 178,
    shares: 27,
    comments: 16,
  },
  {
    id: 6,
    title: 'Nexa Lounge',
    category: 'Hospitality',
    location: 'Singapore',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    description: 'A moody hospitality lounge designed to feel social, cinematic, and memorable from arrival to departure.',
    likes: 192,
    shares: 41,
    comments: 21,
  },
];
































