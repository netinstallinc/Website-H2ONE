import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { motion } from 'framer-motion';

const CONTACT_INFO = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '561-365-8076',
    href: 'tel:+15613658076',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'info@h2oneusa.com',
    href: 'mailto:info@h2oneusa.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'West Palm Beach, FL',
    href: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
      </svg>
    ),
    label: 'Instagram',
    value: '@h2one_water',
    href: 'https://www.instagram.com/h2one_water',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact H2ONE — Free Water Quality Test</title>
        <meta name="description" content="Book your free in-home water quality test with H2ONE. Our specialists in West Palm Beach, FL will test your water and recommend the best hydrogen water system." />
        <meta property="og:title" content="Contact H2ONE — Free Water Quality Test" />
      </Helmet>

      <main className="pt-14">
        {/* Hero Banner */}
        <section className="relative bg-apple-dark py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/water-bg.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-apple-dark/70" />
          </div>
          <div className="relative z-10 content-width text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="text-apple-blue text-sm font-semibold tracking-[0.2em] uppercase mb-4">Let's Connect</p>
              <h1 className="font-bold text-white mb-4" style={{ fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: '1.08', letterSpacing: '-0.003em' }}>
                Free Water Quality Test — On Us
              </h1>
              <p className="text-white/60 max-w-xl mx-auto leading-relaxed">
                Our certified specialists visit your home, test your water for TDS, pH, chlorine, and heavy metals — completely free, no commitment required.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-apple-gray">
          <div className="content-width">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="font-bold text-apple-dark mb-3" style={{ fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: '1.1', letterSpacing: '-0.003em' }}>
                  Get in Touch
                </h2>
                <p className="text-apple-mid leading-relaxed mb-10">
                  We'll recommend the right H2ONE system for your specific water profile and lifestyle. Serving the West Palm Beach area and beyond.
                </p>

                <div className="space-y-5 mb-12">
                  {CONTACT_INFO.map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-apple-blue shadow-sm flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-apple-mid uppercase tracking-wider">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-apple-dark font-medium hover:text-apple-blue transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-apple-dark font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* What to Expect */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-apple-dark mb-4 text-sm">What happens after you book?</h3>
                  <div className="space-y-3">
                    {[
                      'A specialist contacts you within 24 hours to schedule',
                      'We visit your home at your convenience — no charge',
                      'Live water test: TDS, pH, chlorine, hardness, heavy metals',
                      'We explain the results and recommend the ideal system',
                    ].map((step, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <div className="w-6 h-6 rounded-full bg-apple-blue text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                          {i + 1}
                        </div>
                        <p className="text-apple-mid text-sm leading-snug">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                {submitted ? (
                  <div className="bg-white rounded-3xl p-10 text-center shadow-sm">
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
                      <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="font-bold text-apple-dark text-2xl mb-3">Request Received!</h2>
                    <p className="text-apple-mid leading-relaxed">
                      Thank you, {form.name}. A water specialist will contact you within 24 hours to schedule your free in-home water test.
                    </p>
                    <p className="text-apple-mid text-sm mt-4">
                      Questions in the meantime?{' '}
                      <a href="tel:+15613658076" className="text-apple-blue font-medium">Call 561-365-8076</a>
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-3xl p-8 shadow-sm space-y-5"
                  >
                    <h2 className="font-bold text-apple-dark text-xl mb-1">Book Your Free Test</h2>
                    <p className="text-apple-mid text-sm mb-5">No obligation. No spam. We respect your privacy.</p>

                    {[
                      { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Jane Smith' },
                      { name: 'email', label: 'Email Address', type: 'email', placeholder: 'jane@example.com' },
                      { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(561) 000-0000' },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-sm font-semibold text-apple-dark mb-1.5">
                          {field.label}
                        </label>
                        <input
                          name={field.name}
                          type={field.type}
                          placeholder={field.placeholder}
                          value={form[field.name]}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-apple-dark placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-apple-blue/30 focus:border-apple-blue transition-all"
                        />
                      </div>
                    ))}

                    <div>
                      <label className="block text-sm font-semibold text-apple-dark mb-1.5">
                        Water concerns (optional)
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="e.g. our water tastes off, we have hard water, concerned about chlorine..."
                        value={form.message}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-apple-dark placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-apple-blue/30 focus:border-apple-blue transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary py-3.5 text-base font-semibold"
                    >
                      Book Free Water Test
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
