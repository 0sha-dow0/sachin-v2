
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const IndustryRecognition: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const [counters, setCounters] = useState({ students: 0, alumni: 0, awards: 0, success: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const finalNumbers = { students: 25000, alumni: 15000, awards: 50, success: 95 };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        students: Math.floor(finalNumbers.students * progress),
        alumni: Math.floor(finalNumbers.alumni * progress),
        awards: Math.floor(finalNumbers.awards * progress),
        success: Math.floor(finalNumbers.success * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(finalNumbers);
      }
    }, stepDuration);
  };

  const achievements = [
    {
      title: "Best Music School 2023",
      organization: "Music Education Awards",
      icon: "🏆"
    },
    {
      title: "Industry Partnership Excellence",
      organization: "Global Music Awards",
      icon: "🤝"
    },
    {
      title: "Innovation in Music Education",
      organization: "EdTech Awards",
      icon: "💡"
    },
    {
      title: "Outstanding Graduate Success",
      organization: "Career Excellence Awards",
      icon: "🎯"
    }
  ];

  const successStories = [
    {
      name: "Sarah Chen",
      role: "Grammy-winning Producer",
      company: "Universal Music Group",
      quote: "Point Blank gave me the technical skills and industry connections that launched my career.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b665"
    },
    {
      name: "Marcus Rodriguez",
      role: "Resident DJ",
      company: "Ibiza Global Radio",
      quote: "The hands-on experience and mentorship prepared me for the real world of electronic music.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
      name: "Emma Thompson",
      role: "Audio Engineer",
      company: "Abbey Road Studios",
      quote: "The technical depth and practical experience at Point Blank was unmatched.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-5xl font-black text-[var(--pb-dark)] mb-6">
            Industry <span className="pb-text-gradient">Recognition</span>
          </h2>
          <p className="text-xl text-[var(--pb-medium-gray)] max-w-3xl mx-auto">
            30+ years of excellence in music education, recognized by industry leaders worldwide
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className={`text-center transform transition-all duration-1000 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="text-5xl font-black pb-text-gradient mb-2">{counters.students.toLocaleString()}+</div>
            <div className="text-lg font-semibold text-[var(--pb-dark)]">Students Trained</div>
          </div>
          <div className={`text-center transform transition-all duration-1000 delay-100 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="text-5xl font-black pb-text-gradient mb-2">{counters.alumni.toLocaleString()}+</div>
            <div className="text-lg font-semibold text-[var(--pb-dark)]">Industry Alumni</div>
          </div>
          <div className={`text-center transform transition-all duration-1000 delay-200 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="text-5xl font-black pb-text-gradient mb-2">{counters.awards}+</div>
            <div className="text-lg font-semibold text-[var(--pb-dark)]">Awards Won</div>
          </div>
          <div className={`text-center transform transition-all duration-1000 delay-300 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="text-5xl font-black pb-text-gradient mb-2">{counters.success}%</div>
            <div className="text-lg font-semibold text-[var(--pb-dark)]">Success Rate</div>
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.title}
              className={`text-center pb-hover-scale border-0 shadow-lg transform transition-all duration-700 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <CardTitle className="text-lg font-bold text-[var(--pb-dark)]">
                  {achievement.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--pb-medium-gray)]">
                  {achievement.organization}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <div className={`transform transition-all duration-1000 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h3 className="text-3xl font-bold text-[var(--pb-dark)] text-center mb-12">
            Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card 
                key={story.name}
                className={`pb-hover-scale border-0 shadow-lg transform transition-all duration-700 ${
                  isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 4) * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-[var(--pb-dark)]">{story.name}</h4>
                      <p className="text-sm text-[var(--pb-gold)] font-semibold">{story.role}</p>
                      <p className="text-xs text-[var(--pb-medium-gray)]">{story.company}</p>
                    </div>
                  </div>
                  <blockquote className="text-sm text-[var(--pb-medium-gray)] italic">
                    "{story.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryRecognition;
