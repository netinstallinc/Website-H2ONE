import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const FAUCET_FEATURES = [
  { title: 'Instant Mode Selection', desc: 'Toggle between ultra-pure reverse osmosis water or freshly generated hydrogen-enriched water.' },
  { title: 'Live Filter Monitoring', desc: 'Real-time display of filter status and system performance.' },
  { title: 'Adjustable Dispense Volume', desc: 'Select precise water quantities for various uses.' },
  { title: 'Hydrogen Activation On Demand', desc: 'Fresh hydrogen is generated only when you need it.' },
  { title: 'Touch Interface with LED Display', desc: 'Digital interface showing system status and water selection.' },
  { title: 'Premium Matte Black Finish', desc: 'Luxury aesthetic designed for modern kitchens.' },
];

const FILTRATION_STAGES = [
  { num: '01', name: 'Sediment Filter', desc: 'Removes large particles, rust, and debris.' },
  { num: '02', name: 'Activated Carbon Block', desc: 'Eliminates chlorine, VOCs, and odors.' },
  { num: '03', name: 'Anti-Scale Protection', desc: 'Prevents scale buildup on the RO membrane.' },
  { num: '04', name: 'RO 3.0 Membrane', desc: 'Advanced molecular separation — 99%+ TDS reduction.' },
  { num: '05', name: 'Post Carbon Polishing', desc: 'Final purification for crisp, clean taste.' },
  { num: '06', name: 'Mineral Remineralization', desc: 'Restores beneficial trace minerals.' },
  { num: '07', name: 'Hydrogen Infusion', desc: 'Electrolyzes water to dissolve molecular H₂ gas.' },
  { num: '08', name: 'UV Sterilization', desc: 'Optional stage — kills any remaining microbial matter.' },
];

const REMOVES = [
  {
    category: 'Microbiological',
    color: 'bg-blue-50 border-blue-100',
    labelColor: 'text-blue-700',
    items: ['Bacteria', 'E. coli', 'Salmonella', 'Shigella', 'Protozoa', 'Giardia', 'Cryptosporidium', 'Viruses', 'Norovirus', 'Rotavirus'],
  },
  {
    category: 'Heavy Metals',
    color: 'bg-amber-50 border-amber-100',
    labelColor: 'text-amber-700',
    items: ['Lead', 'Arsenic', 'Mercury', 'Chromium', 'Nickel', 'Copper', 'Iron', 'Manganese', 'Cobalt', 'Selenium', 'Zinc'],
  },
  {
    category: 'Chemical Contaminants',
    color: 'bg-red-50 border-red-100',
    labelColor: 'text-red-700',
    items: ['Chlorine', 'Chlorine by-products', 'Fluoride', 'Nitrates', 'Nitrites', 'Pesticides', 'Herbicides', 'Industrial solvents', 'Pharmaceutical residues', 'Organic compounds'],
  },
  {
    category: 'Dissolved Minerals & Salts',
    color: 'bg-green-50 border-green-100',
    labelColor: 'text-green-700',
    items: ['Sodium', 'Potassium', 'Calcium', 'Magnesium', 'Chlorides', 'Bicarbonates', 'Sulfates', 'Inorganic salts', 'Radium', 'Phosphorous', 'Total Dissolved Solids (TDS)'],
  },
];

const STUDIES = [
  { title: 'Drinking Hydrogen Water Enhances Endurance and Relieves Fatigue', desc: 'Study showed hydrogen water improved endurance and reduced fatigue before exercise based on oxygen consumption and perceived exertion measurements.' },
  { title: 'Hydrogen-Rich Water Improves Mood, Anxiety, and Autonomic Nerve Function', desc: 'Double-blind placebo study of 26 adults demonstrated hydrogen water affects quality of life by improving central nervous system functions.' },
  { title: 'Controlled Cholesterol Levels by Drinking Hydrogen Water', desc: 'Meta-analysis of 7 studies (279 participants) showed significant reduction in total cholesterol, LDL, and triglycerides.' },
  { title: 'Hydrogen Water for Liver Function and Oxidative Stress', desc: '60 hepatitis B patients showed improved liver function and reduced viral DNA after 6 weeks of hydrogen water treatment.' },
  { title: 'Hydrogen-Rich Water Reduces Inflammation and Prevents Cell Death', desc: 'Double-blind placebo study showed 1.5L daily for 4 weeks reduced cell death and inflammatory responses.' },
  { title: 'Hydrogen Water for Heart Disease', desc: 'Research suggests molecular hydrogen could treat various cardiovascular conditions including cardiac injury, atherosclerosis, and cardiotoxicity.' },
  { title: 'How Hydrogen Water Supports the Metabolism', desc: 'Study of type 2 diabetes patients indicated hydrogen water may prevent diabetes and insulin resistance.' },
  { title: 'Increased Physical Health in Women with Panic Disorder', desc: 'Randomized placebo-controlled study showed 1.5L hydrogen water for 3 months decreased inflammatory markers and body pain.' },
  { title: 'Hydrogen Water Helps Chronic Lung Disease', desc: '10 patients treated for 4 weeks showed decreased oxidative stress and improved oxygen saturation with increased exercise tolerance.' },
];

