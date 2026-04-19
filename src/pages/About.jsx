import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FEATURES } from '../utils/constants';

const team = [
  { name: 'Dr. Sarah Chen', role: 'Chief Water Scientist', bio: 'PhD in Environmental Chemistry with 15+ years in water treatment research.' },
  { name: 'Marcus Reid', role: 'Head of Installation', bio: 'Certified master plumber and water systems specialist with over 2,000 installs.' },
  { name: 'Leila Nasser', role: 'Customer Success Lead', bio: 'Former public health officer passionate about access to clean water for every family.' },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About H2ONE — Our Story & Mission</title>
        <meta name="description" content="Learn about H2ONE's mission to bring hydrogen water technology to every home. Founded by water quality specialists and health scientists." />
        <meta property="og:title" content="About H2ONE — Our Story & Mission" />
      </Helmet>

      <main className="pt-14">
        <section className="section-padding bg-apple-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#001228] to-[#002a6e] opacity-90" />
          <div className="relative z-10 content-width text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-apple-blue text-sm font-semibold tracking-[0.2em] uppercase mb-4">About Us</p>
              <h1 className="font-bold text-white mb-6"
                  style={{ fontSize: 'clamp(36px, 6vw, 64px)', lineHeight: '1.06', letterSpacing: '-0.003em' }}>
                Water is our obsession.
              </h1>
              <p className="text-white/70 text-body max-w-2xl mx-auto">
                We started H2ONE because we believed most people had no idea what was in their drinking water —
                or what hydrogen-enriched water could do for their health.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="content-width">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="section-label">Our Mission</p>
                <h2 className="font-bold text-apple-dark mb-6"
                    style={{ fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: '1.1', letterSpacing: '-0.003em' }}>
                  Making advanced water science accessible to every household.
                </h2>
                <div className="space-y-4 text-apple-mid leading-relaxed">
                  <p>
                    Founded by water quality specialists and health scientists, H2ONE was built around a
                    single mission: deliver laboratory-grade hydrogen water technology to homes everywhere.
                  </p>
                  <p>
                    We've installed over 25,000 systems across North America, partnered with leading
                    research institutions, and built a service team that stands behind every installation
                    we do — for life.
                  </p>
                  <p>
                    Our systems don't just filter water. They transform it. From multi-stage purification
                    to molecular hydrogen enrichment, every H2ONE product is engineered to deliver water
                    at its most beneficial form.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="grid grid-cols-2 gap-4"
              >
                {FEATURES.map((f) => (
                  <div key={f.label} className="bg-apple-gray rounded-2xl p-6 text-center">
                    <div className="text-3xl mb-3">{f.icon}</div>
                    <p className="font-semibold text-apple-dark text-sm">{f.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-apple-gray">
          <div className="content-width">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label">Our Team</p>
              <h2 className="font-bold text-apple-dark"
                  style={{ fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: '1.1', letterSpacing: '-0.003em' }}>
                The people behind H2ONE.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  className="bg-white rounded-2xl p-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">👤</span>
                  </div>
                  <h3 className="font-bold text-apple-dark mb-1">{member.name}</h3>
                  <p className="text-apple-blue text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-apple-mid text-sm leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="content-width text-center">
            <h2 className="font-bold text-apple-dark mb-6"
                style={{ fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: '1.1', letterSpacing: '-0.003em' }}>
              Ready to experience the difference?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary px-8 py-3 text-base">
                Book Free Water Test
              </Link>
              <Link to="/#products" className="btn-secondary px-8 py-3 text-base">
                View Our Products
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
