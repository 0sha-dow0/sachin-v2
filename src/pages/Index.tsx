
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProgramsOverview from '@/components/ProgramsOverview';
import LocationsShowcase from '@/components/LocationsShowcase';
import IndustryRecognition from '@/components/IndustryRecognition';
import StudentTestimonials from '@/components/StudentTestimonials';
import FacilitiesEquipment from '@/components/FacilitiesEquipment';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth snap-y snap-mandatory overflow-y-scroll h-screen">
      <Header />
      <section className="snap-start">
        <Hero />
      </section>
      <section className="snap-start">
        <ProgramsOverview />
      </section>
      <section className="snap-start">
        <LocationsShowcase />
      </section>
      <section className="snap-start">
        <IndustryRecognition />
      </section>
      <section className="snap-start">
        <StudentTestimonials />
      </section>
      <section className="snap-start">
        <FacilitiesEquipment />
      </section>
      <section className="snap-start">
        <Footer />
      </section>
    </div>
  );
};

export default Index;
