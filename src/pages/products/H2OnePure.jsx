import ProductDetail from '../../components/ui/ProductDetail';

const features = [
  'Compact under-counter form factor — fits in any kitchen',
  'Reverse osmosis + hydrogen enrichment in one unit',
  'Smart TDS monitor with LED indicator light',
  'Alkaline pH balancing stage (pH 7.5–8.5)',
  'Quick-connect fittings — tool-free filter swaps',
  'Dedicated brushed steel faucet included',
  'NSF 58 certified RO membrane',
  '1-year filter kit subscription available',
];

const specs = [
  { label: 'H₂ Concentration', value: '0.8 – 1.2 ppm' },
  { label: 'Tank Capacity', value: '8 liters (2.1 gallons)' },
  { label: 'Filtration Stages', value: '4-stage (Sediment → RO → Alkaline → H₂)' },
  { label: 'TDS Reduction', value: '95–98%' },
  { label: 'Output pH', value: '7.5 – 8.5 (alkaline)' },
  { label: 'Power', value: '24V DC adapter (included)' },
  { label: 'Dimensions', value: '11" W × 14" H × 5" D' },
  { label: 'Warranty', value: '2 years (system), 1 year (filters)' },
];

export default function H2OnePure() {
  return (
    <ProductDetail
      title="Water Systems H2ONE Pure"
      tagline="Compact. Smart. Hydrogen-perfect."
      description="The H2ONE Pure is our sleekest under-counter system, combining reverse osmosis purification with hydrogen enrichment and alkaline balancing. Designed for modern kitchens and offices where space and aesthetics matter."
      features={features}
      specs={specs}
      emoji="✨"
    />
  );
}
