
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const FacilitiesEquipment: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const facilities = [
    {
      title: "SSL Console Studio",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04",
      description: "Professional SSL mixing consoles used by major studios worldwide"
    },
    {
      title: "Ableton Live Suite",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
      description: "Latest software and hardware for electronic music production"
    },
    {
      title: "Pro Tools HDX",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      description: "Industry-standard digital audio workstations for professional recording"
    },
    {
      title: "Recording Studio A",
      image: "https://images.unsplash.com/photo-1484755560615-676859c2ffb4",
      description: "Acoustically treated live rooms for band recordings"
    },
    {
      title: "Vintage Synthesizers",
      image: "https://images.unsplash.com/photo-1571327073757-71d13c24de30",
      description: "Classic analog synthesizers including Moog, Roland, and Korg"
    },
    {
      title: "DJ Performance Suite",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c",
      description: "Pioneer CDJ-3000s and DJM mixers for professional DJ training"
    },
    {
      title: "Mastering Suite",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91",
      description: "Dedicated mastering room with high-end monitors and processors"
    },
    {
      title: "Podcast Studio",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc",
      description: "Professional podcast recording setup with video capabilities"
    },
    {
      title: "Electronic Lab",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
      description: "Hardware laboratory for circuit bending and electronic music creation"
    }
  ];

  const openLightbox = (image: string) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-5xl font-black text-[var(--pb-dark)] mb-6">
            World-Class <span className="pb-text-gradient">Facilities</span>
          </h2>
          <p className="text-xl text-[var(--pb-medium-gray)] max-w-3xl mx-auto">
            Train on the same equipment used by industry professionals in major studios and venues worldwide
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {facilities.map((facility, index) => (
            <Card 
              key={facility.title}
              className={`break-inside-avoid pb-hover-scale cursor-pointer border-0 shadow-lg transform transition-all duration-700 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(facility.image)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={facility.image} 
                  alt={facility.title}
                  className="w-full h-48 lg:h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button size="sm" className="w-full pb-gradient text-white hover:opacity-90">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[var(--pb-dark)] mb-3">
                  {facility.title}
                </h3>
                <p className="text-[var(--pb-medium-gray)] leading-relaxed">
                  {facility.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Equipment Highlights */}
        <div className={`mt-16 grid md:grid-cols-3 gap-8 transform transition-all duration-1000 delay-500 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="text-center">
            <div className="text-4xl pb-text-gradient font-black mb-4">25+</div>
            <h4 className="text-xl font-bold text-[var(--pb-dark)] mb-2">Professional Studios</h4>
            <p className="text-[var(--pb-medium-gray)]">Fully equipped recording and production facilities</p>
          </div>
          <div className="text-center">
            <div className="text-4xl pb-text-gradient font-black mb-4">£2M+</div>
            <h4 className="text-xl font-bold text-[var(--pb-dark)] mb-2">Equipment Value</h4>
            <p className="text-[var(--pb-medium-gray)]">Industry-standard hardware and software</p>
          </div>
          <div className="text-center">
            <div className="text-4xl pb-text-gradient font-black mb-4">24/7</div>
            <h4 className="text-xl font-bold text-[var(--pb-dark)] mb-2">Access</h4>
            <p className="text-[var(--pb-medium-gray)]">Round-the-clock studio access for students</p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Facility"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default FacilitiesEquipment;
