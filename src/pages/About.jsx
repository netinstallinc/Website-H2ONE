import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../components/ui/AnimatedCounter';

const BENEFITS = [
  {
    title: 'Reducing Oxidative Stress',
    icon: '/images/benefit-icon-1.svg',
    bg: '/images/benefit-bg-1.jpg',
    desc: 'As one of the best antioxidants available, hydrogen selectively neutralizes the most harmful free radicals in the body and reduces oxidative stress. This reduces the leading cause of disease in 170 models including heart disease and some cancers.',
  },
  {
    title: 'Improved Brain Function',
    icon: '/images/benefit-icon-2.svg',
    bg: '/images/benefit-bg-2.jpg',
    desc: 'Hydrogen water improves your mental focus and clarity by stimulating the hormone ghrelin. This has also been shown to prevent neurological problems like Alzheimer\'s, Parkinson\'s, bipolar disorder, autism, and schizophrenia.',
  },
  {
    title: 'Increased Immunity',
    icon: '/images/benefit-icon-3.svg',
    bg: '/images/benefit-bg-3.jpg',
    desc: 'Stress, illness, pesticides, and poor diet can weigh our immune system down to just 20% functionality. Molecular hydrogen neutralizes many harmful free radicals and maintains a healthy immune system.',
  },
  {
    title: 'Increased Energy',
    icon: '/images/benefit-icon-4.svg',
    bg: '/images/benefit-bg-4.jpg',
    desc: 'Hydrogen water can boost your energy better than any caffeine fix. When you start to feel lethargic, molecular hydrogen sends signals to your cells to release more of the natural energy your body is already storing.',
  },
  {
    title: 'Endurance',
    icon: '/images/benefit-icon-5.svg',
    bg: '/images/benefit-bg-5.jpg',
    desc: 'Molecular hydrogen works as a signal modulator in the body. This means it can increase your metabolism, support weight loss, and increase your endurance when you work out regularly.',
  },
];

const H2_STATS = [
  { value: 1000, suffix: '+', label: 'Medical studies done worldwide' },
  { value: 170, suffix: '+', label: 'Disease models that can benefit from H₂' },
  { value: 200, suffix: '+', label: 'Biomolecules altered with H₂' },
];

const HEALING = [
  {
    label: 'ABSORPTION',
    title: 'Heal your body',
    desc: 'Increases the body\'s hydration rate by over 6-fold, aiding all cellular functions.',
    icon: '/images/icon-body.png',
  },
  {
    label: 'ANTIBACTERIAL',
    title: 'Protect your health',
    desc: 'Removes harmful bacteria from the digestive tract and aids in cellular metabolism.',
    icon: '/images/icon-health.png',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, ease: 'easeOut' },
};

