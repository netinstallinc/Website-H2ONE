import { motion } from 'framer-motion';
import AnimatedCounter from '../ui/AnimatedCounter';
import { STATS } from '../../utils/constants';

export default function WhyUs() {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#001228] via-[#002a6e] to-[#0050b3]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(ellipse at 80% 20%, rgba(0,113,227,0.5) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 content-width">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-apple-blue text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Our Impact
          </p>
          <h2 className="font-bold text-white"
              style={{ fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: '1.08', letterSpacing: '-0.003em' }}>
            Trusted by thousands<br />across North America.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-white font-bold mb-2"
                   style={{ fontSize: 'clamp(36px, 6vw, 56px)', lineHeight: '1.05', letterSpacing: '-0.003em' }}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/60 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { title: 'Free In-Home Test', desc: 'We analyze your water quality at no cost — no strings attached.', icon: '🔬' },
            { title: 'Expert Installation', desc: 'Certified technicians handle everything from plumbing to calibration.', icon: '🔧' },
            { title: 'Lifetime Support', desc: 'Our team is available 7 days a week for maintenance and questions.', icon: '🤝' },
          ].map((item) => (
            <div key={item.title} className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
