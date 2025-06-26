
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProgramsOverview: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
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

  const programs = [
    {
      title: "Bachelor's Degrees",
      description: "Comprehensive 3-year programs combining theory with hands-on experience",
      features: ["BA (Hons) Music Production", "BA (Hons) DJ Performance", "Industry Partnerships"],
      icon: "🎓"
    },
    {
      title: "Diplomas",
      description: "Intensive 1-year courses for focused skill development",
      features: ["Music Production Diploma", "Sound Engineering Diploma", "DJ Performance Diploma"],
      icon: "📜"
    },
    {
      title: "Certificates",
      description: "Short-term specialized courses for specific skills",
      features: ["Ableton Live Certification", "Pro Tools Certification", "Logic Pro Certification"],
      icon: "🏆"
    },
    {
      title: "Short Courses",
      description: "Weekend and evening classes for beginners and professionals",
      features: ["Complete DJ Course", "Music Production Basics", "Mixing & Mastering"],
      icon: "⚡"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`transform transition-all duration-1000 ${isInView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
            <h2 className="text-5xl font-black text-[var(--pb-dark)] mb-6">
              Shape Your <span className="pb-text-gradient">Future</span>
            </h2>
            <p className="text-xl text-[var(--pb-medium-gray)] mb-8 leading-relaxed">
              From beginner to industry professional, our comprehensive programs are designed to 
              take you on a journey of musical discovery and technical mastery.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 pb-gradient rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-lg text-[var(--pb-dark)]">Industry-standard equipment</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 pb-gradient rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-lg text-[var(--pb-dark)]">Professional mentorship</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 pb-gradient rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-lg text-[var(--pb-dark)]">Career support & placement</span>
              </div>
            </div>
            <Button size="lg" className="pb-gradient text-white hover:opacity-90 transition-opacity px-8">
              Explore All Programs
            </Button>
          </div>

          {/* Right Content - Program Cards */}
          <div className="grid grid-cols-2 gap-6">
            {programs.map((program, index) => (
              <Card 
                key={program.title}
                className={`pb-hover-scale cursor-pointer border-0 shadow-lg transform transition-all duration-700 ${
                  isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-3">{program.icon}</div>
                  <CardTitle className="text-lg font-bold text-[var(--pb-dark)]">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-[var(--pb-medium-gray)] mb-4">
                    {program.description}
                  </p>
                  <ul className="text-xs text-[var(--pb-medium-gray)] space-y-1">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <span className="w-1 h-1 bg-[var(--pb-gold)] rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsOverview;
