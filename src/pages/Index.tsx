
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
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Header />
      <section className="min-h-screen snap-center snap-always">
        <Hero />
      </section>
      <section className="min-h-screen snap-center snap-always">
        <ProgramsOverview />
      </section>
      <section className="min-h-screen snap-center snap-always">
        <LocationsShowcase />
      </section>
      <section className="min-h-screen snap-center snap-always">
        <IndustryRecognition />
      </section>
      <section className="min-h-screen snap-center snap-always">
        <StudentTestimonials />
      </section>
      <section className="min-h-screen snap-center snap-always">
        <FacilitiesEquipment />
      </section>
      <section className="min-h-screen snap-center snap-always">
        <Footer />
      </section>
    </div>
  );
};

export default Index;
