import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../utils/constants';

function ProductCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col"
    >
      <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center p-8">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-32 h-32 rounded-2xl bg-apple-blue/10 flex items-center justify-center">
            <span className="text-5xl">💧</span>
          </div>
        )}
      </div>

      <div className="p-8 flex flex-col flex-1">
        <h3 className="font-bold text-apple-dark text-title mb-3"
            style={{ fontSize: '22px', lineHeight: '1.2' }}>
          {product.title}
        </h3>
        <p className="text-apple-mid text-sm leading-relaxed mb-6 flex-1">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {product.features.map((f) => (
            <span key={f} className="text-xs font-medium bg-apple-gray text-apple-dark px-3 py-1 rounded-full">
              {f}
            </span>
          ))}
        </div>

        <Link
          to={product.slug}
          className="flex items-center gap-1 text-apple-blue text-sm font-semibold group"
        >
          Discover More
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}

export default function Products() {
  return (
    <section id="products" className="section-padding bg-white">
      <div className="content-width">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Our Systems</p>
          <h2 className="font-bold text-apple-dark"
              style={{ fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: '1.08', letterSpacing: '-0.003em' }}>
            Water, elevated.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
