import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import WhatIsH2 from '../components/sections/WhatIsH2';
import About from '../components/sections/About';
import Products from '../components/sections/Products';
import WhyUs from '../components/sections/WhyUs';
import FAQ from '../components/sections/FAQ';
import ContactCTA from '../components/sections/ContactCTA';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>H2ONE Hydrogen Water — Next Level of Water</title>
        <meta name="description" content="H2ONE brings laboratory-grade molecular hydrogen water technology to your home. Pure, hydrogen-infused water systems with professional installation." />
        <meta property="og:title" content="H2ONE Hydrogen Water — Next Level of Water" />
        <meta property="og:description" content="Experience water at the cellular level. Hydrogen-infused, ultra-pure water systems for your home." />
        <meta property="og:image" content="/images/og-home.jpg" />
      </Helmet>

      <Hero />
      <WhatIsH2 />
      <About />
      <Products />
      <WhyUs />
      <FAQ />
      <ContactCTA />
    </>
  );
}
