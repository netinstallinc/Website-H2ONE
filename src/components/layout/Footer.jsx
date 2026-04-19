import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../utils/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-apple-gray border-t border-gray-200">
      <div className="content-width py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div>
            <Link to="/" className="text-xl font-bold text-apple-dark tracking-tight">H2ONE</Link>
            <p className="text-apple-mid text-sm mt-1 max-w-xs">
              Next-generation hydrogen water systems for healthier homes.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-3">
            {NAV_LINKS.map(({ label, href }) => (
              href.startsWith('/#') ? (
                <a key={label} href={href} className="text-sm text-apple-mid hover:text-apple-dark transition-colors">
                  {label}
                </a>
              ) : (
                <Link key={label} to={href} className="text-sm text-apple-mid hover:text-apple-dark transition-colors">
                  {label}
                </Link>
              )
            ))}
            <Link to="/hydrogensystem" className="text-sm text-apple-mid hover:text-apple-dark transition-colors">Hydrogen System</Link>
            <Link to="/h2one-pure" className="text-sm text-apple-mid hover:text-apple-dark transition-colors">H2ONE Pure</Link>
            <Link to="/shower-filter" className="text-sm text-apple-mid hover:text-apple-dark transition-colors">Shower Filter</Link>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-apple-mid">
            Copyright &copy; {year} H2ONE Hydrogen Water. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-apple-mid hover:text-apple-dark transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-apple-mid hover:text-apple-dark transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