const FAQS = [
  { q: 'Is it safe to consume hydrogen gas?', a: 'Yes! Consuming hydrogen gas is completely safe. The FDA has given hydrogen-enriched water GRAS status — Generally Recognized As Safe.' },
  { q: 'What is hydrogen-enriched water?', a: 'Water with dissolved molecular hydrogen gas (H₂), separated from water using electrolysis, then added to another water stream.' },
  { q: "Doesn't water already have hydrogen in it?", a: 'The hydrogen in water is chemically bonded to oxygen, so in order to get the true benefits of molecular hydrogen, it needs to be separated from the oxygen and consumed in its gas form.' },
  { q: 'What is the benefit of hydrogen-enriched water?', a: 'Reduces oxidative stress and inflammation, with over 1,000 published scientific studies demonstrating benefits.' },
  { q: 'When were the benefits of hydrogen-enriched water first discovered?', a: 'First studied in 1888 for wound healing; gained scientific attention after a 2007 Nature Medicine article by Dr. Ohta\'s group.' },
  { q: 'What is electrolysis, and how does it work?', a: 'Water is energized with electricity, causing a small amount of hydrogen and oxygen to convert to gas. H2ONE harvests hydrogen without changing the pH of your water.' },
  { q: 'Does H2ONE Hydro+ Water have any taste?', a: 'Infusing hydrogen gas into water with electrolysis does not add a taste to the water.' },
  { q: 'Can I take medications with H2ONE Hydro+ Water?', a: 'H2ONE Hydro+ Water is perfectly safe for taking medications since it has a neutral pH.' },
  { q: 'How long will hydrogen gas stay in my water?', a: 'Hydrogen gas lasts 3–5 hours in an open cup. It can be retained for up to 10 days if the container is filled to the top and tightly sealed.' },
  { q: 'Does hydrogen gas stay in the water if I freeze it?', a: 'No. Because hydrogen gas is very small, it can escape through very tight spaces when frozen.' },
  { q: 'Why is this better than regular tap water?', a: 'Superior 8-stage filtration removes contaminants found in municipal and well water, plus you get the added molecular hydrogen benefits.' },
  { q: 'Can I use the H2ONE Hydro+ with well water?', a: 'Yes, with the recommendation to install a prefilter to extend the machine lifespan.' },
  { q: 'Where can I learn more about molecular hydrogen?', a: 'The Molecular Hydrogen Institute allows searching by name, subject, and year for independent peer-reviewed research.' },
];

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-center justify-between gap-4 group"
      >
        <span className="font-medium text-apple-dark text-sm leading-snug group-hover:text-apple-blue transition-colors">
          {item.q}
        </span>
        <span className={`text-apple-mid transition-transform flex-shrink-0 ${open ? 'rotate-45' : ''}`}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-apple-mid text-sm leading-relaxed">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function HydrogenSystem() {
  return (
    <>
      <Helmet>
        <title>H2ONE Hydro+ — 8-Stage Hydrogen Water System</title>
        <meta name="description" content="The H2ONE Hydro+ delivers ultra-pure, molecular hydrogen-enriched water through 8-stage filtration. Up to 1600+ ppb H₂ concentration." />
      </Helmet>

      <main className="pt-14">
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center bg-apple-dark overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/product-hydrogen-system.png" alt="" aria-hidden="true"
              className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-apple-dark via-apple-dark/80 to-transparent" />
          </div>
          <div className="relative z-10 content-width py-24">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="max-w-2xl">
              <p className="text-apple-blue text-sm font-semibold tracking-[0.2em] uppercase mb-4">Flagship System</p>
              <h1 className="font-bold text-white mb-5" style={{ fontSize: 'clamp(36px, 6vw, 60px)', lineHeight: '1.06', letterSpacing: '-0.003em' }}>
                H2ONE Hydro+<br />Tankless RO System
              </h1>
              <p className="text-white/70 leading-relaxed mb-8" style={{ fontSize: '18px' }}>
                Elevated Hydration. Engineered at the Molecular Level. Premium under-counter system combining 8-stage filtration, RO 3.0 molecular separation, and hydrogen enrichment technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary px-8 py-3 text-base inline-block text-center">
                  Get Free Water Test
                </Link>
                <a href="#filtration" className="text-white/70 hover:text-white border border-white/20 hover:border-white/40 px-8 py-3 rounded-xl text-base font-medium transition-all text-center">
                  See How It Works
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Smart Faucet */}
        <section className="section-padding bg-white">
          <div className="content-width">
            <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="section-label">Intelligent Control</p>
              <h2 className="font-bold text-apple-dark" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: '1.08', letterSpacing: '-0.003em' }}>
                Smart Hydrogen Control Faucet
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FAUCET_FEATURES.map((f, i) => (
                <motion.div key={f.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-apple-gray rounded-2xl p-6 flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <img src="/images/icon-check-mark.png" alt="" className="w-5 h-5 object-contain" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-apple-dark mb-1 text-sm">{f.title}</h3>
                    <p className="text-apple-mid text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8-Stage Filtration */}
        <section id="filtration" className="section-padding bg-apple-dark">
          <div className="content-width">
            <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-apple-blue text-sm font-semibold tracking-[0.2em] uppercase mb-4">The Process</p>
              <h2 className="font-bold text-white mb-4" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: '1.08', letterSpacing: '-0.003em' }}>
                Redefining Water Purity<br />with 8-Stage Filtration
              </h2>
              <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
                Every stage is designed to protect the next — maximizing purity and extending filter life.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {FILTRATION_STAGES.map((s, i) => (
                <motion.div key={s.num}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <div className="text-apple-blue font-bold text-xs tracking-widest mb-3">{s.num}</div>
                  <h3 className="font-semibold text-white text-sm mb-2">{s.name}</h3>
                  <p className="text-white/50 text-xs leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Hydrogen Infusion */}
        <section className="section-padding bg-white">
          <div className="content-width">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <p className="section-label">H₂ Technology</p>
                <h2 className="font-bold text-apple-dark mb-5" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: '1.08', letterSpacing: '-0.003em' }}>
                  High-Performance<br />Hydrogen Infusion
                </h2>
                <p className="text-apple-mid leading-relaxed mb-8">
                  Up to <span className="font-semibold text-apple-dark">1,600+ ppb</span> molecular hydrogen concentration — fresh H₂ generated on demand via advanced electrolysis.
                </p>
                <div className="space-y-4">
                  {[
                    { label: 'Selective Antioxidant Action', desc: 'Targets only harmful free radicals, leaving beneficial reactive oxygen species intact.' },
                    { label: 'Cellular Energy Balance', desc: 'Supports mitochondrial function and ATP production at the cellular level.' },
                    { label: 'Recovery & Metabolic Vitality', desc: 'Over 1,000 published studies on molecular hydrogen benefits.' },
                  ].map((b, i) => (
                    <div key={b.label} className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-apple-blue font-bold text-sm">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-apple-dark text-sm">{b.label}</p>
                        <p className="text-apple-mid text-sm">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
                className="flex items-center justify-center">
                <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-12 text-center w-full max-w-sm">
                  <div className="text-7xl font-bold text-white mb-2" style={{ letterSpacing: '-0.04em' }}>1600<span className="text-apple-blue text-4xl">+</span></div>
                  <p className="text-white/60 text-sm font-medium tracking-wide uppercase">ppb H₂ Concentration</p>
                  <div className="mt-8 border-t border-white/10 pt-6 space-y-3 text-left">
                    {[['Neutral pH', '7.0'], ['TDS Reduction', '99%+'], ['Filtration Stages', '8']].map(([k, v]) => (
                      <div key={k} className="flex justify-between text-sm">
                        <span className="text-white/50">{k}</span>
                        <span className="text-white font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What It Removes */}
        <section className="section-padding bg-apple-gray">
          <div className="content-width">
            <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="section-label">Full Spectrum Protection</p>
              <h2 className="font-bold text-apple-dark" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: '1.08', letterSpacing: '-0.003em' }}>
                What H2ONE Hydro+ Removes
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-6">
              {REMOVES.map((cat, i) => (
                <motion.div key={cat.category}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`rounded-2xl p-6 border ${cat.color}`}>
                  <h3 className={`font-semibold text-sm mb-4 ${cat.labelColor}`}>{cat.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="text-xs bg-white/80 text-apple-dark px-3 py-1 rounded-full font-medium border border-white/60">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Studies */}
        <section className="section-padding bg-white">
          <div className="content-width">
            <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="section-label">Peer-Reviewed Research</p>
              <h2 className="font-bold text-apple-dark" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: '1.08', letterSpacing: '-0.003em' }}>
                Science Behind the Water
              </h2>
              <p className="text-apple-mid mt-3 text-sm">Over 1,000 published scientific studies on molecular hydrogen.</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-5">
              {STUDIES.map((s, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="bg-apple-gray rounded-2xl p-6">
                  <div className="text-xs font-semibold text-apple-blue tracking-wider mb-3">STUDY {String(i + 1).padStart(2, '0')}</div>
                  <h3 className="font-semibold text-apple-dark text-sm leading-snug mb-3">{s.title}</h3>
                  <p className="text-apple-mid text-xs leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-apple-gray">
          <div className="content-width max-w-3xl mx-auto">
            <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="section-label">Have Questions?</p>
              <h2 className="font-bold text-apple-dark" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: '1.08', letterSpacing: '-0.003em' }}>
                Frequently Asked Questions
              </h2>
            </motion.div>
            <div className="bg-white rounded-3xl px-8 py-2 shadow-sm">
              {FAQS.map((item, i) => <FAQItem key={i} item={item} index={i} />)}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-apple-dark text-center">
          <div className="content-width max-w-2xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-bold text-white mb-4" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: '1.08', letterSpacing: '-0.003em' }}>
                Experience the Difference
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Book a free in-home water test. Our specialists will analyze your water and recommend the perfect system.
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
