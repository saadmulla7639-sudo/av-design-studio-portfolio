import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AV Design Studio',
  description: 'Luxury architectural and interior design portfolio studio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
