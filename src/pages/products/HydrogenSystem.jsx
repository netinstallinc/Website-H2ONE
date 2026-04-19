import ProductDetail from '../../components/ui/ProductDetail';

const features = [
  'Molecular hydrogen enrichment at point of use (1.0–1.6 ppm H₂)',
  'Multi-stage filtration: sediment, carbon block, RO membrane, post-carbon',
  'NSF 42 & 58 certified components',
  'Smart flow rate control with digital TDS display',
  'Stainless steel storage tank — 14-liter capacity',
  'Professional under-counter installation included',
  '3-year system warranty + 1-year filter warranty',
  'Optional UV sterilization stage',
];

const specs = [
  { label: 'H₂ Concentration', value: '1.0 – 1.6 ppm (1,000–1,600 ppb)' },
  { label: 'Flow Rate', value: '0.5 GPM (filtration) / 1.0 GPM (pass-through)' },
  { label: 'Tank Capacity', value: '14 liters (3.7 gallons)' },
  { label: 'Filtration Stages', value: '5-stage (Sediment → Carbon → RO → H₂ → Post-Carbon)' },
  { label: 'TDS Reduction', value: '95–99%' },
  { label: 'Power', value: '24V DC adapter (included)' },
  { label: 'Dimensions', value: '14" W × 16" H × 5" D (under-counter unit)' },
  { label: 'Warranty', value: '3 years (system), 1 year (filters & accessories)' },
];

export default function HydrogenSystem() {
  return (
    <ProductDetail
      title="Hydrogen Drinking System"
      tagline="Whole-home hydrogen water at every tap."
      description="Our flagship drinking system delivers ultra-pure, molecular hydrogen-enriched water directly from your kitchen faucet. With multi-stage filtration and advanced electrolysis technology, every glass supports your cellular health."
      features={features}
      specs={specs}
      emoji="🏠"
    />
  );
}
