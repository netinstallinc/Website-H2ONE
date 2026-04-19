import { motion } from 'framer-motion';

const H2_VIDEO_MP4 = 'https://cdn.prod.website-files.com/6967b7d6ca268b7c5aee11f6/6968e8f1edf7f40c648ead80_motion2Fast_Clear_animated_visualization_of_molecular_hydrogen_0_mp4.mp4';
const H2_VIDEO_WEBM = 'https://cdn.prod.website-files.com/6967b7d6ca268b7c5aee11f6/6968e8f1edf7f40c648ead80_motion2Fast_Clear_animated_visualization_of_molecular_hydrogen_0_webm.webm';

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
            <h2 className="font-bold text-apple-dark mb-6"
                style={{ fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: '1.08', letterSpacing: '-0.003em' }}>
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
            <div className="aspect-square rounded-3xl overflow-hidden bg-black shadow-2xl">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={H2_VIDEO_WEBM} type="video/webm" />
                <source src={H2_VIDEO_MP4} type="video/mp4" />
              </video>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-apple-blue/5 -z-10" />
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-2xl bg-blue-100 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
