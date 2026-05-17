import React from 'react';
import HomeCarousel from '../components/HomeCarousel';
import Welcome from '../components/Welcome';
import Catalog from '../components/Catalog';
import WhyUs from '../components/WhyUs';
import Whyagain from '../components/Whyagain';
import Newproject from '../components/Newproject';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import SocialButtons from '../components/SocialButtons';
import SolutionSection from '../components/SolutionSection';
import OrderSection from '../components/OrderSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HomeCarousel />
      <Welcome />
      <SolutionSection />
      <Whyagain />
      <Catalog />
      <WhyUs />
      <OrderSection />
      <Newproject />
      <Testimonials />
      <Footer />
      <SocialButtons />
    </div>
  );
}