export default function About() {
  return (
    <>
      <Helmet>
        <title>About H2ONE — What Is Hydrogen Water?</title>
        <meta name="description" content="Learn about molecular hydrogen water, its science-backed benefits, and how H2ONE brings premium hydrogen water technology to your home." />
        <meta property="og:title" content="About H2ONE — What Is Hydrogen Water?" />
      </Helmet>

      <main className="pt-14">

        {/* ── HERO ── */}
        <section className="section-padding bg-white">
          <div className="content-width">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeUp}>
                <p className="section-label">About H2ONE</p>
                <h1 className="font-bold text-apple-dark mb-6"
                    style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: '1.06', letterSpacing: '-0.003em' }}>
                  What Is Hydrogen Water?
                </h1>
                <div className="space-y-4 text-apple-mid leading-relaxed">
                  <p>
                    Hydrogen water is water enriched with molecular hydrogen (H₂) — the smallest and
                    lightest molecule in the universe. Nothing is smaller. Nothing is more fundamental.
                  </p>
                  <p>
                    Because of its microscopic size, molecular hydrogen can move freely through the body,
                    reaching places many other compounds cannot. It easily passes through cell membranes
                    and enters the cell environment where oxidative processes occur.
                  </p>
                  <p>
                    Oxidative stress is one of the key factors associated with aging and overall cellular
                    wear. By helping the body manage this imbalance, hydrogen water is valued for its
                    potential to support cellular vitality, promote balance, and contribute to a feeling
                    of long-term wellness.
                  </p>
                  <p>
                    Hydrogen water fits seamlessly into any lifestyle focused on longevity, recovery,
                    clarity, and modern wellness. Simple to drink. Easy to trust. Designed for those who
                    care about what happens inside the body, not just on the surface.
                  </p>
                </div>
                <p className="mt-8 text-apple-blue font-semibold italic">
                  H2ONE — elevate your water. Support your body naturally.
                </p>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <img
                  src="/images/about-diagram.png"
                  alt="Molecular hydrogen comparison diagram"
                  className="rounded-2xl object-cover w-full col-span-2 shadow-md"
                />
                <img
                  src="/images/about-block1.jpg"
                  alt="H2ONE hydrogen water system"
                  className="rounded-2xl object-cover w-full h-48 shadow-sm"
                />
                <img
                  src="/images/about-block3.jpg"
                  alt="Pure hydrogen water"
                  className="rounded-2xl object-cover w-full h-48 shadow-sm"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── BENEFITS ── */}
        <section className="section-padding bg-apple-dark">
          <div className="content-width">
            <motion.div className="text-center mb-4" {...fadeUp}>
              <p className="text-apple-blue text-sm font-semibold tracking-[0.2em] uppercase mb-4">Science-Backed</p>
              <h2 className="font-bold text-white mb-4"
                  style={{ fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: '1.08', letterSpacing: '-0.003em' }}>
                What are the Benefits of Hydrogen Water?
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
                There are now over 500 medical studies on the health benefits of hydrogen water. Researchers
                have linked its use to benefits fighting more than 60 diseases. The primary benefit is
                reducing oxidative stress.
              </p>
            </motion.div>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {BENEFITS.map((b, i) => (
                <motion.div
                  key={b.title}
                  className="relative rounded-3xl overflow-hidden group cursor-default"
                  style={{ minHeight: '320px' }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <img
                    src={b.bg}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                  <div className="relative z-10 p-7 flex flex-col h-full justify-end">
                    <img src={b.icon} alt="" className="w-10 h-10 mb-4 brightness-0 invert" />
                    <h3 className="font-bold text-white text-lg mb-2">{b.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </motion.div>
              ))}

              {/* 5 cards — make last one span 2 cols on lg */}
              <style>{`.benefit-last { grid-column: span 2 / span 2; } @media(max-width:1024px){.benefit-last{grid-column:span 1;}}`}</style>
            </div>
          </div>
        </section>

        {/* ── ADVANTAGES ── */}
        <section className="section-padding bg-white">
          <div className="content-width">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div {...fadeUp}>
                <p className="section-label">Why H₂ Wins</p>
                <h2 className="font-bold text-apple-dark mb-6"
                    style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', lineHeight: '1.1', letterSpacing: '-0.003em' }}>
                  Advantages of Molecular Hydrogen over any other Antioxidant
                </h2>
                <div className="space-y-4 text-apple-mid leading-relaxed">
                  <p>
                    Unlike other antioxidants, Molecular Hydrogen is a <strong className="text-apple-dark">selective antioxidant</strong>,
                    targeting only <strong className="text-apple-dark">harmful free radicals</strong>. When antioxidants target
                    beneficial free radicals such as hydrogen peroxide or nitric oxide, negative side-effects are the result.
                  </p>
                  <p>
                    Molecular Hydrogen does not convert harmful free radicals — it <strong className="text-apple-dark">neutralizes them
                    into pure water</strong>. No toxic by-products whatsoever, hence no negative side-effects no matter the dose.
                  </p>
                  <p>
                    Molecular Hydrogen not only neutralizes harmful free radicals, but it also
                    <strong className="text-apple-dark"> activates our natural antioxidant-defence-system</strong> for long-term protection.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h3 className="font-semibold text-apple-dark mb-3">Due to its size advantage:</h3>
                  <div className="space-y-3 text-apple-mid leading-relaxed">
                    <p>
                      Molecular hydrogen rapidly penetrates each cell in the body and reaches sub-cellular
                      compartments where harmful free radical production originates. It is there where it
                      exerts its protective and therapeutic effects.
                    </p>
                    <p>
                      Molecular Hydrogen is the <strong className="text-apple-dark">only antioxidant able to cross the blood-brain-barrier</strong> to
                      reduce oxidative stress in the brain and related neurodegenerative disorders such as
                      Alzheimer's and Parkinson's.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                {[
                  { label: 'Selective', detail: 'Targets only harmful free radicals, leaves beneficial ones intact' },
                  { label: 'No by-products', detail: 'Converts to pure water — zero toxic residue' },
                  { label: 'Size advantage', detail: 'Smallest molecule — reaches every cell, including the brain' },
                  { label: 'Dual action', detail: 'Neutralizes radicals AND activates your natural defences' },
                  { label: 'Blood-brain barrier', detail: 'The only antioxidant that crosses it — protects neurological health' },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="flex gap-4 items-start p-5 rounded-2xl bg-apple-gray"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-apple-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-apple-dark">{item.label}</p>
                      <p className="text-apple-mid text-sm mt-0.5">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── H2 STATS ── */}
        <section className="section-padding bg-apple-blue relative overflow-hidden">
          <div className="absolute inset-0 opacity-10"
               style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, white 0%, transparent 60%)' }} />
          <div className="relative z-10 content-width">
            <motion.div className="text-center mb-14" {...fadeUp}>
              <p className="text-white/70 text-sm font-semibold tracking-[0.2em] uppercase mb-3">Some H₂ Stats</p>
              <h2 className="font-bold text-white"
                  style={{ fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: '1.08', letterSpacing: '-0.003em' }}>
                Quality Molecular Hydrogen Water<br />For Your Health
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              {H2_STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="text-white font-bold mb-2"
                       style={{ fontSize: 'clamp(48px, 7vw, 72px)', lineHeight: 1 }}>
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <p className="text-white/70 text-sm font-medium">{s.label}</p>
                </motion.div>
              ))}
            </div>

            {/* stat images strip */}
            <motion.div
              className="mt-14 flex justify-center gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[1, 2, 3, 4, 5].map(n => (
                <img
                  key={n}
                  src={`/images/stat-img-${n}.png`}
                  alt=""
                  className="h-16 object-contain rounded-xl"
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── BODY / HEALING ── */}
        <section className="section-padding bg-white">
          <div className="content-width">
            <motion.div className="text-center mb-14" {...fadeUp}>
              <p className="section-label">Body & Wellness</p>
              <h2 className="font-bold text-apple-dark"
                  style={{ fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: '1.08', letterSpacing: '-0.003em' }}>
                Heal your body.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {HEALING.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="bg-apple-gray rounded-3xl p-8 flex gap-6 items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="w-16 h-16 flex-shrink-0 bg-white rounded-2xl shadow-sm flex items-center justify-center p-3">
                    <img src={item.icon} alt="" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="text-apple-blue text-xs font-bold tracking-widest uppercase mb-1">{item.label}</p>
                    <h3 className="font-bold text-apple-dark text-lg mb-2">{item.title}</h3>
                    <p className="text-apple-mid text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BROCHURE / WHAT IS HYDROGEN ── */}
        <section className="section-padding bg-apple-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#001228] to-[#003380] opacity-90" />
          <div className="relative z-10 content-width">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeUp}>
                <p className="text-apple-blue text-sm font-semibold tracking-[0.2em] uppercase mb-4">Learn More</p>
                <h2 className="font-bold text-white mb-6"
                    style={{ fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: '1.08', letterSpacing: '-0.003em' }}>
                  What Is Hydrogen?
                </h2>
                <p className="text-white/70 leading-relaxed mb-8">
                  Download our comprehensive guide to molecular hydrogen water — covering the science,
                  the research, and everything you need to know about making the switch to hydrogen-enriched water.
                </p>
                <a
                  href="https://drive.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-apple-dark font-semibold px-7 py-3 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex justify-center"
              >
                <img
                  src="/images/about-brochure.png"
                  alt="H2ONE hydrogen water brochure"
                  className="max-h-96 object-contain drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── FREE WATER TEST CTA ── */}
        <section className="section-padding bg-apple-gray">
          <div className="content-width">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <img
                  src="/images/about-water-test.jpg"
                  alt="Free water quality test"
                  className="rounded-3xl object-cover w-full shadow-xl"
                  style={{ maxHeight: '480px' }}
                />
              </motion.div>

              <motion.div {...fadeUp}>
                <p className="section-label">No Cost, No Commitment</p>
                <h2 className="font-bold text-apple-dark mb-4"
                    style={{ fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: '1.1', letterSpacing: '-0.003em' }}>
                  Check Your Water Quality — Free Test
                </h2>
                <p className="text-apple-mid leading-relaxed mb-8">
                  Get a complimentary water test and discover the quality of the water you use every day.
                  Our team will review the results and recommend the best solution for your needs.
                </p>
                <Link to="/contact" className="btn-primary px-8 py-3 text-base inline-block">
                  Book Free Water Test
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="section-padding bg-white">
          <div className="content-width text-center">
            <motion.div {...fadeUp}>
              <h2 className="font-bold text-apple-dark mb-4"
                  style={{ fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: '1.1', letterSpacing: '-0.003em' }}>
                Get Your Right Solution — Contact Us Now
              </h2>
              <p className="text-apple-mid max-w-xl mx-auto mb-8 leading-relaxed">
                Our bodies can be helped, or healed, naturally with molecular hydrogen — supporting the heart,
                blood vessels, kidneys, joints, skin, brain, immune system and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary px-8 py-3 text-base">
                  Contact Us
                </Link>
                <Link to="/#products" className="btn-secondary px-8 py-3 text-base">
                  View Products
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  );
}
