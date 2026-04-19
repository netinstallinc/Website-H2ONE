import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-apple-dark">
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#001f4d] via-[#003380] to-[#0055cc] opacity-90"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(ellipse at 60% 40%, rgba(0,113,227,0.6) 0%, transparent 70%), radial-gradient(ellipse at 30% 70%, rgba(0,180,255,0.3) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 content-width text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-apple-blue text-sm font-semibold tracking-[0.2em] uppercase mb-6">
            Hydrogen Water Technology
          </p>
          <h1 className="text-white font-bold leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: 'clamp(44px, 8vw, 80px)', letterSpacing: '-0.003em' }}>
            Next Level<br />of Water.
          </h1>
          <p className="text-white/70 text-body max-w-xl mx-auto mb-10" style={{ fontSize: '19px' }}>
            Pure. Hydrogen-infused. Scientifically advanced. Experience water
            that works at the cellular level — for your health, your home, your life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#products"
              className="btn-primary px-8 py-3 text-base"
            >
              Discover More
            </a>
            <Link
              to="/contact"
              className="text-white/80 hover:text-white text-sm font-medium transition-colors flex items-center gap-1"
            >
              Get Free Water Test
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg className="w-6 h-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
