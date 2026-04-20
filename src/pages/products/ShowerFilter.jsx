import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FEATURES = [
  { icon: '/images/sf-icon-diamond.png', title: 'Advanced Diamond Filtration Cartridge', desc: 'Multi-layer diamond-grade filtration media for superior contaminant capture.' },
  { icon: '/images/sf-icon-vitamin-c.png', title: 'Vitamin C Infusion Technology', desc: 'Neutralizes chlorine before it contacts your skin or hair — naturally and effectively.' },
  { icon: '/images/sf-icon-shower.png', title: 'Chlorine Odor Reduction', desc: 'Eliminates the harsh chemical smell of chlorinated municipal water.' },
  { icon: '/images/sf-icon-defence.png', title: 'Heavy Metal Filtration', desc: 'Reduces mercury, lead, and other dissolved metals from your shower stream.' },
  { icon: '/images/sf-icon-glowing-skin.png', title: 'Softer Skin Support', desc: 'Without chlorine stripping moisture, skin retains its natural softness and balance.' },
  { icon: '/images/sf-icon-woman-hair.png', title: 'Hair Smoothness Enhancement', desc: 'Reduces dryness and frizz — your hair will feel the difference after the first shower.' },
  { icon: '/images/sf-icon-moisturizer.png', title: 'Sensitive Skin Compatible', desc: 'Gentle filtration suitable for eczema, psoriasis, and reactive skin types.' },
  { icon: '/images/sf-icon-shower-head.png', title: 'Modern Compact Design', desc: 'Sleek profile fits any shower arm — looks as good as it performs.' },
  { icon: '/images/sf-icon-easy-installation.png', title: 'Tool-Free Installation', desc: 'Hand-tighten onto your existing shower arm in minutes. No plumber needed.' },
  { icon: '/images/sf-icon-refresh.png', title: 'Replaceable Cartridge System', desc: 'Simple swap every 3–6 months. Filter cartridges are easy to find and affordable.' },
  { icon: '/images/sf-icon-earth-location.png', title: 'South Korean Manufacturing', desc: 'Precision-engineered in South Korea to the highest quality standards.' },
];

const NOTES = [
  'For use with municipal water only.',
  'Do not modify or repair the unit.',
  'Avoid strong acidic cleaning agents.',
  'Keep away from heat sources.',
  'Filter lifespan varies based on water quality and household usage.',
];

