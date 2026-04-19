import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HERO_VIDEO_MP4 = 'https://cdn.prod.website-files.com/6967b7d6ca268b7c5aee11f6/6984c05de25da4bb7947937f_WhatsApp%20Video%202026-02-04%20at%20195901%20%281%29_mp4.mp4';
const HERO_VIDEO_WEBM = 'https://cdn.prod.website-files.com/6967b7d6ca268b7c5aee11f6/6984c05de25da4bb7947937f_WhatsApp%20Video%202026-02-04%20at%20195901%20%281%29_webm.webm';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-apple-dark">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/water-drops.jpg"
        aria-hidden="true"
      >
        <source src={HERO_VIDEO_WEBM} type="video/webm" />
        <source src={HERO_VIDEO_MP4} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

      <div className="relative z-10 content-width text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-white/70 text-sm font-semibold tracking-[0.2em] uppercase mb-6">
            Hydrogen Water Technology
          </p>
          <h1 className="text-white font-bold leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: 'clamp(44px, 8vw, 80px)', letterSpacing: '-0.003em' }}>
            Next Level<br />of Water.
          </h1>
          <p className="text-white/75 max-w-xl mx-auto mb-10" style={{ fontSize: '19px', lineHeight: '1.47' }}>
            Pure. Hydrogen-infused. Scientifically advanced. Experience water
            that works at the cellular level — for your health, your home, your life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#products" className="btn-primary px-8 py-3 text-base">
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
