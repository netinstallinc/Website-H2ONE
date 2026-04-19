import ProductDetail from '../../components/ui/ProductDetail';

const features = [
  'Removes 95%+ of chlorine and chloramines',
  'Reduces heavy metals: lead, mercury, iron, cadmium',
  'Multi-media filter: KDF-55, activated carbon, ceramic beads',
  'Universal fit — compatible with all standard shower arms',
  'No tools required — installs in 5 minutes',
  'Visually indicates filter life remaining',
  '6-month / 10,000-gallon filter life',
  'Available in chrome, brushed nickel, and matte black',
];

const specs = [
  { label: 'Chlorine Removal', value: '95%+ (ANSI/NSF 177 tested)' },
  { label: 'Heavy Metal Reduction', value: 'Lead, Mercury, Iron, Cadmium' },
  { label: 'Filter Media', value: 'KDF-55, Coconut Shell Carbon, Ceramic' },
  { label: 'Filter Life', value: '6 months or 10,000 gallons' },
  { label: 'Flow Rate', value: 'Up to 2.5 GPM' },
  { label: 'Max Temperature', value: '120°F (49°C)' },
  { label: 'Connection', value: '½" NPT (universal shower arm thread)' },
  { label: 'Warranty', value: '1 year (housing), 6 months (filter cartridge)' },
];

export default function ShowerFilter() {
  return (
    <ProductDetail
      title="Diamond Shower Filter"
      tagline="Better water for your skin and hair."
      description="The Diamond Shower Filter removes chlorine, heavy metals, and sediment from your shower water. Experience softer skin, healthier hair, and a cleaner-feeling shower — every single day."
      features={features}
      specs={specs}
      emoji="🚿"
    />
  );
}
