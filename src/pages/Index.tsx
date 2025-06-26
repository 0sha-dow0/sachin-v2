
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
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProgramsOverview />
      <LocationsShowcase />
      <IndustryRecognition />
      <StudentTestimonials />
      <FacilitiesEquipment />
      <Footer />
    </div>
  );
};

export default Index;
