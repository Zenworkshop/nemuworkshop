import React from 'react';

import ServicesSection from '../components/ServiceSection';
import SolutionSection from '../components/SolutionSection';
import Footer from '../components/Footer';
import OrderSection from '../components/OrderSection';
import Testimonials from '../components/Testimonials';
import JoinSection from '../components/JoinSection';
import Whyus from '../components/WhyUs';

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* <ServicesSection /> */}
      <SolutionSection />
      <Whyus />
      <OrderSection />
      <JoinSection />
      <Footer />
    </div>
  );
}