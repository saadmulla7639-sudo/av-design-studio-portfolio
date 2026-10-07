const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
  { label: 'Upload', href: '/admin' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-800 bg-stone-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-luxury-300 to-luxury-600 text-sm font-semibold text-stone-950">
            AV
          </div>
          <div>
            <div className="text-lg font-semibold tracking-[0.24em] text-white">AV</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-stone-400">Design Studio</div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-[11px] uppercase tracking-[0.2em] text-stone-300 transition hover:text-luxury-300">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="/contact" className="rounded-full border border-luxury-400 bg-luxury-400 px-5 py-2.5 text-sm font-medium text-stone-950 transition hover:bg-luxury-300">
          Get a Quote
        </a>
      </div>
    </header>
  );
}





























