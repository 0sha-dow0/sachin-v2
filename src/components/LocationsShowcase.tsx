
import React, { useEffect, useState } from 'react';
import { MapPin, Users, Star } from 'lucide-react';

const LocationsShowcase: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState(0);

  const locations = [
    {
      id: 1,
      name: 'London',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      description: 'Our flagship campus in the heart of London\'s music scene',
      students: '2,500+',
      facilities: '12 Studios',
      rating: '4.9',
      highlight: 'SSL Console Training'
    },
    {
      id: 2,
      name: 'Los Angeles',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      description: 'Hollywood\'s premier music production destination',
      students: '1,800+',
      facilities: '8 Studios',
      rating: '4.8',
      highlight: 'Industry Connections'
    },
    {
      id: 3,
      name: 'Ibiza',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      description: 'Electronic music paradise with world-class DJs',
      students: '800+',
      facilities: '5 Studios',
      rating: '4.9',
      highlight: 'DJ Masterclasses'
    },
    {
      id: 4,
      name: 'Online',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      description: 'Learn from anywhere with our cutting-edge online platform',
      students: '5,000+',
      facilities: 'Virtual Studios',
      rating: '4.7',
      highlight: '24/7 Access'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLocation((prev) => (prev + 1) % locations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-[var(--pb-dark)] to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Global <span className="pb-text-gradient">Presence</span>
          </h2>
          <p className="text-xl text-[var(--pb-light-gray)] max-w-3xl mx-auto">
            Four iconic locations, one shared passion for music excellence
          </p>
        </div>

        <div className="relative">
          {/* Location Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {locations.map((location, index) => (
              <div
                key={location.id}
                className={`group cursor-pointer transition-all duration-500 ${
                  activeLocation === index ? 'scale-105 z-10' : 'scale-100'
                }`}
                onClick={() => setActiveLocation(index)}
              >
                <div className="relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[var(--pb-gold)] transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold">{location.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-[var(--pb-gold)] text-[var(--pb-gold)]" />
                        <span className="text-sm">{location.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-[var(--pb-light-gray)] mb-4">
                      {location.description}
                    </p>
                    
                    <div className="flex justify-between items-center text-xs">
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span>{location.students}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{location.facilities}</span>
                      </div>
                      <div className="px-2 py-1 bg-[var(--pb-gold)] rounded-full">
                        <span className="text-black font-semibold">{location.highlight}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Location Indicators */}
          <div className="flex justify-center gap-3">
            {locations.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveLocation(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeLocation === index
                    ? 'bg-[var(--pb-gold)] scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="pb-gradient text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold rounded-lg">
            Explore All Locations
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocationsShowcase;
