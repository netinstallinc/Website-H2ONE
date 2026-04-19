import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { motion } from 'framer-motion';

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
        <meta name="description" content="Book your free in-home water quality test with H2ONE. Our specialists will test your water and recommend the best hydrogen water system for your home." />
        <meta property="og:title" content="Contact H2ONE — Free Water Quality Test" />
      </Helmet>

      <main className="pt-14">
        <section className="section-padding bg-apple-gray">
          <div className="content-width">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <p className="section-label">Get In Touch</p>
                <h1 className="font-bold text-apple-dark mb-6"
                    style={{ fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: '1.08', letterSpacing: '-0.003em' }}>
                  Free water quality test — on us.
                </h1>
                <p className="text-apple-mid leading-relaxed mb-8">
                  Our certified water specialists will visit your home, test your tap water for TDS, pH,
                  chlorine, and heavy metals — completely free, no commitment required. We'll then
                  recommend the right H2ONE system for your specific water profile.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: '📞', label: 'Phone', value: '1-800-H2-ONE-H2O' },
                    { icon: '✉️', label: 'Email', value: 'info@h2onehydrogenwater.com' },
                    { icon: '📍', label: 'Service Area', value: 'North America — All Major Cities' },
                    { icon: '⏰', label: 'Hours', value: 'Mon–Sat 8AM – 7PM EST' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-lg shadow-sm">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-apple-mid uppercase tracking-wide">{item.label}</p>
                        <p className="text-apple-dark font-medium">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                {submitted ? (
                  <div className="bg-white rounded-3xl p-10 text-center shadow-sm">
                    <div className="text-5xl mb-4">✅</div>
                    <h2 className="font-bold text-apple-dark text-2xl mb-3">Request Received!</h2>
                    <p className="text-apple-mid leading-relaxed">
                      Thank you, {form.name}. A water specialist will contact you within 24 hours
                      to schedule your free in-home water test.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-3xl p-8 shadow-sm space-y-5"
                  >
                    <h2 className="font-bold text-apple-dark text-xl mb-2">Book Your Free Test</h2>

                    {[
                      { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Jane Smith' },
                      { name: 'email', label: 'Email Address', type: 'email', placeholder: 'jane@example.com' },
                      { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(555) 123-4567' },
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
                        Tell us about your water concerns (optional)
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="e.g. our water tastes off, we have hard water, we want healthier options..."
                        value={form.message}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-apple-dark placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-apple-blue/30 focus:border-apple-blue transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary py-3 text-base font-semibold"
                    >
                      Book Free Water Test
                    </button>

                    <p className="text-xs text-apple-mid text-center">
                      No obligation. No spam. We respect your privacy.
                    </p>
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
