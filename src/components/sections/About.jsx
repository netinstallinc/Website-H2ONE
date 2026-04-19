import { motion } from 'framer-motion';
import { FEATURES } from '../../utils/constants';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="content-width">
        {/* Two-column: image left, text right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src="/images/about-kitchen.jpg"
              alt="H2ONE hydrogen water system installed in a modern kitchen"
              className="w-full rounded-3xl object-cover shadow-xl"
              style={{ maxHeight: '560px' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="section-label">Our Story</p>
            <h2 className="font-bold text-apple-dark mb-6"
                style={{ fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: '1.08', letterSpacing: '-0.003em' }}>
              H2ONE is a modern wellness brand focused on elevating everyday water.
            </h2>
            <p className="text-apple-mid leading-relaxed mb-6">
              At H2ONE, we combine high-quality filtration with hydrogen technology — plus professional
              installation and support — to bring premium water into your home.
            </p>
            <p className="text-apple-mid leading-relaxed">
              We believe the water you drink is one of the most powerful health decisions you make every day.
              That's why we've built systems that don't just filter — they transform.
            </p>
          </motion.div>
        </div>

        {/* Marquee badge strip */}
        <div className="overflow-hidden mb-16">
          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
          >
            {[...FEATURES, ...FEATURES].map((feature, i) => (
              <div
                key={i}
                className="flex-shrink-0 bg-apple-gray rounded-2xl px-6 py-4 flex items-center gap-3"
              >
                <img src={feature.icon} alt={feature.label} className="w-7 h-7 object-contain" />
                <span className="font-semibold text-apple-dark text-sm whitespace-nowrap">{feature.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Feature grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {FEATURES.map((feature) => (
            <div key={feature.label} className="bg-apple-gray rounded-2xl p-6 flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm p-2.5">
                <img src={feature.icon} alt={feature.label} className="w-full h-full object-contain" />
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
