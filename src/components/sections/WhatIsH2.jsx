import { motion } from 'framer-motion';

const benefits = [
  {
    icon: '⚡',
    title: 'Cellular Energy',
    desc: 'H₂ molecules penetrate cell membranes to support mitochondrial function and natural energy production.',
  },
  {
    icon: '🛡️',
    title: 'Antioxidant Power',
    desc: 'Molecular hydrogen selectively neutralizes harmful free radicals without disrupting beneficial reactive oxygen species.',
  },
  {
    icon: '💪',
    title: 'Recovery Support',
    desc: 'Athletes and active individuals report faster muscle recovery and reduced oxidative stress markers.',
  },
];

export default function WhatIsH2() {
  return (
    <section id="what-is-h2" className="section-padding bg-white">
      <div className="content-width">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="section-label">The Science</p>
            <h2 className="text-headline font-bold text-apple-dark mb-6"
                style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>
              What is Molecular<br />Hydrogen?
            </h2>
            <p className="text-apple-mid text-body mb-8 leading-relaxed">
              H₂ is the smallest molecule in the universe — small enough to cross the blood–brain barrier
              and enter the mitochondria of every cell. As a selective antioxidant, it targets only the
              most harmful free radicals while leaving beneficial oxidants intact. This makes it uniquely
              powerful for cellular health.
            </p>

            <div className="space-y-6">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-apple-gray flex items-center justify-center text-lg">
                    {b.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-apple-dark mb-1">{b.title}</h3>
                    <p className="text-apple-mid text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center overflow-hidden">
              <div className="text-center p-12">
                <div className="text-[120px] font-bold text-apple-blue/10 leading-none select-none mb-4">H₂</div>
                <div className="grid grid-cols-3 gap-4">
                  {['Antioxidant', 'Anti-Inflammatory', 'Cellular', 'Energy', 'Recovery', 'Longevity'].map((tag) => (
                    <div key={tag} className="bg-white/80 backdrop-blur rounded-xl px-3 py-2 text-xs font-semibold text-apple-dark text-center shadow-sm">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-apple-blue/5 -z-10" />
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-2xl bg-blue-100 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
