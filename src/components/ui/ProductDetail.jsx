import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function ProductDetail({ title, tagline, description, features, specs, emoji = '💧' }) {
  return (
    <>
      <Helmet>
        <title>{title} — H2ONE Hydrogen Water</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} — H2ONE`} />
      </Helmet>

      <main className="pt-14">
        <section className="section-padding bg-apple-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#001228] via-[#002a6e] to-[#0050b3] opacity-90" />
          <div className="relative z-10 content-width">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-apple-blue text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                  H2ONE Product
                </p>
                <h1 className="font-bold text-white mb-4"
                    style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: '1.06', letterSpacing: '-0.003em' }}>
                  {title}
                </h1>
                <p className="text-apple-blue text-xl font-medium mb-6">{tagline}</p>
                <p className="text-white/70 leading-relaxed mb-8">{description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="btn-primary px-8 py-3 text-base text-center">
                    Get Free Water Test
                  </Link>
                  <Link to="/#products" className="text-white/70 hover:text-white text-sm font-medium flex items-center gap-1 justify-center sm:justify-start">
                    ← Back to Products
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="flex justify-center"
              >
                <div className="w-72 h-72 rounded-3xl bg-white/10 backdrop-blur flex items-center justify-center">
                  <span className="text-[100px]">{emoji}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="content-width">
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="section-label">Key Features</p>
                <h2 className="font-bold text-apple-dark mb-8"
                    style={{ fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: '1.1', letterSpacing: '-0.003em' }}>
                  Everything included.
                </h2>
                <div className="space-y-4">
                  {features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-apple-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-apple-dark">{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p className="section-label">Specifications</p>
                <h2 className="font-bold text-apple-dark mb-8"
                    style={{ fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: '1.1', letterSpacing: '-0.003em' }}>
                  Technical details.
                </h2>
                <div className="border border-gray-100 rounded-2xl overflow-hidden">
                  {specs.map((spec, i) => (
                    <div
                      key={spec.label}
                      className={`flex gap-4 px-6 py-4 ${i % 2 === 0 ? 'bg-apple-gray' : 'bg-white'}`}
                    >
                      <span className="text-apple-mid text-sm font-medium w-36 flex-shrink-0">{spec.label}</span>
                      <span className="text-apple-dark text-sm">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-apple-gray">
          <div className="content-width text-center">
            <h2 className="font-bold text-apple-dark mb-4"
                style={{ fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: '1.1', letterSpacing: '-0.003em' }}>
              Ready to get started?
            </h2>
            <p className="text-apple-mid mb-8 max-w-lg mx-auto">
              Book your free in-home water quality test. No pressure, no commitment — just better water.
            </p>
            <Link to="/contact" className="btn-primary px-10 py-3 text-base">
              Book Free Water Test
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
