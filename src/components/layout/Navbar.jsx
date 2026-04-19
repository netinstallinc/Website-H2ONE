import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../../utils/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-white/90 backdrop-blur-xl shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-content mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xl font-bold tracking-tight text-apple-dark">H2ONE</span>
          <span className="text-xs text-apple-blue font-semibold uppercase tracking-widest hidden sm:block">Hydrogen Water</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              {href.startsWith('/#') ? (
                <a
                  href={href}
                  className="text-sm text-apple-dark hover:text-apple-blue transition-colors duration-200"
                >
                  {label}
                </a>
              ) : (
                <Link
                  to={href}
                  className="text-sm text-apple-dark hover:text-apple-blue transition-colors duration-200"
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link to="/contact" className="btn-primary text-sm">
            Free Water Test
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-apple-dark"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current mt-1 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current mt-1 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            href.startsWith('/#') ? (
              <a key={label} href={href} className="text-sm text-apple-dark py-1">
                {label}
              </a>
            ) : (
              <Link key={label} to={href} className="text-sm text-apple-dark py-1">
                {label}
              </Link>
            )
          ))}
          <Link to="/contact" className="btn-primary text-center mt-2">
            Free Water Test
          </Link>
        </div>
      )}
    </header>
  );
}
