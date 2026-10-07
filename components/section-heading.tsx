export function SiteFooter() {
  return (
    <footer className="border-t border-stone-800 bg-stone-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3 lg:px-10">
        <div>
          <div className="text-lg font-semibold tracking-[0.24em] text-white">AV</div>
          <p className="mt-4 max-w-xs text-stone-400">Luxury interior and architectural design studio creating spaces with clarity, character, and lasting impact.</p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-stone-500">Explore</h4>
          <ul className="mt-4 space-y-2 text-stone-300">
            <li><a href="/projects">Portfolio</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-stone-500">Connect</h4>
          <ul className="mt-4 space-y-2 text-stone-300">
            <li>Instagram</li>
            <li>Behance</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
