import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FEATURES = [
  {
    icon: '/images/pure-icon-shield.png',
    title: 'One-Piece Integrated Design',
    desc: 'No separate tanks or bulky components. The H2ONE Pure combines everything into a single sleek unit that fits effortlessly under any counter.',
  },
  {
    icon: '/images/pure-icon-double-tap.png',
    title: 'Smart Digital Display Faucet',
    desc: 'Intuitive touch interface shows filter status, TDS levels, and lets you switch between purified and hydrogen-enriched water with a tap.',
  },
  {
    icon: '/images/pure-icon-water-drops.png',
    title: 'Real-Time Fresh Water Filtration',
    desc: 'Tankless design delivers freshly filtered water instantly — no stale stored water, no wasted space, no waiting.',
  },
  {
    icon: '/images/pure-icon-membrane.png',
    title: 'High-Efficiency 600G RO Membrane',
    desc: 'Industry-leading reverse osmosis membrane removes up to 99% of TDS, heavy metals, bacteria, and chemical contaminants.',
  },
];

const SPECS = [
  { label: 'System Type', value: 'Tankless Reverse Osmosis' },
  { label: 'RO Membrane', value: '600G High-Efficiency' },
  { label: 'TDS Reduction', value: '95–99%' },
  { label: 'Flow Rate', value: 'Instant (no storage delay)' },
  { label: 'Design', value: 'One-piece integrated unit' },
  { label: 'Filter Life', value: '12 months (recommended)' },
  { label: 'Power', value: '24V DC adapter (included)' },
  { label: 'Warranty', value: '2 years (system), 1 year (filters)' },
];

export default function H2OnePure() {
  return (
    <>
      <Helmet>
        <title>H2ONE Pure — Revolutionary Tankless Water Purification</title>
        <meta name="description" content="H2ONE Pure: one-piece tankless RO system with smart digital display, 600G membrane, and real-time fresh water filtration. No tanks. No clutter. Pure water, instantly." />
      </Helmet>

      <main className="pt-14">
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center bg-apple-dark overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/product-h2one-pure.png" alt="" aria-hidden="true"
              className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-apple-dark via-apple-dark/80 to-transparent" />
          </div>
          <div className="relative z-10 content-width py-24">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="max-w-2xl">
              <p className="text-apple-blue text-sm font-semibold tracking-[0.2em] uppercase mb-4">Pure Innovation</p>
              <h1 className="font-bold text-white mb-5" style={{ fontSize: 'clamp(36px, 6vw, 60px)', lineHeight: '1.06', letterSpacing: '-0.003em' }}>
                H2ONE Pure<br />Tankless Water Purification
              </h1>
              <p className="text-white/70 leading-relaxed mb-8" style={{ fontSize: '18px' }}>
                Revolutionary one-piece design. Instant pure water. Zero tanks. The smarter way to clean water.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary px-8 py-3 text-base inline-block text-center">
                  Get Free Water Test
                </Link>
                <a href="#features" className="text-white/70 hover:text-white border border-white/20 hover:border-white/40 px-8 py-3 rounded-xl text-base font-medium transition-all text-center">
                  Explore Features
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4 Key Features */}
        <section id="features" className="section-padding bg-white">
          <div className="content-width">
            <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="section-label">What Sets It Apart</p>
              <h2 className="font-bold text-apple-dark" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: '1.08', letterSpacing: '-0.003em' }}>
                Designed for Modern Living
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {FEATURES.map((f, i) => (
                <motion.div key={f.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-apple-gray rounded-2xl p-8 flex gap-5 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm p-3">
                    <img src={f.icon} alt={f.title} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-apple-dark mb-2">{f.title}</h3>
                    <p className="text-apple-mid text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Replacement */}
        <section className="section-padding bg-apple-dark">
          <div className="content-width">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <p className="text-apple-blue text-sm font-semibold tracking-[0.2em] uppercase mb-4">Maintenance</p>
                <h2 className="font-bold text-white mb-5" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: '1.08', letterSpacing: '-0.003em' }}>
                  Tool-Free<br />Filter Replacement
                </h2>
                <p className="text-white/60 leading-relaxed mb-8">
                  No plumbers. No tools. No headaches. Changing your filters is as simple as Twist. Replace. Done.
                </p>
                <div className="flex gap-6">
                  {[['Twist', '01'], ['Replace', '02'], ['Done', '03']].map(([step, num]) => (
                    <div key={num} className="text-center">
                      <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-apple-blue font-bold text-sm mb-2">
                        {num}
                      </div>
                      <p className="text-white font-medium text-sm">{step}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
                className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="font-semibold text-white mb-2">Dual Safety Valves</h3>
                  <p className="text-white/50 text-sm leading-relaxed">Automatic shutoff prevents water flow during filter changes — no mess, no leaks.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="font-semibold text-white mb-2">Automatic Leak Prevention</h3>
                  <p className="text-white/50 text-sm leading-relaxed">Integrated sensors monitor the system 24/7 and shut down automatically if any irregularity is detected.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="font-semibold text-white mb-2">Integrated Water Channel Design</h3>
                  <p className="text-white/50 text-sm leading-relaxed">One-piece construction eliminates external tubing points — the most common source of leaks in traditional systems.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Specs */}
        <section className="section-padding bg-white">
          <div className="content-width max-w-3xl mx-auto">
            <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="section-label">Technical Specs</p>
              <h2 className="font-bold text-apple-dark" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: '1.08', letterSpacing: '-0.003em' }}>
                System Specifications
              </h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-apple-gray rounded-3xl overflow-hidden">
              {SPECS.map((s, i) => (
                <div key={s.label} className={`flex items-center justify-between px-8 py-4 ${i !== SPECS.length - 1 ? 'border-b border-gray-200' : ''}`}>
                  <span className="text-apple-mid text-sm">{s.label}</span>
                  <span className="text-apple-dark font-medium text-sm text-right max-w-xs">{s.value}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-apple-gray text-center">
          <div className="content-width max-w-2xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-bold text-apple-dark mb-4" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: '1.08', letterSpacing: '-0.003em' }}>
                Ready for Pure Water?
              </h2>
              <p className="text-apple-mid mb-8 leading-relaxed">
                Get a free in-home water quality test and see exactly what's in your water before choosing your system.
              </p>
              <Link to="/contact" className="btn-primary px-10 py-3 text-base inline-block">
                Book Free Water Test
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
