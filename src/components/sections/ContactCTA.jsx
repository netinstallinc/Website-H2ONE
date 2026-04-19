import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ContactCTA() {
  return (
    <section className="section-padding bg-white">
      <div className="content-width">
        <motion.div
          className="bg-apple-blue rounded-3xl p-12 md:p-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-bold text-white mb-4"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: '1.1', letterSpacing: '-0.003em' }}>
            Start with a free<br />water quality test.
          </h2>
          <p className="text-white/80 text-body max-w-lg mx-auto mb-8">
            Our specialists will visit your home, test your water, and recommend the right H2ONE
            system — completely free, no commitment required.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-apple-blue font-semibold px-8 py-3 rounded-full hover:bg-gray-50 transition-colors"
          >
            Book Your Free Test
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