export default function ShowerFilter() {
  return (
    <>
      <Helmet>
        <title>H2ONE Diamond Shower Filter — Vitamin C Filtration Technology</title>
        <meta name="description" content="The H2ONE Diamond Shower Filter uses Vitamin C infusion technology to neutralize chlorine, filter heavy metals, and transform your shower into a wellness ritual." />
      </Helmet>

      <main className="pt-14">
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center bg-apple-dark overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/product-shower-filter.png" alt="" aria-hidden="true"
              className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-apple-dark via-apple-dark/80 to-transparent" />
          </div>
          <div className="relative z-10 content-width py-24">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="max-w-2xl">
              <p className="text-apple-blue text-sm font-semibold tracking-[0.2em] uppercase mb-4">Shower Wellness</p>
              <h1 className="font-bold text-white mb-5" style={{ fontSize: 'clamp(36px, 6vw, 60px)', lineHeight: '1.06', letterSpacing: '-0.003em' }}>
                H2ONE Diamond<br />Shower Filter
              </h1>
              <p className="text-white/70 leading-relaxed mb-8" style={{ fontSize: '18px' }}>
                Turn your everyday shower into a refreshing wellness ritual. Reduces chlorine, filters heavy metals, and infuses Vitamin C — for better skin, better hair, better mornings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary px-8 py-3 text-base inline-block text-center">
                  Get Yours Today
                </Link>
                <a href="#features" className="text-white/70 hover:text-white border border-white/20 hover:border-white/40 px-8 py-3 rounded-xl text-base font-medium transition-all text-center">
                  See All Features
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 11 Features */}
        <section id="features" className="section-padding bg-white">
          <div className="content-width">
            <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="section-label">Why Diamond?</p>
              <h2 className="font-bold text-apple-dark" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: '1.08', letterSpacing: '-0.003em' }}>
                11 Reasons to Upgrade Your Shower
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {FEATURES.map((f, i) => (
                <motion.div key={f.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="bg-apple-gray rounded-2xl p-6 flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm p-2.5">
                    <img src={f.icon} alt={f.title} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-apple-dark text-sm mb-1">{f.title}</h3>
                    <p className="text-apple-mid text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vitamin C Technology */}
        <section className="section-padding bg-apple-dark">
          <div className="content-width">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <p className="text-apple-blue text-sm font-semibold tracking-[0.2em] uppercase mb-4">The Science</p>
                <h2 className="font-bold text-white mb-5" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: '1.08', letterSpacing: '-0.003em' }}>
                  Vitamin C<br />Filtration Technology
                </h2>
                <p className="text-white/60 leading-relaxed mb-6">
                  Vitamin C is widely recognized in wellness and beauty for its skin-supporting properties. In shower filtration, it neutralizes chlorine before it ever touches your skin — supporting a fresher, more comfortable shower experience.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Chlorine may leave skin feeling dry or tight after bathing. The Diamond Shower Filter addresses this at the source, converting chlorine into a harmless compound on contact.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6">
                  {[
                    { icon: '/images/sf-icon-vitamin-c.png', title: 'Neutralizes Chlorine', desc: 'Vitamin C converts chlorine into chloride — a neutral, harmless compound.' },
                    { icon: '/images/sf-icon-glowing-skin.png', title: 'Supports Skin Health', desc: 'Without chlorine disrupting the skin barrier, moisture stays where it belongs.' },
                    { icon: '/images/sf-icon-woman-hair.png', title: 'Protects Hair', desc: 'Chlorine-free water means less cuticle damage and healthier, shinier hair.' },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 p-2">
                        <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-sm mb-1">{item.title}</h3>
                        <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="section-padding bg-white">
          <div className="content-width">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <p className="section-label">Verified Quality</p>
                <h2 className="font-bold text-apple-dark mb-5" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: '1.08', letterSpacing: '-0.003em' }}>
                  Independent Lab Testing & Approval
                </h2>
                <p className="text-apple-mid leading-relaxed">
                  Certified quality by third parties, tested by independent laboratories. The Diamond Shower Filter meets rigorous international standards for filtration performance and material safety.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
                <img src="/images/sf-certifications.png" alt="Certifications" className="w-full rounded-2xl shadow-sm" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Replacement & Installation */}
        <section className="section-padding bg-apple-gray">
          <div className="content-width">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm">
                <img src="/images/sf-replacement.png" alt="Filter Replacement" className="w-full h-48 object-cover" />
                <div className="p-8">
                  <h3 className="font-bold text-apple-dark text-xl mb-3">Easy Cartridge Replacement</h3>
                  <p className="text-apple-mid text-sm leading-relaxed">
                    Replace your filter cartridge every 3–6 months, depending on your water quality and household usage. Quick twist-off design makes it a 30-second job.
                  </p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm">
                <img src="/images/sf-installation.png" alt="Quick Installation" className="w-full h-48 object-cover" />
                <div className="p-8">
                  <h3 className="font-bold text-apple-dark text-xl mb-3">Quick & Hassle-Free Installation</h3>
                  <p className="text-apple-mid text-sm leading-relaxed">
                    Enjoy purified water in minutes. The Diamond Shower Filter is designed for easy installation with no tools or technical knowledge required — just hand-tighten onto your existing shower arm.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="section-padding bg-white">
          <div className="content-width max-w-2xl mx-auto">
            <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="section-label">Usage Guidelines</p>
              <h2 className="font-bold text-apple-dark" style={{ fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: '1.08', letterSpacing: '-0.003em' }}>
                Important Notes
              </h2>
            </motion.div>
            <div className="space-y-3">
              {NOTES.map((note, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex gap-4 items-start bg-apple-gray rounded-2xl px-6 py-4">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                    <img src="/images/sf-icon-urgent-note.png" alt="" className="w-6 h-6 object-contain" />
                  </div>
                  <p className="text-apple-mid text-sm leading-relaxed">{note}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-apple-dark text-center">
          <div className="content-width max-w-2xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-bold text-white mb-4" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: '1.08', letterSpacing: '-0.003em' }}>
                Upgrade Your Shower Today
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Talk to a specialist and find out what's in your shower water — free, no commitment.
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
