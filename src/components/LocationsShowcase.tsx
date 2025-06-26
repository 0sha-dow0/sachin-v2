
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const LocationsShowcase: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const [activeLocation, setActiveLocation] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  const locations = [
    {
      name: "London",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
      description: "Our flagship campus in the heart of London's music scene",
      stats: { students: "2,500+", studios: "25", years: "30+" },
      features: ["SSL Console Rooms", "Vintage Synthesizers", "Industry Partnerships"]
    },
    {
      name: "Los Angeles",
      image: "https://images.unsplash.com/photo-1534430480872-3498386e7856",
      description: "Hollywood-based campus with cutting-edge facilities",
      stats: { students: "1,800+", studios: "20", years: "15+" },
      features: ["Dolby Atmos Mixing", "Film Scoring Suite", "Celebrity Masterclasses"]
    },
    {
      name: "Ibiza",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c",
      description: "Electronic music paradise with world-class DJs",
      stats: { students: "800+", studios: "12", years: "10+" },
      features: ["Beach Studios", "Festival Connections", "Club Residencies"]
    },
    {
      name: "Online",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      description: "Learn from anywhere with our interactive online platform",
      stats: { students: "5,000+", courses: "50+", countries: "80+" },
      features: ["Live Streaming", "1-on-1 Mentoring", "Virtual Studios"]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-[var(--pb-dark)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-5xl font-black text-white mb-6">
            Global <span className="pb-text-gradient">Campuses</span>
          </h2>
          <p className="text-xl text-[var(--pb-light-gray)] max-w-3xl mx-auto">
            From London to Los Angeles, Ibiza to online - learn music production and DJ skills 
            in world-renowned locations with industry-standard facilities.
          </p>
        </div>

        {/* Horizontal Scrolling Cards */}
        <div 
          ref={scrollRef}
          className="flex space-x-8 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {locations.map((location, index) => (
            <Card 
              key={location.name}
              className={`flex-shrink-0 w-80 lg:w-96 bg-white/10 backdrop-blur-sm border-white/20 snap-start transform transition-all duration-700 hover:scale-105 ${
                isInView ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setActiveLocation(index)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={location.image} 
                  alt={location.name}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">{location.name}</h3>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-[var(--pb-light-gray)] mb-6 leading-relaxed">
                  {location.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(location.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold pb-text-gradient">{value}</div>
                      <div className="text-xs text-[var(--pb-light-gray)] capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-6">
                  {location.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-[var(--pb-light-gray)]">
                      <div className="w-2 h-2 pb-gradient rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full bg-transparent border-2 border-[var(--pb-gold)] text-[var(--pb-gold)] hover:pb-gradient hover:text-white transition-all duration-300"
                >
                  Explore Campus
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default LocationsShowcase;
