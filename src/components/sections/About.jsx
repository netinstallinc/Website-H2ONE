import { motion } from 'framer-motion';
import { FEATURES } from '../../utils/constants';

export default function About() {
  return (
    <section id="about" className="section-padding bg-apple-gray">
      <div className="content-width">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Our Story</p>
          <h2 className="font-bold text-apple-dark mb-6"
              style={{ fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: '1.08', letterSpacing: '-0.003em' }}>
            Built on a belief that<br />water should work harder.
          </h2>
          <p className="text-apple-mid text-body max-w-2xl mx-auto leading-relaxed">
            H2ONE was founded by water quality specialists and health scientists with a single mission:
            bring laboratory-grade hydrogen water technology into every home. We believe the water you
            drink is one of the most powerful health decisions you make every day.
          </p>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
          >
            {[...FEATURES, ...FEATURES].map((feature, i) => (
              <div
                key={i}
                className="flex-shrink-0 bg-white rounded-2xl px-6 py-4 flex items-center gap-3 shadow-sm"
              >
                <span className="text-2xl">{feature.icon}</span>
                <span className="font-semibold text-apple-dark text-sm whitespace-nowrap">{feature.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {FEATURES.map((feature) => (
            <div key={feature.label} className="bg-white rounded-2xl p-6 flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-apple-gray flex items-center justify-center text-2xl flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-apple-dark mb-1">{feature.label}</h3>
                <p className="text-apple-mid text-sm leading-relaxed">
                  Industry-leading standards in every H2ONE system we design and install.
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
